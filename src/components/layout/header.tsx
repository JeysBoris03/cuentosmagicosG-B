'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from './logo';

const navLinks = [
  { href: '/cuentos', label: 'Cuentos' },
  { href: '/trabalenguas', label: 'Trabalenguas' },
  { href: '/crear-historia', label: 'Crea tu Historia' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-4', className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsMenuOpen(false)}
          className={cn(
            'text-lg font-medium transition-colors hover:text-primary',
            pathname.startsWith(link.href) ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex">
            <NavLinks />
        </div>

        <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
            </Button>
        </div>
      </div>
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
          <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                  <Logo />
              </div>
              <NavLinks className="flex-col items-start gap-6" />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
