import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-foreground hover:text-primary transition-colors", className)}>
      <Sparkles className="h-7 w-7 text-accent" />
      <span className="text-2xl font-bold tracking-tight font-headline">
        Cuentos Mágicos de Gaela y Bruna
      </span>
    </Link>
  );
}
