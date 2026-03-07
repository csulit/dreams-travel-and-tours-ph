import { ChevronDown } from 'lucide-react'
import SectionHeader from '@/features/landing/components/SectionHeader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ScrollReveal, fadeUp } from '@/lib/motion'
import { contactDetails, serviceOptions } from '../data/contact'

function InfoCard() {
  return (
    <div className="rounded-2xl border border-dt-border bg-dt-surface-light p-8 sm:p-10">
      <h3 className="text-[22px] font-extrabold text-dt-heading">
        Contact Details
      </h3>

      <div className="mt-7 flex flex-col gap-7">
        {/* Address Block */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-dt-primary">
            BUSINESS ADDRESS
          </span>
          {contactDetails.addresses.map((addr) => (
            <p
              key={addr}
              className="text-sm leading-relaxed text-dt-body"
            >
              {addr}
            </p>
          ))}
        </div>

        {/* Phone Block */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-dt-primary">
            PHONE
          </span>
          <p className="text-sm text-dt-body">
            Landline: {contactDetails.phone.landline}
          </p>
          <p className="text-sm text-dt-body">
            Mobile: {contactDetails.phone.mobile}
          </p>
        </div>

        {/* Email Block */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-dt-primary">
            EMAIL
          </span>
          <p className="text-sm text-dt-body">{contactDetails.email}</p>
        </div>
      </div>
    </div>
  )
}

function ContactForm() {
  return (
    <div className="rounded-2xl border border-dt-border bg-background p-8 sm:p-10">
      <h3 className="text-[22px] font-extrabold text-dt-heading">
        Send Us a Message
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-dt-body">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <form
        className="mt-6 flex flex-col gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Name Row */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-1 flex-col gap-2">
            <Label className="text-[13px] font-semibold text-dt-heading">
              First Name
            </Label>
            <Input
              placeholder="Juan"
              className="h-11 rounded-lg border-dt-border bg-dt-surface-light px-4 text-sm text-dt-heading placeholder:text-dt-muted focus-visible:border-dt-primary focus-visible:ring-dt-primary/20"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <Label className="text-[13px] font-semibold text-dt-heading">
              Last Name
            </Label>
            <Input
              placeholder="Dela Cruz"
              className="h-11 rounded-lg border-dt-border bg-dt-surface-light px-4 text-sm text-dt-heading placeholder:text-dt-muted focus-visible:border-dt-primary focus-visible:ring-dt-primary/20"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <Label className="text-[13px] font-semibold text-dt-heading">
            Email Address
          </Label>
          <Input
            type="email"
            placeholder="juan@email.com"
            className="h-11 rounded-lg border-dt-border bg-dt-surface-light px-4 text-sm text-dt-heading placeholder:text-dt-muted focus-visible:border-dt-primary focus-visible:ring-dt-primary/20"
          />
        </div>

        {/* Phone Field */}
        <div className="flex flex-col gap-2">
          <Label className="text-[13px] font-semibold text-dt-heading">
            Phone Number
          </Label>
          <Input
            type="tel"
            placeholder="+63 9XX XXX XXXX"
            className="h-11 rounded-lg border-dt-border bg-dt-surface-light px-4 text-sm text-dt-heading placeholder:text-dt-muted focus-visible:border-dt-primary focus-visible:ring-dt-primary/20"
          />
        </div>

        {/* Service Select */}
        <div className="flex flex-col gap-2">
          <Label className="text-[13px] font-semibold text-dt-heading">
            Service Interested In
          </Label>
          <div className="relative">
            <select
              defaultValue=""
              className="h-11 w-full appearance-none rounded-lg border border-dt-border bg-dt-surface-light px-4 pr-10 text-sm outline-none transition-colors invalid:text-dt-muted focus:border-dt-primary focus:ring-3 focus:ring-dt-primary/20"
              required
            >
              <option value="" disabled hidden>
                Select a service...
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-dt-muted" />
          </div>
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-2">
          <Label className="text-[13px] font-semibold text-dt-heading">
            Your Message
          </Label>
          <Textarea
            placeholder="Tell us about your dream trip, preferred dates, group size..."
            rows={5}
            className="rounded-lg border-dt-border bg-dt-surface-light px-4 py-3 text-sm text-dt-heading placeholder:text-dt-muted focus-visible:border-dt-primary focus-visible:ring-dt-primary/20"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="gradient"
          size="xl"
          className="w-full rounded-lg py-4 text-base font-bold"
        >
          Send Message
        </Button>

        <p className="text-center text-xs text-dt-muted">
          Your information is safe with us. We never share your data.
        </p>
      </form>
    </div>
  )
}

export default function ContactSection() {
  return (
    <section className="bg-background px-5 py-10 sm:px-6 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-360">
        <ScrollReveal variants={fadeUp}>
          <div className="flex flex-col items-center gap-14">
            <SectionHeader
              eyebrow="GET IN TOUCH"
              title="Contact Us"
              subtitle="We'd love to hear from you. Reach out and let's start planning your dream trip."
            />

            <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
              <InfoCard />
              <ContactForm />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
