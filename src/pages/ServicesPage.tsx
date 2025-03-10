
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Car, Tool, Gauge, Battery, AlertTriangle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Gauge size={24} />,
      title: 'Прошивка датчиков давления',
      description: 'Профессиональная прошивка и калибровка TPMS датчиков для всех марок автомобилей. Мы используем специализированное оборудование, которое обеспечивает точную настройку датчиков.',
      benefits: [
        'Быстрая прошивка и калибровка',
        'Совместимость со всеми марками автомобилей',
        'Профессиональное оборудование',
        'Гарантия на выполненные работы'
      ],
      price: 'от 1 500 ₽',
    },
    {
      icon: <Car size={24} />,
      title: 'Диагностика системы TPMS',
      description: 'Полная диагностика системы контроля давления в шинах для выявления неисправностей и проблем. Проверка работоспособности датчиков и блока управления.',
      benefits: [
        'Подробная проверка всех компонентов',
        'Выявление неисправностей',
        'Проверка срока службы датчиков',
        'Рекомендации по обслуживанию'
      ],
      price: 'от 800 ₽',
    },
    {
      icon: <Battery size={24} />,
      title: 'Замена батарей в датчиках',
      description: 'Замена элементов питания в датчиках давления с последующей прошивкой и калибровкой. Продлите срок службы ваших датчиков TPMS без необходимости их полной замены.',
      benefits: [
        'Увеличение срока службы датчиков',
        'Использование качественных батарей',
        'Проверка работоспособности после замены',
        'Экономия на замене всего датчика'
      ],
      price: 'от 1 200 ₽',
    },
    {
      icon: <Tool size={24} />,
      title: 'Установка новых датчиков',
      description: 'Профессиональная установка и программирование новых датчиков давления при невозможности ремонта существующих или по желанию клиента.',
      benefits: [
        'Широкий выбор новых датчиков',
        'Профессиональная установка',
        'Полная калибровка после установки',
        'Гарантия 1 год'
      ],
      price: 'от 2 500 ₽',
    },
    {
      icon: <AlertTriangle size={24} />,
      title: 'Устранение ошибок TPMS',
      description: 'Диагностика и устранение ошибок системы контроля давления в шинах, которые могут появляться на приборной панели автомобиля.',
      benefits: [
        'Диагностика с использованием специального оборудования',
        'Устранение ошибок без сброса',
        'Решение проблем совместимости',
        'Консультация по предотвращению проблем'
      ],
      price: 'от 1 000 ₽',
    },
  ];

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
              Наши услуги
            </span>
            <h1 className="font-medium mb-6">
              Профессиональное обслуживание датчиков давления
            </h1>
            <p className="text-xl text-muted-foreground">
              Полный спектр услуг по обслуживанию, программированию и замене датчиков TPMS для всех марок автомобилей
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 p-6 md:p-8 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="md:w-3/5">
                  <div className="inline-flex items-center justify-center p-3 mb-4 rounded-lg bg-primary/5 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <h4 className="text-base font-medium mb-3">Преимущества:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Стоимость</span>
                      <p className="text-xl font-medium">{service.price}</p>
                    </div>
                    <Button asChild>
                      <Link to="/booking">Записаться</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-2/5 rounded-xl overflow-hidden">
                  <img 
                    src={`/service-${index + 1}.webp`} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY4MTQ2MjUyNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary">
        <div className="container">
          <SectionHeading
            title="Часто задаваемые вопросы"
            subtitle="Ответы на популярные вопросы о датчиках давления в шинах"
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl border border-border">
              <h3 className="text-lg font-medium mb-2">Что такое TPMS и зачем он нужен?</h3>
              <p className="text-muted-foreground">TPMS (Tire Pressure Monitoring System) - это система контроля давления в шинах, которая предупреждает водителя о падении давления в одной или нескольких шинах. Она повышает безопасность движения, увеличивает срок службы шин и снижает расход топлива.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-border">
              <h3 className="text-lg font-medium mb-2">Как часто нужно обслуживать датчики TPMS?</h3>
              <p className="text-muted-foreground">Рекомендуется проверять работоспособность датчиков TPMS при каждой сезонной замене шин. Срок службы батареи датчика составляет примерно 5-7 лет, после чего может потребоваться замена батареи или всего датчика.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-border">
              <h3 className="text-lg font-medium mb-2">Нужно ли перепрограммировать датчики при замене шин?</h3>
              <p className="text-muted-foreground">Если вы меняете только шины без замены дисков с установленными на них датчиками, то в большинстве случаев перепрограммирование не требуется. Однако, при установке новых дисков с новыми датчиками, потребуется их программирование для работы с вашим автомобилем.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-border">
              <h3 className="text-lg font-medium mb-2">Сколько времени занимает прошивка датчиков?</h3>
              <p className="text-muted-foreground">Процесс прошивки и программирования датчиков обычно занимает от 30 до 60 минут в зависимости от марки и модели автомобиля, а также количества датчиков.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-border">
              <h3 className="text-lg font-medium mb-2">Можно ли использовать универсальные датчики вместо оригинальных?</h3>
              <p className="text-muted-foreground">Да, в большинстве случаев можно использовать качественные универсальные датчики, которые программируются для работы с конкретным автомобилем. Они обычно дешевле оригинальных и не уступают им по функциональности.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
