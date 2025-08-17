import Image from 'next/image';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us |  Kaizen PF: A Blog by Wyn Saves Yen',
  description: "Your source for the latest on  Personal Finance, Network, technology, and stories in Tokyo.",
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
             Kaizen PF: A Blog by Wyn Saves Yen
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            I'm Wyn Saves Yen, and I believe the path to financial mastery in Japan isn't about one giant leap; it's about a thousand tiny, deliberate steps.</p>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl"> This is Kaizen PF. We’ll explore how utilizing AI and the mindset of Kaizen can radically transform your Cash flow and personal finance. From optimizing monthly telecom bills, demystifying iDeCo and NISA to maximizing your salary, we’ll build a better life, one improvement at a time.
            </p>
            <p>All views, thoughts, and opinions expressed on the website ' Kaizen PF' belong solely to the author, Wyn Saves Yen, and are not representative of the author's employer, organization, committee, or any other group or individual, either past or present."</p>
          </div>
        </div>
      </div>
    </div>
  );
}
