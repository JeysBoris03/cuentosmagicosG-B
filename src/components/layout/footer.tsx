import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from './logo';

const socialLinks = [
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: Twitter, href: '#', name: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <Logo />
            <div className="flex gap-4">
                {socialLinks.map((link) => (
                    <Link key={link.name} href={link.href} aria-label={link.name} className="text-muted-foreground hover:text-primary transition-colors">
                        <link.icon className="h-6 w-6" />
                    </Link>
                ))}
            </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cuentos Mágicos. Todos los derechos reservados.</p>
          <Link href="#" className="underline-offset-4 hover:text-primary hover:underline transition-colors">Términos de Servicio</Link>
        </div>
      </div>
    </footer>
  );
}
