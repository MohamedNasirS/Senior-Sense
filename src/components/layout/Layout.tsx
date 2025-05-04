
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";
import { usePreferences } from "@/context/PreferencesContext";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const Layout = ({ children, showSidebar = true }: LayoutProps) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { preferences } = usePreferences();
  const isMobile = useIsMobile();
  
  // Close sidebar by default on mobile, open by default on desktop
  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);
  
  // Close sidebar when changing routes on mobile
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);
  
  const isLandingOrLogin = location.pathname === "/" || location.pathname === "/login";
  
  return (
    <div className={cn(
      "min-h-screen flex bg-background text-foreground transition-colors duration-300",
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
