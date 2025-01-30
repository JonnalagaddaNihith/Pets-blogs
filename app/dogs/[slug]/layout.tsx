import { Breadcrumb } from "@/components/ui/breadcrumb";
import { allPets } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allPets.find((pet) => 
    pet.slug === slug && pet.category === "dogs"
  );
  if (!doc) notFound();
  return doc;
}

export default async function Layout({ children, params }: LayoutProps) {
  const doc = await getDocFromParams(params.slug);

  return (
    <div className="container max-w-3xl mx-auto px-4">
      <Breadcrumb category="dogs" title={doc.title} />
      {children}
    </div>
  );
}
