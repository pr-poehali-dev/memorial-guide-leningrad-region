
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface DistrictCardProps {
  name: string;
  monumentsCount: number;
  image?: string;
}

const DistrictCard = ({ name, monumentsCount, image }: DistrictCardProps) => {
  return (
    <Link to={`/district/${name.toLowerCase()}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-[#457B9D]/10 hover:border-[#457B9D]/30 h-full">
        <div className="h-40 overflow-hidden bg-[#1A3C6C]/10">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#1A3C6C]/5">
              <Icon name="MapPin" size={32} className="text-[#457B9D]/50" />
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold font-montserrat text-[#1A3C6C]">{name} район</h3>
          <p className="text-sm text-[#457B9D] mt-1 font-open-sans flex items-center gap-1">
            <Icon name="Landmark" size={16} />
            <span>{monumentsCount} памятных мест</span>
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DistrictCard;
