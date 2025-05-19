
import React from "react";
import { Moon, Sun } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";
import { Toggle } from "@/components/ui/toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const ThemeToggle: React.FC = () => {
  const { preferences, updatePreference } = usePreferences();
  const isDark = preferences.theme === "dark";

  const toggleTheme = () => {
    updatePreference("theme", isDark ? "light" : "dark");
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Toggle 
          pressed={isDark} 
          onPressedChange={toggleTheme} 
          aria-label="Toggle theme"
          className="w-10 h-10 rounded-full"
        >
          {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Toggle>
      </TooltipTrigger>
      <TooltipContent>
        <p>{isDark ? "Switch to light theme" : "Switch to dark theme"}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeToggle;
