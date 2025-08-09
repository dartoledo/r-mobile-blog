'use client';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { type Post } from '@/lib/posts';
import Autoplay from "embla-carousel-autoplay";
import { Badge } from '../ui/badge';

type FeaturedPostsCarouselProps = {
  posts: Post[];
};

export function FeaturedPostsCarousel({ posts }: FeaturedPostsCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full"
    >
      <CarouselContent>
        {posts.map((post) => (
          <CarouselItem key={post.id}>
            <div className="p-1">
              <Card className="overflow-hidden">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes=" (max-width: 768px) 80vw, 400px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint="technology mobile"
                    />
                  </div>
                </Link>
                <CardHeader>
                   <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                  <CardTitle className="font-headline text-lg mt-2">
                     <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
