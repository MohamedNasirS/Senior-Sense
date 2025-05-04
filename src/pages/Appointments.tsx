
import React from "react";
import { Calendar } from "lucide-react";

const Appointments = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Appointments</h1>
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 card-spacing">
        <div className="black-card hover-lift card-padding">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          
          <div className="space-y-4">
            <div className="glass-card p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Calendar className="text-primary" size={24} />
                <div>
                  <h3 className="font-medium">Dr. Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Primary Care Physician</p>
                </div>
              </div>
              <div className="mt-3 border-t border-border pt-3 flex justify-between">
                <p className="text-sm"><span className="font-medium">Date:</span> May 15, 2025</p>
                <p className="text-sm"><span className="font-medium">Time:</span> 10:00 AM</p>
              </div>
              <div className="mt-3 flex justify-end">
                <button className="text-primary text-sm hover:underline">Reschedule</button>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Calendar className="text-primary" size={24} />
                <div>
                  <h3 className="font-medium">Dr. Michael Chen</h3>
                  <p className="text-sm text-muted-foreground">Cardiologist</p>
                </div>
              </div>
              <div className="mt-3 border-t border-border pt-3 flex justify-between">
                <p className="text-sm"><span className="font-medium">Date:</span> May 28, 2025</p>
                <p className="text-sm"><span className="font-medium">Time:</span> 2:30 PM</p>
              </div>
              <div className="mt-3 flex justify-end">
                <button className="text-primary text-sm hover:underline">Reschedule</button>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Calendar className="text-primary" size={24} />
                <div>
                  <h3 className="font-medium">Eye Examination</h3>
                  <p className="text-sm text-muted-foreground">Dr. Lisa Patel, Optometrist</p>
                </div>
              </div>
              <div className="mt-3 border-t border-border pt-3 flex justify-between">
                <p className="text-sm"><span className="font-medium">Date:</span> June 12, 2025</p>
                <p className="text-sm"><span className="font-medium">Time:</span> 11:15 AM</p>
              </div>
              <div className="mt-3 flex justify-end">
                <button className="text-primary text-sm hover:underline">Reschedule</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="black-card hover-lift card-padding">
          <h2 className="text-xl font-semibold mb-4">Schedule a New Appointment</h2>
          <p className="text-muted-foreground mb-6">Select a specialist and preferred date to schedule your next appointment.</p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Specialist Type</label>
              <select className="w-full px-3 py-2 bg-secondary rounded-md text-sm">
                <option>Primary Care Physician</option>
                <option>Cardiologist</option>
                <option>Neurologist</option>
                <option>Endocrinologist</option>
                <option>Ophthalmologist</option>
                <option>Dermatologist</option>
                <option>Physical Therapist</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Date</label>
              <input 
                type="date" 
                className="w-full px-3 py-2 bg-secondary rounded-md text-sm"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Time</label>
              <select className="w-full px-3 py-2 bg-secondary rounded-md text-sm">
                <option>Morning (8:00 AM - 12:00 PM)</option>
                <option>Afternoon (12:00 PM - 5:00 PM)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Reason for Visit</label>
              <textarea 
                className="w-full px-3 py-2 bg-secondary rounded-md text-sm h-24"
                placeholder="Briefly describe your symptoms or reason for the appointment..."
              />
            </div>
            
            <div className="pt-2">
              <button 
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90"
              >
                Request Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
