import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-industrial-dark">РВДТех</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-industrial-gray hover:text-primary transition-colors">Каталог</a>
              <a href="#services" className="text-industrial-gray hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-industrial-gray hover:text-primary transition-colors">О компании</a>
              <a href="#contact" className="text-industrial-gray hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              +7 (800) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-industrial-dark via-industrial-dark to-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary-foreground border-primary/30">
                  Промышленные решения
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  РВД шланги
                  <span className="block text-primary">высокого давления</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl">
                  Производство и поставка высококачественных рукавов высокого давления, 
                  фитингов и промышленного оборудования с доставкой по всей России
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4">
                  <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                  Каталог товаров
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
                >
                  <Icon name="Calculator" className="mr-2 h-5 w-5" />
                  Расчет заказа
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5000+</div>
                  <div className="text-sm text-gray-400">Товаров</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">700</div>
                  <div className="text-sm text-gray-400">Клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">Поддержка</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">99%</div>
                  <div className="text-sm text-gray-400">В наличии</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <img 
                  src="https://cdn.poehali.dev/files/332d45b1-1315-41f4-8f87-c8ccf1519cd2.jpg"
                  alt="РВД шланги и фитинги"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-dark mb-4">Каталог решений</h2>
            <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
              Широкий ассортимент товаров для решения любых гидравлических задач
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Cable" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">РВД рукава</CardTitle>
                <CardDescription>
                  Высококачественные рукава высокого давления для любых промышленных применений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-industrial-gray mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                    Давление до 400 bar
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                    Температура -40°C до +100°C
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                    Различные диаметры
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Zap" className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Фитинги и соединения</CardTitle>
                <CardDescription>
                  Надежные соединительные элементы для герметичных гидравлических систем
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-industrial-gray mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                    Различные типы резьб
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                    Материалы: сталь, нерж. сталь
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                    Гарантия качества
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Settings" className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Гидравлическое оборудование</CardTitle>
                <CardDescription>
                  Современное оборудование для обжима, резки и диагностики РВД
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-industrial-gray mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                    Станки для обжима
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                    Режущие инструменты
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                    Диагностическое оборудование
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-industrial-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Полный спектр услуг</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Оказываем полный комплекс услуг от консультации до послепродажного обслуживания
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Clock",
                title: "Изготовление за 1 час",
                description: "Быстрое изготовление рукавов любой сложности в присутствии клиента",
                color: "bg-blue-600"
              },
              {
                icon: "Truck",
                title: "Доставка сегодня 24/7",
                description: "Круглосуточная доставка готовой продукции по всей территории России",
                color: "bg-red-600"
              },
              {
                icon: "Shield",
                title: "Гарантия качества",
                description: "Все изделия проходят контроль качества и имеют официальную гарантию",
                color: "bg-green-600"
              },
              {
                icon: "Users",
                title: "Техническая поддержка",
                description: "Профессиональные консультации по подбору и эксплуатации оборудования",
                color: "bg-purple-600"
              },
              {
                icon: "Award",
                title: "Диагностика состоя",
                description: "Комплексная диагностика гидравлических систем и рукавов высокого давления",
                color: "bg-orange-600"
              },
              {
                icon: "Repeat",
                title: "Системные программы",
                description: "Специальные программы лояльности и системы скидок для постоянных клиентов",
                color: "bg-indigo-600"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-colors group">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={service.icon as any} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-primary/10 text-primary mb-4">О компании</Badge>
                <h2 className="text-4xl font-bold text-industrial-dark mb-6">
                  Лидер в производстве 
                  <span className="text-primary block">гидравлических решений</span>
                </h2>
                <p className="text-lg text-industrial-gray">
                  РВДТЕХ — это 15 лет опыта производства качественной гидравлической продукции. 
                  Мы специализируемся на изготовлении рукавов высокого давления, 
                  фитингов и сопутствующего оборудования для промышленных предприятий.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-industrial-gray">лет на рынке</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-industrial-gray">довольных клиентов</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-industrial-gray">качество продукции</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-industrial-gray">техническая поддержка</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 font-medium">Сертифицированное производство ISO 9001</span>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/img/177066c7-9a48-411d-ae5d-4f046ce404eb.jpg"
                    alt="Производственный цех РВД"
                    className="rounded-lg h-48 w-full object-cover"
                  />
                  <img 
                    src="/img/f55727c5-100f-4285-96cc-cf9ace6b7489.jpg"
                    alt="РВД шланги"
                    className="rounded-lg h-32 w-full object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                    <Icon name="Factory" className="h-12 w-12 text-industrial-gray" />
                  </div>
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <Icon name="Cog" className="h-16 w-16 text-industrial-gray" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-industrial-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Получить консультацию</h2>
              <p className="text-xl text-gray-300">
                Оставьте заявку и наш специалист свяжется с вами в течение 15 минут
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Форма обратной связи</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Имя *</label>
                        <Input 
                          placeholder="Ваше имя" 
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Телефон *</label>
                        <Input 
                          placeholder="+7 (900) 123-45-67" 
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                      <Input 
                        placeholder="your@email.ru" 
                        type="email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Сообщение</label>
                      <Textarea 
                        placeholder="Опишите ваши потребности или задачи, которые необходимо решить..."
                        rows={5}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                      <Icon name="Send" className="mr-2 h-5 w-5" />
                      Отправить заявку
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Icon name="Phone" className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">+7 (800) 123-45-67</div>
                        <div className="text-gray-400">Круглосуточно</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Icon name="Mail" className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">info@rvdtech.ru</div>
                        <div className="text-gray-400">Основная почта</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Icon name="MapPin" className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">г. Москва, ул. Промышленная 15</div>
                        <div className="text-gray-400">Главный офис и склад</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <h4 className="font-bold mb-4">Режим работы</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Пн-Пт:</span>
                      <span>08:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Суббота:</span>
                      <span>09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Воскресенье:</span>
                      <span>10:00 - 16:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial-dark border-t border-white/10 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Wrench" className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">РВДТех</span>
              </div>
              <p className="text-gray-400 mb-4">
                Надежный партнер в области гидравлических решений. Качество, проверенное временем.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Icon name="Phone" className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Icon name="Mail" className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Icon name="MapPin" className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">РВД рукава</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Фитинги</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оборудование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Запчасти</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Изготовление РВД</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Техническое обслуживание</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консультации</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <div>+7 (800) 123-45-67</div>
                <div>info@rvdtech.ru</div>
                <div>г. Москва, ул. Промышленная 15</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 РВДТех. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}