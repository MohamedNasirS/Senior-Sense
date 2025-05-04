
import React from "react";
import { ArrowRight, BarChart2, LineChart, PieChart, Zap, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "@/components/ui/CustomButton";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { usePreferences } from "@/context/PreferencesContext";

const Index = () => {
  const navigate = useNavigate();
  const { preferences } = usePreferences();
  
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Header with Theme Toggle */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">SeniorSense</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/login")}>Login</Button>
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 flex items-center justify-center min-h-[90vh]">
        {/* Background gradient */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 -z-10" aria-hidden="true"></div>
        
        {/* Floating elements */}
        <div className="absolute top-[15%] left-[10%] w-24 h-24 rounded-full bg-primary/5 animate-float" style={{
          animationDelay: '0.5s'
        }} aria-hidden="true"></div>
        <div className="absolute top-[60%] left-[20%] w-16 h-16 rounded-full bg-primary/5 animate-float" style={{
          animationDelay: '1.2s'
        }} aria-hidden="true"></div>
        <div className="absolute top-[25%] right-[15%] w-20 h-20 rounded-full bg-primary/5 animate-float" style={{
          animationDelay: '0.8s'
        }} aria-hidden="true"></div>
        <div className="absolute bottom-[20%] right-[10%] w-12 h-12 rounded-full bg-primary/5 animate-float" style={{
          animationDelay: '1.5s'
        }} aria-hidden="true"></div>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
            Senior Healthcare Management
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-balance animate-fade-in" style={{
            animationDelay: '100ms'
          }}>
            Empowering Seniors with <span className="text-primary">Health Insights</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance animate-fade-in" style={{
            animationDelay: '200ms'
          }}>
            A comprehensive healthcare monitoring platform designed for seniors.
            Track health metrics, manage medications, and connect with doctors instantly.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{
            animationDelay: '300ms'
          }}>
            <Button 
              size="lg" 
              className="gap-2" 
              onClick={() => navigate("/login")}
            >
              Get Started
              <ArrowRight size={18} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2"
            >
              Learn More
              <Zap size={18} />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in" style={{
            animationDelay: '400ms'
          }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Senior Care</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A suite of tools designed specifically for senior healthcare and wellness needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              style={{ animationDelay: '500ms' }} 
              className="glass-card p-6 rounded-2xl hover-lift animate-fade-in"
            >
              <div className="bg-primary/10 text-primary p-3 inline-block rounded-lg mb-4">
                <BarChart2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Health Monitoring</h3>
              <p className="text-muted-foreground mb-4">
                Track vital signs and health metrics with easy to understand visualizations.
              </p>
              <Button variant="ghost" className="group">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover-lift animate-fade-in" style={{
              animationDelay: '600ms'
            }}>
              <div className="bg-primary/10 text-primary p-3 inline-block rounded-lg mb-4">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Medication Management</h3>
              <p className="text-muted-foreground mb-4">
                Never miss a dose with personalized medication reminders and tracking.
              </p>
              <Button variant="ghost" className="group">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover-lift animate-fade-in" style={{
              animationDelay: '700ms'
            }}>
              <div className="bg-primary/10 text-primary p-3 inline-block rounded-lg mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Doctor Connect</h3>
              <p className="text-muted-foreground mb-4">
                Connect with healthcare professionals instantly for consultations and advice.
              </p>
              <Button variant="ghost" className="group">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center animate-fade-in" style={{
          animationDelay: '800ms'
        }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join SeniorSense today and experience our comprehensive healthcare monitoring platform.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate("/login")}
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
