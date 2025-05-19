
import React from "react";
import { Bell } from "lucide-react";

const Reminders = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Reminders</h1>
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 card-spacing">
        <div className="black-card hover-lift card-padding">
          <h2 className="text-xl font-semibold mb-4">Today's Reminders</h2>
          
          <div className="space-y-3">
            <div className="glass-card p-3 rounded-lg border-l-4 border-l-blue-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="text-blue-500" size={18} />
                  <div>
                    <h3 className="font-medium">Take Medication</h3>
                    <p className="text-xs text-muted-foreground">Lisinopril, 10mg</p>
                  </div>
                </div>
                <span className="text-sm font-medium">8:00 AM</span>
              </div>
              <div className="mt-2 flex justify-end gap-2">
                <button className="px-3 py-1 text-xs bg-primary/20 text-primary rounded hover:bg-primary/30">Snooze</button>
                <button className="px-3 py-1 text-xs bg-green-500/20 text-green-500 rounded hover:bg-green-500/30">Complete</button>
              </div>
            </div>
            
            <div className="glass-card p-3 rounded-lg border-l-4 border-l-yellow-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="text-yellow-500" size={18} />
                  <div>
                    <h3 className="font-medium">Blood Pressure Check</h3>
                    <p className="text-xs text-muted-foreground">Record in health log</p>
                  </div>
                </div>
                <span className="text-sm font-medium">10:30 AM</span>
              </div>
              <div className="mt-2 flex justify-end gap-2">
                <button className="px-3 py-1 text-xs bg-primary/20 text-primary rounded hover:bg-primary/30">Snooze</button>
                <button className="px-3 py-1 text-xs bg-green-500/20 text-green-500 rounded hover:bg-green-500/30">Complete</button>
              </div>
            </div>
            
            <div className="glass-card p-3 rounded-lg border-l-4 border-l-blue-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="text-blue-500" size={18} />
                  <div>
                    <h3 className="font-medium">Take Medication</h3>
                    <p className="text-xs text-muted-foreground">Metformin, 500mg</p>
                  </div>
                </div>
                <span className="text-sm font-medium">12:00 PM</span>
              </div>
              <div className="mt-2 flex justify-end gap-2">
                <button className="px-3 py-1 text-xs bg-primary/20 text-primary rounded hover:bg-primary/30">Snooze</button>
                <button className="px-3 py-1 text-xs bg-green-500/20 text-green-500 rounded hover:bg-green-500/30">Complete</button>
              </div>
            </div>
            
            <div className="glass-card p-3 rounded-lg border-l-4 border-l-purple-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="text-purple-500" size={18} />
                  <div>
                    <h3 className="font-medium">Exercise</h3>
                    <p className="text-xs text-muted-foreground">30-minute walk</p>
                  </div>
                </div>
                <span className="text-sm font-medium">3:00 PM</span>
              </div>
              <div className="mt-2 flex justify-end gap-2">
                <button className="px-3 py-1 text-xs bg-primary/20 text-primary rounded hover:bg-primary/30">Snooze</button>
                <button className="px-3 py-1 text-xs bg-green-500/20 text-green-500 rounded hover:bg-green-500/30">Complete</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="black-card hover-lift card-padding">
          <h2 className="text-xl font-semibold mb-4">Set New Reminder</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Reminder Type</label>
              <select className="w-full px-3 py-2 bg-secondary rounded-md text-sm">
                <option>Medication</option>
                <option>Health Check</option>
                <option>Exercise</option>
                <option>Hydration</option>
                <option>Appointment</option>
                <option>Custom</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <input 
                type="text"
                className="w-full px-3 py-2 bg-secondary rounded-md text-sm"
                placeholder="Brief description of the reminder"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 bg-secondary rounded-md text-sm"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Time</label>
                <input 
                  type="time" 
                  className="w-full px-3 py-2 bg-secondary rounded-md text-sm"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Repeat</label>
              <select className="w-full px-3 py-2 bg-secondary rounded-md text-sm">
                <option>Once</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Custom</option>
              </select>
            </div>
            
            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-sm">Set notification 15 minutes before</span>
              </label>
            </div>
            
            <div className="pt-2">
              <button 
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90"
              >
                Set Reminder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
