
import React, { useState } from "react";
import { ChevronDown, MoreHorizontal, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePreferences } from "@/context/PreferencesContext";

interface DashboardCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  collapsible?: boolean;
  actions?: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  children,
  className,
  style,
  collapsible = false,
  actions
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const { preferences } = usePreferences();
  
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden transition-all duration-300",
        maximized ? "fixed inset-4 z-50" : "",
        className
      )}
      style={{
        ...style,
        maxHeight: collapsed ? "auto" : maximized ? "calc(100vh - 2rem)" : undefined,
      }}
    >
      <div className={cn(
        "px-4 py-3 flex items-center justify-between border-b border-gray-800/40",
        preferences.dashboardLayout === "spacious" ? "px-6 py-4" : "",
        preferences.dashboardLayout === "compact" ? "px-3 py-2" : ""
      )}>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className={cn(
              "font-medium",
              preferences.fontSize === "large" ? "text-lg" : "",
              preferences.fontSize === "small" ? "text-base" : "text-lg"
            )}>{title}</h2>
            {collapsible && (
              <button 
                onClick={() => setCollapsed(!collapsed)}
                className="text-gray-400 hover:text-gray-300 transition-colors"
                aria-label={collapsed ? "Expand" : "Collapse"}
              >
                <ChevronDown 
                  size={18} 
                  className={cn(
                    "transition-transform duration-300",
                    collapsed ? "rotate-180" : ""
                  )} 
                />
              </button>
            )}
          </div>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        
        <div className="flex items-center gap-1">
          <button
            onClick={() => setMaximized(!maximized)}
            className="p-1.5 rounded-full hover:bg-gray-700/50 transition-colors"
            aria-label={maximized ? "Minimize" : "Maximize"}
          >
            {maximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
          
          {actions && (
            <div className="relative">
              <button 
                onClick={() => setShowMenu(!showMenu)}
                className="p-1.5 rounded-full hover:bg-gray-700/50 transition-colors"
                aria-label="More options"
              >
                <MoreHorizontal size={16} />
              </button>
              
              {showMenu && (
                <div 
                  className="absolute right-0 mt-1 w-48 bg-gray-800 rounded-lg shadow-lg py-1 z-10 animate-scale-in border border-gray-700"
                  onMouseLeave={() => setShowMenu(false)}
                >
                  {actions}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div 
        className={cn(
          "transition-all duration-300 ease-in-out overflow-auto",
          collapsed ? "max-h-0 opacity-0 py-0" : "opacity-100",
          maximized ? "max-h-[calc(100vh-8rem)]" : "max-h-[2000px]",
          preferences.dashboardLayout === "spacious" ? "p-6" : "p-4",
          preferences.dashboardLayout === "compact" ? "p-3" : ""
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;
