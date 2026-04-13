import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { useStore } from "@/lib/StoreContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Pencil, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Engineers() {
  const { engineers, machines, addEngineer, updateEngineer, assignMachine } = useStore();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const openAdd = () => { setEditId(null); setName(""); setPhone(""); setDialogOpen(true); };
  const openEdit = (e: typeof engineers[0]) => { setEditId(e.id); setName(e.name); setPhone(e.phone); setDialogOpen(true); };

  const handleSave = () => {
    if (!name.trim() || !phone.trim()) return;
    if (editId) {
      updateEngineer(editId, { name, phone });
    } else {
      addEngineer(name, phone);
    }
    setDialogOpen(false);
  };

  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading font-semibold text-lg text-foreground">Engineer Management</h2>
        <Button onClick={openAdd} size="sm" className="gap-1.5">
          <Plus className="h-4 w-4" /> Add Engineer
        </Button>
      </div>

      <div className="grid gap-4 max-w-3xl">
        {engineers.map((eng) => (
          <div key={eng.id} className="card-elevated p-5 animate-fade-in">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-heading font-semibold text-foreground">{eng.name}</h3>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-0.5">
                  <Phone className="h-3.5 w-3.5" />
                  {eng.phone}
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => openEdit(eng)}>
                <Pencil className="h-4 w-4" />
              </Button>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-2">Assigned Machines</p>
              <div className="flex flex-wrap gap-2">
                {machines.map((m) => {
                  const assigned = eng.assignedMachines.includes(m.id);
                  return (
                    <button
                      key={m.id}
                      onClick={() => assignMachine(eng.id, m.id)}
                      className={cn(
                        "text-xs px-2.5 py-1 rounded-full border transition-colors duration-200 font-medium",
                        assigned
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-card text-muted-foreground border-border hover:border-primary/50"
                      )}
                    >
                      {m.id}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-card">
          <DialogHeader>
            <DialogTitle className="font-heading">{editId ? "Edit" : "Add"} Engineer</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-2">
            <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <Button onClick={handleSave} className="w-full">Save</Button>
          </div>
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
}
