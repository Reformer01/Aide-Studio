
import { AnimatedGrid } from "@/components/animated-grid";
import GravityDemo from "@/components/gravity-demo";

export default function Home() {
  return (
    <div className="relative h-[calc(100vh-5rem)] w-full overflow-hidden bg-background">
      <AnimatedGrid />
      <div className="absolute inset-0">
        <GravityDemo />
      </div>
    </div>
  );
}
