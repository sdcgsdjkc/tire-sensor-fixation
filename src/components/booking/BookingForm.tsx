
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CalendarIcon, Check } from 'lucide-react';
import { format, addDays, isBefore, startOfDay, addMinutes, setHours, setMinutes } from 'date-fns';
import { ru } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

// Generate time slots from 9:00 to 19:00 with 30 min intervals
const generateTimeSlots = () => {
  const slots = [];
  const startTime = setHours(setMinutes(new Date(), 0), 9); // 9:00 AM
  const endTime = setHours(setMinutes(new Date(), 0), 19); // 7:00 PM
  
  let currentTime = startTime;
  while (isBefore(currentTime, endTime)) {
    slots.push(format(currentTime, 'HH:mm'));
    currentTime = addMinutes(currentTime, 30);
  }
  
  return slots;
};

const timeSlots = generateTimeSlots();

// Sample car makes and models - in a production app this would come from an API
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

export default function BookingForm() {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState('');
  const [make, setMake] = useState(searchParams.get('make') || '');
  const [model, setModel] = useState(searchParams.get('model') || '');
  const [year, setYear] = useState(searchParams.get('year') || '');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleMakeChange = (value: string) => {
    setMake(value);
    setModel('');
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !phone || !date || !time || !make || !model || !year) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }
    
    // Form submission logic would go here
    // For demo purposes, we'll just show a success message
    setSubmitted(true);
    toast.success("Ваша запись успешно создана!");
    
    // Reset form after successful submission
    setTimeout(() => {
      setName('');
      setPhone('');
      setEmail('');
      setDate(undefined);
      setTime('');
      setComments('');
      setSubmitted(false);
    }, 5000);
  };
  
  const today = startOfDay(new Date());

  return (
    <section className="py-10">
      <div className="container">
        <SectionHeading
          title="Запись на сервис"
          subtitle="Выберите удобное время для прошивки датчиков давления в шинах вашего автомобиля"
        />
        
        {submitted ? (
          <div className="max-w-2xl mx-auto glass-effect p-8 rounded-2xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100 text-green-600">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-medium mb-3">Запись подтверждена</h3>
            <p className="text-muted-foreground mb-6">
              Спасибо за вашу запись! Мы связемся с вами для подтверждения выбранного времени.
            </p>
            <p className="font-medium">Детали записи:</p>
            <p className="text-muted-foreground">
              {make} {model} ({year})<br />
              {date && format(date, 'dd MMMM yyyy', { locale: ru })} в {time}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto glass-effect p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите ваше имя"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Дата *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'dd.MM.yyyy') : <span>Выберите дату</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => isBefore(date, today)}
                        initialFocus
                        locale={ru}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time">Время *</Label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger id="time" className="w-full">
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-4">Информация об автомобиле</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="make">Марка *</Label>
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
                  <Label htmlFor="model">Модель *</Label>
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
                  <Label htmlFor="year">Год выпуска *</Label>
                  <Select value={year} onValueChange={setYear}>
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
            </div>
            
            <div className="space-y-2 mb-8">
              <Label htmlFor="comments">Комментарии</Label>
              <Textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Дополнительная информация"
                className="min-h-[100px]"
              />
            </div>
            
            <div className="text-center">
              <Button type="submit" size="lg">
                Записаться на сервис
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
