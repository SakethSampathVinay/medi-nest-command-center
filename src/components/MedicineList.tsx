
import React, { useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tablet, Star, Clock, AlertTriangle, ShoppingCart, Info } from 'lucide-react';

interface MedicineListProps {
  searchQuery: string;
  selectedCategory: string;
}

// Mock medicine data
const medicines = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    genericName: 'Acetaminophen',
    category: 'pain-relief',
    price: 12.99,
    rating: 4.5,
    reviews: 234,
    inStock: true,
    prescription: false,
    description: 'Effective pain reliever and fever reducer',
    manufacturer: 'HealthCorp',
    dosage: '500mg tablets',
    pack: '20 tablets'
  },
  {
    id: 2,
    name: 'Amoxicillin 250mg',
    genericName: 'Amoxicillin',
    category: 'antibiotics',
    price: 18.50,
    rating: 4.3,
    reviews: 156,
    inStock: true,
    prescription: true,
    description: 'Broad-spectrum antibiotic for bacterial infections',
    manufacturer: 'PharmaCare',
    dosage: '250mg capsules',
    pack: '21 capsules'
  },
  {
    id: 3,
    name: 'Ibuprofen 400mg',
    genericName: 'Ibuprofen',
    category: 'pain-relief',
    price: 15.75,
    rating: 4.6,
    reviews: 189,
    inStock: false,
    prescription: false,
    description: 'Anti-inflammatory pain reliever',
    manufacturer: 'MediTech',
    dosage: '400mg tablets',
    pack: '30 tablets'
  },
  {
    id: 4,
    name: 'Cetirizine 10mg',
    genericName: 'Cetirizine HCl',
    category: 'fever',
    price: 8.99,
    rating: 4.4,
    reviews: 98,
    inStock: true,
    prescription: false,
    description: 'Antihistamine for allergy relief',
    manufacturer: 'AllergyFree',
    dosage: '10mg tablets',
    pack: '14 tablets'
  },
  {
    id: 5,
    name: 'Omeprazole 20mg',
    genericName: 'Omeprazole',
    category: 'chronic',
    price: 22.30,
    rating: 4.7,
    reviews: 267,
    inStock: true,
    prescription: true,
    description: 'Proton pump inhibitor for acid reflux',
    manufacturer: 'GastroMed',
    dosage: '20mg capsules',
    pack: '28 capsules'
  },
  {
    id: 6,
    name: 'Eye Drops Lubricant',
    genericName: 'Artificial Tears',
    category: 'eye-care',
    price: 11.40,
    rating: 4.2,
    reviews: 87,
    inStock: true,
    prescription: false,
    description: 'Moisturizing eye drops for dry eyes',
    manufacturer: 'VisionCare',
    dosage: '0.5% solution',
    pack: '10ml bottle'
  }
];

const MedicineList = ({ searchQuery, selectedCategory }: MedicineListProps) => {
  const filteredMedicines = useMemo(() => {
    return medicines.filter(medicine => {
      const matchesSearch = searchQuery === '' || 
        medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        medicine.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        medicine.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || medicine.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-medical-text-secondary">
          Showing {filteredMedicines.length} medicines
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMedicines.map((medicine) => (
          <Card key={medicine.id} className="bg-white/80 backdrop-blur-md border-medical-border shadow-soft hover:shadow-medical transition-all duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Tablet className="w-6 h-6 text-medical-blue" />
                  <div className="flex flex-col">
                    <CardTitle className="text-lg text-medical-text line-clamp-1">
                      {medicine.name}
                    </CardTitle>
                    <p className="text-sm text-medical-text-secondary">
                      {medicine.genericName}
                    </p>
                  </div>
                </div>
                {medicine.prescription && (
                  <Badge variant="outline" className="text-xs border-medical-orange text-medical-orange">
                    Rx
                  </Badge>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-medical-text-secondary line-clamp-2">
                {medicine.description}
              </p>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{medicine.rating}</span>
                  <span className="text-medical-text-secondary">({medicine.reviews})</span>
                </div>
                
                <div className={`flex items-center gap-1 ${medicine.inStock ? 'text-medical-green' : 'text-medical-error'}`}>
                  <div className={`w-2 h-2 rounded-full ${medicine.inStock ? 'bg-medical-green' : 'bg-medical-error'}`} />
                  <span className="text-xs font-medium">
                    {medicine.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-medical-text-secondary">Dosage:</span>
                  <span className="font-medium">{medicine.dosage}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-medical-text-secondary">Pack:</span>
                  <span className="font-medium">{medicine.pack}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-medical-text-secondary">Manufacturer:</span>
                  <span className="font-medium">{medicine.manufacturer}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-medical-border">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-medical-blue">
                    ${medicine.price}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
                    <Info className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-medical-blue hover:bg-medical-blue/90"
                    disabled={!medicine.inStock}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
              </div>
              
              {medicine.prescription && (
                <div className="flex items-center gap-2 p-2 bg-medical-orange/10 rounded-lg">
                  <AlertTriangle className="w-4 h-4 text-medical-orange" />
                  <span className="text-xs text-medical-orange font-medium">
                    Prescription required
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredMedicines.length === 0 && (
        <div className="text-center py-12">
          <Tablet className="w-12 h-12 text-medical-text-secondary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-medical-text mb-2">
            No medicines found
          </h3>
          <p className="text-medical-text-secondary">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default MedicineList;
