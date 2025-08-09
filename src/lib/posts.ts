import 'server-only';

export type Post = {
  id: number;
  slug: string;
  title: string;
  category: 'Network Updates' | 'Technology Explainers' | 'User Stories';
  image: string;
  author: string;
  authorImage: string;
  date: string;
  excerpt: string;
  content: string;
  featured: boolean;
};

const posts: Post[] = [
  {
    id: 1,
    slug: '5g-network-expansion-in-tokyo',
    title: '5G Network Expansion in Tokyo',
    category: 'Network Updates',
    image: 'https://placehold.co/1200x600.png',
    author: 'Emi Tanaka',
    authorImage: 'https://placehold.co/100x100.png',
    date: '2024-07-15',
    excerpt: 'We are thrilled to announce a major expansion of our 5G network across the Tokyo metropolitan area, bringing ultra-fast speeds to millions.',
    content: `
      <p>We are thrilled to announce a major expansion of our 5G network across the Tokyo metropolitan area, bringing ultra-fast speeds to millions of new users. This milestone marks a significant step in our commitment to providing cutting-edge mobile technology to Japan.</p>
      <p>Our engineering teams have worked tirelessly to deploy hundreds of new cell towers, enhancing coverage and capacity. The new infrastructure leverages the latest Massive MIMO technology, ensuring a stable and high-performance connection even in densely populated areas.</p>
      <h3 class="font-headline text-xl font-semibold mt-4 mb-2">What This Means for You</h3>
      <p>With this expansion, customers in Tokyo can expect to see download speeds up to 10x faster than 4G, low latency for gaming and streaming, and more reliable connections for remote work and learning.</p>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li>Stream 4K movies with no buffering.</li>
        <li>Experience lag-free mobile gaming.</li>
        <li>Enjoy crystal-clear video calls.</li>
      </ul>
      <p>We are committed to continuing our network expansion and bringing the power of 5G to every corner of Japan. Stay tuned for more updates!</p>
    `,
    featured: true,
  },
  {
    id: 2,
    slug: 'understanding-openran-technology',
    title: 'Understanding OpenRAN Technology',
    category: 'Technology Explainers',
    image: 'https://placehold.co/1200x600.png',
    author: 'Kenji Yamamoto',
    authorImage: 'https://placehold.co/100x100.png',
    date: '2024-06-28',
    excerpt: 'What is OpenRAN and how is it revolutionizing the mobile industry? We break down the technology behind our fully virtualized network.',
    content: `
      <p>OpenRAN (Open Radio Access Network) is an approach to building mobile networks that relies on open, interoperable standards. Unlike traditional networks that use proprietary equipment from a single vendor, OpenRAN allows for a mix-and-match approach, fostering innovation and reducing costs.</p>
      <h3 class="font-headline text-xl font-semibold mt-4 mb-2">The Core Principles of OpenRAN</h3>
      <p>At its heart, OpenRAN is about disaggregation—separating the hardware and software components of the network. This allows mobile operators like Rakuten Mobile to:</p>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li>Work with a diverse ecosystem of vendors.</li>
        <li>Deploy new features faster through software updates.</li>
        <li>Automate network management and reduce operational complexity.</li>
        <li>Build a more secure and resilient infrastructure.</li>
      </ul>
      <p>Rakuten Mobile is a pioneer in this space, having built the world's first fully virtualized, cloud-native mobile network based on OpenRAN principles. This is the foundation of our ability to offer high-quality services at a lower cost to our customers.</p>
    `,
    featured: true,
  },
  {
    id: 3,
    slug: 'a-day-in-the-life-of-a-remote-worker',
    title: 'A Day in the Life of a Remote Worker',
    category: 'User Stories',
    image: 'https://placehold.co/1200x600.png',
    author: 'Yuki Sato',
    authorImage: 'https://placehold.co/100x100.png',
    date: '2024-07-05',
    excerpt: 'Meet Akari, a graphic designer from Osaka who relies on Rakuten Mobile to power her creative work from anywhere in the city.',
    content: `
      <p>Akari, a freelance graphic designer based in Osaka, starts her day not in a stuffy office, but at her favorite café overlooking the Dōtonbori canal. "My office is wherever I feel inspired," she says, sipping her morning latte. Her secret weapon? A reliable, high-speed connection from Rakuten Mobile.</p>
      <p>"My work involves uploading and downloading huge design files," Akari explains. "Before, I was chained to my home Wi-Fi. Now, with Rakuten's 5G, I can work from a park, a co-working space, or even on the train. It's completely changed my workflow and my creativity."</p>
      <h3 class="font-headline text-xl font-semibold mt-4 mb-2">Seamless Collaboration</h3>
      <p>Collaboration is key for Akari. She frequently has video calls with clients from around the world. "The connection is so stable, I never have to worry about drop-offs or pixelated video. It makes me look professional and keeps my clients happy."</p>
      <p>From the first email of the day to uploading her final project, Rakuten Mobile provides the seamless connectivity that allows Akari to thrive. Her story is a testament to how flexible, powerful mobile technology can empower individuals to live and work on their own terms.</p>
    `,
    featured: false,
  },
  {
    id: 4,
    slug: 'rakuten-symphony-global-impact',
    title: 'How Rakuten Symphony is Taking Our Tech Global',
    category: 'Technology Explainers',
    image: 'https://placehold.co/1200x600.png',
    author: 'Taro Yamada',
    authorImage: 'https://placehold.co/100x100.png',
    date: '2024-05-20',
    excerpt: 'The innovative technology powering Rakuten Mobile is now being adopted by operators worldwide through Rakuten Symphony.',
    content: `
      <p>The groundbreaking, cloud-native technology that powers Rakuten Mobile's network in Japan is too good to keep to ourselves. That's why we launched Rakuten Symphony, a new business organization dedicated to bringing our advanced, OpenRAN-based solutions to mobile operators, enterprises, and governments around the world.</p>
      <h3 class="font-headline text-xl font-semibold mt-4 mb-2">A New Paradigm in Telecom</h3>
      <p>Rakuten Symphony offers a complete suite of tools to build and operate a modern mobile network, from the Radio Access Network (RAN) to the core and automation systems. We are helping other companies replicate the success we've had in Japan, enabling them to build cost-effective, secure, and agile networks.</p>
      <p>By exporting our technology, we are not just growing our business; we are accelerating a global shift towards a more open and innovative telecommunications industry for everyone.</p>
    `,
    featured: true,
  },
];

export async function getPosts(): Promise<Post[]> {
  // In a real app, you would fetch this data from a CMS or database
  return posts;
}

export async function getPost(slug: string): Promise<Post | undefined> {
  return posts.find((post) => post.slug === slug);
}
