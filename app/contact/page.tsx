import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | Xflatable',
  description:
    'Get in touch with Xflatable for custom inflatable dock solutions, quotes, and technical inquiries.',
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@xflatable.com',
    href: 'mailto:info@xflatable.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+33 4 93 00 00 00',
    href: 'tel:+33493000000',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Port de Fontvieille, 98000 Monaco',
    href: null,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri: 9:00–18:00 CET',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-2">
              Contact Us
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Let&apos;s Talk About Your Project
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Whether you need a custom solution or have questions about our
              products, our team is ready to help. Get in touch and we&apos;ll
              respond within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 shrink-0">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 p-6 bg-secondary rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our experienced team responds to all inquiries within 24
                    hours. For urgent matters, please call our office directly.
                    We have representatives available across the Mediterranean
                    for in-person consultations.
                  </p>
                </div>

                <div className="mt-6 p-6 bg-secondary rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Stock Available
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We maintain stock in Monaco for immediate dispatch. Standard
                    sizes are available with lead times of just days. Custom
                    orders typically ship within 4–12 weeks depending on
                    specifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
