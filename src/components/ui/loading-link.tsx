"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ComponentProps, PropsWithChildren } from 'react';

type LoadingLinkProps = ComponentProps<typeof Link>;

export function LoadingLink({ href, ...props }: PropsWithChildren<LoadingLinkProps>) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/loading');
    setTimeout(() => {
      router.push(href.toString());
    }, 1000); 
  };

  return (
    <Link
      href={href}
      {...props}
      onClick={handleClick}
    />
  );
}
