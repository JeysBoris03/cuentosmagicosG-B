// src/ai/flows/generate-childrens-story.ts
'use server';

/**
 * @fileOverview Generates a children's story based on user input.
 *
 * - generateChildrensStory - A function that generates a children's story.
 * - GenerateChildrensStoryInput - The input type for the generateChildrensStory function.
 * - GenerateChildrensStoryOutput - The return type for the generateChildrensStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateChildrensStoryInputSchema = z.string().describe(
  'A description of the desired story including characters, setting and plot elements. For example: \'a brave dragon, a princess who loves astronomy, and a candy forest\'.'
);

export type GenerateChildrensStoryInput = z.infer<
  typeof GenerateChildrensStoryInputSchema
>;

const GenerateChildrensStoryOutputSchema = z.object({
  title: z.string().describe('The title of the generated children\'s story.'),
  story: z.string().describe('The generated children\'s story.'),
  synopsis: z.string().describe('A short synopsis of the story.'),
});

export type GenerateChildrensStoryOutput = z.infer<
  typeof GenerateChildrensStoryOutputSchema
>;

export async function generateChildrensStory(
  input: GenerateChildrensStoryInput
): Promise<GenerateChildrensStoryOutput> {
  return generateChildrensStoryFlow(input);
}

const generateChildrensStoryPrompt = ai.definePrompt({
  name: 'generateChildrensStoryPrompt',
  input: {schema: GenerateChildrensStoryInputSchema},
  output: {schema: GenerateChildrensStoryOutputSchema},
  prompt: `Eres un escritor de cuentos para niños. Genera un cuento corto en español basado ESTRICTAMENTE en los siguientes elementos: {{{$input}}}.
La historia debe tener un título, un principio, un desarrollo y un final, y ser apropiada para niños pequeños.
Crea un título para la historia.
Crea un resumen (synopsis) corto de la historia.
La respuesta debe ser únicamente en español.`,
});

const generateChildrensStoryFlow = ai.defineFlow(
  {
    name: 'generateChildrensStoryFlow',
    inputSchema: GenerateChildrensStoryInputSchema,
    outputSchema: GenerateChildrensStoryOutputSchema,
  },
  async input => {
    const {output} = await generateChildrensStoryPrompt(input);
    return output!;
  }
);
