"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { AnimatedSquare } from "./animated-square";

export function AnimatedGrid() {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const squareSize = 50;

  useEffect(() => {
    const gridEl = gridRef.current;
    
    const calculateGrid = () => {
      if (gridEl) {
        const { clientWidth, clientHeight } = gridEl;
        setColumns(Math.ceil(clientWidth / squareSize));
        setRows(Math.ceil(clientHeight / squareSize));
      }
    };

    calculateGrid();

    const resizeObserver = new ResizeObserver(calculateGrid);
    if (gridEl) {
      resizeObserver.observe(gridEl);
    }

    return () => {
      if (gridEl) {
        resizeObserver.unobserve(gridEl);
      }
    };
  }, []);

  const squares = useMemo(() => {
    return Array.from({ length: columns * rows }).map((_, i) => {
      const col = i % columns;
      const row = Math.floor(i / columns);
      return (
        <AnimatedSquare
          key={`${row}-${col}`}
          x={col * squareSize}
          y={row * squareSize}
          size={squareSize}
        />
      );
    });
  }, [columns, rows]);

  return (
    <div ref={gridRef} className="absolute inset-0 h-full w-full">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern
            id="grid"
            width={squareSize}
            height={squareSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${squareSize} 0 L 0 0 0 ${squareSize}`}
              fill="none"
              stroke="hsl(var(--primary) / 0.1)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {squares}
      </svg>
    </div>
  );
}
