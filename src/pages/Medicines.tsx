
import React, { useState } from 'react';
import Header from '@/components/Header';
import MedicineSearch from '@/components/MedicineSearch';
import MedicineList from '@/components/MedicineList';
import CategoryFilter from '@/components/CategoryFilter';

const Medicines = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-medical-bg">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-medical-text mb-2">
            Find Your Medicines
          </h1>
          <p className="text-medical-text-secondary">
            Search and discover medicines with detailed information
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <MedicineSearch 
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>
            
            <MedicineList 
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Medicines;
