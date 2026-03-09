import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { getVisaFees } from '@/features/services/server/visa-fees'

export const visaFeesKeys = { all: ['visa-fees'] as const }

export function visaFeesQueryOptions() {
  return queryOptions({
    queryKey: visaFeesKeys.all,
    queryFn: () => getVisaFees(),
  })
}

export function useVisaFees() {
  return useSuspenseQuery(visaFeesQueryOptions())
}
