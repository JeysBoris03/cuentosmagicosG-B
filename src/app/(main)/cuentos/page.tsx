import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { stories } from "@/lib/data";

export default function CuentosPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 font-headline">Galería de Cuentos</h1>
      <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
        Sumérgete en aventuras fantásticas, conoce personajes inolvidables y descubre mundos llenos de magia.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {stories.map((story) => (
          <Card key={story.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="p-0">
                <Image
                  src={story.coverImage}
                  alt={`Portada de ${story.title}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  data-ai-hint={story.dataAiHint}
                />
            </CardHeader>
            <CardContent className="p-6 flex-1">
              <CardTitle className="text-xl font-bold mb-2 font-headline">{story.title}</CardTitle>
              <p className="text-muted-foreground text-sm line-clamp-3">{story.synopsis}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href={`/cuentos/${story.id}`}>
                  Leer cuento <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
