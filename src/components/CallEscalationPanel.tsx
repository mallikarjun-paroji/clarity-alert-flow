import { Phone, PhoneCall, PhoneOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { CallEscalation } from "@/lib/store";

const statusConfig = {
  Calling: { icon: Phone, label: "Calling Engineer…", color: "text-warning" },
  Connected: { icon: PhoneCall, label: "Connected", color: "text-success" },
  Failed: { icon: PhoneOff, label: "Call Failed", color: "text-critical" },
  Idle: { icon: Phone, label: "", color: "" },
};

export default function CallEscalationPanel({ escalation }: { escalation: CallEscalation | null }) {
  if (!escalation || escalation.status === "Idle") return null;

  const config = statusConfig[escalation.status];

  return (
    <div className="card-elevated p-4 animate-fade-in border-l-4 border-l-warning">
      <div className="flex items-center gap-3">
        <div className={cn("p-2 rounded-full bg-accent", escalation.status === "Calling" && "calling-pulse")}>
          <config.icon className={cn("h-5 w-5", config.color)} />
        </div>
        <div>
          <p className={cn("text-sm font-semibold", config.color)}>{config.label}</p>
          <p className="text-xs text-muted-foreground">
            {escalation.engineerName} → {escalation.machineId}
          </p>
        </div>
      </div>
    </div>
  );
}
