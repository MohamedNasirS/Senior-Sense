
import React from "react";
import { Users, Clock, TrendingUp } from "lucide-react";
import DataChart from "./DataChart";
import DashboardCard from "./DashboardCard";
import { useIsMobile } from "@/hooks/use-mobile";

// Mock data
const userActivityData = [
  { name: 'Mon', dau: 1240, wau: 4500, mau: 12800 },
  { name: 'Tue', dau: 1350, wau: 4650, mau: 12900 },
  { name: 'Wed', dau: 1480, wau: 4800, mau: 13100 },
  { name: 'Thu', dau: 1520, wau: 4950, mau: 13200 },
  { name: 'Fri', dau: 1350, wau: 5200, mau: 13300 },
  { name: 'Sat', dau: 980, wau: 5300, mau: 13400 },
  { name: 'Sun', dau: 870, wau: 5100, mau: 13500 }
];

const sessionData = [
  { name: 'Morning', value: 35 },
  { name: 'Afternoon', value: 45 },
  { name: 'Evening', value: 15 },
  { name: 'Night', value: 5 }
];

const retentionData = [
  { name: 'Week 1', rate: 95 },
  { name: 'Week 2', rate: 85 },
  { name: 'Week 3', rate: 75 },
  { name: 'Week 4', rate: 70 },
  { name: 'Week 5', rate: 65 },
  { name: 'Week 6', rate: 60 },
  { name: 'Week 7', rate: 55 },
  { name: 'Week 8', rate: 52 }
];

const UserEngagementInsights = () => {
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <DashboardCard 
        title="User Activity Metrics" 
        subtitle="DAU, WAU, MAU trends"
        className="lg:col-span-2 animate-fade-in"
        style={{ animationDelay: '100ms' }}
        collapsible
        actions={renderCardAction}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Users className="text-primary" size={18} />
            <span className="text-sm font-medium">Active user trends</span>
          </div>
          <div className="flex items-center justify-end gap-4 text-xs mb-2">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>Daily</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span>Weekly</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Monthly</span>
            </div>
          </div>
          <DataChart 
            data={userActivityData} 
            type="line" 
            dataKey="dau"
            height={isMobile ? 250 : 300}
          />
        </div>
      </DashboardCard>
      
      <DashboardCard 
        title="Session Duration" 
        subtitle="Average time spent"
        className="animate-fade-in"
        style={{ animationDelay: '200ms' }}
        collapsible
        actions={renderCardAction}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="text-purple-500" size={18} />
            <span className="text-sm font-medium">User session patterns</span>
          </div>
          <DataChart 
            data={sessionData} 
            type="pie" 
            dataKey="value"
            height={isMobile ? 220 : 300}
            colors={["#0EA5E9", "#8B5CF6", "#10B981", "#F97316"]}
          />
        </div>
      </DashboardCard>
    </div>
  );
};

export default UserEngagementInsights;
