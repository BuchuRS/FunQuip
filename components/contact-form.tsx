'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, CheckCircle } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground">
          Thank You for Your Inquiry
        </h3>
        <p className="mt-2 text-muted-foreground">
          Our team will be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-foreground"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="John"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-foreground"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-foreground"
        >
          Yacht / Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="M/Y Serenity"
        />
      </div>

      <div>
        <label
          htmlFor="interest"
          className="block text-sm font-medium text-foreground"
        >
          Product Interest
        </label>
        <select
          id="interest"
          name="interest"
          className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-accent focus:ring-1 focus:ring-accent"
        >
          <option value="">Select a category</option>
          <option value="platforms">Platforms</option>
          <option value="docking">Docking Solutions</option>
          <option value="seapools">Sea Pools</option>
          <option value="professional">Professional / Maintenance</option>
          <option value="custom">Custom Solution</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send Inquiry
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
