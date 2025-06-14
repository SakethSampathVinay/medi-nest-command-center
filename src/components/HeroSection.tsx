
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Heart, Hospital, Calendar, Book } from 'lucide-react';

const HeroSection = () => {
  const quickActions = [
    {
      title: 'Find Medicine',
      description: 'Search for tablets, ointments & more',
      icon: Heart,
      color: 'bg-medical-blue',
      action: () => console.log('Navigate to medicines')
    },
    {
      title: 'AI Health Scan',
      description: 'Upload symptoms for instant analysis',
      icon: Search,
      color: 'bg-medical-green',
      action: () => console.log('Navigate to AI assistant')
    },
    {
      title: 'Book Appointment',
      description: 'Schedule with doctors nearby',
      icon: Calendar,
      color: 'bg-medical-orange',
      action: () => console.log('Navigate to appointments')
    },
    {
      title: 'Learn Health',
      description: 'Watch educational health reels',
      icon: Book,
      color: 'bg-purple-500',
      action: () => console.log('Navigate to learn')
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-medical-bg to-white">
      <div className="container mx-auto text-center">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-medical-text animate-fade-in">
            Your Digital Health
            <span className="block text-medical-blue">Command Center</span>
          </h1>
          <p className="text-xl text-medical-text-secondary mb-8 max-w-2xl mx-auto">
            Where care meets convenience. Find medicines, get AI-powered health assistance, 
            locate hospitals, and manage your health - all in one place.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <Input
              placeholder="Search for medicines, symptoms, or health topics..."
              className="h-14 pl-12 pr-4 text-lg rounded-2xl border-2 border-medical-border focus:border-medical-blue bg-white shadow-soft"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-medical-text-secondary w-5 h-5" />
            <Button className="absolute right-2 top-2 h-10 px-6 medical-gradient text-white rounded-xl">
              Search
            </Button>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {quickActions.map((action, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-medical transition-all duration-300 hover:-translate-y-2 glass-card"
              onClick={action.action}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold font-poppins mb-2 text-medical-text">
                  {action.title}
                </h3>
                <p className="text-sm text-medical-text-secondary">
                  {action.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-blue mb-2">10K+</div>
            <div className="text-medical-text-secondary">Medicines Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-green mb-2">500+</div>
            <div className="text-medical-text-secondary">Partner Hospitals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-orange mb-2">98%</div>
            <div className="text-medical-text-secondary">User Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
