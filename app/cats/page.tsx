"use client";

import { allPets } from "contentlayer/generated";
import Link from "next/link";
import { useState } from "react";
import { Search } from 'lucide-react';

export default function CatsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const cats = allPets.filter((pet) => pet.category === "cats");

  const filteredCats = cats.filter((cat) =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-12 max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Cat Breeds</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Discover various cat breeds and learn about their unique characteristics and personalities.
        </p>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search cat breeds..."
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
        {filteredCats.map((cat) => (
          <Link key={cat._id} href={cat.url}>
            <div className="group relative overflow-hidden rounded-lg border">
              <div className="relative h-64 w-full">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-0" />
              </div>
              <h2 className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-white text-2xl font-bold text-center px-4">
                {cat.title}
              </h2>
              <div className="p-4">
                <div className="flex justify-center flex-wrap mb-2">
                  {cat.temperament.map((temp) => (
                    <span key={temp} className="bg-gray-200 text-gray-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                      {temp}
                    </span>
                  ))}
                </div>
                <p className="text-center text-gray-700 mt-2 line-clamp-2 group-hover:text-blue-500">
                  {cat.description.split('-')[1]}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}