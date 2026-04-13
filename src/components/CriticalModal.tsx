import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogAction } from "@/components/ui/alert-dialog";
import { XOctagon } from "lucide-react";
import { Alert } from "@/lib/store";

export default function CriticalModal({ alert, onDismiss }: { alert: Alert | null; onDismiss: () => void }) {
  return (
    <AlertDialog open={!!alert} onOpenChange={() => onDismiss()}>
      <AlertDialogContent className="bg-card border-critical/30">
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-critical/10">
              <XOctagon className="h-6 w-6 text-critical calling-pulse" />
            </div>
            <AlertDialogTitle className="font-heading text-foreground">Critical Alert</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-muted-foreground mt-2 space-y-2">
            <p className="font-medium text-foreground">{alert?.machineId} — {alert?.message}</p>
            <p>Critical issue detected. Engineer is being notified.</p>
            <p className="text-xs">{alert?.timestamp.toLocaleString()}</p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={onDismiss}>
            Acknowledge
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
