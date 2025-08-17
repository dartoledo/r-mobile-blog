import Image from 'next/image';
import { type Metadata } from 'next';
import { Heading5 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer |  Kaizen PF: A Blog by Wyn Saves Yen',
  description: "Short disclaimer",
};

export default function Disclaimer() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h4 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Disclaimer
            </h4>
            </div>
            <div className="space-y-4 text-left">
            <p></p>
            <b className=" text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Opinions Expressed:
            </b>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            All views, thoughts, and opinions expressed on this website belong solely to the author, Wyn Saves Yen, and do not represent the opinions of the author's employer or any affiliated organization.
            </p>
            <b className=" text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            For Informational Purposes Only:
            </b>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Campaigns are subject to change or cancellation without prior notice. The information provided on this blog is for informational and educational purposes only and does not constitute professional financial or investment advice. I am not a licensed financial advisor. The content shared is based on my personal experience and research in the IT and finance sectors in Japan.
            </p>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
You should always consult with a qualified professional before making any financial decisions. While I strive to provide accurate and up-to-date information, I make no representations as to the accuracy, completeness, or suitability of any information on this site and will not be liable for any errors, omissions, or losses, injuries, or damages arising from its display or use.            </p>
            <b className=" text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            AI Content & Tools Policy:
            </b>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            In the spirit of transparency, readers should be aware that this blog utilizes AI-powered tools. I use these tools to assist with brainstorming, research, and language refinement. Every article is personally reviewed, edited, and fact-checked by me to ensure the final content aligns with my expertise and provides the most value to you. The ultimate accountability for all published content rests with me, the author.
            </p>
            </div>

          </div>
        </div>
      </div>
  );
}
