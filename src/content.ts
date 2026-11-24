/**
 * Every word on the page. Anything in [BRACKETS] or marked TODO is a
 * placeholder — swap it for your own details.
 *
 * Media: ad videos live in public/media/ads/, website screenshots in
 * public/media/sites/. Each ad shows its poster still until it's clicked,
 * then plays with sound.
 */

export const brand = {
  name: 'Hrithika',
  wordmark: 'HRITHIKA', // shown top-left
  email: 'hrithikaa50@gmail.com',
};

export const nav = [
  {label: 'Ads', href: '#ads'},
  {label: 'Websites', href: '#sites'},
  {label: 'Services', href: '#services'},
  {label: 'Process', href: '#process'},
  {label: 'Contact', href: '#contact'},
];

export const hero = {
  kicker: 'AI UGC ad creator · Website developer',
  heading: 'Hi, I’m Hrithika.',
  lead: 'I make ads people actually watch — and the websites they click through to.',
  bio: 'I create AI-generated UGC ads — short vertical videos for skincare, fashion, jewellery and gifting brands, with no shoot needed — and I design and build fast, good-looking websites.',
  /** Plays muted on a loop in the hero phone; tap it for sound. */
  video: '/media/ads/ad-03.mp4',
  poster: '/media/ads/ad-03.jpg',
};

export const intro = {
  eyebrow: 'AI UGC ads',
  heading: 'Ads that feel like a friend’s recommendation.',
  body: 'Skincare, fashion, jewellery and gifting — short vertical ads cut for the feed. Tap any ad to watch it with sound.',
};

export type Ad = {
  brand: string;
  type: string;
  body: string;
  /** /media/ads/ad-01.mp4 (or .jpg). Leave empty for a placeholder card. */
  src: string;
  /** Optional still shown before a video loads. */
  poster?: string;
};

// Order here is the order of the reel. Edit `brand` to the real brand name
// where you have one, and `body` to say what the ad did.
const ad = (n: number, brand: string, type: string, body: string): Ad => {
  const id = String(n).padStart(2, '0');
  return {brand, type, body, src: `/media/ads/ad-${id}.mp4`, poster: `/media/ads/ad-${id}.jpg`};
};

export const ads: Ad[] = [
  ad(1, 'BOLDEN eye cream', 'Skincare', 'A close-up demo of the eye cream, from tap to blend.'),
  ad(2, 'Gold-tone necklace', 'Jewellery', 'The necklace styled and worn, catching the light.'),
  ad(3, 'Face serum', 'Skincare', 'A serum routine: drop, press, glow.'),
  ad(4, 'Floral saree', 'Fashion', 'The drape, the print and the flow of a floral saree.'),
  ad(5, 'Embroidered lehenga', 'Fashion', 'Showing off the embroidery up close and in motion.'),
  ad(6, 'Gift hamper', 'Gifting', 'Unboxing a gift hamper, piece by piece.'),
  ad(7, 'Leather gift set', 'Gifting', 'A leather gift set, presented and opened.'),
  ad(8, 'Silk saree', 'Fashion', 'Traditional silk, its weave and its shine.'),
  ad(9, 'Hair oil', 'Haircare', 'How to apply it, step by step.'),
  ad(10, 'Face serum', 'Skincare', 'A second take on serum: texture and finish.'),
  ad(11, 'Sunscreen', 'Skincare', 'Sunscreen that blends in, shown on skin.'),
  ad(12, 'Lip balm', 'Beauty', 'A quick swipe and the finish it leaves.'),
  ad(13, 'Silk saree', 'Fashion', 'A silk saree modelled, from pleats to pallu.'),
];

/** How a project moves, drawn as you scroll. Four steps. */
export const process = {
  eyebrow: 'Process',
  heading: 'From brief to launch.',
  steps: [
    {day: 'Step 1', title: 'Brief', body: 'We pin down the product, the audience and the one feeling the ad or site has to leave behind.'},
    {day: 'Step 2', title: 'Script & build', body: 'Hooks and scripts for the ads; wireframes and code for the website.'},
    {day: 'Step 3', title: 'Create & polish', body: 'Ads generated with AI, then edited and captioned for every platform. Sites tested on every screen.'},
    {day: 'Step 4', title: 'Launch', body: 'Ads delivered ready to run, sites live and fast. Then we look at what worked.'},
  ],
};

export type Site = {name: string; type: string; body: string; image: string; url: string; stack?: string[]};

export const sites = {
  eyebrow: 'Websites',
  heading: 'Sites I’ve built.',
  note: 'Live sites — tap any to visit.',
  // Screenshots (1280×800 desktop view) live in public/media/sites/.
  // Add `stack: ['React', …]` to any site to show the tools it's built with.
  items: [
    {
      name: 'Zeus Fitness Club',
      type: 'Gym · Mangaluru',
      body: 'A bold site for a gym in Kadri — strength, cardio and personal training, with a “Plan a visit” call to action.',
      image: '/media/sites/zeus.jpg',
      url: 'https://zeus-fitness-club.vercel.app',
    },
    {
      name: 'The Castle Unisex Salon',
      type: 'Salon · Mangaluru',
      body: 'A dark, premium site for a hair, beauty and grooming salon, built around booking an appointment.',
      image: '/media/sites/castle.jpg',
      url: 'https://the-castle-unisex-salon-3ujj.vercel.app',
    },
    {
      name: 'Mangalore Hydro Tech',
      type: 'Industrial services',
      body: 'CNG cylinder hydro testing, inspection and safety services — clear process, FAQs and service booking.',
      image: '/media/sites/hydrotech.jpg',
      url: 'https://mangalorehydrotech.com',
    },
    {
      name: 'Hotel Adithya View',
      type: 'Hotel · Dharmasthala',
      body: 'A hotel site with room types, amenities and an availability checker right in the hero.',
      image: '/media/sites/adithya.jpg',
      url: 'https://adithyaview.com',
    },
    {
      name: 'Anchan Ayurvedic Industries',
      type: 'Ayurveda brand',
      body: 'A product site for a traditional Ayurvedic maker — its legacy, product range and quality story.',
      image: '/media/sites/anchan.jpg',
      url: 'https://anchan-ayurveda.vercel.app',
    },
    {
      name: 'Clean N Clear',
      type: 'Cleaning products',
      body: 'A bright catalogue for a cleaning-supplies company, with products, solutions by industry and quotes.',
      image: '/media/sites/cleannclear.jpg',
      url: 'https://www.cleannclear.co.in',
    },
    {
      name: 'Glam Monte Carlo',
      type: 'Beauty salon · France',
      body: 'An elegant salon site for nails, lashes, brows and massage, with online booking up front.',
      image: '/media/sites/glam.jpg',
      url: 'https://glam-monte-carlo.vercel.app',
    },
    {
      name: 'Astronaut Space',
      type: '3D scrolling site',
      body: 'A scroll-driven space site: the Earth rises over the Moon in layered parallax as you scroll.',
      image: '/media/sites/astronaut.jpg',
      url: 'https://3-d-astronuat-scrolling-website.vercel.app',
    },
  ] as Site[],
};

export const services = {
  eyebrow: 'Services',
  heading: 'Three ways to work together.',
  note: 'Turnaround is typical, not a promise — every brief is different.',
  items: [
    {name: 'AI UGC ads', days: 5, lines: ['Hook-first scripts', 'AI-generated vertical video — no shoot needed', 'Captions and platform cuts'], cta: 'Ask about ads'},
    {name: 'Ads + site', days: 21, lines: ['A set of AI UGC ads', 'A landing page built to convert them', 'One story from ad to checkout'], cta: 'Ask about both', featured: true},
    {name: 'Websites', days: 14, lines: ['Design and development', 'Responsive and fast', 'Booking, enquiry and WhatsApp built in'], cta: 'Ask about a site'},
  ],
};

export const contact = {
  eyebrow: 'Contact',
  heading: 'Let’s make something people stop scrolling for.',
  body: 'Tell me about your product. I’ll reply within two working days.',
};
