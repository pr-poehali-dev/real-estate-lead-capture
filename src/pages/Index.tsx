import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent, formType: string) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setPhone('');
    setName('');
    setMessage('');
    setShowContactForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Building2" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">Premium Estate</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            <Button onClick={() => setShowContactForm(true)} className="hover-scale">
              Оставить заявку
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Найдём дом <span className="text-primary">вашей мечты</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Более 10 лет помогаем клиентам найти идеальную недвижимость. Индивидуальный подход и гарантия результата.
              </p>
              <Card className="bg-gradient-to-br from-primary to-secondary text-white p-6 shadow-2xl">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-white text-2xl">Получите бесплатную консультацию</CardTitle>
                  <CardDescription className="text-white/90">Оставьте номер — перезвоним за 5 минут</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <form onSubmit={(e) => handleSubmit(e, 'hero')} className="space-y-4">
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white text-black h-12 text-lg"
                      required
                    />
                    <Button type="submit" variant="secondary" size="lg" className="w-full text-lg font-semibold hover-scale">
                      Получить консультацию
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/91cb0f1f-dd5f-4a2e-90f6-d2424eb1f02f/files/878aa794-15f4-4027-844b-bb15e7767af9.jpg"
                alt="Роскошная квартира"
                className="rounded-2xl shadow-2xl hover-scale w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Полный спектр услуг для успешных сделок с недвижимостью
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Home',
                title: 'Продажа квартир',
                description: 'Поможем продать квартиру по лучшей цене. Юридическое сопровождение и безопасность сделки.'
              },
              {
                icon: 'Building',
                title: 'Коммерческая недвижимость',
                description: 'Офисы, торговые площади, склады. Подберём оптимальные варианты для вашего бизнеса.'
              },
              {
                icon: 'TreePine',
                title: 'Загородная недвижимость',
                description: 'Дома, коттеджи, участки. Ваш идеальный загородный дом под ключ.'
              },
              {
                icon: 'KeyRound',
                title: 'Аренда',
                description: 'Подбор квартир и домов в аренду. Проверенные варианты и честные условия.'
              },
              {
                icon: 'FileText',
                title: 'Юридическое сопровождение',
                description: 'Проверка документов, оформление сделок, регистрация права собственности.'
              },
              {
                icon: 'TrendingUp',
                title: 'Инвестиции',
                description: 'Консультации по инвестициям в недвижимость. Максимальная доходность вложений.'
              }
            ].map((service, index) => (
              <Card key={index} className="hover-scale hover:shadow-xl transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/91cb0f1f-dd5f-4a2e-90f6-d2424eb1f02f/files/4e6843fd-c833-42ef-bbab-82cd9066ed24.jpg"
                alt="О компании"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Почему выбирают нас</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Premium Estate — это команда профессионалов с многолетним опытом работы на рынке недвижимости.
              </p>
              <div className="space-y-6">
                {[
                  { icon: 'Award', title: '10+ лет опыта', text: 'Более 1000 успешных сделок' },
                  { icon: 'Users', title: 'Индивидуальный подход', text: 'Персональный менеджер для каждого клиента' },
                  { icon: 'Shield', title: 'Юридическая чистота', text: 'Гарантия безопасности сделки' },
                  { icon: 'Clock', title: 'Быстрый результат', text: 'Средний срок подбора — 7 дней' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Оставьте заявку и получите подборку объектов в течение часа
          </p>
          <Card className="shadow-2xl animate-fade-in">
            <CardContent className="p-8">
              <form onSubmit={(e) => handleSubmit(e, 'contact')} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input
                    type="text"
                    placeholder="Иван Иванов"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон *</label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите, что вы ищете..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg hover-scale">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div className="animate-fade-in">
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@premiumestate.ru</p>
            </div>
            <div className="animate-fade-in">
              <Icon name="MapPin" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">Москва, ул. Тверская, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Building2" size={32} className="text-primary" />
            <span className="text-2xl font-bold">Premium Estate</span>
          </div>
          <p className="text-gray-400 mb-6">Ваш надёжный партнёр на рынке недвижимости</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2024 Premium Estate. Все права защищены.</p>
        </div>
      </footer>

      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={() => setShowContactForm(false)}>
          <Card className="max-w-md w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">Оставить заявку</CardTitle>
                  <CardDescription>Мы перезвоним в течение 5 минут</CardDescription>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setShowContactForm(false)}>
                  <Icon name="X" size={24} />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => handleSubmit(e, 'floating')} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input
                    type="text"
                    placeholder="Иван Иванов"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон *</label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full hover-scale">
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      <Button
        onClick={() => setShowContactForm(true)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl hover-scale z-40"
        size="icon"
      >
        <Icon name="Phone" size={28} />
      </Button>
    </div>
  );
}
