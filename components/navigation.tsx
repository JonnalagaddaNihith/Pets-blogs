"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PawPrint, Cat, Dog, Heart, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <PawPrint className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Tails & Paws
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/dogs"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/dogs" ? "text-foreground" : "text-foreground/60"
              )}
            >
              <div className="flex items-center space-x-2">
                <Dog className="h-4 w-4" />
                <span>Dogs</span>
              </div>
            </Link>
            <Link
              href="/cats"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/cats" ? "text-foreground" : "text-foreground/60"
              )}
            >
              <div className="flex items-center space-x-2">
                <Cat className="h-4 w-4" />
                <span>Cats</span>
              </div>
            </Link>
            <Link
              href="/care-guides"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/care-guides"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span>Care Guides</span>
              </div>
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/dogs">Dogs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/cats">Cats</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/care-guides">Care Guides</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}