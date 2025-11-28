"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, forwardRef } from 'react';
import TetrisLoading from './tetris-loader';
import { Slot } from '@radix-ui/react-slot';

type LoadingLinkProps = React.ComponentProps<typeof Link> & {
  asChild?: boolean;
};

const LoadingLink = forwardRef<HTMLAnchorElement, LoadingLinkProps>(({ href, onClick, children, asChild, ...props }, ref) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    if (e.defaultPrevented) {
      return;
    }

    e.preventDefault();
    setIsLoading(true);

    // Simulate loading time before navigation
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
  
  const Comp = asChild ? Slot : 'a';

  if (asChild && React.isValidElement(children)) {
    return (
      <Slot onClick={handleClick} {...props}>
        {React.cloneElement(children, { ref })}
      </Slot>
    );
  }
  
  return (
    <Link href={href} onClick={handleClick} {...props} ref={ref}>
      {children}
    </Link>
  );
});
LoadingLink.displayName = "LoadingLink";


export { LoadingLink };
