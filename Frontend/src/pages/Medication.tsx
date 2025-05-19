
import React from "react";

const Medication = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Medication Management</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 card-spacing">
        <div className="medication-card hover-lift card-padding">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium">Lisinopril</h3>
            <span className="bg-blue-500/20 text-blue-500 text-xs px-2 py-1 rounded">Daily</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">For blood pressure</p>
          <div className="mt-4">
            <p className="text-sm"><span className="font-medium">Dosage:</span> 10mg</p>
            <p className="text-sm"><span className="font-medium">Time:</span> 8:00 AM</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button className="text-sm text-primary hover:underline">View Details</button>
            <span className="text-green-500 text-sm">Taken today</span>
          </div>
        </div>

        <div className="medication-card hover-lift card-padding">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium">Metformin</h3>
            <span className="bg-blue-500/20 text-blue-500 text-xs px-2 py-1 rounded">Daily</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">For diabetes</p>
          <div className="mt-4">
            <p className="text-sm"><span className="font-medium">Dosage:</span> 500mg</p>
            <p className="text-sm"><span className="font-medium">Time:</span> With breakfast and dinner</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button className="text-sm text-primary hover:underline">View Details</button>
            <span className="text-yellow-500 text-sm">Due at 6:00 PM</span>
          </div>
        </div>

        <div className="medication-card hover-lift card-padding">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium">Simvastatin</h3>
            <span className="bg-blue-500/20 text-blue-500 text-xs px-2 py-1 rounded">Daily</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">For cholesterol</p>
          <div className="mt-4">
            <p className="text-sm"><span className="font-medium">Dosage:</span> 20mg</p>
            <p className="text-sm"><span className="font-medium">Time:</span> 8:00 PM</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button className="text-sm text-primary hover:underline">View Details</button>
            <span className="text-yellow-500 text-sm">Due today</span>
          </div>
        </div>

        <div className="medication-card hover-lift card-padding">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium">Vitamin D</h3>
            <span className="bg-blue-500/20 text-blue-500 text-xs px-2 py-1 rounded">Daily</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">Supplement</p>
          <div className="mt-4">
            <p className="text-sm"><span className="font-medium">Dosage:</span> 1000 IU</p>
            <p className="text-sm"><span className="font-medium">Time:</span> Morning with food</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button className="text-sm text-primary hover:underline">View Details</button>
            <span className="text-green-500 text-sm">Taken today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medication;
