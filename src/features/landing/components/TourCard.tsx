import { Button } from '@/components/ui/button'

export default function TourCard({
  name,
  price,
  image,
}: {
  name: string
  price: string
  image: string
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-dt-border bg-background">
      <img
        src={image}
        alt={name}
        className="h-55 w-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-xl font-bold text-dt-heading">{name}</h3>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-dt-muted">
            STARTS AT
          </span>
          <span className="text-[22px] font-extrabold text-dt-primary">
            {price}
          </span>
        </div>
        <Button variant="soft" className="w-full justify-center rounded-lg py-3">
          Read More
        </Button>
      </div>
    </div>
  )
}
