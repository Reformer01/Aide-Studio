"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ComponentProps, PropsWithChildren, useState } from 'react';
import TetrisLoading from './tetris-loader';

type LoadingLinkProps = ComponentProps<typeof Link>;

export function LoadingLink({ href, onClick, ...props }: PropsWithChildren<LoadingLinkProps>) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsLoading(true);

    if (onClick) {
        onClick(e);
    }

    setTimeout(() => {
      router.push(href.toString());
      // No need to set isLoading to false, as the component will unmount on navigation
    }, 1000); 
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <TetrisLoading />
      </div>
    );
  }

  return (
    <Link
      href={href}
      {...props}
      onClick={handleClick}
    />
  );
}
