'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

/**
 * A small, tasteful 3D accent for the "Working With Us" header.
 * - Gently rotating low-poly icosahedron in the brand "ocean" tone.
 * - Subtle pointer parallax (interactive but never demands attention).
 * - Respects prefers-reduced-motion.
 * - Degrades gracefully: renders nothing if WebGL is unavailable.
 */
export function WorkingWithUsThree() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [supported, setSupported] = useState(true)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // --- WebGL capability check (graceful degradation) ---
    const testCanvas = document.createElement('canvas')
    const hasWebGL =
      !!(
        testCanvas.getContext('webgl') ||
        testCanvas.getContext('experimental-webgl')
      )
    if (!hasWebGL) {
      setSupported(false)
      return
    }

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'low-power',
      })
    } catch {
      setSupported(false)
      return
    }

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 0, 5)

    const oceanColor = new THREE.Color('#3a87b5')

    // Solid translucent core
    const geometry = new THREE.IcosahedronGeometry(1.5, 1)
    const material = new THREE.MeshStandardMaterial({
      color: oceanColor,
      roughness: 0.35,
      metalness: 0.1,
      transparent: true,
      opacity: 0.85,
      flatShading: true,
    })
    const mesh = new THREE.Mesh(geometry, material)

    // Wireframe overlay for a crisp, technical feel
    const wireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(geometry),
      new THREE.LineBasicMaterial({
        color: oceanColor,
        transparent: true,
        opacity: 0.35,
      })
    )
    mesh.add(wireframe)

    const group = new THREE.Group()
    group.add(mesh)
    scene.add(group)

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    const key = new THREE.DirectionalLight(0xffffff, 1.1)
    key.position.set(3, 4, 5)
    const rim = new THREE.DirectionalLight(oceanColor, 0.6)
    rim.position.set(-4, -2, -3)
    scene.add(ambient, key, rim)

    mount.appendChild(renderer.domElement)
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'

    const setSize = () => {
      const { clientWidth: w, clientHeight: h } = mount
      if (w === 0 || h === 0) return
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    setSize()

    const ro = new ResizeObserver(setSize)
    ro.observe(mount)

    // Pointer parallax (subtle)
    const target = { x: 0, y: 0 }
    const onPointerMove = (e: PointerEvent) => {
      const r = mount.getBoundingClientRect()
      const nx = (e.clientX - r.left) / r.width - 0.5
      const ny = (e.clientY - r.top) / r.height - 0.5
      target.x = ny * 0.4
      target.y = nx * 0.6
    }
    mount.addEventListener('pointermove', onPointerMove)

    let raf = 0
    const start = performance.now()

    const renderOnce = () => renderer.render(scene, camera)

    const animate = () => {
      const t = (performance.now() - start) / 1000
      // Gentle constant drift
      group.rotation.y += 0.0035
      group.rotation.x += 0.0012
      // Ease toward pointer target
      group.rotation.x += (target.x - 0) * 0.02
      group.rotation.z = Math.sin(t * 0.3) * 0.05
      group.position.y = Math.sin(t * 0.6) * 0.08
      renderOnce()
      raf = requestAnimationFrame(animate)
    }

    if (prefersReduced) {
      // Static, attractive pose
      group.rotation.set(0.4, 0.6, 0)
      renderOnce()
    } else {
      raf = requestAnimationFrame(animate)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      mount.removeEventListener('pointermove', onPointerMove)
      geometry.dispose()
      material.dispose()
      wireframe.geometry.dispose()
      ;(wireframe.material as THREE.Material).dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  if (!supported) {
    // Graceful fallback: nothing intrusive, layout unaffected.
    return null
  }

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="h-48 w-full sm:h-full sm:min-h-[14rem] pointer-events-auto select-none"
    />
  )
}
