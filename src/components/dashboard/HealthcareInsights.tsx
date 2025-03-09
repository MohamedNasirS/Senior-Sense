
import React from "react";
import { Heart, DollarSign, Activity } from "lucide-react";
import DataChart from "./DataChart";
import DashboardCard from "./DashboardCard";
import { useIsMobile } from "@/hooks/use-mobile";

// Mock data
const expenseBreakdownData = [
  { name: 'Medications', value: 2500, fill: "#0EA5E9" },
  { name: 'Therapy', value: 1800, fill: "#8B5CF6" },
  { name: 'Check-ups', value: 1200, fill: "#10B981" },
  { name: 'Specialists', value: 2200, fill: "#F97316" },
  { name: 'Other', value: 900, fill: "#6B7280" }
];

const monthlySpendingData = [
  { name: 'Jan', planned: 3500, actual: 3200 },
  { name: 'Feb', planned: 3800, actual: 4100 },
  { name: 'Mar', planned: 4200, actual: 3900 },
  { name: 'Apr', planned: 3900, actual: 4300 },
  { name: 'May', planned: 3700, actual: 3500 },
  { name: 'Jun', planned: 4100, actual: 4800 },
  { name: 'Jul', planned: 4500, actual: 4200 }
];

const HealthcareInsights = () => {
  const isMobile = useIsMobile();
  
  const renderCardAction = (
    <div className="py-1">
      <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
        Download CSV
      </button>
      <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
        View Details
      </button>
    </div>
  );
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <DashboardCard 
        title="Healthcare Expense Breakdown" 
        subtitle="Top spending categories"
        className="animate-fade-in"
        style={{ animationDelay: '100ms' }}
        collapsible
        actions={renderCardAction}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="text-red-500" size={18} />
            <span className="text-sm font-medium">Healthcare spending overview</span>
          </div>
          <DataChart 
            data={expenseBreakdownData} 
            type="bar" 
            dataKey="value"
            height={isMobile ? 250 : 300}
            colors={["#0EA5E9", "#8B5CF6", "#10B981", "#F97316", "#6B7280"]}
          />
        </div>
      </DashboardCard>
      
      <DashboardCard 
        title="Monthly Healthcare Spending" 
        subtitle="Planned vs Actual"
        className="animate-fade-in"
        style={{ animationDelay: '200ms' }}
        collapsible
        actions={renderCardAction}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <DollarSign className="text-green-500" size={18} />
              <span className="text-sm font-medium">Cost tracking</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Planned</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Actual</span>
              </div>
            </div>
          </div>
          <DataChart 
            data={monthlySpendingData}
            type="line"
            dataKey="planned" /* Added the required dataKey prop */
            height={isMobile ? 250 : 300}
            /* Custom rendering for multiple lines */
            customChart={
              <div className="w-full h-full">
                {/* Custom chart rendering goes here */}
              </div>
            }
          />
        </div>
      </DashboardCard>
    </div>
  );
};

export default HealthcareInsights;
