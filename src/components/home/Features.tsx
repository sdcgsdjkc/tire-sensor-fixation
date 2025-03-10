
import { SectionHeading } from '@/components/ui/section-heading';
import { FeatureCard } from '@/components/ui/feature-card';
import { ShieldCheck, Clock, Settings, Gauge, Car, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function Features() {
  const features = [
    {
      icon: <Gauge size={24} />,
      title: 'Прошивка датчиков давления',
      description: 'Профессиональная прошивка TPMS датчиков для всех марок и моделей автомобилей. Стоимость прошивки всего 2500 тенге.',
    },
    {
      icon: <Car size={24} />,
      title: 'Клонирование датчиков',
      description: 'Создание точных копий оригинальных датчиков для экономии при замене.',
    },
    {
      icon: <Package size={24} />,
      title: 'Продажа комплектующих',
      description: 'Широкий выбор датчиков TPMS по выгодной цене. Датчик стоит 15000 тенге.',
    },
    {
      icon: <Settings size={24} />,
      title: 'Сервис в Усть-Каменогорске',
      description: 'Обслуживаем клиентов в Усть-Каменогорске и Восточно-Казахстанской области.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Быстрый сервис',
      description: 'Прошивка и программирование датчиков в течение 30-60 минут в зависимости от модели автомобиля.',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Гарантия качества',
      description: 'Предоставляем гарантию на все работы и используем только сертифицированное оборудование.',
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <SectionHeading
          title="Наши услуги"
          subtitle="Продажа, прошивка и клонирование датчиков давления в шинах TPMS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-slide-in-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/booking">Записаться на сервис</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
