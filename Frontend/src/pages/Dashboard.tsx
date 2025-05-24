import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { BarChart2, LineChart, PieChart, TrendingUp, Users, Activity, DollarSign, Filter } from "lucide-react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import DataChart from "@/components/dashboard/DataChart";
import StatCard from "@/components/dashboard/StatCard";
import CustomButton from "@/components/ui/CustomButton";
import HealthcareInsights from "@/components/dashboard/HealthcareInsights";
import UserEngagementInsights from "@/components/dashboard/UserEngagementInsights";
import FinancialInsights from "@/components/dashboard/FinancialInsights";

// Mock data
const generateMockData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  return months.map(month => ({
    name: month,
    value: Math.floor(Math.random() * 1000) + 500,
    users: Math.floor(Math.random() * 100) + 50,
    revenue: Math.floor(Math.random() * 5000) + 1000,
  }));
};

const pieData = [
  { name: 'Mobile', value: 45 },
  { name: 'Desktop', value: 35 },
  { name: 'Tablet', value: 20 },
];

const Dashboard = () => {
  const isMobile = useIsMobile();
  const [data, setData] = useState(generateMockData());
  const [isLoading, setIsLoading] = useState(true);
  const [filterPeriod, setFilterPeriod] = useState("monthly");
  const [activeTab, setActiveTab] = useState("overview");
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Refresh data function
  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setData(generateMockData());
      setIsLoading(false);
    }, 800);
  };
  
  const renderCardAction = (
    <div className="py-1">
      <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
        Download CSV
      </button>
      <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
        View Details
      </button>
      <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors text-red-500">
        Hide Card
      </button>
    </div>
  );
  
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500 mt-1">Your analytics overview</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center rounded-lg border border-gray-200 p-1 bg-white">
            <button 
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${filterPeriod === "daily" ? "bg-gray-100 text-gray-800" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setFilterPeriod("daily")}
            >
              Daily
            </button>
            <button 
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${filterPeriod === "weekly" ? "bg-gray-100 text-gray-800" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setFilterPeriod("weekly")}
            >
              Weekly
            </button>
            <button 
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${filterPeriod === "monthly" ? "bg-gray-100 text-gray-800" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setFilterPeriod("monthly")}
            >
              Monthly
            </button>
          </div>
          
          <CustomButton 
            variant="outline" 
            icon={<Filter size={16} />} 
            onClick={() => {}}
          >
            Filters
          </CustomButton>
          
          <CustomButton 
            icon={<Activity size={16} />} 
            onClick={refreshData}
            disabled={isLoading}
          >
            {isLoading ? "Refreshing..." : "Refresh Data"}
          </CustomButton>
        </div>
      </div>
      
      {/* Insights tabs */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-2 border-b-2 font-medium text-sm ${
              activeTab === "overview"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("engagement")}
            className={`py-2 border-b-2 font-medium text-sm ${
              activeTab === "engagement"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            User Engagement
          </button>
          <button
            onClick={() => setActiveTab("healthcare")}
            className={`py-2 border-b-2 font-medium text-sm ${
              activeTab === "healthcare"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Healthcare
          </button>
          <button
            onClick={() => setActiveTab("financial")}
            className={`py-2 border-b-2 font-medium text-sm ${
              activeTab === "financial"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Financial
          </button>
        </div>
      </div>
      
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Users" 
          value="8,249" 
          icon={<Users size={20} />} 
          trend={{ value: 12.5, isPositive: true }}
          className="animate-fade-in"
          style={{ animationDelay: '100ms' }}
        />
        <StatCard 
          title="Page Views" 
          value="32.4K" 
          icon={<BarChart2 size={20} />} 
          trend={{ value: 8.2, isPositive: true }}
          className="animate-fade-in"
          style={{ animationDelay: '200ms' }}
        />
        <StatCard 
          title="Conversion Rate" 
          value="5.25%" 
          icon={<TrendingUp size={20} />} 
          trend={{ value: 1.8, isPositive: false }}
          className="animate-fade-in"
          style={{ animationDelay: '300ms' }}
        />
        <StatCard 
          title="Revenue" 
          value="$24,500" 
          icon={<DollarSign size={20} />} 
          trend={{ value: 9.3, isPositive: true }}
          className="animate-fade-in"
          style={{ animationDelay: '400ms' }}
        />
      </div>
      
      {/* Content based on active tab */}
      {activeTab === "overview" && (
        <>
          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <DashboardCard 
              title="User Activity" 
              subtitle="User engagement over time"
              className="lg:col-span-2 animate-fade-in"
              style={{ animationDelay: '500ms' }}
              collapsible
              actions={renderCardAction}
            >
              <DataChart 
                data={data} 
                type="area" 
                dataKey="value"
                height={isMobile ? 250 : 300}
              />
            </DashboardCard>
            
            <DashboardCard 
              title="Device Distribution" 
              subtitle="Users by device type"
              className="animate-fade-in"
              style={{ animationDelay: '600ms' }}
              collapsible
              actions={renderCardAction}
            >
              <DataChart 
                data={pieData} 
                type="pie" 
                dataKey="value"
                height={isMobile ? 220 : 300}
              />
            </DashboardCard>
          </div>
          
          {/* Additional Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <DashboardCard 
              title="Revenue Trends" 
              subtitle="Monthly revenue performance"
              className="animate-fade-in"
              style={{ animationDelay: '700ms' }}
              collapsible
              actions={renderCardAction}
            >
              <DataChart 
                data={data} 
                type="bar" 
                dataKey="revenue"
                height={isMobile ? 250 : 300}
              />
            </DashboardCard>
            
            <DashboardCard 
              title="User Growth" 
              subtitle="New user acquisition"
              className="animate-fade-in"
              style={{ animationDelay: '800ms' }}
              collapsible
              actions={renderCardAction}
            >
              <DataChart 
                data={data} 
                type="line" 
                dataKey="users"
                height={isMobile ? 250 : 300}
              />
            </DashboardCard>
          </div>
        </>
      )}
      
      {activeTab === "engagement" && <UserEngagementInsights />}
      
      {activeTab === "healthcare" && <HealthcareInsights />}
      
      {activeTab === "financial" && <FinancialInsights />}
    </div>
  );
};

export default Dashboard;
