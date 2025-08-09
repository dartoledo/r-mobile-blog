import { notFound } from 'next/navigation';
import { getPost, getPosts } from '@/lib/posts';
import { type Metadata } from 'next';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.title} | Rakuten Mobile Insights`,
    description: post.excerpt,
  };
}

function SocialShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `https://your-domain.com/blog/${slug}`; // Replace with actual domain in production
  const text = `Check out this article from Rakuten Mobile Insights: ${title}`;

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold">Share:</span>
      <Button variant="outline" size="icon" asChild>
        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
          <Twitter className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
          <Facebook className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
}


export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-4 text-center">
        <Link href={`/blog?category=${encodeURIComponent(post.category)}`}>
          <Badge variant="default" className="font-headline">{post.category}</Badge>
        </Link>
        <h1 className="font-headline text-4xl font-extrabold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.authorImage} alt={post.author} data-ai-hint="person" />
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{post.author}</span>
          </div>
          <span>&bull;</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </div>

      <div className="relative my-8 h-96 w-full overflow-hidden rounded-lg shadow-lg">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint="technology network"
        />
      </div>

      <div
        className="prose prose-lg mx-auto max-w-full text-foreground lg:prose-xl prose-p:text-foreground prose-headings:text-foreground prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <div className="mt-8 border-t pt-6 flex justify-between items-center">
        <SocialShareButtons title={post.title} slug={post.slug} />
        <Button asChild variant="outline">
            <Link href="/blog">
                Back to Blog
            </Link>
        </Button>
      </div>

    </article>
  );
}
