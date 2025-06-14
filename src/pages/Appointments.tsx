
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, MapPin, User, Plus, Video } from 'lucide-react';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: '2024-01-20',
      time: '10:30 AM',
      type: 'In-person',
      location: 'Medical Center, Room 205',
      status: 'confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Mike Wilson',
      specialty: 'Dermatologist',
      date: '2024-01-25',
      time: '2:15 PM',
      type: 'Video call',
      location: 'Online consultation',
      status: 'pending'
    }
  ];

  const pastAppointments = [
    {
      id: 3,
      doctor: 'Dr. Emily Chen',
      specialty: 'General Practice',
      date: '2024-01-10',
      time: '9:00 AM',
      type: 'In-person',
      status: 'completed'
    }
  ];

  const availableSlots = [
    '9:00 AM', '10:30 AM', '2:15 PM', '3:45 PM', '5:00 PM'
  ];

  return (
    <div className="min-h-screen bg-medical-bg">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-medical-text mb-2">
              My Appointments
            </h1>
            <p className="text-medical-text-secondary">
              Manage your healthcare appointments and consultations
            </p>
          </div>
          <Button className="medical-gradient text-white">
            <Plus className="w-4 h-4 mr-2" />
            Book Appointment
          </Button>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="book">Book New</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <Card key={appointment.id} className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-medical-text">
                            {appointment.doctor}
                          </h3>
                          <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                            {appointment.status}
                          </Badge>
                        </div>
                        <p className="text-medical-text-secondary mb-3">{appointment.specialty}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="w-4 h-4 text-medical-blue" />
                            <span>{appointment.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-medical-green" />
                            <span>{appointment.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {appointment.type === 'Video call' ? (
                              <Video className="w-4 h-4 text-medical-orange" />
                            ) : (
                              <MapPin className="w-4 h-4 text-medical-orange" />
                            )}
                            <span>{appointment.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Reschedule</Button>
                        <Button variant="outline" size="sm">Cancel</Button>
                        {appointment.type === 'Video call' && (
                          <Button size="sm" className="bg-medical-green hover:bg-medical-green/90">
                            Join Call
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="book">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
                <CardHeader>
                  <CardTitle>Select Date</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
                  <CardHeader>
                    <CardTitle>Available Times</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {availableSlots.map((slot) => (
                        <Button key={slot} variant="outline" className="justify-start">
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
                  <CardHeader>
                    <CardTitle>Select Doctor</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', rating: 4.9 },
                      { name: 'Dr. Mike Wilson', specialty: 'Dermatologist', rating: 4.8 },
                      { name: 'Dr. Emily Chen', specialty: 'General Practice', rating: 4.7 }
                    ].map((doctor) => (
                      <div key={doctor.name} className="flex items-center justify-between p-3 border border-medical-border rounded-lg hover:bg-medical-blue/5 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-medical-text">{doctor.name}</h4>
                            <p className="text-sm text-medical-text-secondary">{doctor.specialty}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">★ {doctor.rating}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="space-y-4">
              {pastAppointments.map((appointment) => (
                <Card key={appointment.id} className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-medical-text">
                            {appointment.doctor}
                          </h3>
                          <Badge variant="secondary">Completed</Badge>
                        </div>
                        <p className="text-medical-text-secondary mb-3">{appointment.specialty}</p>
                        
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="w-4 h-4 text-medical-blue" />
                            <span>{appointment.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-medical-green" />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View Notes</Button>
                        <Button variant="outline" size="sm">Book Again</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Appointments;
