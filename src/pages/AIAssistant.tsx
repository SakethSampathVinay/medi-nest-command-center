
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Upload, Send, Brain, Camera, FileText, Sparkles } from 'lucide-react';

const AIAssistant = () => {
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  const quickSymptoms = [
    'Headache', 'Fever', 'Cough', 'Nausea', 'Back Pain', 'Fatigue'
  ];

  return (
    <div className="min-h-screen bg-medical-bg">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-medical-text mb-2">
            AI Health Assistant
          </h1>
          <p className="text-medical-text-secondary">
            Describe your symptoms for AI-powered health insights and recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Input Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-medical-blue" />
                  Describe Your Symptoms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Tell me about how you're feeling... (e.g., I have a headache and feel nauseous)"
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="min-h-32"
                />
                
                <div className="flex flex-wrap gap-2">
                  {quickSymptoms.map((symptom) => (
                    <Button
                      key={symptom}
                      variant="outline"
                      size="sm"
                      onClick={() => setSymptoms(symptoms + (symptoms ? ', ' : '') + symptom.toLowerCase())}
                    >
                      {symptom}
                    </Button>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    onClick={handleAnalyze}
                    disabled={!symptoms.trim() || isAnalyzing}
                    className="medical-gradient text-white"
                  >
                    {isAnalyzing ? (
                      <>
                        <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Analyze Symptoms
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Photo Upload */}
            <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-6 h-6 text-medical-green" />
                  Visual Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-medical-border rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-medical-text-secondary mx-auto mb-4" />
                  <p className="text-medical-text-secondary mb-2">
                    Upload a photo for visual symptom analysis
                  </p>
                  <Button variant="outline">
                    Choose File
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-medical-blue/10 border-medical-blue/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-medical-blue mb-3">How it works</h3>
                <ul className="text-sm text-medical-text-secondary space-y-2">
                  <li>• Describe your symptoms in detail</li>
                  <li>• Upload photos if relevant</li>
                  <li>• Get AI-powered insights</li>
                  <li>• Receive care recommendations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-medical-orange/10 border-medical-orange/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-medical-orange mb-3">Important Notice</h3>
                <p className="text-sm text-medical-text-secondary">
                  This AI assistant provides informational guidance only. 
                  Always consult healthcare professionals for medical decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIAssistant;
