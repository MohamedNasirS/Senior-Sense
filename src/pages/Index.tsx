
import React from "react";
import { ArrowRight, BarChart2, LineChart, PieChart, Zap, Shield, CheckCircle, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "@/components/ui/CustomButton";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { usePreferences } from "@/context/PreferencesContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Index = () => {
  const navigate = useNavigate();
  const { preferences } = usePreferences();
  const isMobile = useIsMobile();
  
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20 -z-10" aria-hidden="true"></div>
        
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
          <div 
            className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in"
            style={{ animationDelay: '0ms' }}
          >
            Senior Healthcare Management
          </div>
          
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-balance animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            Empowering Seniors with <span className="text-primary">Health Insights</span>
          </h1>
          
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            A comprehensive healthcare monitoring platform designed specifically for seniors.
            Track health metrics, manage medications, and connect with doctors instantly.
          </p>
          
          <div 
            className="flex flex-wrap justify-center gap-4 animate-fade-in"
            style={{ animationDelay: '300ms' }}
          >
            <Button 
              size="lg" 
              className="gap-2 transition-transform hover:scale-105" 
              onClick={() => navigate("/login")}
            >
              Get Started
              <ArrowRight size={18} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 transition-transform hover:scale-105"
            >
              Learn More
              <Zap size={18} />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section with improved cards */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-16 animate-fade-in"
            style={{ animationDelay: '400ms' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Senior Care</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A suite of tools designed specifically for senior healthcare and wellness needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <BarChart2 size={24} />,
                title: "Health Monitoring",
                description: "Track vital signs and health metrics with easy to understand visualizations and personalized insights.",
                delay: 500
              },
              {
                icon: <LineChart size={24} />,
                title: "Medication Management",
                description: "Never miss a dose with personalized medication reminders and detailed tracking history.",
                delay: 600
              },
              {
                icon: <Shield size={24} />,
                title: "Doctor Connect",
                description: "Connect with healthcare professionals instantly for consultations, advice, and follow-ups.",
                delay: 700
              },
              {
                icon: <Heart size={24} />,
                title: "Wellness Tracking",
                description: "Monitor daily activity, sleep patterns, and nutrition to maintain a healthy lifestyle.",
                delay: 800
              },
              {
                icon: <PieChart size={24} />,
                title: "Financial Planning",
                description: "Manage healthcare expenses and insurance with helpful budgeting tools and reminders.",
                delay: 900
              },
              {
                icon: <CheckCircle size={24} />,
                title: "Appointment Scheduling",
                description: "Keep track of doctor visits and medical appointments with calendar integration.",
                delay: 1000
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-2xl hover-lift border border-border shadow-sm transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className="bg-primary/10 text-primary p-3 inline-block rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <Button variant="ghost" className="group">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how SeniorSense is making a difference in seniors' lives every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "SeniorSense has transformed how I manage my health. The medication reminders have been a lifesaver - literally!",
                name: "Margaret, 72",
                delay: 700
              },
              {
                quote: "Being able to track my father's health remotely gives our family peace of mind. The interface is so easy to use.",
                name: "Robert, 45",
                delay: 800
              },
              {
                quote: "The doctor connect feature has saved me so many unnecessary trips to the clinic. Such a valuable service!",
                name: "Thomas, 68",
                delay: 900
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className={cn(
                  "glass-card p-6 rounded-2xl border shadow-sm animate-fade-in",
                  "bg-card"
                )}
                style={{ animationDelay: `${testimonial.delay}ms` }}
              >
                <div className="mb-4 text-primary">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11L8 13H5V10L9 6H11V11H10ZM19 11L17 13H14V10L18 6H20V11H19Z" 
                      fill="currentColor" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <p className="mb-6 italic">{testimonial.quote}</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section with improved design */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center animate-fade-in" style={{
          animationDelay: '800ms'
        }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join SeniorSense today and experience our comprehensive healthcare monitoring platform designed with seniors in mind.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              className="transition-transform hover:scale-105"
              onClick={() => navigate("/login")}
            >
              Get Started Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="transition-transform hover:scale-105"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">SeniorSense</h3>
              <p className="text-muted-foreground mb-4">
                Empowering seniors with the tools to manage their health and wellbeing.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="p-0 h-auto">Documentation</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Guides</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Support</Button></li>
                <li><Button variant="link" className="p-0 h-auto">API</Button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="p-0 h-auto">About Us</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Blog</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Careers</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Press</Button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="p-0 h-auto">Privacy Policy</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Terms of Service</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Cookie Policy</Button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} SeniorSense. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
