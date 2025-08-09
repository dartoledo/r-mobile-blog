import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FeaturedPostsCarousel } from '@/components/blog/featured-posts-carousel';
import { getPosts } from '@/lib/posts';
import { ArrowRight, Network, BookOpen, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const categoryIcons = {
  'Network Updates': <Network className="h-8 w-8 text-primary" />,
  'Technology Explainers': <BookOpen className="h-8 w-8 text-primary" />,
  'User Stories': <Users className="h-8 w-8 text-primary" />,
};

export default async function Home() {
  const allPosts = await getPosts();
  const featuredPosts = allPosts.filter(post => post.featured);
  const categories = [...new Set(allPosts.map(post => post.category))];

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  The Future of Mobile is Here
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Explore the latest insights, updates, and stories from Rakuten Mobile. Discover how we're revolutionizing the telecommunications landscape.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="font-headline">
                  <Link href="/blog">
                    Read The Blog
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                 <FeaturedPostsCarousel posts={featuredPosts} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Content</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dive into topics that matter. From network innovations to heartwarming user stories, find what interests you most.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((category) => (
              <Link href={`/blog?category=${encodeURIComponent(category)}`} key={category}>
                <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {categoryIcons[category as keyof typeof categoryIcons] || <Network className="h-8 w-8 text-primary" />}
                    <CardTitle className="font-headline text-xl">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Click to view all posts in the "{category}" category.</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
