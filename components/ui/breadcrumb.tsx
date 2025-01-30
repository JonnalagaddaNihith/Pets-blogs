import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbProps {
  category: 'cats' | 'dogs';
  title: string;
}

export function Breadcrumb({ category, title }: BreadcrumbProps) {
  const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);
  
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-1 text-sm text-muted-foreground">
      <Link 
        href="/" 
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link 
        href={`/${category}`} 
        className="hover:text-foreground transition-colors"
      >
        {categoryLabel}
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground font-medium">{title}</span>
    </nav>
  );
}
