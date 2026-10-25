import {
  Building2,
  Briefcase,
  Cpu,
  Factory,
  HardHat,
  HeartPulse,
  Landmark,
  Scale,
  ShieldCheck,
  Truck,
  Zap,
  Construction,
  type LucideProps,
} from "lucide-react";

const icons = {
  building: Building2,
  hardhat: HardHat,
  scale: Scale,
  briefcase: Briefcase,
  shield: ShieldCheck,
  heart: HeartPulse,
  factory: Factory,
  construction: Construction,
  zap: Zap,
  truck: Truck,
  landmark: Landmark,
  cpu: Cpu,
};

export type IconName = keyof typeof icons;

export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name as IconName] ?? ShieldCheck;
  return <Cmp aria-hidden {...props} />;
}
