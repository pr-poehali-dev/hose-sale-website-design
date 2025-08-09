import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">RVDMAX</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">О компании</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">+7 (800) 123-45-67</span>
              <Button>Заказать звонок</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  РВД шланги
                  <br />
                  <span className="text-blue-400">высокого</span>
                  <br />
                  <span className="text-blue-400">давления</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Производство по промышленным международным стандартам.
                  Быстрая доставка по России и Казахстану. Гарантия качества.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Подобрать решение
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Техническая консультация
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/332d45b1-1315-41f4-8f87-c8ccf1519cd2.jpg"
                  alt="РВД шланги высокого давления"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="container mx-auto px-4 pb-16 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold text-blue-400">5000+</div>
              <div className="text-sm text-gray-300 mt-2">Клиентов доверяют</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400">700</div>
              <div className="text-sm text-gray-300 mt-2">Типоразмеров</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400">24/7</div>
              <div className="text-sm text-gray-300 mt-2">Техподдержка</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400">99.9%</div>
              <div className="text-sm text-gray-300 mt-2">Качество продукции</div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Каталог решений</h2>
            <p className="text-xl text-gray-600">Гидравлика высокого качества для решения любых промышленных задач</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* РВД рукава */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon name="Zap" className="text-blue-600 group-hover:text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">РВД рукава</h3>
                <p className="text-gray-600 mb-6">
                  Высокопрочные промышленные рукава высокого давления с армированием. Подходят для широкого спектра применений.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Рабочее давление
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Температурный режим
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Стойкость к износу
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Фитинги и соединения */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <Icon name="Settings" className="text-red-600 group-hover:text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Фитинги и соединения</h3>
                <p className="text-gray-600 mb-6">
                  Профессиональные соединительные элементы для создания герметичных и надежных гидравлических систем.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Различные типоразмеры
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Высокая герметичность
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Коррозионная стойкость
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Гидравлические решения */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-600 transition-colors">
                  <Icon name="Cpu" className="text-slate-600 group-hover:text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Гидравлические решения</h3>
                <p className="text-gray-600 mb-6">
                  Комплексные решения для промышленных гидравлических систем любой сложности и назначения.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Проектирование систем
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Подбор оборудования
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    Техническая поддержка
                  </li>
                </ul>
                <Button className="w-full bg-slate-600 hover:bg-slate-700">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">Полный спектр услуг</h2>
            <p className="text-xl text-gray-300">Комплексные решения для вашего бизнеса</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors">
              <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Clock" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Изготовление за 1 час</h3>
              <p className="text-gray-300">
                Срочное изготовление стандартных РВД рукавов и сборок за 1 час прямо в точке продаж
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors">
              <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Shield" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Выездной сервис 24/7</h3>
              <p className="text-gray-300">
                Аварийная служба с выездом специалистов и передвижными станциями обжима РВД
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors">
              <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Truck" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Доставка запчастей</h3>
              <p className="text-gray-300">
                Быстрая доставка оригинальных запчастей и расходных материалов по всей России
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors">
              <div className="bg-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Wrench" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Техническая поддержка</h3>
              <p className="text-gray-300">
                Консультации инженеров по подбору гидравлических решений и оптимизации систем
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors">
              <div className="bg-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Icon name="BarChart3" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Диагностика систем</h3>
              <p className="text-gray-300">
                Полная диагностика гидравлических систем с выявлением неисправностей и рекомендациями
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors">
              <div className="bg-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Users" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Обучение персонала</h3>
              <p className="text-gray-300">
                Обучение и сертификация персонала по работе с гидравлическими системами
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-blue-600 font-medium">О КОМПАНИИ</span>
                <h2 className="text-4xl font-bold text-gray-900">
                  Лидер в производстве 
                  <span className="text-blue-600"> гидравлических </span>
                  решений
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  RVDMAX — это 15 лет непрерывного развития, инноваций и высочайшего 
                  качества продукции. Мы являемся ведущим производителем РВД рукавов 
                  и гидравлических систем в России.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600 mt-1">лет на рынке</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-blue-600">5000+</div>
                  <div className="text-sm text-gray-600 mt-1">довольных клиентов</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-blue-600">99.9%</div>
                  <div className="text-sm text-gray-600 mt-1">качество продукции</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600 mt-1">техподдержка</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <Icon name="CheckCircle" className="text-green-500" size={24} />
                <span className="text-gray-700">ISO 9001:2015 сертификация качества</span>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700">
                История компании
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://cdn.poehali.dev/files/5fc0ccc8-62fd-435a-b2f6-95f9efcbc831.jpg"
                  alt="Производство РВД"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <img
                  src="https://cdn.poehali.dev/files/ea488884-e217-4e0d-a1c6-c4fcee3f6f8b.png"
                  alt="Качество продукции"
                  className="w-full h-64 object-cover rounded-2xl mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-2xl shadow-xl border">
                <div className="text-2xl font-bold text-blue-600">700 ⚙️</div>
                <div className="text-sm text-gray-600">единиц оборудования</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-white">Получить консультацию</h2>
              <p className="text-xl text-gray-300">Оставьте заявку и наш специалист свяжется с вами в течение 15 минут</p>
            </div>

            <div className="bg-slate-800 p-8 lg:p-12 rounded-2xl">
              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Имя *</label>
                  <Input 
                    placeholder="Введите ваше имя" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Телефон *</label>
                  <Input 
                    placeholder="+7 (999) 123-45-67" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Компания</label>
                  <Input 
                    placeholder="Название компании" 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-gray-300">Комментарий</label>
                  <Textarea 
                    placeholder="Опишите вашу задачу или вопрос..." 
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 min-h-[120px]"
                  />
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs text-gray-400 mb-6">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с политикой конфиденциальности
                  </p>
                  
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Получить техническое предложение
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold">RVDMAX</div>
              <p className="text-gray-400 text-sm">
                Производство и поставка РВД рукавов высокого давления, фитингов и гидравлических систем.
              </p>
              <div className="flex space-x-4">
                <Icon name="Phone" size={20} className="text-blue-400" />
                <Icon name="Mail" size={20} className="text-blue-400" />
                <Icon name="MapPin" size={20} className="text-blue-400" />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Продукция</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>РВД рукава</div>
                <div>Фитинги и соединения</div>
                <div>Быстроразъемные соединения</div>
                <div>Манометры и датчики</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Услуги</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Изготовление РВД сборок</div>
                <div>Выездной сервис 24/7</div>
                <div>Техническое консультирование</div>
                <div>Диагностика систем</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>+7 (800) 123-45-67</div>
                <div>info@rvdmax.ru</div>
                <div>г. Москва, ул. Промышленная, 15</div>
                <div>Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 RVDMAX. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}