import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { stories, tongueTwisters } from "@/lib/data";

const carouselImages = [
  { src: "https://picsum.photos/1200/600?random=1", alt: "Ilustración de un castillo de fantasía", dataAiHint: "fantasy castle" },
  { src: "https://picsum.photos/1200/600?random=2", alt: "Ilustración de un bosque encantado", dataAiHint: "enchanted forest" },
  { src: "https://picsum.photos/1200/600?random=3", alt: "Ilustración de animales amigables en un claro", dataAiHint: "animal friends" },
];

export default function HomePage() {
  const popularStories = stories.slice(0, 3);
  const tongueTwisterOfTheDay = tongueTwisters[new Date().getDate() % tongueTwisters.length];

  return (
    <div className="flex-1">
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] md:h-[70vh] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    data-ai-hint={image.dataAiHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground drop-shadow-lg font-headline">
            Donde la imaginación cobra vida
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/90 drop-shadow-md">
            Explora un universo de cuentos infantiles, trabalenguas divertidos y crea tus propias aventuras mágicas.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Cuentos Populares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularStories.map((story) => (
              <Card key={story.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Link href={`/cuentos/${story.id}`}>
                    <Image
                      src={story.coverImage}
                      alt={`Portada de ${story.title}`}
                      width={400}
                      height={500}
                      className="w-full h-64 object-cover"
                      data-ai-hint={story.dataAiHint}
                    />
                  </Link>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold mb-2 font-headline">{story.title}</CardTitle>
                  <p className="text-muted-foreground">{story.synopsis}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={`/cuentos/${story.id}`}>
                      Leer ahora <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Trabalenguas del Día</h2>
          <div className="max-w-3xl mx-auto p-8 bg-card rounded-xl shadow-md">
            <p className="text-xl md:text-2xl font-medium text-foreground/80 italic">
              &ldquo;{tongueTwisterOfTheDay}&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container text-center">
          <Star className="w-16 h-16 text-accent mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Crea tu Propio Cuento Mágico</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Combina personajes, lugares y objetos fantásticos. ¡Nuestra IA dará vida a tu idea en una historia única!
          </p>
          <Button asChild size="lg">
            <Link href="/crear-historia">
              ¡Despierta tu imaginación!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
