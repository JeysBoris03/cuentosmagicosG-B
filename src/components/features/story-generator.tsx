'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Wand2 } from 'lucide-react';
import Image from 'next/image';

import { generateChildrensStory, type GenerateChildrensStoryOutput } from '@/ai/flows/generate-childrens-story';
import { generateStoryImage, type GenerateStoryImageOutput } from '@/ai/flows/generate-story-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  prompt: z.string().min(10, {
    message: '¡Cuéntanos un poco más! Tu idea debe tener al menos 10 caracteres.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

type StoryResult = GenerateChildrensStoryOutput & GenerateStoryImageOutput;

export function StoryGenerator() {
  const [result, setResult] = useState<StoryResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      setLoadingMessage('Nuestros duendes escritores están creando tu historia...');
      const storyResult = await generateChildrensStory(data.prompt);
      
      setLoadingMessage('¡Dando color a tu aventura! Creando la ilustración...');
      const imageResult = await generateStoryImage(storyResult.synopsis);

      setResult({ ...storyResult, ...imageResult });

    } catch (error) {
      console.error('Error al generar la historia:', error);
      toast({
        title: '¡Oh no! Algo salió mal.',
        description: 'No pudimos generar tu historia. Por favor, inténtalo de nuevo.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
      setLoadingMessage('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Despierta tu imaginación... ¿Qué objetos, animales o personajes quieres en tu cuento? Por ejemplo: 'un dragón valiente, una princesa que ama la astronomía y un bosque de caramelo'"
                        className="min-h-[120px] text-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full text-lg py-6">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Creando magia...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" />
                    ¡Crear mi Cuento!
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="text-center mt-12">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground text-lg">{loadingMessage}</p>
        </div>
      )}

      {result && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8 font-headline">Tu Historia Mágica</h2>
          <Card className="shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <Image
                  src={result.imageUrl}
                  alt={result.title}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full md:w-48 h-48"
                  data-ai-hint={result.dataAiHint}
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-primary font-headline mb-2">{result.title}</h3>
                  <p className="text-muted-foreground italic">{result.synopsis}</p>
                </div>
              </div>
              
              <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                {result.story.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
