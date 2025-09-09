'use client';

import { textToSpeech } from '@/ai/flows/text-to-speech';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Play, StopCircle, Volume2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function AudioPlayer({ textToSpeech: text }: { textToSpeech: string }) {
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
    };
  }, []);

  const handlePlay = async () => {
    if (audioUrl) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
      return;
    }

    setIsLoading(true);
    try {
      const { media } = await textToSpeech(text);
      setAudioUrl(media);
    } catch (error) {
      console.error('Error generating audio:', error);
      toast({
        title: '¡Oh no! Algo salió mal.',
        description:
          'No pudimos generar el audio para esta historia. Por favor, inténtalo de nuevo.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    if (audioUrl && !audioRef.current) {
        const audio = new Audio(audioUrl);
        audioRef.current = audio;
        audio.play();
        setIsPlaying(true);

        audio.onended = () => {
            setIsPlaying(false);
        };
    }
  }, [audioUrl])

  const Icon = isPlaying ? StopCircle : Play;

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <Button
        onClick={handlePlay}
        disabled={isLoading}
        size="lg"
        className="w-full max-w-md"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Cargando audio...
          </>
        ) : (
          <>
            <Icon className="mr-2 h-5 w-5" />
            {isPlaying ? 'Detener' : 'Escuchar la historia'}
          </>
        )}
      </Button>
      {audioUrl && (
        <audio ref={audioRef} src={audioUrl} className="w-full max-w-md mt-4" controls onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
      )}
    </div>
  );
}
