import Image from 'next/image';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Rakuten Mobile Insights',
  description: "Learn about Rakuten Mobile's mission, values, and our commitment to revolutionizing the telecommunications industry.",
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              About Rakuten Mobile
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              Empowering society by building the future of telecommunications.
            </p>
          </div>

          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="https://placehold.co/1200x400.png"
              alt="Rakuten Crimson House"
              layout="fill"
              objectFit="cover"
              data-ai-hint="office building"
            />
          </div>

          <div className="prose prose-lg mx-auto max-w-3xl text-foreground lg:prose-xl">
            <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
            <p>
              Our mission is to provide customers with convenient, simple, and affordable mobile services that enrich their lives. We aim to challenge the status quo of the telecommunications industry through technological innovation, operational efficiency, and an unwavering focus on customer satisfaction.
            </p>
            
            <h2 className="font-headline text-3xl font-bold mt-12">Our Values</h2>
            <p>
              The Rakuten Group's core principles of "Integrity," "Teamwork," and "Innovation" guide our actions. We believe in building a trusted relationship with our customers through transparent practices, working collaboratively to solve complex challenges, and constantly pushing the boundaries of what's possible in mobile technology.
            </p>

            <h2 className="font-headline text-3xl font-bold mt-12">A Network for the Future</h2>
            <p>
              We are proud to have built the world’s first end-to-end fully virtualized, cloud-native mobile network. This revolutionary architecture allows us to be more agile, secure, and cost-effective than traditional networks. It’s the foundation upon which we are building a new generation of mobile services, from enhanced mobile broadband to the Internet of Things (IoT) and beyond. We are not just a mobile carrier; we are a technology company shaping the future of connectivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
