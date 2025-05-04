
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";
import { usePreferences } from "@/context/PreferencesContext";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const Layout = ({ children, showSidebar = true }: LayoutProps) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { preferences } = usePreferences();
  
  const isLandingOrLogin = location.pathname === "/" || location.pathname === "/login";
  
  return (
    <div className={cn(
      "min-h-screen flex bg-background text-foreground",
      preferences.theme === "dark" ? "theme-dark" : "theme-light"
    )}>
      {showSidebar && !isLandingOrLogin && (
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      )}
      
      <div className="flex-1 flex flex-col">
        <main className={cn(
          "flex-1",
          isLandingOrLogin ? "overflow-hidden p-0" : "px-4 sm:px-6 py-8"
        )}>
          {children}
        </main>
        
        {!isLandingOrLogin && (
          <footer className="py-6 px-6 text-center text-muted-foreground text-sm border-t border-border">
            <div className="max-w-7xl mx-auto">
              <p>© {new Date().getFullYear()} SeniorSense. All rights reserved.</p>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};

export default Layout;
