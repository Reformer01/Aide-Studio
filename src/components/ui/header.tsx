"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { LoadingLink } from "./loading-link";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "./navigation-menu";

function Header1() {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Features",
            href: "/features",
            description: "Discover what Aide can do for you.",
            useLoader: true,
            items: [
                {
                    title: "AI Chat",
                    href: "/features",
                },
                {
                    title: "Document Analysis",
                    href: "/features",
                },
                {
                    title: "Content Generation",
                    href: "/features",
                },
                {
                    title: "Productivity Tools",
                    href: "/features",
                },
            ],
        },
        {
            title: "Pricing",
            href: "/pricing",
            description: "Find the perfect plan for your needs.",
        },
        {
            title: "About",
            href: "/about",
            description: "Learn more about the team and technology behind Aide.",
            items: [
                {
                    title: "Our Mission",
                    href: "/about",
                },
                {
                    title: "Team",
                    href: "/about",
                },
                {
                    title: "Careers",
                    href: "/about",
                },
                {
                    title: "Contact Us",
                    href: "/about",
                },
            ],
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
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href && !item.items ? (
                                        item.useLoader ? (
                                            <LoadingLink href={item.href}>
                                                <Button variant="ghost">{item.title}</Button>
                                            </LoadingLink>
                                        ) : (
                                            <Link href={item.href} asChild>
                                                <Button variant="ghost">{item.title}</Button>
                                            </Link>
                                        )
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger>
                                                <Link href={item.href || '#'}>
                                                    {item.title}
                                                </Link>
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Link href="/sign-up" asChild>
                                                          <Button size="sm" className="mt-10">Start for Free</Button>
                                                        </Link>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <Link
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                            >
                                                                <span>{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center">
                    <Link href="/" className="font-semibold">Aide</Link>
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
                                        {item.href && !item.items ? (
                                            item.useLoader ? (
                                                <LoadingLink
                                                    href={item.href}
                                                    className="flex justify-between items-center"
                                                    onClick={handleLinkClick}
                                                >
                                                    <span className="text-lg">{item.title}</span>
                                                    <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
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
                                        ) : (
                                            <p className="text-lg">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="flex justify-between items-center"
                                                    onClick={handleLinkClick}
                                                >
                                                    <span className="text-muted-foreground">
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1" />
                                                </Link>
                                            ))}
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
