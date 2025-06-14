
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Heart, Clock, FileText, Settings, Camera } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const medicalHistory = [
    { date: '2024-01-15', condition: 'Annual Checkup', doctor: 'Dr. Smith' },
    { date: '2023-12-08', condition: 'Flu Treatment', doctor: 'Dr. Johnson' },
    { date: '2023-10-22', condition: 'Blood Test', doctor: 'Dr. Wilson' }
  ];

  const prescriptions = [
    { name: 'Lisinopril 10mg', prescribed: '2024-01-15', refills: 2 },
    { name: 'Metformin 500mg', prescribed: '2023-11-20', refills: 0 },
  ];

  return (
    <div className="min-h-screen bg-medical-bg">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-medical-text mb-2">
            My Profile
          </h1>
          <p className="text-medical-text-secondary">
            Manage your personal information and medical records
          </p>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="medical">Medical History</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-6 h-6 text-medical-blue" />
                    Personal Information
                  </CardTitle>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="/placeholder.svg" alt="Profile" />
                      <AvatarFallback className="bg-medical-blue text-white text-xl">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <Button size="icon" className="absolute -bottom-2 -right-2 rounded-full">
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-medical-text">John Doe</h3>
                    <p className="text-medical-text-secondary">Patient ID: #12345</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" disabled={!isEditing} />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" disabled={!isEditing} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="john.doe@email.com" disabled={!isEditing} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" disabled={!isEditing} />
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" defaultValue="1990-01-01" disabled={!isEditing} />
                  </div>
                  <div>
                    <Label htmlFor="bloodType">Blood Type</Label>
                    <Input id="bloodType" defaultValue="O+" disabled={!isEditing} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="medical">
            <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-medical-error" />
                  Medical History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medicalHistory.map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-medical-border rounded-lg">
                      <div>
                        <h4 className="font-semibold text-medical-text">{record.condition}</h4>
                        <p className="text-sm text-medical-text-secondary">{record.doctor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-medical-text-secondary">{record.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prescriptions">
            <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-medical-green" />
                  Current Prescriptions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prescriptions.map((rx, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-medical-border rounded-lg">
                      <div>
                        <h4 className="font-semibold text-medical-text">{rx.name}</h4>
                        <p className="text-sm text-medical-text-secondary">Prescribed: {rx.prescribed}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-medical-text-secondary">
                          {rx.refills} refills remaining
                        </p>
                        <Button size="sm" variant="outline">Request Refill</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-6 h-6 text-medical-orange" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-medical-text">Email Notifications</h4>
                      <p className="text-sm text-medical-text-secondary">Receive appointment reminders</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-medical-text">Privacy Settings</h4>
                      <p className="text-sm text-medical-text-secondary">Manage data sharing preferences</p>
                    </div>
                    <Button variant="outline">Manage</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-medical-text">Emergency Contacts</h4>
                      <p className="text-sm text-medical-text-secondary">Add or update emergency contacts</p>
                    </div>
                    <Button variant="outline">Update</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;
