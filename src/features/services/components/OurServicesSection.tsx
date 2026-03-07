import { ScrollReveal } from '@/lib/motion'
import { Separator } from '@/components/ui/separator'
import VisaFeeRow from './VisaFeeRow'
import {
  servicesBullets,
  accomplishments,
  visaFeesLeft,
  visaFeesRight,
  additionalVisaFees,
} from '../data/services'

export default function OurServicesSection() {
  return (
    <section className="bg-background px-5 py-10 sm:px-6 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto flex max-w-360 flex-col gap-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex w-full items-center gap-4">
            <Separator className="flex-1 bg-dt-border" />
            <h2 className="text-lg font-extrabold tracking-[3px] text-dt-primary-dark sm:text-2xl">
              OUR SERVICES
            </h2>
            <Separator className="flex-1 bg-dt-border" />
          </div>
        </ScrollReveal>

        {/* Airline Ticketing */}
        <ScrollReveal>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-[1px] text-dt-heading sm:text-base">
                AIRLINE TICKETING (INTERNATIONAL AND DOMESTIC)
              </h3>
              <ul className="flex list-disc flex-col gap-3 pl-4">
                {servicesBullets.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] leading-[1.6] text-dt-body"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-[1px] text-dt-heading sm:text-base">
                WE WILL ACCOMPLISH THIS BY:
              </h3>
              <ul className="flex list-disc flex-col gap-3 pl-4">
                {accomplishments.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] leading-[1.6] text-dt-body"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Visa Fees Table */}
        <ScrollReveal>
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold uppercase tracking-[1px] text-dt-heading sm:text-base">
              VISA FEES AND PROCESSING FEES
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                {visaFeesLeft.map((entry, i) => (
                  <VisaFeeRow
                    key={entry.country}
                    country={entry.country}
                    fee={entry.fee}
                    isEven={i % 2 === 0}
                  />
                ))}
              </div>
              <div>
                {visaFeesRight.map((entry, i) => (
                  <VisaFeeRow
                    key={entry.country}
                    country={entry.country}
                    fee={entry.fee}
                    isEven={i % 2 === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Additional Visa Fees */}
        <ScrollReveal>
          <div className="overflow-hidden rounded border border-dt-border">
            {additionalVisaFees.map((entry, i) => {
              if (entry.type === 'info') {
                return (
                  <div
                    key={entry.label}
                    className={`px-10 py-2 ${i % 2 === 0 ? 'bg-dt-surface-light' : 'bg-background'} border-b border-dt-border`}
                  >
                    <p className="text-[11px] leading-[1.6] text-dt-muted">
                      {entry.label}
                    </p>
                  </div>
                )
              }

              return (
                <div
                  key={entry.label}
                  className={`flex items-center justify-between border-b border-dt-border px-4 py-3 last:border-b-0 ${i % 2 === 0 ? 'bg-dt-surface-light' : 'bg-background'} ${entry.type === 'sub' ? 'pl-10' : ''}`}
                >
                  <span
                    className={`text-[13px] ${entry.type === 'main' ? 'font-bold text-dt-heading' : 'text-dt-body'}`}
                  >
                    {entry.label}
                  </span>
                  {entry.fee && (
                    <span className="text-[13px] text-dt-body">
                      {entry.fee}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
