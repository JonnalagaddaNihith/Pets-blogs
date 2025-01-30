import type { Pet } from "contentlayer/generated";
import { allPets } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/ui/mdx-content";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string): Promise<Pet> {
  const doc = allPets.find((pet) => 
    pet.slug === slug && pet.category === "dogs"
  );
  if (!doc) notFound();
  return doc;
}

export async function generateStaticParams() {
  return allPets
    .filter((pet) => pet.category === "dogs")
    .map((pet) => ({
      slug: pet.slug,
    }));
}

export default async function Page({ params }: PageProps) {
  const doc = await getDocFromParams(params.slug);

  return (
    <article className="py-8">
      <div className="mb-8">
        <img
          src={doc.image}
          alt={doc.title}
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </div>
      <MDXContent code={doc.body.code} breed={doc} />
    </article>
  );
}