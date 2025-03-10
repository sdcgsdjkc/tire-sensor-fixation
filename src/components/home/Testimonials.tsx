
import { SectionHeading } from '@/components/ui/section-heading';
import { Star } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Алексей К.',
    car: 'BMW X5',
    rating: 5,
    content: 'Отличный сервис! Быстро и профессионально прошили датчики давления для моего BMW X5. Теперь система работает безупречно.',
    date: '15.03.2024',
  },
  {
    id: 2,
    name: 'Елена М.',
    car: 'Toyota RAV4',
    rating: 5,
    content: 'Рекомендую этот сервис всем. Записалась онлайн, приехала в назначенное время и через 40 минут уже была в пути с исправно работающими датчиками.',
    date: '02.04.2024',
  },
  {
    id: 3,
    name: 'Сергей В.',
    car: 'Audi Q7',
    rating: 4,
    content: 'Профессиональный подход и качественное обслуживание. Решили проблему с датчиками, которая беспокоила меня несколько месяцев.',
    date: '18.04.2024',
  },
  {
    id: 4,
    name: 'Мария Д.',
    car: 'Mercedes-Benz GLC',
    rating: 5,
    content: 'Быстро, качественно и с гарантией. Специалисты знают своё дело. Приятно иметь дело с профессионалами!',
    date: '25.04.2024',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <SectionHeading
          title="Отзывы клиентов"
          subtitle="Узнайте, что говорят о нас наши клиенты"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:border-accent"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-muted-foreground">{testimonial.car}</span>
                  <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
