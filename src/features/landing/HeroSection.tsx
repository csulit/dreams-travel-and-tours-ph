import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StatCard from './components/StatCard'

const heroImage =
  'https://images.unsplash.com/photo-1760548759043-44de2ad650c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDYyMzV8&ixlib=rb-4.1.0&q=80&w=1080'

export default function HeroSection() {
  return (
    <section className="flex min-h-180 w-full flex-col bg-background lg:flex-row">
      {/* Left */}
      <div className="flex w-full flex-col justify-center gap-7 px-6 py-16 lg:w-1/2 lg:px-20 lg:py-25">
        <Badge
          variant="secondary"
          className="w-fit gap-2.5 rounded-full bg-dt-surface-badge px-5 py-5 text-sm font-semibold text-dt-primary"
        >
          <span className="inline-block size-2.5 rounded-full bg-dt-primary " />
          Discover the Philippines
        </Badge>

        <div className="flex flex-col">
          <h1 className="text-5xl font-extrabold leading-tight text-dt-heading lg:text-[72px]">
            Your Dream
          </h1>
          <h1 className="gradient-text text-5xl font-extrabold leading-tight lg:text-[72px]">
            Adventure
          </h1>
          <h1 className="text-5xl font-extrabold leading-tight text-dt-heading lg:text-[72px]">
            Starts Here
          </h1>
        </div>

        <p className="max-w-140 text-[17px] leading-relaxed text-dt-body">
          Experience the beauty of the Philippines with expertly crafted travel
          packages. From pristine beaches to vibrant cities — we take you there.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button variant="gradient" size="xl">
            Explore Tours
          </Button>
          <Button variant="soft" size="xl">
            View Packages
          </Button>
        </div>

        <p className="text-[13px] text-dt-muted">
          &#9733;&#9733;&#9733;&#9733;&#9733;&nbsp;&nbsp;Trusted by 10,000+
          travelers across the Philippines
        </p>
      </div>

      {/* Right */}
      <div className="flex w-full flex-col items-center justify-center gap-4 p-6 lg:w-1/2 lg:p-10">
        <img
          src={heroImage}
          alt="Beautiful Philippine beach destination"
          className="h-120 w-full rounded-3xl object-cover"
        />
        <div className="flex gap-4">
          <StatCard value="10K+" label="Happy Travelers" />
          <StatCard value="50+" label="Destinations" />
          <StatCard value="15+" label="Years Experience" />
        </div>
      </div>
    </section>
  )
}
