interface VisaFeeRowProps {
  country: string
  fee: string
  isEven: boolean
}

export default function VisaFeeRow({ country, fee, isEven }: VisaFeeRowProps) {
  return (
    <div
      className={`flex items-center justify-between border-b border-dt-border px-4 py-3 ${isEven ? 'bg-dt-surface-light' : 'bg-background'}`}
    >
      <span className="text-[13px] font-medium text-dt-heading">
        {country}
      </span>
      <span className="text-[13px] text-dt-body">{fee}</span>
    </div>
  )
}
