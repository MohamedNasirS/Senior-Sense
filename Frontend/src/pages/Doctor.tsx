
import React, { useState } from "react";
import { Phone, UserCircle, Clock, FileText, X, Plus, Heart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { usePreferences } from "@/context/PreferencesContext";

type Doctor = {
  id: string;
  name: string;
  specialty: string;
  available: boolean;
  lastConsultation?: string;
  imageUrl: string;
};

type MedicalRecord = {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "health" | "medication" | "test";
};

const DOCTORS: Doctor[] = [
  {
    id: "dr-1",
    name: "Dr. Sarah Johnson",
    specialty: "Family Medicine",
    available: true,
    lastConsultation: "March 15, 2025",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "dr-2",
    name: "Dr. Michael Chen",
    specialty: "Cardiology",
    available: true,
    imageUrl: "/placeholder.svg"
  },
  {
    id: "dr-3",
    name: "Dr. Robert Williams",
    specialty: "Neurology",
    available: false,
    lastConsultation: "February 2, 2025",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "dr-4",
    name: "Dr. Emily Davis",
    specialty: "Geriatric Care",
    available: true,
    imageUrl: "/placeholder.svg"
  }
];

const MEDICAL_RECORDS: MedicalRecord[] = [
  {
    id: "record-1",
    date: "March 15, 2025",
    title: "Blood Pressure Check",
    description: "135/85 mmHg - Slightly elevated",
    type: "health"
  },
  {
    id: "record-2",
    date: "March 1, 2025",
    title: "Medication Update",
    description: "Prescribed Lisinopril 10mg daily",
    type: "medication"
  },
  {
    id: "record-3",
    date: "February 15, 2025",
    title: "Cholesterol Test",
    description: "Total: 195 mg/dL, HDL: 45 mg/dL, LDL: 120 mg/dL",
    type: "test"
  },
  {
    id: "record-4",
    date: "January 28, 2025",
    title: "Annual Physical",
    description: "General health assessment - Good condition",
    type: "health"
  }
];

const Doctor: React.FC = () => {
  const { toast } = useToast();
  const { preferences } = usePreferences();
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [showCallInterface, setShowCallInterface] = useState(false);
  const [showMedicalRecords, setShowMedicalRecords] = useState(false);

  const initiateCall = (doctor: Doctor) => {
    if (!doctor.available) {
      toast({
        title: "Doctor Unavailable",
        description: `${doctor.name} is currently unavailable. Please try again later or select another doctor.`,
        variant: "destructive"
      });
      return;
    }
    
    setSelectedDoctor(doctor);
    setShowCallInterface(true);
    
    toast({
      title: "Connecting Call",
      description: `Connecting to ${doctor.name}...`,
    });
  };

  const endCall = () => {
    setShowCallInterface(false);
    setTimeout(() => setSelectedDoctor(null), 300);
    
    toast({
      title: "Call Ended",
      description: "Your call has been ended.",
    });
  };

  const viewMedicalRecords = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setShowMedicalRecords(true);
  };
  
  const getCardSize = () => {
    switch (preferences.dashboardLayout) {
      case "compact": return "card-sm";
      case "comfortable": return "card-md";
      case "spacious": return "card-lg";
      default: return "card-md";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Connect with Doctors</h1>
          <p className="text-muted-foreground">Get instant medical advice from our specialists</p>
        </div>
        <ThemeToggle />
      </div>

      {!showCallInterface && !showMedicalRecords && (
        <div className="card-container">
          {DOCTORS.map((doctor) => (
            <div key={doctor.id} className={`doctor-card ${getCardSize()} hover-lift`}>
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/10 mr-3">
                  <img src={doctor.imageUrl} alt={doctor.name} className="w-full h-full object-cover" />
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${doctor.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-medium">{doctor.name}</h3>
                  <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                </div>
              </div>
              
              {doctor.lastConsultation && (
                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <Clock size={14} className="mr-1" />
                  <span>Last consultation: {doctor.lastConsultation}</span>
                </div>
              )}
              
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={() => initiateCall(doctor)}
                  className={`flex items-center justify-center gap-1 px-3 py-2 rounded-md w-full bg-primary hover:bg-primary/90 text-white ${!doctor.available && 'opacity-50 cursor-not-allowed'}`}
                  disabled={!doctor.available}
                >
                  <Phone size={16} /> Call Now
                </button>
                <button 
                  onClick={() => viewMedicalRecords(doctor)}
                  className="flex items-center justify-center gap-1 px-3 py-2 rounded-md bg-secondary hover:bg-secondary/80"
                >
                  <FileText size={16} /> Records
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Call Interface */}
      {showCallInterface && selectedDoctor && (
        <div className="fixed inset-0 bg-background/95 z-50 flex flex-col items-center justify-center p-4 animate-scale-in">
          <div className="absolute top-4 right-4">
            <button 
              onClick={endCall}
              className="p-2 rounded-full bg-destructive text-white hover:bg-destructive/80"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-primary/10 mb-4">
            <img src={selectedDoctor.imageUrl} alt={selectedDoctor.name} className="w-full h-full object-cover" />
          </div>
          
          <h2 className="text-2xl font-bold mb-1">{selectedDoctor.name}</h2>
          <p className="text-muted-foreground mb-6">{selectedDoctor.specialty}</p>
          
          <div className="animate-pulse-subtle">
            <p className="text-lg mb-8">Call in progress...</p>
          </div>
          
          <div className="flex gap-4">
            <button className="p-4 rounded-full bg-secondary hover:bg-secondary/80">
              <UserCircle size={24} />
            </button>
            <button 
              onClick={endCall}
              className="p-4 rounded-full bg-destructive text-white hover:bg-destructive/80"
            >
              <Phone size={24} />
            </button>
            <button className="p-4 rounded-full bg-secondary hover:bg-secondary/80">
              <Heart size={24} />
            </button>
          </div>
          
          <div className="mt-8 w-full max-w-md glass-card p-4">
            <h3 className="font-medium mb-2">Doctor can see your medical data</h3>
            <p className="text-sm text-muted-foreground">All relevant health records and history have been shared for this consultation.</p>
          </div>
        </div>
      )}
      
      {/* Medical Records View */}
      {showMedicalRecords && selectedDoctor && (
        <div className="fixed inset-0 bg-background/95 z-50 flex flex-col p-4 animate-scale-in">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-primary/10 mr-3">
                <img src={selectedDoctor.imageUrl} alt={selectedDoctor.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="font-bold">{selectedDoctor.name}</h2>
                <p className="text-sm text-muted-foreground">{selectedDoctor.specialty}</p>
              </div>
            </div>
            <button 
              onClick={() => setShowMedicalRecords(false)}
              className="p-2 rounded-full hover:bg-secondary"
            >
              <X size={20} />
            </button>
          </div>
          
          <h3 className="text-xl font-bold mb-4">Medical Records</h3>
          
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4">
              {MEDICAL_RECORDS.map((record) => (
                <div key={record.id} className={`
                  glass-card p-4 
                  ${record.type === 'health' ? 'border-l-4 border-l-green-500' : 
                    record.type === 'medication' ? 'border-l-4 border-l-blue-500' : 
                    'border-l-4 border-l-yellow-500'}
                `}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{record.title}</h4>
                      <p className="text-sm text-muted-foreground">{record.description}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{record.date}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="flex items-center justify-center w-full mt-4 p-3 rounded-md border border-dashed border-border hover:bg-secondary">
              <Plus size={16} className="mr-2" /> Add New Record
            </button>
          </div>
          
          <div className="mt-4 flex gap-2">
            <button 
              onClick={() => {
                setShowMedicalRecords(false);
                initiateCall(selectedDoctor);
              }}
              className="flex items-center justify-center gap-1 px-4 py-2 rounded-md bg-primary hover:bg-primary/90 text-white flex-1"
            >
              <Phone size={16} /> Call Doctor
            </button>
            <button 
              onClick={() => setShowMedicalRecords(false)}
              className="px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctor;
