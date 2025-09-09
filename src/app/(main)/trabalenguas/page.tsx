import { Card, CardContent } from "@/components/ui/card";
import { tongueTwisters } from "@/lib/data";
import { AudioPlayerTrabalenguas } from "@/components/features/audio-player-trabalenguas";

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
            <CardContent className="p-6 flex-1 flex items-center">
              <p className="text-lg font-medium text-foreground/90 italic">
                &ldquo;{twister}&rdquo;
              </p>
            </CardContent>
            <AudioPlayerTrabalenguas textToSpeech={twister} />
          </Card>
        ))}
      </div>
    </div>
  );
}
