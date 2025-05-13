
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface DistrictLinkProps {
  name: string;
}

const DistrictLink = ({ name }: DistrictLinkProps) => {
  return (
    <Link 
      to={`/district/${name.toLowerCase()}`}
      className="block"
    >
      <Card className="bg-white border border-[#457B9D]/20 transition-all hover:bg-[#457B9D]/10 hover:border-[#457B9D]">
        <CardContent className="p-4 flex items-center justify-between">
          <span className="font-open-sans">{name} район</span>
          <Icon name="ChevronRight" size={18} className="text-[#457B9D]" />
        </CardContent>
      </Card>
    </Link>
  );
};

const DistrictsSection = () => {
  const districts = [
    "Волосовский", "Волховский", "Всеволожский", "Выборгский",
    "Кингисеппский", "Киришский", "Кировский", "Лодейнопольский",
    "Ломоносовский", "Лужский", "Подпорожский", "Приозерский",
    "Сланцевский", "Тихвинский", "Тосненский"
  ];

  return (
    <section className="py-20 bg-[#1A3C6C]/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-montserrat text-[#1A3C6C]">
          Районы Ленинградской области
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto font-open-sans text-[#457B9D]">
          Выберите район, чтобы узнать о памятниках и мемориалах воинской славы
        </p>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {districts.map((district) => (
            <DistrictLink key={district} name={district} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistrictsSection;
