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
  story: z.string().describe('The generated children\'s story.'),
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
  prompt: `Eres un escritor de cuentos para niños. Genera un cuento corto en español basado en los siguientes elementos: {{{$input}}}. La historia debe tener un principio, un desarrollo y un final, y ser apropiada para niños pequeños. La respuesta debe ser únicamente en español.`,
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
