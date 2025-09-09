import { notFound } from "next/navigation";
import Image from "next/image";

import { stories, type Story } from "@/lib/data";
import { AudioPlayer } from "@/components/features/audio-player";

export async function generateStaticParams() {
  return stories.map((story) => ({
    storyId: story.id,
  }));
}

function getStory(storyId: string): Story | undefined {
  return stories.find((s) => s.id === storyId);
}

export default function StoryPage({ params }: { params: { storyId:string } }) {
  const story = getStory(params.storyId);

  if (!story) {
    notFound();
  }

  return (
    <article className="container max-w-4xl py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline">{story.title}</h1>
        <p className="text-xl text-muted-foreground mt-4">{story.synopsis}</p>
      </div>

      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-12 shadow-lg">
        <Image
          src={story.coverImage}
          alt={`Ilustración para ${story.title}`}
          fill
          className="object-cover"
          data-ai-hint={story.dataAiHint}
          priority
        />
      </div>

      <div className="max-w-none mx-auto text-xl text-foreground/90 leading-relaxed space-y-6">
        {story.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      
      <div className="mt-12">
        <AudioPlayer textToSpeech={story.content} />
      </div>
    </article>
  );
}
