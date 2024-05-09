import { icons } from "lucide-react";

const Icon = ({ name, color, size, className="" , strokeWidth=1.5}) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size || 24} className={className} strokeWidth={strokeWidth} absoluteStrokeWidth={true}/>;
};

export default Icon;
