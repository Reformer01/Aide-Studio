"use client";

import { useState, useEffect } from "react";

interface AnimatedSquareProps {
  x: number;
  y: number;
  size: number;
}

export function AnimatedSquare({ x, y, size }: AnimatedSquareProps) {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const duration = Math.random() * 2 + 3; // 3s to 5s
    const delay = Math.random() * 4; // 0s to 4s
    
    setStyle({
      animation: `pulse ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    });
  }, []);

  return (
    <rect
      x={x}
      y={y}
      width={size - 1}
      height={size - 1}
      rx="4"
      ry="4"
      fill="hsl(var(--primary))"
      style={style}
      className="opacity-0"
    />
  );
}
