
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import CarSelection from '@/components/home/CarSelection';
import Testimonials from '@/components/home/Testimonials';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <Hero />
      <Features />
      <CarSelection />
      <Testimonials />
      
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Наше местоположение
            </span>
            <h2 className="text-3xl font-medium mb-4">Сервисный центр в Усть-Каменогорске</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наш сервисный центр расположен в удобном месте с хорошей транспортной доступностью
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden border border-border h-[400px] shadow-sm">
                {/* Здесь будет карта Google или Yandex */}
                <img 
                  src="https://fakeimg.pl/900x400?text=Карта&font=noto" 
                  alt="Карта местоположения сервиса"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="bg-secondary p-8 rounded-xl border border-border">
              <h3 className="text-xl font-medium mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={20} className="mt-1 mr-3 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">Усть-Каменогорск, Восточно-Казахстанская область</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={20} className="mt-1 mr-3 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <a href="tel:+77777777777" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (777) 777-77-77
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="mt-1 mr-3 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@tpms-service.kz" className="text-muted-foreground hover:text-primary transition-colors">
                      info@tpms-service.kz
                    </a>
                  </div>
                </div>
                
                <Button asChild className="w-full mt-6">
                  <Link to="/contact">
                    Связаться с нами
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
