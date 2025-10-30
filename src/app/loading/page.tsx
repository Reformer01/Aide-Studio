"use client";

import TetrisLoading from "@/components/ui/tetris-loader";

export default function LoadingPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <TetrisLoading size="lg" speed="normal" />
    </div>
  );
}
