import { createFileRoute } from '@tanstack/react-router'
import { visaFeesQueryOptions } from '@/features/admin/hooks/use-visa-fees'
import VisaFeesPage from '@/features/admin/components/VisaFeesPage'

export const Route = createFileRoute('/admin/visa-fees')({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(visaFeesQueryOptions()),
  head: () => ({
    meta: [{ title: 'Visa Fees Management | Admin' }],
  }),
  component: VisaFeesPage,
})
