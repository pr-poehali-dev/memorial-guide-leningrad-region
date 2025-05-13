
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
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
  );
};

export default CallToActionSection;
