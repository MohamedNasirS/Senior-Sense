
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Login from "./pages/Login";
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

// Protected route component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PreferencesProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout showSidebar={false}><Index /></Layout>} />
            <Route path="/login" element={<Layout showSidebar={false}><Login /></Layout>} />
            
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Layout><Dashboard /></Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/personalized" element={
              <ProtectedRoute>
                <Layout><PersonalizedDashboard /></Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/doctor" element={
              <ProtectedRoute>
                <Layout><Doctor /></Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/health-status" element={
              <ProtectedRoute>
                <Layout><HealthStatus /></Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/medication" element={
              <ProtectedRoute>
                <Layout><Medication /></Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/appointments" element={
              <ProtectedRoute>
                <Layout><Appointments /></Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/reminders" element={
              <ProtectedRoute>
                <Layout><Reminders /></Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/budget-tracker" element={
              <ProtectedRoute>
                <Layout><BudgetTracker /></Layout>
              </ProtectedRoute>
            } />
            
            <Route path="/preferences" element={
              <ProtectedRoute>
                <Layout><Preferences /></Layout>
              </ProtectedRoute>
            } />
            
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </PreferencesProvider>
  </QueryClientProvider>
);

export default App;
