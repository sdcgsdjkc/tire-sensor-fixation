
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from "sonner";
import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !email || !message) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }
    
    // Form submission logic would go here
    // For demo purposes, we'll just show a success message
    toast.success("Ваше сообщение успешно отправлено!");
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    setPhone('');
  };

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Контакты
            </span>
            <h1 className="font-medium mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-muted-foreground">
              Мы готовы ответить на все ваши вопросы и помочь с прошивкой датчиков давления для вашего автомобиля
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary/5 text-primary">
                  <MapPin size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    улица Автомобильная, 10<br />
                    Москва, 123456
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary/5 text-primary">
                  <Phone size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium mb-2">Телефон</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                      +7 (495) 123-45-67
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary/5 text-primary">
                  <Mail size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@tiresensorpro.ru" className="hover:text-primary transition-colors">
                      info@tiresensorpro.ru
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-primary/5 text-primary">
                  <Clock size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium mb-2">Часы работы</h3>
                  <p className="text-muted-foreground">
                    Понедельник - Пятница: 9:00 - 20:00<br />
                    Суббота - Воскресенье: 10:00 - 18:00
                  </p>
                </div>
              </div>
              
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-border">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.347525969397!2d37.62701591591616!3d55.75197998055754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1651148202440!5m2!1sru!2sru" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div>
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-medium mb-6">Отправьте нам сообщение</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
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
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ваше сообщение"
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
