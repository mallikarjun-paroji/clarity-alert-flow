import AppLayout from "@/components/AppLayout";
import AlertList from "@/components/AlertList";
import { useMachines } from "@/lib/store";

export default function Alerts() {
  const { alerts } = useMachines();

  return (
    <AppLayout>
      <h2 className="font-heading font-semibold text-lg text-foreground mb-4">All Alerts</h2>
      <div className="card-elevated p-4 max-w-3xl">
        <AlertList alerts={alerts} />
      </div>
    </AppLayout>
  );
}
