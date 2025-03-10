
import { useState } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample data - in a real app, this would come from an API
const carMakes = [
  'BMW', 'Mercedes-Benz', 'Audi', 'Toyota', 'Honda', 'Ford', 'Volkswagen', 'Hyundai', 'Kia', 'Nissan',
];

const carModels: Record<string, string[]> = {
  'BMW': ['1 Series', '2 Series', '3 Series', '5 Series', '7 Series', 'X1', 'X3', 'X5', 'X7'],
  'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'S-Class', 'GLA', 'GLC', 'GLE', 'GLS'],
  'Audi': ['A1', 'A3', 'A4', 'A6', 'A8', 'Q3', 'Q5', 'Q7', 'Q8'],
  'Toyota': ['Corolla', 'Camry', 'RAV4', 'Highlander', 'Land Cruiser', 'Prius', 'C-HR', 'Yaris'],
  'Honda': ['Civic', 'Accord', 'CR-V', 'HR-V', 'Pilot', 'Jazz', 'Insight'],
  'Ford': ['Focus', 'Fiesta', 'Mondeo', 'Kuga', 'Puma', 'Mustang', 'Explorer'],
  'Volkswagen': ['Golf', 'Polo', 'Passat', 'Tiguan', 'Touareg', 'ID.4', 'ID.3', 'T-Roc'],
  'Hyundai': ['i10', 'i20', 'i30', 'Tucson', 'Santa Fe', 'Kona', 'Ioniq'],
  'Kia': ['Picanto', 'Rio', 'Ceed', 'Sportage', 'Sorento', 'Niro', 'Stinger'],
  'Nissan': ['Micra', 'Juke', 'Qashqai', 'X-Trail', 'Leaf', 'Navara', 'GT-R'],
};

const years = Array.from({ length: 2024 - 2000 + 1 }, (_, i) => (2024 - i).toString());

export default function CarSelection() {
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [year, setYear] = useState<string>('');
  
  const handleMakeChange = (value: string) => {
    setMake(value);
    setModel('');
  };
  
  const isFormComplete = make && model && year;

  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading
          title="Выберите ваш автомобиль"
          subtitle="Укажите марку, модель и год выпуска вашего автомобиля для точной информации о датчиках TPMS"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-effect p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label htmlFor="make" className="text-sm font-medium">
                  Марка
                </label>
                <Select value={make} onValueChange={handleMakeChange}>
                  <SelectTrigger id="make" className="w-full">
                    <SelectValue placeholder="Выберите марку" />
                  </SelectTrigger>
                  <SelectContent>
                    {carMakes.map((make) => (
                      <SelectItem key={make} value={make}>
                        {make}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="model" className="text-sm font-medium">
                  Модель
                </label>
                <Select 
                  value={model} 
                  onValueChange={setModel}
                  disabled={!make}
                >
                  <SelectTrigger id="model" className="w-full">
                    <SelectValue placeholder="Выберите модель" />
                  </SelectTrigger>
                  <SelectContent>
                    {make && carModels[make]?.map((model) => (
                      <SelectItem key={model} value={model}>
                        {model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="year" className="text-sm font-medium">
                  Год выпуска
                </label>
                <Select 
                  value={year} 
                  onValueChange={setYear}
                >
                  <SelectTrigger id="year" className="w-full">
                    <SelectValue placeholder="Выберите год" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                size="lg" 
                disabled={!isFormComplete}
                asChild
              >
                {isFormComplete ? (
                  <Link to={`/booking?make=${make}&model=${model}&year=${year}`}>
                    Записаться на сервис
                  </Link>
                ) : (
                  <span>Заполните все поля</span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
