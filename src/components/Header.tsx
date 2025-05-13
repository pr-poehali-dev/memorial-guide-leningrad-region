
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white bg-opacity-95 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Icon 
              name="Landmark" 
              size={24} 
              className={scrolled ? "text-[#1A3C6C]" : "text-white"} 
            />
            <span 
              className={`text-xl font-bold font-montserrat ${
                scrolled ? "text-[#1A3C6C]" : "text-white"
              }`}
            >
              Пути славы
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" label="Главная" scrolled={scrolled} />
            <NavLink to="/districts" label="Районы" scrolled={scrolled} />
            <NavLink to="/map" label="Карта" scrolled={scrolled} />
            <NavLink to="/about" label="О проекте" scrolled={scrolled} />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`p-0 hover:bg-transparent ${
                    scrolled ? "text-[#1A3C6C] hover:text-[#457B9D]" : "text-white hover:text-white/80"
                  }`}
                >
                  <span className="font-open-sans">Маршруты</span>
                  <Icon name="ChevronDown" size={16} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link to="/routes/popular" className="w-full">Популярные маршруты</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/routes/thematic" className="w-full">Тематические маршруты</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/routes/create" className="w-full">Создать свой маршрут</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              className={scrolled ? "bg-[#E63946] hover:bg-[#c8313d]" : "bg-white text-[#1A3C6C] hover:bg-white/90"}
            >
              Начать путешествие
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${scrolled ? "text-[#1A3C6C]" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2 py-4 shadow-md">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <MobileNavLink to="/" label="Главная" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/districts" label="Районы" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/map" label="Карта" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/about" label="О проекте" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/routes/popular" label="Популярные маршруты" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/routes/thematic" label="Тематические маршруты" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/routes/create" label="Создать свой маршрут" onClick={() => setMobileMenuOpen(false)} />
            
            <Button className="w-full mt-2 bg-[#E63946] hover:bg-[#c8313d]">
              Начать путешествие
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

// Desktop Navigation Link
interface NavLinkProps {
  to: string;
  label: string;
  scrolled: boolean;
}

const NavLink = ({ to, label, scrolled }: NavLinkProps) => (
  <Link 
    to={to} 
    className={`text-sm font-open-sans transition-colors ${
      scrolled 
        ? "text-[#1A3C6C] hover:text-[#457B9D]" 
        : "text-white hover:text-white/80"
    }`}
  >
    {label}
  </Link>
);

// Mobile Navigation Link
interface MobileNavLinkProps {
  to: string;
  label: string;
  onClick: () => void;
}

const MobileNavLink = ({ to, label, onClick }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className="py-2 border-b border-gray-100 text-[#1A3C6C] font-open-sans flex justify-between items-center"
    onClick={onClick}
  >
    {label}
    <Icon name="ChevronRight" size={16} />
  </Link>
);

export default Header;
