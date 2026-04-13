import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { StoreProvider } from "@/lib/StoreContext";
import Index from "./pages/Index.tsx";
import Alerts from "./pages/Alerts.tsx";
import Engineers from "./pages/Engineers.tsx";
import MachineDetail from "./pages/MachineDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <StoreProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/engineers" element={<Engineers />} />
            <Route path="/machine/:id" element={<MachineDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StoreProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
