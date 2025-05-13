
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="bg-[#F1FAEE] border-0 shadow-md transition-transform hover:scale-105">
      <CardContent className="pt-6">
        <div className="rounded-full bg-[#457B9D] p-3 w-12 h-12 mb-4 flex items-center justify-center">
          <Icon name={icon} className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2 font-montserrat text-[#1A3C6C]">{title}</h3>
        <p className="font-open-sans text-[#457B9D]">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: "Landmark",
      title: "Памятники и мемориалы",
      description: "Подробная информация о мемориалах воинской славы во всех районах Ленинградской области."
    },
    {
      icon: "MapPin",
      title: "Интерактивная карта",
      description: "Удобная навигация по всем объектам с возможностью построения маршрутов."
    },
    {
      icon: "History",
      title: "Истории героев",
      description: "Рассказы о подвигах и судьбах людей, чьими именами названы улицы и площади."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat text-[#1A3C6C]">
          О нашем проекте
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
