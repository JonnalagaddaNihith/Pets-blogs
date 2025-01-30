import { Pet } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { BreedStatsTable } from "./breed-stats-table";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { MDXComponents } from "mdx/types";

interface MDXContentProps {
  code: string;
  breed: Pet;
}

export function MDXContent({ code, breed }: MDXContentProps) {
  const Content = useMDXComponent(code);
  
  const components: MDXComponents = {
    h2: ({ children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
      const isCharacteristics = children === "Characteristics";
      return (
        <>
          {isCharacteristics && <BreedStatsTable breed={breed} />}
          <h2 className="text-2xl font-bold mt-8 mb-4" {...props}>{children}</h2>
        </>
      );
    },
  };

  return (
    <div className="prose prose-lg max-w-none text-black">
      <Content components={components} />
    </div>
  );
} 