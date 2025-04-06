
import React from "react";
import { usePreferences } from "@/context/PreferencesContext";
import PreferencesPanel from "@/components/preferences/PreferencesPanel";
import DashboardCard from "@/components/dashboard/DashboardCard";
import HealthcareInsights from "@/components/dashboard/HealthcareInsights";
import FinancialInsights from "@/components/dashboard/FinancialInsights";
import { Heart, DollarSign, Bell, Calendar, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for AI recommendations
const healthRecommendations = [
  { id: 1, text: "Your blood pressure readings are higher than last month. Consider scheduling a check-up.", importance: "high" },
  { id: 2, text: "You've been consistently taking your medication on time. Great job!", importance: "medium" },
  { id: 3, text: "Based on your health data, increasing your daily steps by 1,000 could improve your heart health.", importance: "medium" },
];

const financialRecommendations = [
  { id: 1, text: "You've exceeded your restaurant budget by 15% this month. Consider adjusting your spending.", importance: "high" },
  { id: 2, text: "Based on your savings rate, you're on track to reach your retirement goal by age 65.", importance: "medium" },
  { id: 3, text: "We noticed a potential opportunity to reduce your subscription costs by $45 monthly.", importance: "medium" },
];

// Upcoming events
const upcomingEvents = [
  { id: 1, title: "Doctor Appointment", date: "April 15, 2025", type: "health" },
  { id: 2, title: "Tax Payment Due", date: "April 20, 2025", type: "financial" },
  { id: 3, title: "Medication Refill", date: "April 12, 2025", type: "health" },
];

const PersonalizedDashboard: React.FC = () => {
  const { preferences } = usePreferences();

  // Filter recommendations based on priority
  const getFilteredHealthRecs = () => {
    if (preferences.dashboardPriority === "financial") {
      return healthRecommendations.filter(rec => rec.importance === "high");
    }
    return healthRecommendations;
  };

  const getFilteredFinancialRecs = () => {
    if (preferences.dashboardPriority === "health") {
      return financialRecommendations.filter(rec => rec.importance === "high");
    }
    return financialRecommendations;
  };

  // Determine order of sections based on priority
  const renderPrioritizedSections = () => {
    if (preferences.dashboardPriority === "health") {
      return (
        <>
          {renderHealthSection()}
          {renderFinancialSection()}
        </>
      );
    } else if (preferences.dashboardPriority === "financial") {
      return (
        <>
          {renderFinancialSection()}
          {renderHealthSection()}
        </>
      );
    } else {
      return (
        <>
          {renderHealthSection()}
          {renderFinancialSection()}
        </>
      );
    }
  };

  const renderHealthSection = () => (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Heart className="text-red-500" size={24} />
        <h2 className="text-xl font-semibold">Health & Wellness</h2>
      </div>
      
      <div className={cn("grid grid-cols-1 lg:grid-cols-3 card-spacing", 
        `dashboard-${preferences.dashboardLayout}`)}>
        
        <DashboardCard
          title="AI Health Recommendations"
          subtitle="Personalized suggestions based on your data"
          className="lg:col-span-2 animate-fade-in"
          style={{ animationDelay: '100ms' }}
        >
          <div className="space-y-3">
            {getFilteredHealthRecs().map(rec => (
              <div 
                key={rec.id} 
                className={cn("p-3 rounded-lg", 
                  rec.importance === "high" 
                    ? "bg-red-900/30 border border-red-800" 
                    : "bg-gray-800/50 border border-gray-700"
                )}
              >
                <p className="text-sm">{rec.text}</p>
              </div>
            ))}
          </div>
        </DashboardCard>
        
        <HealthcareInsights />
      </div>
    </section>
  );

  const renderFinancialSection = () => (
    <section className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <DollarSign className="text-green-500" size={24} />
        <h2 className="text-xl font-semibold">Financial Health</h2>
      </div>
      
      <div className={cn("grid grid-cols-1 lg:grid-cols-3 card-spacing", 
        `dashboard-${preferences.dashboardLayout}`)}>
        
        <DashboardCard
          title="AI Financial Insights"
          subtitle="Smart recommendations for your finances"
          className="lg:col-span-2 animate-fade-in"
          style={{ animationDelay: '100ms' }}
        >
          <div className="space-y-3">
            {getFilteredFinancialRecs().map(rec => (
              <div 
                key={rec.id} 
                className={cn("p-3 rounded-lg", 
                  rec.importance === "high" 
                    ? "bg-amber-900/30 border border-amber-800" 
                    : "bg-gray-800/50 border border-gray-700"
                )}
              >
                <p className="text-sm">{rec.text}</p>
              </div>
            ))}
          </div>
        </DashboardCard>
        
        <FinancialInsights />
      </div>
    </section>
  );

  return (
    <div className={`max-w-7xl mx-auto dashboard-${preferences.dashboardLayout}`}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Your Personalized Dashboard</h1>
        <p className="text-gray-400 mt-1">
          AI-powered insights tailored to your preferences
        </p>
      </div>

      <PreferencesPanel />

      <div className={cn("card-spacing", `dashboard-${preferences.dashboardLayout}`)}>
        <DashboardCard
          title="Upcoming Events & Reminders"
          subtitle="Important dates to remember"
          className="animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingEvents.map(event => (
              <div 
                key={event.id} 
                className={cn("p-4 rounded-lg border", 
                  event.type === "health" 
                    ? "border-blue-800 bg-blue-900/20" 
                    : "border-green-800 bg-green-900/20"
                )}
              >
                <div className="flex items-center gap-2 mb-2">
                  {event.type === "health" ? (
                    <Activity size={16} className="text-blue-400" />
                  ) : (
                    <DollarSign size={16} className="text-green-400" />
                  )}
                  <span className="text-sm font-medium">{event.type === "health" ? "Health" : "Financial"}</span>
                </div>
                <h3 className="font-medium mb-1">{event.title}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Calendar size={14} />
                  <span>{event.date}</span>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      {renderPrioritizedSections()}
    </div>
  );
};

export default PersonalizedDashboard;
