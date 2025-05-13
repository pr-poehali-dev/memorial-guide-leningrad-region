
import { Link } from "react-router-dom";
import DistrictCard from "@/components/DistrictCard";
import { districts } from "@/data/memorialsData";
import { useEffect } from "react";
import Icon from "@/components/ui/icon";

const Districts = () => {
  // Прокручиваем страницу вверх при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Заголовок страницы */}
      <div className="relative py-20 flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 z-0 bg-[#1A3C6C] bg-opacity-80"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1574739782594-db4ead022697?q=80&w=2070')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3C6C]/60 to-[#1A3C6C] z-10"></div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <Link to="/" className="text-white/70 hover:text-white">Главная</Link>
            <Icon name="ChevronRight" size={16} className="text-white/50" />
            <span>Районы Ленинградской области</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat">
            Районы Ленинградской области
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-open-sans">
            Выберите район, чтобы узнать о памятниках и мемориалах воинской славы на его территории
          </p>
        </div>
      </div>

      {/* Список районов */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-montserrat text-[#1A3C6C] text-center">
            Исследуйте память героев по районам
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {districts.map((district) => (
              <DistrictCard 
                key={district.id}
                name={district.name}
                monumentsCount={district.monumentsCount}
                image={district.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Информация о проекте */}
      <section className="py-16 bg-[#1A3C6C]/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-montserrat text-[#1A3C6C]">
                О проекте «Пути славы»
              </h2>
              <p className="text-[#457B9D] mb-4">
                Наш проект посвящен сохранению памяти о героическом подвиге защитников Ленинградской земли в годы Великой Отечественной войны. Мы собираем и систематизируем информацию о памятниках, мемориалах и местах боевой славы по всем районам Ленинградской области.
              </p>
              <p className="text-[#457B9D] mb-4">
                Благодаря проекту вы можете:
              </p>
              <ul className="list-disc pl-5 mb-6 text-[#457B9D]">
                <li className="mb-2">Узнать о памятниках в каждом районе области</li>
                <li className="mb-2">Спланировать маршрут для посещения мемориалов</li>
                <li className="mb-2">Познакомиться с историей героических событий</li>
                <li>Сохранить память о подвиге защитников Родины</li>
              </ul>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1580977251946-33fc756c95a0?q=80&w=2071" 
                alt="Мемориал воинской славы" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Districts;
