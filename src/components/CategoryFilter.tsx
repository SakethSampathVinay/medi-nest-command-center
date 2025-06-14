
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tablet, Heart, Shield, Thermometer, Bandage, Brain, Eye, Stethoscope } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Medicines', icon: Tablet, count: 1250 },
  { id: 'pain-relief', name: 'Pain Relief', icon: Heart, count: 156 },
  { id: 'antibiotics', name: 'Antibiotics', icon: Shield, count: 89 },
  { id: 'fever', name: 'Fever & Cold', icon: Thermometer, count: 124 },
  { id: 'first-aid', name: 'First Aid', icon: Bandage, count: 67 },
  { id: 'mental-health', name: 'Mental Health', icon: Brain, count: 45 },
  { id: 'eye-care', name: 'Eye Care', icon: Eye, count: 32 },
  { id: 'chronic', name: 'Chronic Diseases', icon: Stethoscope, count: 78 },
];

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <Card className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft">
      <CardHeader>
        <CardTitle className="text-medical-text flex items-center gap-2">
          <Tablet className="w-5 h-5 text-medical-blue" />
          Categories
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;
          
          return (
            <Button
              key={category.id}
              variant={isSelected ? "default" : "ghost"}
              className={`w-full justify-between p-3 h-auto ${
                isSelected 
                  ? 'bg-medical-blue text-white' 
                  : 'hover:bg-medical-blue/10 text-medical-text'
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </div>
              <Badge 
                variant="secondary" 
                className={`text-xs ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-medical-blue/10 text-medical-blue'
                }`}
              >
                {category.count}
              </Badge>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CategoryFilter;
