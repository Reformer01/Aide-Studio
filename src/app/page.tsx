import { AnimatedGrid } from '@/components/animated-grid';

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background font-body">
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
          Grid Motion
        </h1>
      </div>
      <AnimatedGrid />
    </div>
  );
}
