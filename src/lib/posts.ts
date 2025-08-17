import 'server-only';

export type Post = {
  id: number;
  slug: string;
  title: string;
  category: 'Rakuten Mobile' | 'Plan Benefits' | 'User Stories';
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
    slug: 'r-mobile-intro',
    title: 'Why Chose Rakuten Mobile?',
    category: 'Rakuten Mobile',
    image: 'https://network.mobile.rakuten.co.jp/assets/en/img/campaign/referral-application-employee/kv-pc-240216.png',
    author: 'Wyn Saves Yen',
    authorImage: '/images/logo.jpg',
    date: '2024-07-15',
    excerpt: 'Thinking of Switching Mobile Carriers, or simply getting your first mobile plans? Here\'s Why Rakuten Mobile Should Be on Your Radar!',
    content: `

    <h2 class="font-headline text-xl font-semibold mt-4 mb-2">Thinking of Switching Mobile Carriers in Japan? Here's Why Rakuten Mobile Should Be on Your Radar!</h3>
    <p>Are you living in Japan and on the hunt for a mobile carrier that offers more than just a data plan? If you're tired of complicated contracts and looking for a service that provides a plethora of perks, then it's time to take a serious look at <strong>Rakuten Mobile</strong>. Japan's fourth major mobile carrier is shaking up the industry with its innovative approach and a suite of benefits that go far beyond just keeping you connected.</p>
    <p>So, what makes Rakuten Mobile stand out from the crowd? Let's dive into the fantastic advantages that come with making the switch.</p>
    <h3>Stay Connected, Wherever You Are</h3>
    <p>One of the biggest draws of Rakuten Mobile is its commitment to keeping you connected, both at home and abroad, without breaking the bank.</p>
    <ul>
        <li><strong>Free Calls with Rakuten Link:</strong> Say goodbye to worrying about your phone bill every time you make a call. With the Rakuten Link app, you can make free domestic calls. And for those with friends and family overseas, you can also make free calls from Japan to other countries, and even from overseas back to Japan.</li>
        <li><strong>Generous Overseas Data:</strong> Traveling outside of Japan? Rakuten Mobile has you covered. You get 2GB of high-speed data to use in over 90 countries and regions every month, all included in your plan.</li>
    </ul>
    <br>
    <h3 class="font-headline text-xl font-semibold mt-4 mb-2">More Than Just a Mobile Service: A Lifestyle Upgrade</h3>
    <p>Rakuten Mobile isn't just about calls and data; it's about integrating into the broader Rakuten ecosystem and rewarding you for it.</p>
    <ul>
        <li><strong>Earn More Rakuten Points:</strong> If you're a savvy shopper on Rakuten Ichiba, Japan's largest e-commerce site, you're in for a treat. As a Rakuten Mobile user, you'll earn 5 times the points on your purchases, which can then be used for future shopping sprees or even to pay your mobile bill.</li>
        <li><strong>Free Cloud Storage:</strong> In today's digital age, cloud storage is a necessity. With Rakuten Mobile, you get a generous 50GB of free cloud backup through Rakuten Drive to keep your precious photos, videos, and files safe and accessible.</li>
    </ul>
    <br>
    <h3 class="font-headline text-xl font-semibold mt-4 mb-2">Entertainment and More at Your Fingertips</h3>
    <p>Boredom is a thing of the past with these amazing entertainment perks, all included at no extra cost.</p>
    <ul>
        <li><strong>Catch the Action:</strong> Baseball fans can rejoice! You get to watch Pacific League baseball games without any additional fees.</li>
        <li><strong>Your Personal Soundtrack:</strong> Enjoy up to 10 hours of free music every 30 days.</li>
        <li><strong>Magazine Rack in Your Pocket:</strong> Get your reading fix with three free magazines every month.</li>
    </ul>
    <br>
    <h3 class="font-headline text-xl font-semibold mt-4 mb-2">Discounts for Everyone</h3>
    <p>Rakuten Mobile offers a variety of discount programs tailored to different needs and age groups, making it an affordable option for the whole family. Be sure to check out their "SAIKYO FAMILY Program," "SAIKYO SENIOR Program," "SAIKYO YOUTH Program," and "SAIKYO KIDS Program" for monthly discounts.</p>
    <br>
    <h3 class="font-headline text-xl font-semibold mt-4 mb-2">Sweet Deals and Promotions</h3>
    <p>To top it all off, Rakuten Mobile frequently runs attractive campaigns for new customers. These can include significant point back offers for transferring your number and a referral program where both you and a friend can earn points.</p>
    <p>In a competitive market, Rakuten Mobile is making a name for itself by offering a feature-packed service that provides exceptional value. If you're looking for a mobile carrier that offers more than just the basics, Rakuten Mobile's blend of connectivity, rewards, and entertainment might be the perfect fit for you.</p>
    
      <h3 class="font-headline text-xl font-semibold mt-4 mb-2">Please log in to Rakuten using this referral link:</h3> 
    
      <a href="https://r10.to/hPgLUd" class="btn__link-primary font-headline text-xl font-semibold mt-4 mb-2"
      >Click here to learn more about the Rakuten Mobile referral campaign!</a>
      `,
    featured: true,
  },
  {
    id: 2,
    slug: 'plan-benefits-1',
    title: 'Is Rakuten Mobile Actually a Good Deal? Unpacking the Perks',
    category: 'Plan Benefits',
    image: 'https://network.mobile.rakuten.co.jp/assets/en/img/campaign/referral-application-employee/kv-pc-240216.png',
    author: 'Wyn Saves Yen',
    authorImage: '/images/logo.jpg',
    date: '2024-06-28',
    excerpt: 'If you\'re living in Japan, you know the mobile carrier landscape can be a bit of a maze. Between the big three and a sea of smaller providers, it\'s hard to know if you\'re getting the best bang for your yen. But Japan\'s fourth major carrier, Rakuten Mobile, has been making waves by offering a lot more than just a data plan.',
    content: `
     <p>So, what's all the buzz about? We've dived into their offerings to give you a quick, no-nonsense summary of the biggest benefits of making the switch.</p>
<br>
<h3 class="font-headline text-xl font-semibold mt-4 mb-2">Say Goodbye to Call Charges (Even Overseas!)</h3>

<p>This is a big one. If you're tired of watching the clock on your phone calls, Rakuten Mobile has a game-changing solution.</p>
<ul>
    <li><strong>Free Calls with the Rakuten Link App:</strong> Make free calls to anyone in Japan, whether they're on a mobile phone or a landline. This is a huge potential saving for anyone who needs to make regular calls for work or to family.</li>
    <li><strong>Generous International Perks:</strong> Not only can you make free calls from Japan to other countries, but you also get <strong>2GB of free data every month</strong> to use when you're traveling overseas. It's a fantastic perk for frequent travelers.</li>
</ul>
<br>
<h3 class="font-headline text-xl font-semibold mt-4 mb-2">Get Rewarded for Your Everyday Life</h3>

<p>Rakuten Mobile is deeply integrated into the massive Rakuten ecosystem, and they reward you for being a part of it.</p>
<ul>
    <li><strong>Supercharge Your Rakuten Points:</strong> If you shop on Rakuten Ichiba, Japan's biggest online marketplace, you'll earn <strong>5 times the points</strong> just for being a Rakuten Mobile customer. You can use these points to pay for your shopping or even your phone bill.</li>
    <li><strong>Free Cloud Storage:</strong> In an age where we're all taking more photos and videos, storage is key. You'll get a hefty <strong>50GB of free cloud backup</strong> through Rakuten Drive to keep your memories and important files safe.</li>
</ul>
<br>
<h3 class="font-headline text-xl font-semibold mt-4 mb-2">Entertainment and More, On the House</h3>

<p>Your plan comes loaded with extra perks that can replace other monthly subscriptions and keep you entertained.</p>
<ul>
    <li><strong>Sports, Music, and Magazines:</strong> Enjoy access to Pacific League baseball games, get up to 10 hours of free music every 30 days, and read three free magazines every month—all at no extra cost.</li>
</ul>
<br>
<h3 class="font-headline text-xl font-semibold mt-4 mb-2">Discounts for the Whole Family</h3>

<p>Rakuten Mobile also offers a range of discount programs designed to make their plans even more affordable for different groups, including specific programs for families, seniors, young people, and kids.</p>

<p>In short, Rakuten Mobile is positioning itself as more than just a phone company. It's a lifestyle service that offers real, tangible value—from saving you money on calls and shopping to providing free entertainment and storage. If you're already part of the Rakuten ecosystem or are looking for a plan that gives you more than just a data plan, it’s definitely worth a closer look.</p>

<h3 class="font-headline text-xl font-semibold mt-4 mb-2">Please log in to Rakuten using this referral link:</h3> 
    
<a href="https://r10.to/hPgLUd" class="btn__link-primary font-headline text-xl font-semibold mt-4 mb-2"
>Click here to learn more about the Rakuten Mobile referral campaign!</a>
    `,
    featured: true,
  },
  {
    id: 3,
    slug: 'rmobile-user-stories-1',
    title: '「PR」How This Teacher Slashed Her Monthly Bills with Rakuten Mobile',
    category: 'User Stories',
    image: 'https://network.mobile.rakuten.co.jp/assets/en/img/campaign/referral-application-employee/kv-pc-240216.png',
    author: 'Wyn Saves Yen',
    authorImage: '/images/logo.jpg',
    date: '2024-07-05',
    excerpt: 'Meet Kate. By day, she’s a passionate English teacher in a bustling school, shaping young minds and grading stacks of homework. By night, she’s like many of us: a budget-conscious individual trying to make her hard-earned salary stretch. For years, one of her biggest and most frustrating expenses was her mobile phone bill. It felt like a constant drain, a fixed cost that offered little in return except basic connectivity.',
    content: `
<blockquote>
    <p>"I was paying a small fortune every month," Kate explains. "And for what? A limited data plan and shocking charges if I had to make a long call to a parent about a student. It felt inflexible and outdated."</p>
</blockquote>

<p>Everything changed when a colleague mentioned they had switched to Rakuten Mobile. Intrigued by the promise of significant savings and extra perks, Kate decided to do her own homework. What she found on their website was compelling enough to make the switch. The result? It wasn't just a small saving; it was a complete overhaul of how she viewed her mobile plan.</p>
<br>
<h3 class="font-headline text-xl font-semibold mt-4 mb-2">The End of Costly Calls</h3>

<p>One of the first things Kate noticed was the freedom that came with the <strong>Rakuten Link app</strong>. As a teacher, clear communication with parents is essential. Previously, she would watch the clock during important phone calls, conscious that every minute was adding to her bill.</p>

<p>"Now, I can call parents and have a proper, unhurried conversation without worrying about the cost. It's all free with the app," she says. "It's a professional benefit I never expected from a mobile carrier."</p>

<p>This perk extended to her personal life, too. Kate's sister lives in Canada, and their weekly calls used to be a significant expense. With Rakuten Mobile, she can now call her sister for free, making it easier than ever to stay connected with family across the globe. When she visited for summer vacation, the <strong>free 2GB of monthly overseas data</strong> was a lifesaver for navigating and staying in touch.</p>

<br>
<h4 class="font-headline text-xl font-semibold mt-4 mb-2">Earning While Spending: The Power of Points</h4>

<p>Like many teachers, Kate often buys classroom supplies and educational books out of her own pocket. Her go-to online store has always been Rakuten Ichiba. After switching her mobile plan, she was thrilled to discover she now earned <strong>5 times the Rakuten Points</strong> on all her purchases.</p>

<p>"It was a game-changer," she shares with a smile. "I'm buying things I was going to buy anyway, but now I'm accumulating points so much faster. I use those points to get discounts on new books for my students or even to help pay my phone bill. It feels like I'm being rewarded for being a smart shopper."</p>

<h4 class="font-headline text-xl font-semibold mt-4 mb-2">More Than a Plan, It's a Lifestyle Upgrade</h4>
<br>
<p>The savings didn't stop there. Ms. Sato found that her new plan came with a host of lifestyle benefits that replaced other small expenses. She no longer buys magazines at the convenience store, as she gets three free ones every month through the service. The <strong>50GB of free cloud storage</strong> with Rakuten Drive meant she could stop paying for a separate subscription to back up her teaching materials and personal photos.</p>

<p>For Kate, switching to Rakuten Mobile was more than just a financial decision. It was a step towards a smarter, more integrated lifestyle where her mobile plan works for her, not against her. "My monthly bill is now a fraction of what it used to be," she concludes. "But it's the added value—the free calls, the extra points, the perks—that has made the biggest difference. I recommend it to all my colleagues. When you're on a teacher's salary, every yen counts, and Rakuten Mobile helps you save in ways you wouldn't expect."</p>



<h3 class="font-headline text-xl font-semibold mt-4 mb-2">Please log in to Rakuten using this referral link:</h3> 
    
<a href="https://r10.to/hPgLUd" class="btn__link-primary font-headline text-xl font-semibold mt-4 mb-2"
>Click here to learn more about the Rakuten Mobile referral campaign!</a>
    `,
    featured: false,
  },

];

export async function getPosts(): Promise<Post[]> {
  // In a real app, you would fetch this data from a CMS or database
  return posts;
}

export async function getPost(slug: string): Promise<Post | undefined> {
  return posts.find((post) => post.slug === slug);
}
