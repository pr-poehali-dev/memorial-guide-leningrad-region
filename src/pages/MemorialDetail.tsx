
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { memorialsByDistrict, districts } from "@/data/memorialsData";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

// Найти мемориал по id
const findMemorialById = (memorialId: string) => {
  for (const districtId in memorialsByDistrict) {
    const memorialsInDistrict = memorialsByDistrict[districtId as keyof typeof memorialsByDistrict];
    const found = memorialsInDistrict.find(memorial => memorial.id === memorialId);
    if (found) {
      return { 
        memorial: found, 
        districtId 
      };
    }
  }
  return null;
};

const MemorialDetail = () => {
  const { memorialId } = useParams<{memorialId: string}>();
  const [memorialData, setMemorialData] = useState<{ 
    memorial: typeof memorialsByDistrict.volosovsky[0]; 
    districtId: string; 
    districtName: string;
  } | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (memorialId) {
      const result = findMemorialById(memorialId);
      if (result) {
        const district = districts.find(d => d.id === result.districtId);
        if (district) {
          setMemorialData({
            ...result,
            districtName: district.name
          });
        }
      }
    }
  }, [memorialId]);

  if (!memorialData) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-[#1A3C6C]">Мемориал не найден</h1>
        <p className="mb-8 text-[#457B9D]">Извините, информация о запрошенном мемориале отсутствует.</p>
        <Link to="/districts">
          <Button className="bg-[#1A3C6C] hover:bg-[#0f2a51]">
            Вернуться к списку районов
          </Button>
        </Link>
      </div>
    );
  }

  const { memorial, districtId, districtName } = memorialData;

  return (
    <div className="min-h-screen pt-16">
      {/* Герой-секция с основной информацией */}
      <div className="relative py-20 flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 z-0 bg-[#1A3C6C] bg-opacity-80"
          style={{
            backgroundImage: memorial.image ? `url('${memorial.image}')` : 'none', 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3C6C]/60 to-[#1A3C6C] z-10"></div>
        
        <div className="container mx-auto px-4 z-20">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 text-center">
            <Link to="/" className="text-white/70 hover:text-white">Главная</Link>
            <Icon name="ChevronRight" size={16} className="text-white/50" />
            <Link to="/districts" className="text-white/70 hover:text-white">Районы</Link>
            <Icon name="ChevronRight" size={16} className="text-white/50" />
            <Link to={`/district/${districtId}`} className="text-white/70 hover:text-white">{districtName} район</Link>
            <Icon name="ChevronRight" size={16} className="text-white/50" />
            <span>{memorial.title}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 font-montserrat text-center">
            {memorial.title}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {memorial.type && (
              <Badge className="bg-white/10 hover:bg-white/20 text-white border-0">
                {memorial.type}
              </Badge>
            )}
            {memorial.year && (
              <Badge className="bg-white/10 hover:bg-white/20 text-white border-0">
                {memorial.year}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Детальная информация */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-[#1A3C6C]">
                О мемориале
              </h2>
              <p className="text-[#457B9D] mb-6 whitespace-pre-line font-open-sans">
                {memorial.description}
              </p>
              
              <div className="bg-[#F1FAEE] p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2 font-montserrat text-[#1A3C6C]">
                  Адрес:
                </h3>
                <p className="text-[#457B9D] flex items-start gap-2">
                  <Icon name="MapPin" className="text-[#1A3C6C] mt-1 flex-shrink-0" size={18} />
                  <span>{memorial.address}</span>
                </p>
              </div>
              
              <Link to={`/district/${districtId}`}>
                <Button className="bg-[#1A3C6C] hover:bg-[#0f2a51] mb-6">
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Все памятники {districtName.toLowerCase()}ого района
                </Button>
              </Link>
            </div>
            
            <div>
              {memorial.image ? (
                <div className="rounded-lg overflow-hidden shadow-md border border-[#457B9D]/10">
                  <img 
                    src={memorial.image} 
                    alt={memorial.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="rounded-lg overflow-hidden shadow-md border border-[#457B9D]/10 bg-[#1A3C6C]/5 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Image" size={64} className="mx-auto mb-4 text-[#457B9D]/30" />
                    <p className="text-[#457B9D]/50">Фотография будет добавлена позже</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Карта расположения */}
      <section className="py-16 bg-[#1A3C6C]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-montserrat text-[#1A3C6C] text-center">
            Расположение на карте
          </h2>
          
          <div className="bg-white border border-[#457B9D]/20 rounded-lg shadow-md p-4 h-96 flex items-center justify-center">
            <div className="text-center">
              <Icon name="Map" size={48} className="mx-auto mb-4 text-[#457B9D]/50" />
              <p className="text-[#457B9D] mb-4">Точное расположение мемориала</p>
              <Button className="bg-[#1A3C6C] hover:bg-[#0f2a51]">
                Построить маршрут
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Близлежащие мемориалы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-montserrat text-[#1A3C6C] text-center">
            Другие мемориалы в этом районе
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {memorialsByDistrict[districtId as keyof typeof memorialsByDistrict]
              .filter(m => m.id !== memorialId)
              .slice(0, 3)
              .map(m => (
                <div key={m.id} className="border border-[#457B9D]/10 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <Link to={`/memorial/${m.id}`}>
                    <div className="h-40 bg-[#1A3C6C]/10">
                      {m.image ? (
                        <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Icon name="Landmark" size={32} className="text-[#457B9D]/30" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[#1A3C6C] mb-2">{m.title}</h3>
                      <p className="text-[#457B9D] text-sm line-clamp-2">{m.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to={`/district/${districtId}`}>
              <Button variant="outline" className="border-[#1A3C6C] text-[#1A3C6C] hover:bg-[#1A3C6C] hover:text-white">
                Смотреть все
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemorialDetail;
