
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
