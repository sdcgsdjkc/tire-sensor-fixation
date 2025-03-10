
import { SectionHeading } from '@/components/ui/section-heading';
import { FeatureCard } from '@/components/ui/feature-card';
import { ShieldCheck, Clock, Wrench, Gauge } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Gauge size={24} />,
      title: 'Прошивка датчиков давления',
      description: 'Профессиональная прошивка TPMS датчиков для всех марок и моделей автомобилей с гарантией качества.',
    },
    {
      icon: <Wrench size={24} />,
      title: 'Замена датчиков',
      description: 'Установка и замена датчиков давления в шинах с полной калибровкой и настройкой.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Быстрый сервис',
      description: 'Прошивка и программирование датчиков в течение 30-60 минут в зависимости от модели автомобиля.',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Гарантированный результат',
      description: 'Предоставляем гарантию на все работы и используем только сертифицированное оборудование.',
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <SectionHeading
          title="Наши услуги"
          subtitle="Мы предлагаем полный спектр услуг по прошивке и программированию датчиков давления в шинах"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
}
