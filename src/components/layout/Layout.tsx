
import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className={cn(
        "flex-1 pt-20",
        location.pathname === "/" ? "overflow-hidden" : "px-4 sm:px-6 py-8"
      )}>
        {children}
      </main>
      
      <footer className="py-6 px-6 text-center text-gray-500 text-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} DataViz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
