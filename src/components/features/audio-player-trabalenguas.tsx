"use client";

import { textToSpeech } from "@/ai/flows/text-to-speech";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Play, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function AudioPlayerTrabalenguas({ textToSpeech: text }: { textToSpeech: string }) {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Cleanup audio element on component unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  const handlePlay = async () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      return;
    }
    
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      return;
    }

    setIsLoading(true);
    try {
      const { media } = await textToSpeech(text);
      const audio = new Audio(media);
      audioRef.current = audio;
      setAudioUrl(media);

      audio.onended = () => {
        setIsPlaying(false);
      };
      audio.onplay = () => {
        setIsPlaying(true);
      };
      audio.onpause = () => {
        setIsPlaying(false)
      }

      audio.play();

    } catch (error) {
      console.error("Error generating audio:", error);
      toast({
        title: "¡Oh no! Algo salió mal.",
        description:
          "No pudimos generar el audio. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const Icon = isLoading ? Loader2 : (isPlaying ? Volume2 : Play);

  return (
    <CardFooter>
      <Button onClick={handlePlay} disabled={isLoading} variant="outline" className="w-full">
        <Icon className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
        {isLoading ? "Cargando..." : (isPlaying ? "Escuchando..." : "Escuchar")}
      </Button>
    </CardFooter>
  );
}
