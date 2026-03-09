import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@base-ui/react/toast'
import {
  createVisaFee,
  updateVisaFee,
  deleteVisaFee,
  reorderVisaFees,
} from '@/features/services/server/visa-fees'

import { visaFeesKeys } from '@/features/services/hooks/use-visa-fees'

export { visaFeesKeys, visaFeesQueryOptions, useVisaFees } from '@/features/services/hooks/use-visa-fees'

export function useCreateVisaFee() {
  const queryClient = useQueryClient()
  const toastManager = Toast.useToastManager()

  return useMutation({
    mutationFn: createVisaFee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: visaFeesKeys.all })
      toastManager.add({
        title: 'Entry created',
        description: 'The visa fee entry was added successfully.',
        type: 'success',
      })
    },
    onError: (error) => {
      toastManager.add({
        title: 'Failed to create',
        description: error.message,
        type: 'error',
      })
    },
  })
}

export function useUpdateVisaFee() {
  const queryClient = useQueryClient()
  const toastManager = Toast.useToastManager()

  return useMutation({
    mutationFn: updateVisaFee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: visaFeesKeys.all })
      toastManager.add({
        title: 'Entry updated',
        description: 'The visa fee entry was updated successfully.',
        type: 'success',
      })
    },
    onError: (error) => {
      toastManager.add({
        title: 'Failed to update',
        description: error.message,
        type: 'error',
      })
    },
  })
}

export function useDeleteVisaFee() {
  const queryClient = useQueryClient()
  const toastManager = Toast.useToastManager()

  return useMutation({
    mutationFn: deleteVisaFee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: visaFeesKeys.all })
      toastManager.add({
        title: 'Entry deleted',
        description: 'The visa fee entry was removed.',
        type: 'success',
      })
    },
    onError: (error) => {
      toastManager.add({
        title: 'Failed to delete',
        description: error.message,
        type: 'error',
      })
    },
  })
}

export function useReorderVisaFees() {
  const queryClient = useQueryClient()
  const toastManager = Toast.useToastManager()

  return useMutation({
    mutationFn: reorderVisaFees,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: visaFeesKeys.all })
    },
    onError: (error) => {
      toastManager.add({
        title: 'Failed to reorder',
        description: error.message,
        type: 'error',
      })
    },
  })
}
