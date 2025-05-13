
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FeaturedMemorialProps { 
  title: string; 
  location: string; 
  image: string; 
  description: string;
}

const FeaturedMemorial = ({ title, location, image, description }: FeaturedMemorialProps) => {
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

const FeaturedMemorialsSection = () => {
  const memorials = [
    {
      title: "Мемориал «Цветок жизни»",
      location: "Всеволожский район",
      image: "https://images.unsplash.com/photo-1558551649-e6e40b38b38f?q=80&w=1936",
      description: "Посвящён погибшим в Ленинграде детям. Состоит из трёх частей: «Цветка жизни», аллеи Дружбы и композиции «Дневник Тани Савичевой»."
    },
    {
      title: "Форт «Красная Горка»",
      location: "Ломоносовский район",
      image: "https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?q=80&w=2070",
      description: "На территории форта, который в годы войны был центром обороны Ораниенбаумского плацдарма, располагается музей и мемориал."
    },
    {
      title: "Стела «Город воинской славы»",
      location: "Тихвинский район",
      image: "https://images.unsplash.com/photo-1601128666217-69c8e2255562?q=80&w=1964",
      description: "Установлена в 2010 году в честь присвоения городу Тихвину почётного звания Российской Федерации «Город воинской славы»."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat text-[#1A3C6C]">
          Значимые мемориалы
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memorials.map((memorial, index) => (
            <FeaturedMemorial 
              key={index}
              title={memorial.title}
              location={memorial.location}
              image={memorial.image}
              description={memorial.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-[#1A3C6C] hover:bg-[#0f2a51] text-white">
            Смотреть все мемориалы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMemorialsSection;
