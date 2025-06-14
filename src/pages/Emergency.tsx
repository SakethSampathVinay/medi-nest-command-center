
import React from 'react';
import Header from '@/components/Header';
import EmergencyButton from '@/components/EmergencyButton';
import CPRGuide from '@/components/CPRGuide';
import EmergencyContacts from '@/components/EmergencyContacts';
import { AlertTriangle, Phone } from 'lucide-react';

const Emergency = () => {
  return (
    <div className="min-h-screen bg-medical-bg">
      <Header />
      <main className="container mx-auto px-4 py-6">
        {/* Emergency Alert Banner */}
        <div className="bg-gradient-to-r from-medical-error to-medical-orange text-white rounded-xl p-6 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-8 h-8" />
            <h1 className="text-3xl font-bold font-poppins">Emergency Help</h1>
          </div>
          <p className="text-lg opacity-90">
            Quick access to life-saving information and emergency contacts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CPR Video Guide */}
          <div className="lg:col-span-1">
            <CPRGuide />
          </div>

          {/* Emergency Contacts */}
          <div className="lg:col-span-1">
            <EmergencyContacts />
          </div>
        </div>

        {/* Quick Call Emergency Button */}
        <div className="mt-8 text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-xl border border-medical-border shadow-soft p-6">
            <Phone className="w-12 h-12 text-medical-error mx-auto mb-4" />
            <h3 className="text-xl font-bold text-medical-text mb-2">
              Need Immediate Help?
            </h3>
            <p className="text-medical-text-secondary mb-4">
              If this is a life-threatening emergency, call emergency services immediately
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:911"
                className="bg-medical-error hover:bg-medical-error/90 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Call 911
              </a>
              <a
                href="tel:+1-800-222-1222"
                className="bg-medical-blue hover:bg-medical-blue/90 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Poison Control
              </a>
            </div>
          </div>
        </div>
      </main>
      <EmergencyButton />
    </div>
  );
};

export default Emergency;
