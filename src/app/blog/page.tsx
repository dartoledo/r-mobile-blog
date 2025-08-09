import { getPosts, type Post } from '@/lib/posts';
import { PostCard } from '@/components/blog/post-card';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Rakuten Mobile Insights',
  description: 'Read the latest articles, updates, and stories from the Rakuten Mobile team.',
};

type BlogPageProps = {
  searchParams: {
    category?: string;
  };
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const allPosts = await getPosts();
  const { category } = searchParams;

  const filteredPosts = category 
    ? allPosts.filter(post => post.category === category)
    : allPosts;

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          {category ? `${category}` : 'From the Blog'}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {category
            ? `Browse all articles in the "${category}" category.`
            : 'The latest news, updates, and stories from the Rakuten Mobile team.'}
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="mt-12 text-center text-muted-foreground">
          <p>No posts found in this category.</p>
        </div>
      )}
    </div>
  );
}
