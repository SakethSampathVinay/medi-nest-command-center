
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw, Heart } from 'lucide-react';

const CPRGuide = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const cprSteps = [
    {
      step: 1,
      title: "Check Responsiveness",
      description: "Tap shoulders and shout 'Are you okay?' Check for breathing."
    },
    {
      step: 2,
      title: "Call for Help",
      description: "Call 911 immediately. Ask someone to find an AED if available."
    },
    {
      step: 3,
      title: "Position Hands",
      description: "Place heel of one hand on center of chest, between nipples. Place other hand on top."
    },
    {
      step: 4,
      title: "Start Compressions",
      description: "Push hard and fast at least 2 inches deep. Allow complete chest recoil."
    },
    {
      step: 5,
      title: "Maintain Rhythm",
      description: "Compress at 100-120 beats per minute. Count '1 and 2 and...'"
    },
    {
      step: 6,
      title: "Continue Until Help Arrives",
      description: "Don't stop CPR until emergency medical services take over."
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-medical-text">
            <Heart className="w-6 h-6 text-medical-error" />
            CPR Video Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Video Placeholder */}
          <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-4">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-medical-error rounded-full flex items-center justify-center mx-auto mb-4">
                  {isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" />
                  )}
                </div>
                <p className="text-lg font-semibold">CPR Training Video</p>
                <p className="text-sm opacity-75">Learn life-saving CPR techniques</p>
              </div>
            </div>
            
            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:bg-white/20"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
                <span className="text-white text-sm">0:00 / 5:32</span>
              </div>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="bg-medical-error/10 border border-medical-error/20 rounded-lg p-4">
            <h4 className="font-semibold text-medical-error mb-2">Quick Reference</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Compression Rate:</strong> 100-120/min
              </div>
              <div>
                <strong>Compression Depth:</strong> 2+ inches
              </div>
              <div>
                <strong>Hand Position:</strong> Center of chest
              </div>
              <div>
                <strong>Allow:</strong> Complete recoil
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step-by-Step Guide */}
      <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
        <CardHeader>
          <CardTitle className="text-medical-text">Step-by-Step CPR Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cprSteps.map((step) => (
              <div key={step.step} className="flex gap-4 p-4 rounded-lg hover:bg-medical-blue/5 transition-colors">
                <div className="w-8 h-8 bg-medical-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h4 className="font-semibold text-medical-text mb-1">{step.title}</h4>
                  <p className="text-medical-text-secondary text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CPRGuide;
