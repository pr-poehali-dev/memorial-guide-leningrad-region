
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { memorialsByDistrict, districts } from "@/data/memorialsData";
import MemorialCard from "@/components/MemorialCard";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";

const DistrictDetail = () => {
  const { districtId } = useParams<{districtId: string}>();
  
  // Получаем данные района по id
  const districtInfo = districts.find(district => district.id === districtId);
  const memorials = districtId ? memorialsByDistrict[districtId as keyof typeof memorialsByDistrict] || [] : [];
  
  // Прокручиваем страницу вверх при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [districtId]);

  if (!districtInfo) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-[#1A3C6C]">Район не найден</h1>
        <p className="mb-8 text-[#457B9D]">Извините, информация о запрошенном районе отсутствует.</p>
        <Link to="/districts">
          <Button className="bg-[#1A3C6C] hover:bg-[#0f2a51]">
            Вернуться к списку районов
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Герой-секция с информацией о районе */}
      <div className="relative py-20 flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 z-0 bg-[#1A3C6C] bg-opacity-70"
          style={{
            backgroundImage: `url('${districtInfo.image}')`, 
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
            <Link to="/districts" className="text-white/70 hover:text-white">Районы</Link>
            <Icon name="ChevronRight" size={16} className="text-white/50" />
            <span>{districtInfo.name} район</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat">
            {districtInfo.name} район
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-open-sans">
            Памятники воинской славы и мемориальные объекты 
            <span className="font-semibold"> {districtInfo.name.toLowerCase()}ого </span> 
            района Ленинградской области
          </p>
        </div>
      </div>

      {/* Список мемориалов */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-montserrat text-[#1A3C6C]">
            Памятники и мемориалы
          </h2>
          
          {memorials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {memorials.map((memorial) => (
                <MemorialCard 
                  key={memorial.id}
                  id={memorial.id}
                  title={memorial.title}
                  district={districtInfo.name}
                  description={memorial.description}
                  image={memorial.image}
                  type={memorial.type}
                  year={memorial.year}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-[#457B9D] italic">Информация о памятниках в этом районе скоро появится...</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Карта района */}
      <section className="py-16 bg-[#1A3C6C]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-montserrat text-[#1A3C6C] text-center">
            Расположение на карте
          </h2>
          
          <div className="bg-white border border-[#457B9D]/20 rounded-lg shadow-md p-4 h-96 flex items-center justify-center">
            <div className="text-center">
              <Icon name="Map" size={48} className="mx-auto mb-4 text-[#457B9D]/50" />
              <p className="text-[#457B9D] mb-4">Интерактивная карта памятников {districtInfo.name.toLowerCase()}ого района</p>
              <Button className="bg-[#1A3C6C] hover:bg-[#0f2a51]">
                Открыть карту
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Раздел с маршрутами */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat text-[#1A3C6C]">
            Маршруты по памятным местам
          </h2>
          <p className="mb-8 max-w-3xl mx-auto text-[#457B9D]">
            Спланируйте свое путешествие по местам боевой славы {districtInfo.name.toLowerCase()}ого района
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#F1FAEE] p-6 rounded-lg border border-[#457B9D]/10 shadow-md">
              <h3 className="text-xl font-bold mb-3 font-montserrat text-[#1A3C6C]">Готовые маршруты</h3>
              <p className="text-[#457B9D] mb-4">Пройдите по проверенным маршрутам, включающим основные памятники района</p>
              <Button variant="outline" className="border-[#1A3C6C] text-[#1A3C6C] hover:bg-[#1A3C6C] hover:text-white">
                Выбрать маршрут
              </Button>
            </div>
            
            <div className="bg-[#F1FAEE] p-6 rounded-lg border border-[#457B9D]/10 shadow-md">
              <h3 className="text-xl font-bold mb-3 font-montserrat text-[#1A3C6C]">Создать свой маршрут</h3>
              <p className="text-[#457B9D] mb-4">Составьте индивидуальный план посещения памятных мест района</p>
              <Button variant="outline" className="border-[#1A3C6C] text-[#1A3C6C] hover:bg-[#1A3C6C] hover:text-white">
                Построить маршрут
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Призыв к действию */}
      <section className="py-16 bg-[#1A3C6C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-montserrat">
            Исследуйте другие районы
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-open-sans">
            Откройте для себя памятники воинской славы во всех уголках Ленинградской области
          </p>
          <Link to="/districts">
            <Button 
              size="lg" 
              className="bg-white text-[#1A3C6C] hover:bg-white/90"
            >
              Все районы области
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DistrictDetail;
