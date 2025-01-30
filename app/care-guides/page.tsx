"use client";

import { allGuides, Guide } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search } from 'lucide-react';

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const guides: Guide[] = allGuides.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredGuides = guides.filter((guide) =>
    guide.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-12 max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Pet Care Guides</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Discover various pet care guides and learn about their unique characteristics and care tips.
        </p>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search care guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 pl-12 pr-10 text-gray-900 bg-white rounded-full border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
            >
              <span className="text-gray-500">x</span>
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map((guide: Guide) => (
          <Link key={guide._id} href={`/care-guides/${guide.url.split('/').pop()}`}>
            <div className="group relative overflow-hidden rounded-lg border">
              <div className="h-64 w-full relative">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-0" />
                <h2 className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-white text-2xl font-bold text-center px-4 group-hover:opacity-0">
                  {guide.title}
                </h2>
              </div>
              <div className="p-4">
                <div className="flex justify-center flex-wrap mb-2">
                  {guide.tags.map((tag) => (
                    <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-center text-gray-700 mt-2 line-clamp-2 group-hover:text-blue-500">
                  {guide.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}