import { ScrollReveal, StaggerGrid, StaggerItem } from '@/lib/motion'
import SectionHeader from '@/features/landing/components/SectionHeader'
import { teamMembers } from '../data/about'

export default function TeamSection() {
  return (
    <section className="bg-background px-5 py-12 sm:px-6 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto flex max-w-360 flex-col gap-10 sm:gap-14">
        <ScrollReveal>
          <SectionHeader
            eyebrow="BEHIND THE DREAMS"
            title="Meet Our Team"
            subtitle="The passionate people who make your dream vacations a reality."
          />
        </ScrollReveal>

        <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <StaggerItem key={member.name}>
              <div className="overflow-hidden rounded-2xl border border-dt-border bg-background">
                <div className="h-44 w-full overflow-hidden sm:h-55">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-1 p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-dt-heading">
                    {member.name}
                  </h3>
                  <span className="text-[13px] font-semibold text-dt-primary">
                    {member.role}
                  </span>
                  <p className="mt-1 text-[13px] leading-relaxed text-dt-body">
                    {member.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
