
import React, { useState } from "react";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  collapsible?: boolean;
  actions?: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  children,
  className,
  collapsible = false,
  actions
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl overflow-hidden transition-all duration-300",
        className
      )}
    >
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-medium">{title}</h2>
            {collapsible && (
              <button 
                onClick={() => setCollapsed(!collapsed)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
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
        
        {actions && (
          <div className="relative">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="More options"
            >
              <MoreHorizontal size={18} />
            </button>
            
            {showMenu && (
              <div 
                className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-1 z-10 animate-scale-in"
                onMouseLeave={() => setShowMenu(false)}
              >
                {actions}
              </div>
            )}
          </div>
        )}
      </div>
      
      <div 
        className={cn(
          "transition-all duration-300 ease-in-out",
          collapsed ? "max-h-0 opacity-0 py-0" : "max-h-[2000px] opacity-100 py-5"
        )}
      >
        <div className="px-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardCard;
