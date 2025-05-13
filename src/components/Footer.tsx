
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A3C6C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Icon name="Landmark" size={24} />
              <span className="text-xl font-bold font-montserrat">Пути славы</span>
            </Link>
            <p className="text-sm text-gray-300 font-open-sans mb-4">
              Интерактивный гид по памятникам воинской славы Ленинградской области
            </p>
            <div className="flex gap-4">
              <SocialIcon name="Facebook" />
              <SocialIcon name="Instagram" />
              <SocialIcon name="Twitter" />
              <SocialIcon name="Youtube" />
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 font-montserrat">Разделы сайта</h3>
            <ul className="space-y-2 font-open-sans">
              <FooterLink to="/" label="Главная" />
              <FooterLink to="/districts" label="Районы" />
              <FooterLink to="/map" label="Карта памятников" />
              <FooterLink to="/about" label="О проекте" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 font-montserrat">Маршруты</h3>
            <ul className="space-y-2 font-open-sans">
              <FooterLink to="/routes/popular" label="Популярные" />
              <FooterLink to="/routes/thematic" label="Тематические" />
              <FooterLink to="/routes/create" label="Создать маршрут" />
              <FooterLink to="/routes/favourites" label="Избранное" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 font-montserrat">Контакты</h3>
            <ul className="space-y-3 font-open-sans">
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={18} className="mt-1 flex-shrink-0" />
                <span>info@putiславы.рф</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={18} className="mt-1 flex-shrink-0" />
                <span>+7 (812) 123-45-67</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="mt-1 flex-shrink-0" />
                <span>Санкт-Петербург, Невский проспект, 1</span>
              </li>
            </ul>
            
            <Button className="mt-4 bg-[#E63946] hover:bg-[#c8313d]">
              Связаться с нами
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 font-open-sans mb-4 md:mb-0">
            © 2025 Пути славы. Все права защищены.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300 font-open-sans">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Условия использования
            </Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Карта сайта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ name }: { name: string }) => (
  <a 
    href="#" 
    className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
    aria-label={name}
  >
    <Icon name={name} size={16} />
  </a>
);

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link to={to} className="hover:text-gray-300 transition-colors">
      {label}
    </Link>
  </li>
);

export default Footer;
