import { icons } from "lucide-react";

const Icon = ({ name, color, size, className="" }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size || 24} className={className} strokeWidth={1.5} absoluteStrokeWidth={true}/>;
};

export default Icon;
