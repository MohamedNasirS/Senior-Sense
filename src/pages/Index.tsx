
import React from "react";
import { ArrowRight, BarChart2, LineChart, PieChart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import CustomButton from "@/components/ui/CustomButton";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 flex items-center justify-center">
        {/* Background gradient */}
        <div 
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 -z-10" 
          aria-hidden="true"
        ></div>
        
        {/* Floating elements */}
        <div className="absolute top-[15%] left-[10%] w-24 h-24 rounded-full bg-blue-500/5 animate-float" style={{ animationDelay: '0.5s' }} aria-hidden="true"></div>
        <div className="absolute top-[60%] left-[20%] w-16 h-16 rounded-full bg-indigo-500/5 animate-float" style={{ animationDelay: '1.2s' }} aria-hidden="true"></div>
        <div className="absolute top-[25%] right-[15%] w-20 h-20 rounded-full bg-indigo-500/5 animate-float" style={{ animationDelay: '0.8s' }} aria-hidden="true"></div>
        <div className="absolute bottom-[20%] right-[10%] w-12 h-12 rounded-full bg-blue-500/5 animate-float" style={{ animationDelay: '1.5s' }} aria-hidden="true"></div>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
            Intuitive Data Visualization
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-balance animate-fade-in" style={{ animationDelay: '100ms' }}>
            Turn Your Data Into <span className="text-primary">Beautiful Insights</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 text-balance animate-fade-in" style={{ animationDelay: '200ms' }}>
            An elegant dashboard experience designed with simplicity and functionality at its core. 
            Discover the beauty of your data through stunning visualizations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link to="/dashboard">
              <CustomButton size="lg" icon={<BarChart2 size={20} />}>
                Explore Dashboard
              </CustomButton>
            </Link>
            
            <CustomButton 
              variant="outline" 
              size="lg"
              icon={<Zap size={20} />}
            >
              Learn More
            </CustomButton>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visualize Data Your Way</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a dashboard that adapts to your needs, with powerful yet simple visualization tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl hover-lift animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="bg-blue-100 text-primary p-3 inline-block rounded-lg mb-4">
                <BarChart2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Charts</h3>
              <p className="text-gray-600 mb-4">
                Create stunning, interactive visualizations that bring your data to life with smooth animations.
              </p>
              <Link to="/dashboard" className="inline-flex items-center text-primary font-medium group">
                <span>View examples</span>
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover-lift animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="bg-blue-100 text-primary p-3 inline-block rounded-lg mb-4">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-time Updates</h3>
              <p className="text-gray-600 mb-4">
                Watch your data refresh in real-time with elegant transitions and animations.
              </p>
              <Link to="/dashboard" className="inline-flex items-center text-primary font-medium group">
                <span>Explore features</span>
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover-lift animate-fade-in" style={{ animationDelay: '700ms' }}>
              <div className="bg-blue-100 text-primary p-3 inline-block rounded-lg mb-4">
                <PieChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
              <p className="text-gray-600 mb-4">
                Enjoy a seamless experience across all devices, from mobile to desktop.
              </p>
              <Link to="/dashboard" className="inline-flex items-center text-primary font-medium group">
                <span>See responsiveness</span>
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Data?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start visualizing your data with our intuitive dashboard. Designed for clarity and insight.
          </p>
          <Link to="/dashboard">
            <CustomButton size="lg">
              Get Started Now
            </CustomButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
