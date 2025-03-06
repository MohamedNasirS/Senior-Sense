
import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  className
}) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-6 hover-lift",
        className
      )}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {icon && <div className="text-primary">{icon}</div>}
      </div>
      
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <p className="text-2xl font-semibold mb-1">{value}</p>
          
          {trend && (
            <div className="flex items-center text-sm">
              <span 
                className={cn(
                  "inline-block mr-1",
                  trend.isPositive ? "text-green-500" : "text-red-500"
                )}
              >
                {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
              </span>
              <span className="text-gray-400">vs last period</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
