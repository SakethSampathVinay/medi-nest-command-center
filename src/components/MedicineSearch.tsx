
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from 'lucide-react';

interface MedicineSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const MedicineSearch = ({ searchQuery, onSearchChange }: MedicineSearchProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl border border-medical-border shadow-soft p-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medical-text-secondary w-5 h-5" />
          <Input
            type="text"
            placeholder="Search medicines, symptoms, or conditions..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-12 text-lg border-medical-border focus:border-medical-blue"
          />
        </div>
        <Button className="bg-medical-blue hover:bg-medical-blue/90 h-12 px-6">
          <Search className="w-5 h-5 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default MedicineSearch;
