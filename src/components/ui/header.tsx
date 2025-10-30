"use client";

import { Button } from "@/components/ui/button";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { LoadingLink } from "./loading-link";

function Header1() {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Features",
            href: "/features",
            useLoader: true,
        },
        {
            title: "Pricing",
            href: "/pricing",
        },
        {
            title: "About",
            href: "/about",
        },
    ];

    const [isOpen, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    {navigationItems.map((item) => (
                        <div key={item.title}>
                            {item.useLoader ? (
                                <LoadingLink href={item.href} asChild>
                                    <Button variant="ghost">{item.title}</Button>
                                </LoadingLink>
                            ) : (
                                <Link href={item.href} asChild>
                                    <Button variant="ghost">{item.title}</Button>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex lg:justify-center">
                    <Link href="/" asChild>
                         <Button variant="link" className="font-semibold">Aide</Button>
                    </Link>
                </div>
                <div className="flex justify-end w-full gap-4">
                    <Link href="/sign-in" asChild>
                      <Button>Sign In</Button>
                    </Link>
                    <div className="border-r hidden md:inline"></div>
                    <Link href="/sign-up" asChild>
                      <Button>Sign Up</Button>
                    </Link>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8 max-h-[calc(100vh-5rem)] overflow-y-auto">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {item.href && (
                                            item.useLoader ? (
                                                <LoadingLink
                                                    href={item.href}
                                                    onClick={handleLinkClick}
                                                >
                                                    <div className="flex justify-between items-center">
                                                      <span className="text-lg">{item.title}</span>
                                                      <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                                    </div>
                                                </LoadingLink>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className="flex justify-between items-center"
                                                    onClick={handleLinkClick}
                                                >
                                                    <span className="text-lg">{item.title}</span>
                                                    <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                                </Link>
                                            )
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };