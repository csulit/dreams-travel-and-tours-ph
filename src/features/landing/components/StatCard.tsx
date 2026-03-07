export default function StatCard({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl bg-dt-surface-cta px-3 py-3 sm:px-5 sm:py-3.5">
      <span className="text-lg font-extrabold text-dt-primary sm:text-[22px]">{value}</span>
      <span className="text-[10px] text-dt-body sm:text-[11px]">{label}</span>
    </div>
  )
}
