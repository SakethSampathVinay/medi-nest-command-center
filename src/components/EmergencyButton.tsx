
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bell } from 'lucide-react';

const EmergencyButton = () => {
  const handleEmergencyClick = () => {
    // In a real app, this would trigger emergency services
    console.log('Emergency button clicked!');
    alert('🚨 Emergency services contacted! Help is on the way.');
  };

  return (
    <Button
      onClick={handleEmergencyClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full emergency-gradient shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-soft"
      size="icon"
    >
      <Bell className="w-8 h-8 text-white" />
      <span className="sr-only">Emergency</span>
    </Button>
  );
};

export default EmergencyButton;
