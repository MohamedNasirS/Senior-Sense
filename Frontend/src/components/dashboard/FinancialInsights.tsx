
import React from "react";
import { TrendingUp, PieChart, Trophy, DollarSign } from "lucide-react";
import DataChart from "./DataChart";
import DashboardCard from "./DashboardCard";
import { useIsMobile } from "@/hooks/use-mobile";

// Mock data for revenue forecasting
const revenueData = [
  { name: 'Jan', actual: 12500, forecast: 12000 },
  { name: 'Feb', actual: 13200, forecast: 13000 },
  { name: 'Mar', actual: 14100, forecast: 14000 },
  { name: 'Apr', actual: 13700, forecast: 15000 },
  { name: 'May', actual: 15200, forecast: 16000 },
  { name: 'Jun', actual: 16500, forecast: 17000 },
  { name: 'Jul', actual: null, forecast: 18000 },
  { name: 'Aug', actual: null, forecast: 19500 },
  { name: 'Sep', actual: null, forecast: 21000 },
];

// Mock data for cancellation reasons
const cancellationData = [
  { name: 'Price', value: 42, fill: "#F97316" },
  { name: 'Features', value: 28, fill: "#8B5CF6" },
  { name: 'Usability', value: 15, fill: "#0EA5E9" },
  { name: 'Support', value: 10, fill: "#10B981" },
  { name: 'Other', value: 5, fill: "#6B7280" }
];

// Mock data for top spending users
const topSpendingUsers = [
  { id: 1, name: "Jane Cooper", avatar: "JC", spent: "$4,350", growth: "+12%" },
  { id: 2, name: "Robert Fox", avatar: "RF", spent: "$3,980", growth: "+8%" },
  { id: 3, name: "Wade Warren", avatar: "WW", spent: "$3,240", growth: "+15%" },
  { id: 4, name: "Esther Howard", avatar: "EH", spent: "$2,790", growth: "-3%" },
  { id: 5, name: "Leslie Alexander", avatar: "LA", spent: "$2,450", growth: "+5%" }
];

const FinancialInsights = () => {
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
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <DashboardCard 
          title="Revenue Forecasting" 
          subtitle="Actual vs Projected (AI predictions)"
          className="animate-fade-in"
          style={{ animationDelay: '100ms' }}
          collapsible
          actions={renderCardAction}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="text-green-500" size={18} />
              <span className="text-sm font-medium">Revenue growth projection</span>
            </div>
            <div className="flex items-center justify-end gap-4 text-xs mb-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Actual</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span>AI Forecast</span>
              </div>
            </div>
            <DataChart 
              data={revenueData} 
              type="line" 
              dataKey="actual"
              height={isMobile ? 250 : 300}
            />
          </div>
        </DashboardCard>
        
        <DashboardCard 
          title="Subscription Cancellation Reasons" 
          subtitle="Why users cancel their subscriptions"
          className="animate-fade-in"
          style={{ animationDelay: '200ms' }}
          collapsible
          actions={renderCardAction}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <PieChart className="text-red-500" size={18} />
              <span className="text-sm font-medium">Customer churn analysis</span>
            </div>
            <DataChart 
              data={cancellationData} 
              type="pie" 
              dataKey="value"
              height={isMobile ? 250 : 300}
              colors={["#F97316", "#8B5CF6", "#0EA5E9", "#10B981", "#6B7280"]}
            />
          </div>
        </DashboardCard>
      </div>
      
      {/* Top Spending Users Leaderboard */}
      <DashboardCard 
        title="Top Spending Users" 
        subtitle="Highest value customers this quarter"
        className="animate-fade-in"
        style={{ animationDelay: '300ms' }}
        collapsible
        actions={renderCardAction}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="text-amber-500" size={18} />
            <span className="text-sm font-medium">Customer spending leaderboard</span>
          </div>
          
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent</th>
                  <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topSpendingUsers.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">#{index + 1}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 font-medium">
                          {user.avatar}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-right">
                      <div className="text-sm font-medium text-gray-900">{user.spent}</div>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap text-right">
                      <span className={`inline-flex text-sm font-medium ${user.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {user.growth}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DashboardCard>
    </div>
  );
};

export default FinancialInsights;
