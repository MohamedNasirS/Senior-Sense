
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart2, 
  Home, 
  Heart, 
  DollarSign, 
  Pill, 
  AlertTriangle, 
  Settings, 
  HelpCircle,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const location = useLocation();

  const navLinks = [
    { name: "Dashboard", path: "/dashboard", icon: <BarChart2 className="w-5 h-5" /> },
    { name: "Health", path: "/health", icon: <Heart className="w-5 h-5" /> },
    { name: "Finance", path: "/finance", icon: <DollarSign className="w-5 h-5" /> },
    { name: "Medication", path: "/medication", icon: <Pill className="w-5 h-5" /> },
    { name: "Emergency", path: "/emergency", icon: <AlertTriangle className="w-5 h-5" /> },
    { name: "Settings", path: "/settings", icon: <Settings className="w-5 h-5" /> },
    { name: "Help Center", path: "/help", icon: <HelpCircle className="w-5 h-5" /> },
  ];

  return (
    <>
      <div className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-800">
            <Link to="/" className="flex items-center gap-2 text-white">
              <BarChart2 className="w-7 h-7 text-primary" />
              <span className="text-xl font-semibold tracking-tight">SeniorSense</span>
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase">
              General
            </div>
            <nav className="mt-2 px-2 space-y-1">
              {navLinks.slice(0, 1).map((link) => (
                <SidebarLink 
                  key={link.path} 
                  link={link} 
                  isActive={location.pathname === link.path} 
                />
              ))}
            </nav>

            <div className="mt-6 px-3 py-2 text-xs font-semibold text-gray-400 uppercase">
              Health & Finance
            </div>
            <nav className="mt-2 px-2 space-y-1">
              {navLinks.slice(1, 4).map((link) => (
                <SidebarLink 
                  key={link.path} 
                  link={link} 
                  isActive={location.pathname === link.path} 
                />
              ))}
            </nav>

            <div className="mt-6 px-3 py-2 text-xs font-semibold text-gray-400 uppercase">
              Other
            </div>
            <nav className="mt-2 px-2 space-y-1">
              {navLinks.slice(4).map((link) => (
                <SidebarLink 
                  key={link.path} 
                  link={link} 
                  isActive={location.pathname === link.path} 
                />
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile toggle button */}
      <button 
        className="fixed bottom-4 left-4 z-50 p-2 bg-primary rounded-full shadow-lg lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </>
  );
};

interface SidebarLinkProps {
  link: { name: string; path: string; icon: React.ReactNode };
  isActive: boolean;
}

const SidebarLink = ({ link, isActive }: SidebarLinkProps) => {
  return (
    <Link
      to={link.path}
      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
        isActive 
          ? "bg-gray-800 text-white" 
          : "text-gray-300 hover:bg-gray-800 hover:text-white"
      )}
    >
      <span className="mr-3">{link.icon}</span>
      {link.name}
    </Link>
  );
};

export default Sidebar;
