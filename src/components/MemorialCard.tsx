
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface MemorialCardProps {
  id: string;
  title: string;
  district: string;
  description: string;
  image?: string;
  type?: string;
  year?: string;
}

const MemorialCard = ({ 
  id, 
  title, 
  district, 
  description, 
  image, 
  type = "Мемориал",
  year 
}: MemorialCardProps) => {
  return (
    <Card className="overflow-hidden shadow-md border-0 h-full flex flex-col transition-transform hover:shadow-lg duration-300">
      <div className="h-48 overflow-hidden bg-[#1A3C6C]/10">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#1A3C6C]/5">
            <Icon name="Landmark" size={40} className="text-[#457B9D]/50" />
          </div>
        )}
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-[#457B9D] mb-2">
          <Icon name="MapPin" size={16} />
          <span className="text-sm font-open-sans">{district} район</span>
        </div>
        
        <div className="flex gap-2 mb-3">
          <Badge variant="outline" className="bg-[#1A3C6C]/5 text-[#1A3C6C]">
            {type}
          </Badge>
          {year && (
            <Badge variant="outline" className="bg-[#457B9D]/5 text-[#457B9D]">
              {year}
            </Badge>
          )}
        </div>
        
        <h3 className="text-lg font-bold mb-2 font-montserrat text-[#1A3C6C]">{title}</h3>
        
        <p className="text-[#8D99AE] font-open-sans text-sm mb-4 flex-grow">
          {description.length > 150 ? `${description.substring(0, 150)}...` : description}
        </p>
        
        <div className="mt-auto">
          <Link to={`/memorial/${id}`}>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full border-[#1A3C6C] text-[#1A3C6C] hover:bg-[#1A3C6C] hover:text-white transition-colors"
            >
              Подробнее
              <Icon name="ChevronRight" size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemorialCard;
