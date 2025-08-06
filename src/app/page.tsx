
import { AnimatedGrid } from "@/components/animated-grid";
import { GravityDemo } from "@/components/ui/gravity-demo";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      <AnimatedGrid />
      <div className="absolute inset-0">
        <GravityDemo />
      </div>
    </div>
  );
}
