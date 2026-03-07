import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StatCard from './components/StatCard'

const heroImage =
  'https://images.unsplash.com/photo-1760548759043-44de2ad650c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDYyMzV8&ixlib=rb-4.1.0&q=80&w=1080'

export default function HeroSection() {
  return (
    <section className="flex w-full flex-col bg-background lg:min-h-180 lg:flex-row">
      {/* Left */}
      <div className="flex w-full flex-col justify-center gap-5 px-5 py-10 sm:gap-7 sm:px-6 sm:py-16 lg:w-1/2 lg:px-20 lg:py-25">
        <Badge
          variant="secondary"
          className="w-fit gap-2.5 rounded-full bg-dt-surface-badge px-5 py-5 text-sm font-semibold text-dt-primary"
        >
          <span className="inline-block size-2.5 rounded-full bg-dt-primary " />
          Discover the Philippines
        </Badge>

        <div className="flex flex-col">
          <h1 className="text-[clamp(2rem,8vw,72px)] font-extrabold leading-tight text-dt-heading">
            Your Dream
          </h1>
          <h1 className="gradient-text text-[clamp(2rem,8vw,72px)] font-extrabold leading-tight">
            Adventure
          </h1>
          <h1 className="text-[clamp(2rem,8vw,72px)] font-extrabold leading-tight text-dt-heading">
            Starts Here
          </h1>
        </div>

        <p className="max-w-140 text-base leading-relaxed text-dt-body sm:text-[17px]">
          Experience the beauty of the Philippines with expertly crafted travel
          packages. From pristine beaches to vibrant cities — we take you there.
        </p>

        <div className="flex w-full flex-wrap gap-3 sm:gap-4">
          <Button variant="gradient" size="xl" className="flex-1 sm:flex-none">
            Explore Tours
          </Button>
          <Button variant="soft" size="xl" className="flex-1 sm:flex-none">
            View Packages
          </Button>
        </div>

        <p className="text-[13px] text-dt-muted">
          &#9733;&#9733;&#9733;&#9733;&#9733;&nbsp;&nbsp;Trusted by 10,000+
          travelers across the Philippines
        </p>
      </div>

      {/* Right */}
      <div className="flex w-full flex-col items-center justify-center gap-3 px-5 py-4 sm:gap-4 sm:p-6 lg:w-1/2 lg:p-10">
        <img
          src={heroImage}
          alt="Beautiful Philippine beach destination"
          className="h-56 w-full rounded-2xl object-cover sm:h-80 lg:h-120 lg:rounded-3xl"
        />
        <div className="grid w-full grid-cols-3 gap-2 sm:gap-4">
          <StatCard value="10K+" label="Happy Travelers" />
          <StatCard value="50+" label="Destinations" />
          <StatCard value="15+" label="Years Experience" />
        </div>
      </div>
    </section>
  )
}
