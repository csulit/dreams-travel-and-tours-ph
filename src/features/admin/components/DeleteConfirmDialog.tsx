import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogClose,
  AlertDialogPortal,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

interface DeleteConfirmDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  label: string
  hasChildren: boolean
  onConfirm: () => void
  isPending: boolean
}

export default function DeleteConfirmDialog({
  open,
  onOpenChange,
  label,
  hasChildren,
  onConfirm,
  isPending,
}: DeleteConfirmDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogPortal>
        <AlertDialogBackdrop />
        <AlertDialogPopup>
          <AlertDialogTitle>Delete Entry</AlertDialogTitle>
          <AlertDialogDescription>
            {hasChildren ? (
              <>
                <strong>{label}</strong> has child entries. Remove all children
                before deleting this entry.
              </>
            ) : (
              <>
                Are you sure you want to delete <strong>{label}</strong>? This
                action cannot be undone.
              </>
            )}
          </AlertDialogDescription>
          <div className="mt-5 flex items-center justify-end gap-2">
            <AlertDialogClose render={<Button variant="outline" />}>
              Cancel
            </AlertDialogClose>
            {!hasChildren && (
              <Button
                variant="destructive"
                onClick={onConfirm}
                disabled={isPending}
              >
                {isPending ? 'Deleting...' : 'Delete'}
              </Button>
            )}
          </div>
        </AlertDialogPopup>
      </AlertDialogPortal>
    </AlertDialog>
  )
}
