
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="min-h-screen flex bg-black text-white">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col">
        <main className={cn(
          "flex-1 pt-6",
          location.pathname === "/" ? "overflow-hidden" : "px-4 sm:px-6 py-8"
        )}>
          {children}
        </main>
        
        <footer className="py-6 px-6 text-center text-gray-500 text-sm border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <p>© {new Date().getFullYear()} SeniorSense. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
