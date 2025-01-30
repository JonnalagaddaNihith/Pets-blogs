import { Button } from "@/components/ui/button";
import { Cat, Dog, Heart } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.0&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white bg-black/50 p-4 rounded-lg">
                Welcome to Tails & Paws
              </h1>
              <p className="mx-auto max-w-[700px] text-white text-xl md:text-2xl bg-black/50 p-4 rounded-lg">
                Your comprehensive guide to understanding and caring for your furry friends
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/dogs">
                <Button size="lg" className="bg-primary">
                  Explore Dog Breeds
                </Button>
              </Link>
              <Link href="/cats">
                <Button size="lg" variant="outline" className="bg-white">
                  Discover Cat Breeds
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Link href="/dogs" className="block group hover:scale-105 transition-transform">
              <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg hover:bg-muted/50 transition-colors">
                <Dog className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold">Dog Breeds</h2>
                <p className="text-muted-foreground">
                  Explore comprehensive guides about different dog breeds, their characteristics,
                  and care requirements.
                </p>
              </div>
            </Link>

            <Link href="/cats" className="block group hover:scale-105 transition-transform">
              <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg hover:bg-muted/50 transition-colors">
                <Cat className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold">Cat Breeds</h2>
                <p className="text-muted-foreground">
                  Discover detailed information about various cat breeds, their personalities,
                  and specific needs.
                </p>
              </div>
            </Link>

            <Link href="/care-guides" className="block group hover:scale-105 transition-transform">
              <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg hover:bg-muted/50 transition-colors">
                <Heart className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold">Care Guides</h2>
                <p className="text-muted-foreground">
                  Access expert advice on pet care, nutrition, health, and behavior management.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;