
import React from "react";
import { Settings, Paintbrush, Layout, UserCircle } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";

const PreferencesPanel: React.FC = () => {
  const { preferences, updatePreference, resetPreferences } = usePreferences();

  return (
    <div className="glass-card rounded-xl p-5 mb-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <Settings className="text-primary" size={20} />
        <h2 className="text-lg font-medium">Personalization Options</h2>
      </div>

      <div className="space-y-5">
        {/* Theme selection */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Paintbrush size={16} className="text-blue-400" />
            <span className="text-sm font-medium">Theme</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => updatePreference("theme", "light")}
              className={`px-3 py-2 rounded-md text-sm ${
                preferences.theme === "light"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Light
            </button>
            <button
              onClick={() => updatePreference("theme", "dark")}
              className={`px-3 py-2 rounded-md text-sm ${
                preferences.theme === "dark"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Dark
            </button>
          </div>
        </div>

        {/* Font size selection */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-sm font-medium">Aa</span>
            <span className="text-sm font-medium">Font Size</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => updatePreference("fontSize", "small")}
              className={`px-3 py-2 rounded-md ${
                preferences.fontSize === "small"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <span className="text-xs">Small</span>
            </button>
            <button
              onClick={() => updatePreference("fontSize", "medium")}
              className={`px-3 py-2 rounded-md ${
                preferences.fontSize === "medium"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <span className="text-sm">Medium</span>
            </button>
            <button
              onClick={() => updatePreference("fontSize", "large")}
              className={`px-3 py-2 rounded-md ${
                preferences.fontSize === "large"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <span className="text-base">Large</span>
            </button>
          </div>
        </div>

        {/* Layout density */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Layout size={16} className="text-green-400" />
            <span className="text-sm font-medium">Dashboard Layout</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => updatePreference("dashboardLayout", "compact")}
              className={`px-3 py-2 rounded-md text-sm ${
                preferences.dashboardLayout === "compact"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Compact
            </button>
            <button
              onClick={() => updatePreference("dashboardLayout", "comfortable")}
              className={`px-3 py-2 rounded-md text-sm ${
                preferences.dashboardLayout === "comfortable"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Comfortable
            </button>
            <button
              onClick={() => updatePreference("dashboardLayout", "spacious")}
              className={`px-3 py-2 rounded-md text-sm ${
                preferences.dashboardLayout === "spacious"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Spacious
            </button>
          </div>
        </div>

        {/* Content priority */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <UserCircle size={16} className="text-purple-400" />
            <span className="text-sm font-medium">Dashboard Priority</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => updatePreference("dashboardPriority", "health")}
              className={`px-3 py-2 rounded-md text-sm ${
                preferences.dashboardPriority === "health"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Health First
            </button>
            <button
              onClick={() => updatePreference("dashboardPriority", "financial")}
              className={`px-3 py-2 rounded-md text-sm ${
                preferences.dashboardPriority === "financial"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Financial First
            </button>
            <button
              onClick={() => updatePreference("dashboardPriority", "balanced")}
              className={`px-3 py-2 rounded-md text-sm ${
                preferences.dashboardPriority === "balanced"
                  ? "bg-primary text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Balanced
            </button>
          </div>
        </div>

        {/* Reset button */}
        <div className="pt-2">
          <button
            onClick={resetPreferences}
            className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            Reset to defaults
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferencesPanel;
