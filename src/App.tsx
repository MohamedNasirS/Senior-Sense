
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import PersonalizedDashboard from "./pages/PersonalizedDashboard";
import Doctor from "./pages/Doctor";
import HealthStatus from "./pages/HealthStatus";
import Medication from "./pages/Medication";
import Appointments from "./pages/Appointments";
import Reminders from "./pages/Reminders";
import BudgetTracker from "./pages/BudgetTracker";
import Preferences from "./pages/Preferences";
import NotFound from "./pages/NotFound";
import { PreferencesProvider } from "./context/PreferencesContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PreferencesProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/personalized" element={<PersonalizedDashboard />} />
              <Route path="/doctor" element={<Doctor />} />
              <Route path="/health-status" element={<HealthStatus />} />
              <Route path="/medication" element={<Medication />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/reminders" element={<Reminders />} />
              <Route path="/budget-tracker" element={<BudgetTracker />} />
              <Route path="/preferences" element={<Preferences />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </PreferencesProvider>
  </QueryClientProvider>
);

export default App;
