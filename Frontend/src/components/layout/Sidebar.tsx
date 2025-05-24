
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BarChart2, Home, Heart, PiggyBank, X, Menu, Calendar, Bell, Settings, Sparkles, PhoneCall, Pill } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/80 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:sticky top-0 bottom-0 left-0 h-screen z-50 w-64 transition-transform duration-300 ease-in-out bg-background border-r border-border",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Close button - mobile only */}
        <button
          className="md:hidden absolute top-4 right-4 text-gray-500 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={20} />
        </button>
        
        {/* Logo & Theme Toggle */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-border">
          <div className="flex items-center gap-2">
            <BarChart2 className="text-primary" size={24} />
            <span className="text-xl font-semibold">SeniorSense</span>
          </div>
          <ThemeToggle />
        </div>
        
        {/* Nav items */}
        <nav className="p-4 space-y-6">
          <div className="space-y-1">
            <p className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Main
            </p>
            
            <Link
              to="/"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive("/") 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            
            <Link
              to="/dashboard"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive("/dashboard") 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <BarChart2 size={18} />
              <span>Dashboard</span>
            </Link>
            
            <Link
              to="/personalized"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive("/personalized") 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Sparkles size={18} />
              <span>Personalized</span>
            </Link>
            
            <Link
              to="/doctor"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive("/doctor") 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <PhoneCall size={18} />
              <span>Doctor</span>
            </Link>
          </div>
          
          <div className="space-y-1">
            <p className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Health
            </p>
            
            <Link
              to="/health-status"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive("/health-status") 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Heart size={18} />
              <span>Health Status</span>
            </Link>
            
            <Link
              to="/medication"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive("/medication") 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Pill size={18} />
              <span>Medication</span>
            </Link>
            
            <Link
              to="/appointments"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive("/appointments") 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Calendar size={18} />
              <span>Appointments</span>
            </Link>
            
            <Link
              to="/reminders"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive("/reminders") 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Bell size={18} />
              <span>Reminders</span>
            </Link>
          </div>
          
          <div className="space-y-1">
            <p className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Financial
            </p>
            
            <Link
              to="/budget-tracker"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive("/budget-tracker") 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <PiggyBank size={18} />
              <span>Budget Tracker</span>
            </Link>
          </div>
          
          <div className="space-y-1">
            <p className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Settings
            </p>
            
            <Link
              to="/preferences"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive("/preferences") 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Settings size={18} />
              <span>Preferences</span>
            </Link>
          </div>
        </nav>
      </aside>
      
      {/* Hamburger button - mobile only */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-secondary text-foreground"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={20} />
      </button>
    </>
  );
};

export default Sidebar;
