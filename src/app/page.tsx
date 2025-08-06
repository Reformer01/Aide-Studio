
import { AnimatedGrid } from "@/components/animated-grid";

export default function Home() {
  return (
    <div className="relative h-[calc(100vh-5rem)] w-full overflow-hidden bg-background">
      <AnimatedGrid />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1 className="text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Grid Motion
        </h1>
      </div>
    </div>
  );
}
