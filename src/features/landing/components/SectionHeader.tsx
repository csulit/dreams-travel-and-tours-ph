export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <span className="text-xs font-bold uppercase tracking-[4px] text-dt-primary">
        {eyebrow}
      </span>
      <h2 className="max-w-175 text-center text-[44px] font-extrabold leading-tight text-dt-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-145 text-center text-[17px] text-dt-body">
          {subtitle}
        </p>
      )}
    </div>
  )
}
