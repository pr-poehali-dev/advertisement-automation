import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const services = [
  {
    title: 'Размножение объявлений',
    icon: 'Copy',
    items: [
      { name: '1 позиция вся РФ', price: '5 000 ₽' },
      { name: '2 позиции вся РФ', price: '8 500 ₽' },
      { name: '3 позиции вся РФ', price: 'от 10 000 ₽' },
      { name: '5 позиций вся РФ', price: 'от 15 000 ₽' },
    ],
    color: 'from-primary to-secondary'
  },
  {
    title: 'Контент и дизайн',
    icon: 'Palette',
    items: [
      { name: 'Услуги дизайнера', price: 'от 5 000 ₽' },
      { name: 'Написание продающего текста', price: 'от 2 500 ₽' },
      { name: 'Составление инфографики', price: '2 500 ₽' },
      { name: 'Описание товаров', price: 'от 100 ₽' },
    ],
    color: 'from-secondary to-accent'
  },
  {
    title: 'Управление и поддержка',
    icon: 'Settings',
    items: [
      { name: 'Поддержка 30 дней на Avito', price: 'от 10 000 ₽' },
      { name: 'Массовый постинг объявлений', price: 'от 5 000 ₽' },
      { name: 'Ведение личного кабинета «под ключ»', price: 'от 15 000 ₽' },
      { name: 'Оформление магазина', price: 'от 5 000 ₽' },
    ],
    color: 'from-primary to-accent'
  },
  {
    title: 'Консультации',
    icon: 'MessageSquare',
    items: [
      { name: 'Анализ ниши, товаров', price: 'Бесплатно' },
      { name: 'Анализ конкурентов', price: 'Бесплатно' },
      { name: 'Подбор товаров', price: 'от 1 000 ₽' },
      { name: 'Расчёт бюджета', price: 'Бесплатно' },
    ],
    color: 'from-accent to-primary'
  },
  {
    title: 'Автоматизация',
    icon: 'Zap',
    items: [
      { name: 'Настройка автоответов', price: '1 500 ₽' },
      { name: 'Работа с технической поддержкой', price: 'от 1 000 ₽' },
      { name: 'Обучение автозагрузке по РФ', price: '5 000 ₽' },
      { name: 'Ответы на отзывы', price: 'Бесплатно' },
    ],
    color: 'from-secondary to-primary'
  },
];

const stats = [
  { value: '24/7', label: 'Работаем' },
  { value: '500+', label: 'Клиентов' },
  { value: '99%', label: 'Успешных размещений' },
];

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', contact: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted to-background py-20 px-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-1" variant="secondary">
              <Icon name="Sparkles" size={14} className="mr-1" />
              Автоматизация Avito
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Автоматизируйте<br />продажи на Avito
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Экономьте время и увеличивайте продажи с современной системой автоматизации объявлений
            </p>
            
            <div className="flex flex-wrap gap-8 justify-center mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Начать работу
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр решений для работы с Avito</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start py-2 border-b border-border/50 last:border-0">
                        <span className="text-sm text-muted-foreground flex-1">{item.name}</span>
                        <span className="text-sm font-semibold text-primary ml-2">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                <Icon name="Rocket" size={14} className="mr-1" />
                Как это работает
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Простая автоматизация в 4 шага</h2>
              
              <div className="space-y-6">
                {[
                  { icon: 'Upload', title: 'Загрузка данных', desc: 'Загрузите товары через XML-файл' },
                  { icon: 'Bot', title: 'Обработка контента', desc: 'Система автоматически обработает объявления' },
                  { icon: 'Send', title: 'Размещение', desc: 'Массовая публикация по всей РФ' },
                  { icon: 'TrendingUp', title: 'Мониторинг', desc: 'Отслеживание активности 24/7' },
                ].map((step, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon name={step.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8 shadow-2xl">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-3xl">Получить консультацию</CardTitle>
                <CardDescription className="text-base">Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон или Email"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg h-12">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex justify-center gap-8 mb-6">
            <a href="https://t.me/+QgiLIa1gFRY4Y2Iy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="text-muted-foreground">
            © 2024 Автоматизация Avito. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
