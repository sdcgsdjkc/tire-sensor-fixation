
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 -z-10 bg-[url('/hero-pattern.svg')] bg-opacity-30 bg-center"></div>
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background"
        aria-hidden="true"
      ></div>
      
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0">
            <div className="animate-slide-in-bottom">
              <span className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Профессиональный сервис TPMS
              </span>
              <h1 className="font-medium mb-6">
                Прошивка датчиков давления для вашего автомобиля
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Специализированный сервис по прошивке и программированию TPMS датчиков для всех марок и моделей автомобилей
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg">
                  <Link to="/booking">
                    Записаться на сервис
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">Узнать больше</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/30 rounded-xl blur-lg opacity-70"></div>
              <div className="relative p-1 bg-white rounded-xl shadow-lg">
                <img 
                  src="/car-sensor.webp" 
                  alt="Датчик давления в шинах" 
                  className="rounded-lg w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1577020091619-7ffe28c1ce88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY4MTQ2MjUyNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
