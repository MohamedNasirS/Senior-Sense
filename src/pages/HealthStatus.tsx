
import React from "react";
import { usePreferences } from "@/context/PreferencesContext";

const HealthStatus = () => {
  const { preferences } = usePreferences();

  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Health Status</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 card-spacing">
        <div className="health-status-card hover-lift card-padding">
          <h3 className="text-lg font-medium mb-2">Heart Rate</h3>
          <p className="text-muted-foreground">Your heart rate is within normal range.</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-2xl font-semibold">72 BPM</span>
            <span className="text-green-500 text-sm">Normal</span>
          </div>
        </div>

        <div className="health-status-card hover-lift card-padding">
          <h3 className="text-lg font-medium mb-2">Blood Pressure</h3>
          <p className="text-muted-foreground">Your blood pressure is slightly elevated.</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-2xl font-semibold">135/85</span>
            <span className="text-yellow-500 text-sm">Elevated</span>
          </div>
        </div>

        <div className="health-status-card hover-lift card-padding">
          <h3 className="text-lg font-medium mb-2">Blood Glucose</h3>
          <p className="text-muted-foreground">Your glucose levels are normal.</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-2xl font-semibold">98 mg/dL</span>
            <span className="text-green-500 text-sm">Normal</span>
          </div>
        </div>

        <div className="health-status-card hover-lift card-padding">
          <h3 className="text-lg font-medium mb-2">Oxygen Saturation</h3>
          <p className="text-muted-foreground">Your oxygen levels are excellent.</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-2xl font-semibold">98%</span>
            <span className="text-green-500 text-sm">Excellent</span>
          </div>
        </div>

        <div className="health-status-card hover-lift card-padding">
          <h3 className="text-lg font-medium mb-2">Body Temperature</h3>
          <p className="text-muted-foreground">Your temperature is normal.</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-2xl font-semibold">98.6°F</span>
            <span className="text-green-500 text-sm">Normal</span>
          </div>
        </div>

        <div className="health-status-card hover-lift card-padding">
          <h3 className="text-lg font-medium mb-2">Weight</h3>
          <p className="text-muted-foreground">Your weight is stable.</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-2xl font-semibold">165 lbs</span>
            <span className="text-blue-500 text-sm">Stable</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthStatus;
