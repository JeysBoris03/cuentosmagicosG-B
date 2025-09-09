import { Volume2 } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { tongueTwisters } from "@/lib/data";

export default function TrabalenguasPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 font-headline">Trabalenguas Divertidos</h1>
      <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
        ¡Atrévete a decirlos rápido! Un reto para tu lengua y una dosis de diversión.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tongueTwisters.map((twister, index) => (
          <Card key={index} className="flex flex-col justify-between shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg font-medium text-foreground/90 italic">
                &ldquo;{twister}&rdquo;
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" disabled>
                <Volume2 className="mr-2 h-4 w-4" />
                Escuchar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
