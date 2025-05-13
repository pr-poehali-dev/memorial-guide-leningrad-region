
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F1FAEE]">
      {/* Герой-секция */}
      <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-[#1A3C6C] bg-opacity-90"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1610015372915-3ab725bafd3e?q=80&w=2070')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A3C6C]/70 to-[#1A3C6C] z-10"></div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in font-montserrat">
            Пути славы
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-open-sans">
            Интерактивный гид по памятникам воинской славы Ленинградской области
          </p>
          <Button 
            size="lg" 
            className="bg-[#E63946] hover:bg-[#c8313d] text-white px-8 py-6 rounded-md text-lg animate-pulse"
          >
            Начать путешествие
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <Icon name="ChevronDown" size={32} />
        </div>
      </header>

      {/* О проекте */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat text-[#1A3C6C]">
            О нашем проекте
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#F1FAEE] border-0 shadow-md transition-transform hover:scale-105">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#457B9D] p-3 w-12 h-12 mb-4 flex items-center justify-center">
                  <Icon name="Landmark" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 font-montserrat text-[#1A3C6C]">Памятники и мемориалы</h3>
                <p className="font-open-sans text-[#457B9D]">
                  Подробная информация о мемориалах воинской славы во всех районах Ленинградской области.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#F1FAEE] border-0 shadow-md transition-transform hover:scale-105">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#457B9D] p-3 w-12 h-12 mb-4 flex items-center justify-center">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 font-montserrat text-[#1A3C6C]">Интерактивная карта</h3>
                <p className="font-open-sans text-[#457B9D]">
                  Удобная навигация по всем объектам с возможностью построения маршрутов.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#F1FAEE] border-0 shadow-md transition-transform hover:scale-105">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#457B9D] p-3 w-12 h-12 mb-4 flex items-center justify-center">
                  <Icon name="History" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 font-montserrat text-[#1A3C6C]">Истории героев</h3>
                <p className="font-open-sans text-[#457B9D]">
                  Рассказы о подвигах и судьбах людей, чьими именами названы улицы и площади.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Районы */}
      <section className="py-20 bg-[#1A3C6C]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-montserrat text-[#1A3C6C]">
            Районы Ленинградской области
          </h2>
          <p className="text-center mb-12 max-w-3xl mx-auto font-open-sans text-[#457B9D]">
            Выберите район, чтобы узнать о памятниках и мемориалах воинской славы
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Волосовский", "Волховский", "Всеволожский", "Выборгский",
              "Кингисеппский", "Киришский", "Кировский", "Лодейнопольский",
              "Ломоносовский", "Лужский", "Подпорожский", "Приозерский",
              "Сланцевский", "Тихвинский", "Тосненский"
            ].map((district) => (
              <Link 
                key={district} 
                to={`/district/${district.toLowerCase()}`}
                className="block"
              >
                <Card className="bg-white border border-[#457B9D]/20 transition-all hover:bg-[#457B9D]/10 hover:border-[#457B9D]">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="font-open-sans">{district} район</span>
                    <Icon name="ChevronRight" size={18} className="text-[#457B9D]" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Избранные мемориалы */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat text-[#1A3C6C]">
            Значимые мемориалы
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedMemorial 
              title="Мемориал «Цветок жизни»"
              location="Всеволожский район"
              image="https://images.unsplash.com/photo-1558551649-e6e40b38b38f?q=80&w=1936"
              description="Посвящён погибшим в Ленинграде детям. Состоит из трёх частей: «Цветка жизни», аллеи Дружбы и композиции «Дневник Тани Савичевой»."
            />
            <FeaturedMemorial 
              title="Форт «Красная Горка»"
              location="Ломоносовский район"
              image="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?q=80&w=2070"
              description="На территории форта, который в годы войны был центром обороны Ораниенбаумского плацдарма, располагается музей и мемориал."
            />
            <FeaturedMemorial 
              title="Стела «Город воинской славы»"
              location="Тихвинский район"
              image="https://images.unsplash.com/photo-1601128666217-69c8e2255562?q=80&w=1964"
              description="Установлена в 2010 году в честь присвоения городу Тихвину почётного звания Российской Федерации «Город воинской славы»."
            />
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-[#1A3C6C] hover:bg-[#0f2a51] text-white">
              Смотреть все мемориалы
            </Button>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-20 bg-[#1A3C6C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Сохраним память вместе
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-open-sans">
            Знание истории родного края и подвигов его защитников — 
            наш долг перед теми, кто отдал жизнь за свободу и независимость Родины.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#1A3C6C]"
            >
              Поделиться историей
            </Button>
            <Button 
              className="bg-[#E63946] hover:bg-[#c8313d] text-white"
            >
              Исследовать карту памятников
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-[#457B9D] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold font-montserrat">Пути славы</h3>
              <p className="text-sm font-open-sans">© 2025 Интерактивный гид по памятникам воинской славы</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#F1FAEE] transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="hover:text-[#F1FAEE] transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-[#F1FAEE] transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-[#F1FAEE] transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Компонент для отображения значимых мемориалов
const FeaturedMemorial = ({ 
  title, 
  location, 
  image, 
  description 
}: { 
  title: string; 
  location: string; 
  image: string; 
  description: string 
}) => {
  return (
    <Card className="overflow-hidden shadow-lg border-0 transition-transform hover:scale-105">
      <div className="h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-[#457B9D] mb-2">
          <Icon name="MapPin" size={16} />
          <span className="text-sm font-open-sans">{location}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 font-montserrat text-[#1A3C6C]">{title}</h3>
        <p className="text-[#8D99AE] font-open-sans text-sm">{description}</p>
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-4 border-[#1A3C6C] text-[#1A3C6C] hover:bg-[#1A3C6C] hover:text-white transition-colors"
        >
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
};

export default Index;
