
import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light";
type FontSize = "small" | "medium" | "large";
type DashboardLayout = "compact" | "comfortable" | "spacious";
type DashboardPriority = "health" | "financial" | "balanced";

interface Preferences {
  theme: Theme;
  fontSize: FontSize;
  dashboardLayout: DashboardLayout;
  dashboardPriority: DashboardPriority;
}

interface PreferencesContextType {
  preferences: Preferences;
  updatePreference: <K extends keyof Preferences>(key: K, value: Preferences[K]) => void;
  resetPreferences: () => void;
}

const defaultPreferences: Preferences = {
  theme: "dark",
  fontSize: "medium",
  dashboardLayout: "comfortable",
  dashboardPriority: "balanced",
};

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export const PreferencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<Preferences>(() => {
    // Load preferences from localStorage if available
    const savedPreferences = localStorage.getItem("userPreferences");
    return savedPreferences ? JSON.parse(savedPreferences) : defaultPreferences;
  });

  // Update localStorage when preferences change
  useEffect(() => {
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
    
    // Apply global CSS classes based on preferences
    document.documentElement.classList.remove("text-small", "text-medium", "text-large");
    document.documentElement.classList.add(`text-${preferences.fontSize}`);
    
    // Apply theme to document
    if (preferences.theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    
    // Apply dashboard layout class to body
    document.body.classList.remove("dashboard-compact", "dashboard-comfortable", "dashboard-spacious");
    document.body.classList.add(`dashboard-${preferences.dashboardLayout}`);
  }, [preferences]);

  const updatePreference = <K extends keyof Preferences>(key: K, value: Preferences[K]) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
  };

  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        updatePreference,
        resetPreferences,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = (): PreferencesContextType => {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }
  return context;
};
