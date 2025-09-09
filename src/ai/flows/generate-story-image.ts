'use server';
/**
 * @fileOverview Generates an image for a children's story.
 *
 * - generateStoryImage - A function that generates an image based on a story synopsis.
 * - GenerateStoryImageInput - The input type for the generateStoryImage function.
 * - GenerateStoryImageOutput - The return type for the generateStoryImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStoryImageInputSchema = z
  .string()
  .describe('A short synopsis of a children\'s story in Spanish.');

export type GenerateStoryImageInput = z.infer<
  typeof GenerateStoryImageInputSchema
>;

const GenerateStoryImageOutputSchema = z.object({
  imageUrl: z
    .string()
    .describe(
      "The generated image as a data URI. Expected format: 'data:image/png;base64,<encoded_data>'."
    ),
  dataAiHint: z
    .string()
    .describe('Two keywords in english for the image hint.'),
});

export type GenerateStoryImageOutput = z.infer<
  typeof GenerateStoryImageOutputSchema
>;

export async function generateStoryImage(
  input: GenerateStoryImageInput
): Promise<GenerateStoryImageOutput> {
  return generateStoryImageFlow(input);
}

const generateStoryImageFlow = ai.defineFlow(
  {
    name: 'generateStoryImageFlow',
    inputSchema: GenerateStoryImageInputSchema,
    outputSchema: GenerateStoryImageOutputSchema,
  },
  async synopsis => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `Generate a vibrant, whimsical, storybook-style illustration for a children's story with the following theme: "${synopsis}". The style should be friendly, colorful, and suitable for young children.`,
    });

    const {output} = await ai.generate({
      prompt: `Based on the following story synopsis, provide two simple keywords in English that describe the main subjects of the image, to be used for an AI hint. Synopsis: "${synopsis}"`,
      output: {
        schema: z.object({
          dataAiHint: z
            .string()
            .describe('Two keywords in english for the image hint.'),
        }),
      },
    });

    return {
      imageUrl: media.url,
      dataAiHint: output?.dataAiHint || 'storybook illustration',
    };
  }
);
