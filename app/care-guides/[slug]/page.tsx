import type { Guide } from "contentlayer/generated";
import { allGuides } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getGuideFromParams(slug: string): Promise<Guide> {
  const guide = allGuides.find((guide) => 
    guide._raw.sourceFileName.replace(/\.mdx$/, '') === slug
  );
  if (!guide) notFound();
  return guide;
}

export async function generateStaticParams() {
  return allGuides.map((guide) => ({
    slug: guide._raw.sourceFileName.replace(/\.mdx$/, ''),
  }));
}

export default async function Page({ params }: PageProps) {
  const guide = await getGuideFromParams(params.slug);
  const Content = getMDXComponent(guide.body.code);

  return (
    <article className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{guide.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground mb-8">
          {guide.tags?.length > 0 && (
            <div className="flex gap-2">
              {guide.tags.map((tag) => (
                <span key={tag} className="text-sm bg-muted px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="mb-8">
          <img
            src={guide.image}
            alt={guide.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="prose prose-lg max-w-none text-black">
          <p className="text-xl text-muted-foreground mb-8">
            {guide.description}
          </p>
          <Content />
        </div>
      </div>
    </article>
  );
} 