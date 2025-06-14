
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, Hospital } from 'lucide-react';

const EmergencyContacts = () => {
  const emergencyServices = [
    {
      name: "Emergency Services",
      number: "911",
      description: "Fire, Police, Medical Emergency",
      color: "bg-medical-error",
      available: "24/7"
    },
    {
      name: "Poison Control",
      number: "1-800-222-1222",
      description: "Poison emergencies and information",
      color: "bg-medical-orange",
      available: "24/7"
    },
    {
      name: "Mental Health Crisis",
      number: "988",
      description: "Suicide & Crisis Lifeline",
      color: "bg-medical-blue",
      available: "24/7"
    },
    {
      name: "Non-Emergency Medical",
      number: "811",
      description: "Health advice and nurse line",
      color: "bg-medical-green",
      available: "24/7"
    }
  ];

  const nearbyHospitals = [
    {
      name: "General Hospital",
      address: "123 Medical Center Dr",
      distance: "0.8 miles",
      phone: "(555) 123-4567",
      emergency: true
    },
    {
      name: "City Medical Center",
      address: "456 Health Ave",
      distance: "1.2 miles",
      phone: "(555) 234-5678",
      emergency: true
    },
    {
      name: "Community Clinic",
      address: "789 Care St",
      distance: "2.1 miles",
      phone: "(555) 345-6789",
      emergency: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Emergency Services */}
      <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-medical-text">
            <Phone className="w-6 h-6 text-medical-error" />
            Emergency Services
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {emergencyServices.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-medical-border hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center`}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-text">{service.name}</h4>
                    <p className="text-sm text-medical-text-secondary">{service.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-medical-green" />
                      <span className="text-xs text-medical-green font-medium">{service.available}</span>
                    </div>
                  </div>
                </div>
                <Button asChild className={`${service.color} hover:opacity-90`}>
                  <a href={`tel:${service.number}`}>
                    {service.number}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Nearby Hospitals */}
      <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-medical-text">
            <Hospital className="w-6 h-6 text-medical-blue" />
            Nearby Hospitals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {nearbyHospitals.map((hospital, index) => (
              <div key={index} className="p-4 rounded-lg border border-medical-border hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-medical-text flex items-center gap-2">
                      {hospital.name}
                      {hospital.emergency && (
                        <span className="bg-medical-error text-white text-xs px-2 py-1 rounded-full">
                          ER
                        </span>
                      )}
                    </h4>
                    <div className="flex items-center gap-1 text-sm text-medical-text-secondary mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{hospital.address}</span>
                      <span className="mx-2">•</span>
                      <span className="text-medical-blue font-medium">{hospital.distance}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`tel:${hospital.phone}`}>
                      <Phone className="w-3 h-3 mr-1" />
                      Call
                    </a>
                  </Button>
                  <Button variant="outline" size="sm">
                    <MapPin className="w-3 h-3 mr-1" />
                    Directions
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card className="bg-medical-blue/10 border-medical-blue/20">
        <CardContent className="pt-6">
          <h4 className="font-semibold text-medical-blue mb-3">Emergency Tips</h4>
          <ul className="text-sm text-medical-text-secondary space-y-2">
            <li>• Stay calm and speak clearly when calling emergency services</li>
            <li>• Know your exact location and any nearby landmarks</li>
            <li>• Don't hang up until told to do so by the operator</li>
            <li>• Keep emergency contacts easily accessible on your phone</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyContacts;
