import { StoryGenerator } from "@/components/features/story-generator";
import { Lightbulb } from "lucide-react";

export default function CrearHistoriaPage() {
  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <Lightbulb className="mx-auto h-16 w-16 text-accent mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Crea tu Historia</h1>
        <p className="text-center text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
          ¿Listo para ser un autor? Describe los personajes, lugares y objetos que quieres en tu cuento, y la magia de la IA creará una historia para ti.
        </p>
      </div>
      <StoryGenerator />
    </div>
  );
}
