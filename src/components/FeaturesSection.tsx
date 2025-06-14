
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Search, Hospital, Bell, Book, Calendar } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Smart Medicine Finder',
      description: 'Search through thousands of medicines with AI-powered recommendations and alternatives.',
      icon: Heart,
      color: 'text-medical-blue',
      bgColor: 'bg-medical-blue/10',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      cta: 'Find Medicines'
    },
    {
      title: 'AI Health Assistant',
      description: 'Upload symptoms or photos for instant AI analysis and personalized health recommendations.',
      icon: Search,
      color: 'text-medical-green',
      bgColor: 'bg-medical-green/10',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      cta: 'Try AI Assistant'
    },
    {
      title: 'Hospital Network',
      description: 'Find nearby hospitals, clinics, and specialists with real-time availability and ratings.',
      icon: Hospital,
      color: 'text-medical-orange',
      bgColor: 'bg-medical-orange/10',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      cta: 'Find Hospitals'
    },
    {
      title: 'Emergency Response',
      description: '24/7 emergency services with one-tap ambulance dispatch and critical care guidance.',
      icon: Bell,
      color: 'text-medical-error',
      bgColor: 'bg-medical-error/10',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop',
      cta: 'Emergency Help'
    },
    {
      title: 'Health Education',
      description: 'Learn from expert-curated health content in an engaging, social media-style format.',
      icon: Book,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      cta: 'Start Learning'
    },
    {
      title: 'Smart Appointments',
      description: 'Book appointments with doctors, manage your health calendar, and get automated reminders.',
      icon: Calendar,
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
      cta: 'Book Now'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4 text-medical-text">
            Complete Healthcare <span className="text-medical-blue">Ecosystem</span>
          </h2>
          <p className="text-xl text-medical-text-secondary max-w-3xl mx-auto">
            Everything you need to manage your health, from finding medicines to emergency care, 
            all powered by cutting-edge AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-poppins text-medical-text">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-medical-text-secondary mb-4 line-clamp-3">
                  {feature.description}
                </p>
                <Button 
                  variant="outline" 
                  className={`w-full border-2 ${feature.color} hover:bg-opacity-10 transition-all duration-200`}
                >
                  {feature.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
