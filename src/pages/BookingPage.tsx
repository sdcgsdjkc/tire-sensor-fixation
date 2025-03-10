
import BookingForm from '@/components/booking/BookingForm';
import { SectionHeading } from '@/components/ui/section-heading';
import { Settings, Clock, Car } from 'lucide-react';

export default function BookingPage() {
  return (
    <>
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('/services-pattern.svg')] bg-opacity-30 bg-center"></div>
        <div 
          className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background"
          aria-hidden="true"
        ></div>
        
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Онлайн запись
            </span>
            <h1 className="font-medium mb-6">
              Запись на обслуживание датчиков давления
            </h1>
            <p className="text-xl text-muted-foreground">
              Выберите удобную дату и время для обслуживания датчиков TPMS вашего автомобиля
            </p>
          </div>
        </div>
      </section>
      
      <BookingForm />
      
      <section className="py-16 bg-secondary">
        <div className="container">
          <SectionHeading
            title="Наши преимущества"
            subtitle="Почему клиенты выбирают наш сервис по обслуживанию датчиков TPMS"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl border border-border">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <Settings size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2">Профессиональное оборудование</h3>
              <p className="text-muted-foreground">Используем только сертифицированное оборудование для программирования датчиков TPMS всех типов.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-border">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2">Быстрый сервис</h3>
              <p className="text-muted-foreground">Обслуживание занимает от 30 до 60 минут в зависимости от марки и модели автомобиля.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-border">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <Car size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2">Все марки автомобилей</h3>
              <p className="text-muted-foreground">Работаем со всеми популярными марками и моделями, включая редкие и премиальные автомобили.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
