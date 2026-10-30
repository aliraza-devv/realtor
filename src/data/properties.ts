// Sample content: replace the agent profile, listings and photos with real data.

const photo = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

/**
 * Hero frame: one continuous photograph of the agent in front of a modern Austin home, with the
 * whole house in view and her on the right, clear of the headline. The images in
 * public/images (hero-home, about, process-1 to process-4) are AI-generated placeholders of one
 * fictional agent: replace them with the agent's own photography.
 */
export const heroPhoto = "/images/hero-home.png";
/** Portrait framing of the same scene, used below the large breakpoint. */
export const heroPhotoMobile = "/images/hero-home-mobile.png";

export const agent = {
  name: "Amelia Hart",
  brand: "Hart Residential",
  title: "Principal Broker",
  handle: "@ameliahart.homes",
  instagramUrl: "https://www.instagram.com/",
  // Placeholder: point this at the agent's real booking page (Calendly, Cal.com, etc.).
  bookingUrl: "https://calendly.com/",
  followers: "214K",
  phone: "(512) 555-0142",
  email: "hello@hartresidential.example",
  office: "1200 S Congress Ave, Suite 210, Austin, TX",
  // The same fictional agent as the hero: the avatar (cropped to her face in StoryAvatar) and
  // the About portrait both come from this 4:5 frame.
  photo: "/images/about.png",
  portrait: "/images/about.png",
  stats: [
    { value: "$142M", label: "Closed in the last 24 months" },
    { value: "230+", label: "Households helped" },
    { value: "18 days", label: "Average time on market" },
  ],
};

// Sample figures and outlets for the proof strip. Replace every value with real,
// verifiable numbers and with outlets that have actually featured the agent.
export const proof = {
  rating: { score: "4.9", count: "187" },
  stats: [
    { value: "$142M", label: "Sold in the last 24 months" },
    { value: "Top 1%", label: "Of Austin agents by sales volume" },
    { value: "CNE", label: "Certified Negotiation Expert, licensed since 2014" },
  ],
  press: [
    { name: "Austin Home Journal", initial: "A", mark: "disc", tone: "bold" },
    { name: "Lone Star Living", initial: "L", mark: "ring", tone: "italic" },
    { name: "Hill Country Review", initial: "H", mark: "arch", tone: "regular" },
    { name: "The Capital Ledger", initial: "C", mark: "disc", tone: "italic" },
    { name: "Barton Springs Press", initial: "B", mark: "ring", tone: "bold" },
    { name: "Texas Dwelling", initial: "T", mark: "arch", tone: "regular" },
  ],
} as const;

// Sample sold homes for the case studies. Replace with real closed sales and the
// agent's own photos; every figure here is made up.
export const cases = [
  {
    neighborhood: "Zilker",
    descriptor: "Modern, 4 bed",
    soldPrice: "$1,310,000",
    image: photo("1762811054947-605b20298615"),
    alt: "A modern white home with a lit walkway and mature trees at dusk",
    story:
      "The first agent's photos hid the backyard. We reshot it unedited, priced to the street's last three sales, and held a single open house.",
    metrics: [
      { value: "+$45,000", label: "Over asking", highlight: true },
      { value: "9 days", label: "On the market" },
      { value: "5", label: "Offers" },
    ],
  },
  {
    neighborhood: "Mueller",
    descriptor: "Family home, 3 bed",
    soldPrice: "$702,000",
    image: photo("1583608205776-bfd35f0d9f83"),
    alt: "A two-story family home with a palm tree in the front yard",
    story:
      "Two competing buyers and one deadline. A pre-listing inspection meant clean offers, no renegotiation, and a closing date the sellers chose.",
    metrics: [
      { value: "+$13,000", label: "Over asking", highlight: true },
      { value: "6 days", label: "On the market" },
      { value: "7", label: "Offers" },
    ],
  },
  {
    neighborhood: "Travis Heights",
    descriptor: "Modern, 3 bed",
    soldPrice: "$735,000",
    image: photo("1600607688969-a5bfcd646154"),
    alt: "A dark modern home behind a large tree and a green lawn",
    story:
      "Two similar homes on the street sat for months at inflated prices. I priced this one honestly, explained why to the sellers, and the first weekend closed it.",
    metrics: [
      { value: "100%", label: "Of asking price", highlight: true },
      { value: "21 days", label: "On the market" },
      { value: "3", label: "Offers" },
    ],
  },
  {
    neighborhood: "Westlake",
    descriptor: "Estate, 5 bed",
    soldPrice: "$2,240,000",
    image: photo("1600585154363-67eb9e2e2099"),
    alt: "A dark modern home at dusk with lit windows and a pool in front",
    story:
      "A dark, dramatic house that listing photos flatten. We filmed it at dusk on a phone, unedited, and the buyers came to see exactly that.",
    metrics: [
      { value: "+$90,000", label: "Over asking", highlight: true },
      { value: "14 days", label: "On the market" },
      { value: "4", label: "Offers" },
    ],
  },
] as const;

// The pain points the problem section names, in the voice buyers and sellers use. Check
// each against what the agent actually hears from clients before publishing.
export const problems = [
  {
    icon: "camera",
    topic: "Photos that mislead",
    pain: "It looked nothing like its photos.",
    cost: "A wasted Saturday.",
  },
  {
    icon: "tag",
    topic: "A price that's too high",
    pain: "We listed too high and it sat for two months.",
    cost: "A price cut anyway.",
  },
  {
    icon: "warning",
    topic: "Surprises after the offer",
    pain: "The inspection found a foundation problem.",
    cost: "Repair bills you never budgeted.",
  },
  {
    icon: "phone",
    topic: "An agent who vanishes",
    pain: "My agent vanished after I signed.",
    cost: "Days of silence before closing.",
  },
] as const;

// Sample 9:16 video testimonials. Each `video` is a placeholder clip and each `image` a stock
// portrait: replace names, quotes, clips and stills with real, permissioned client videos.
const sampleVideo = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
const portrait = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.4&fp-z=1&w=720&h=1280&q=80`;

export const testimonials = [
  {
    name: "Priya & Daniel R.",
    detail: "Sold in Zilker",
    result: "$45K over asking",
    quote: "She told us what to fix and what to leave alone. We never felt rushed.",
    length: "0:42",
    image: portrait("1494790108377-be9c29b29330"),
    video: sampleVideo,
  },
  {
    name: "Marcus T.",
    detail: "Sold in Mueller",
    result: "7 offers in 6 days",
    quote: "Her pre-listing inspection kept every offer clean. No surprises, no renegotiating.",
    length: "0:38",
    image: portrait("1507003211169-0a1dd7228f2d"),
    video: sampleVideo,
  },
  {
    name: "Chidi Okafor",
    detail: "Sold in Travis Heights",
    result: "Sold at asking",
    quote: "Our neighbors sat for months. She gave us the honest price on day one.",
    length: "0:35",
    image: portrait("1544005313-94ddf0286df2"),
    video: sampleVideo,
  },
  {
    name: "Hannah Brooks",
    detail: "Bought in Hyde Park",
    result: "Won a 4-offer race",
    quote: "I was scared of bidding wars. She wrote an offer the seller picked over higher ones.",
    length: "0:47",
    image: portrait("1438761681033-6461ffad8d80"),
    video: sampleVideo,
  },
  {
    name: "Daniel Reyes",
    detail: "Bought in Bouldin Creek",
    result: "Closed on his date",
    quote: "She answered my texts at 9 p.m. on a Sunday. That never happened with my last agent.",
    length: "0:33",
    image: portrait("1500648767791-00dcc994a43e"),
    video: sampleVideo,
  },
  {
    name: "Sofia Martinez",
    detail: "Sold in Clarksville",
    result: "Sold in 8 days",
    quote: "Her unedited video tour brought serious buyers only. No tire-kickers.",
    length: "0:40",
    image: portrait("1580489944761-15a19d654956"),
    video: sampleVideo,
  },
] as const;

// Sample reels. Replace titles, view counts and thumbnails with real ones (a 9:16
// frame from each video), and point the cards at the individual reel URLs.
export const reels = [
  { title: "What $1.3M buys in Barton Hills", views: "412K views", image: photo("1600566753376-12c8ab7fb75b"), size: "lg" },
  { title: "The kitchen the listing photos hid", views: "268K views", image: photo("1600585152220-90363fe7e115"), size: "md" },
  { title: "Three red flags in a $480K starter home", views: "531K views", image: photo("1605276374104-dee2a0ed3cd6"), size: "md" },
  { title: "A pool house that sold in nine days", views: "189K views", image: photo("1600585154363-67eb9e2e2099"), size: "lg" },
  { title: "Penthouse tour, no music, no tricks", views: "97K views", image: photo("1600573472550-8090b5e0745e"), size: "md" },
  { title: "First tour as a buyer? Watch this first", views: "144K views", image: photo("1600566753086-00f18fb6b3ea"), size: "lg" },
  { title: "Would you pay $2M for this bathroom?", views: "76K views", image: photo("1600566752355-35792bedcfea"), size: "md" },
] as const;

export type PropertyType = "House" | "Townhome" | "Condo";
export type PropertyStatus = "New" | "Open house" | "Price drop" | "Just listed";

export type Property = {
  slug: string;
  title: string;
  address: string;
  neighborhood: string;
  city: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  year: number;
  type: PropertyType;
  status?: PropertyStatus;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
};

export const propertyTypes: PropertyType[] = ["House", "Townhome", "Condo"];

export const priceSteps = [
  { label: "Any price", value: 0 },
  { label: "Up to $750k", value: 750000 },
  { label: "Up to $1M", value: 1000000 },
  { label: "Up to $1.5M", value: 1500000 },
  { label: "Up to $2M", value: 2000000 },
];

const interiors = [
  photo("1600607687939-ce8a6c25118c"),
  photo("1560448204-e02f11c3d0e2"),
  photo("1600566753190-17f0baa2a6c3"),
  photo("1600047509807-ba8f99d2cdde"),
];

type PropertySeed = Omit<Property, "gallery">;

const seeds: PropertySeed[] = [
  {
    slug: "willow-creek-modern",
    title: "Willow Creek Modern",
    address: "4821 Willow Creek Dr",
    neighborhood: "Barton Hills",
    city: "Austin, TX",
    price: 1285000,
    beds: 4,
    baths: 3.5,
    sqft: 3240,
    year: 2021,
    type: "House",
    status: "Just listed",
    image: photo("1600596542815-ffad4c1539a9"),
    description:
      "A calm, light-filled home on a quiet greenbelt lot. Floor-to-ceiling glass pulls the live oaks into the main living space, and a covered patio with an outdoor kitchen makes the back of the house feel like another room.",
    features: [
      "Primary suite with spa bath and private terrace",
      "Chef's kitchen with double islands",
      "Covered patio, outdoor kitchen and plunge pool",
      "Dedicated home office with built-ins",
      "Two-car garage with EV charging",
    ],
  },
  {
    slug: "the-linden-residence",
    title: "The Linden Residence",
    address: "112 Linden St",
    neighborhood: "Hyde Park",
    city: "Austin, TX",
    price: 845000,
    beds: 3,
    baths: 2.5,
    sqft: 2180,
    year: 2018,
    type: "Townhome",
    status: "Open house",
    image: photo("1600585154340-be6161a56a0c"),
    description:
      "Three storeys of well-proportioned living in the heart of Hyde Park. Walk to coffee, the farmers market and the park, then come home to a rooftop deck with skyline views.",
    features: [
      "Rooftop deck with downtown views",
      "Open plan living and dining on the second level",
      "Oversized windows on three sides",
      "Attached two-car garage",
      "Low-maintenance fenced courtyard",
    ],
  },
  {
    slug: "harbor-point-penthouse",
    title: "Harbor Point Penthouse",
    address: "700 Harbor Point, Unit 18A",
    neighborhood: "Downtown",
    city: "Austin, TX",
    price: 1950000,
    beds: 3,
    baths: 3,
    sqft: 2640,
    year: 2019,
    type: "Condo",
    image: photo("1522708323590-d24dbb6b0267"),
    description:
      "A corner penthouse with wraparound views over the river and the city. Wide-plank oak floors, a gallery-height living room and a private elevator landing set this one apart.",
    features: [
      "Private elevator landing",
      "Wraparound terrace, 640 sq ft",
      "Concierge, fitness studio and resident lounge",
      "Two deeded parking spaces",
      "Smart-home lighting and climate",
    ],
  },
  {
    slug: "cedar-ridge-farmhouse",
    title: "Cedar Ridge Farmhouse",
    address: "9 Cedar Ridge Rd",
    neighborhood: "Westlake",
    city: "Austin, TX",
    price: 2150000,
    beds: 5,
    baths: 4,
    sqft: 4100,
    year: 2016,
    type: "House",
    image: photo("1564013799919-ab600027ffc6"),
    description:
      "Set back on an acre of mature landscaping, this farmhouse balances generous entertaining space with real everyday comfort. Wide porches, a stone fireplace and a guest suite over the garage.",
    features: [
      "One-acre lot with mature trees",
      "Guest suite above detached garage",
      "Stone fireplace and vaulted great room",
      "Wraparound front porch",
      "Zoned to top-rated Eanes ISD schools",
    ],
  },
  {
    slug: "maple-and-9th-loft",
    title: "Maple & 9th Loft",
    address: "905 Maple St, Unit 4",
    neighborhood: "East Cesar Chavez",
    city: "Austin, TX",
    price: 485000,
    beds: 1,
    baths: 1,
    sqft: 920,
    year: 2014,
    type: "Condo",
    status: "Price drop",
    image: photo("1502672260266-1c1ef2d93688"),
    description:
      "An airy corner loft with 12-foot ceilings, exposed brick and a balcony that catches the evening light. Steps from the best restaurants on the east side.",
    features: [
      "12-foot ceilings and exposed brick",
      "In-unit washer and dryer",
      "Private balcony",
      "Secure covered parking",
      "Pet-friendly building",
    ],
  },
  {
    slug: "sunset-terrace",
    title: "Sunset Terrace",
    address: "3307 Sunset Terrace",
    neighborhood: "Tarrytown",
    city: "Austin, TX",
    price: 1640000,
    beds: 4,
    baths: 3,
    sqft: 3050,
    year: 2022,
    type: "House",
    status: "New",
    image: photo("1613490493576-7fde63acd811"),
    description:
      "New construction by a local builder known for quiet details. Deep overhangs, a saltwater pool and a layout that keeps the main living areas open to the garden.",
    features: [
      "Saltwater pool and shaded lounge",
      "Walk-in pantry and butler's kitchen",
      "Radiant-heated primary bath",
      "Fully fenced, irrigated yard",
      "Builder's 10-year structural warranty",
    ],
  },
  {
    slug: "oakmont-cottage",
    title: "Oakmont Cottage",
    address: "614 Oakmont Ave",
    neighborhood: "Travis Heights",
    city: "Austin, TX",
    price: 695000,
    beds: 2,
    baths: 2,
    sqft: 1450,
    year: 1948,
    type: "House",
    image: photo("1568605114967-8130f3a36994"),
    description:
      "A thoughtfully updated 1940s cottage with original hardwoods, a new kitchen and a backyard studio. Quiet street, big trees and a short walk to the lake trail.",
    features: [
      "Original hardwood floors, refinished",
      "Detached backyard studio",
      "New roof, HVAC and windows",
      "Screened-in porch",
      "Walk to Lady Bird Lake trail",
    ],
  },
  {
    slug: "bellmont-row-townhome",
    title: "Bellmont Row Townhome",
    address: "28 Bellmont Row",
    neighborhood: "Mueller",
    city: "Austin, TX",
    price: 735000,
    beds: 3,
    baths: 2.5,
    sqft: 1980,
    year: 2020,
    type: "Townhome",
    image: photo("1580587771525-78b9dba3b914"),
    description:
      "A bright end-unit townhome in Mueller with a private yard, direct access to the park and a layout that works for both families and work-from-home setups.",
    features: [
      "End unit with private yard",
      "Direct access to Mueller Lake Park",
      "Ground-floor flex room",
      "Solar panels and EV-ready garage",
      "HOA covers exterior and landscaping",
    ],
  },
];

export const properties: Property[] = seeds.map((seed, i) => ({
  ...seed,
  gallery: [
    seed.image,
    interiors[i % interiors.length],
    interiors[(i + 1) % interiors.length],
    interiors[(i + 2) % interiors.length],
  ],
}));

export function getProperty(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export type Faq = { q: string; lead: string; a: string };

// Sample FAQs, each one an objection that stops buyers and sellers from making the first call.
// Replace the numbers and policies with the agent's real ones.
export const faqGroups: readonly { label: string; items: readonly Faq[] }[] = [
  {
    label: "Selling",
    items: [
      {
        q: "What if my home sits on the market for months?",
        lead: "I price it to sell in the first two weeks.",
        a: "Homes that sit were almost always priced on hope, not on the last three sales on your street. I price from those sales and tell you the number even when it is lower than you wanted. If there are no serious offers after 14 days, I show you the showing data and we adjust together.",
      },
      {
        q: "Do I have to fix up the house before I list?",
        lead: "Almost never.",
        a: "I film a walkthrough and tell you the two or three fixes that pay for themselves, and the ones to skip. Most sellers spend under $2,000 before listing, not $20,000.",
      },
      {
        q: "Why not just take a cash offer from an instant buyer?",
        lead: "Because the fast option usually costs 10 to 20% of your price.",
        a: "Instant buyers are quick and certain, and sometimes that is exactly what a seller needs. I put their number next to your likely sale price, after fees and repairs, so you choose with the real math. If the cash offer is better for you, I will say so.",
      },
      {
        q: "What if the price I get is lower than I hoped?",
        lead: "You will know before you list, not after.",
        a: "I show you the sales behind the number, and you decide whether to list, wait or sell as-is. There is no pressure to list at all, and the pricing conversation is free.",
      },
    ],
  },
  {
    label: "Buying",
    items: [
      {
        q: "Is it a bad time to buy with rates where they are?",
        lead: "Nobody can time rates, but you can price the payment.",
        a: "I run the real monthly cost on homes you like, including seller credits and a rate buydown, so you see what you would actually pay. You can refinance if rates drop, but you can't renegotiate a price you overpaid. If waiting is smarter for you, I will tell you that.",
      },
      {
        q: "I'm not pre-approved yet. Is it too early to talk?",
        lead: "No. Most buyers call me first.",
        a: "I introduce you to two lenders I trust, you learn your real budget in a day or two, and you don't see a single house until you know your number. Talking to me early costs nothing and saves months.",
      },
      {
        q: "How do I compete with cash offers and bidding wars?",
        lead: "Price is only one part of a winning offer.",
        a: "Clean terms, a flexible closing date and a pre-inspection often beat a higher but messier offer. I write offers a seller can say yes to quickly, and I call the listing agent before you submit.",
      },
      {
        q: "What if the inspection finds something scary?",
        lead: "In Texas, you can walk away during your option period.",
        a: "I go through the report with you, separate cosmetic from costly, and ask for repairs or credits. A bad report is a negotiating tool, and it is also your exit if the house is not right.",
      },
    ],
  },
  {
    label: "Working with me",
    items: [
      {
        q: "Do I have to sign a long contract with you?",
        lead: "No lock-in, and no surprises in the paperwork.",
        a: "Buyers sign a short representation agreement and sellers sign a listing agreement. Mine are plain English, short, and include a way out if we are not a fit. I walk you through every line before you sign.",
      },
      {
        q: "What do you charge, and what do I actually get?",
        lead: "You see the exact number in writing before you commit.",
        a: `Commission is negotiable and there are no hidden fees. Sellers get a pre-listing walkthrough video, professional photos and marketing to my ${agent.followers} followers. Buyers get weekly shortlists and unedited tours. I explain every line on the first call.`,
      },
      {
        q: "Are you a real agent or just good at Instagram?",
        lead: "Both, and the order matters.",
        a: `I have been licensed in Texas since 2014 and closed ${agent.stats[0].value} in the last 24 months. The reels exist so you can see how I work before you call. I answer my own calls and texts, and every negotiation is mine, not an assistant's.`,
      },
      {
        q: "I'm just browsing. Will a call turn into a sales pitch?",
        lead: "No. You leave with a clear next step, even if it is to wait.",
        a: "The free call is 30 minutes about your situation. If the honest advice is to wait six months, that is what I will tell you. No pressure, and no follow-up spam.",
      },
    ],
  },
];

// The process in four steps, one per story frame. `day` is a typical timeline from the first
// call to closing; the photos are placeholders. Replace with the agent's real timeline.
export const processSteps = [
  {
    day: "Day 1",
    title: "Talk it through",
    line: "Tell me your goal and timeline. Thirty minutes, no pitch, just a plan.",
    sticker: "Free, 30 min",
    icon: "call",
    image: "/images/process-1.png",
    alt: "Amelia smiling on a call at her kitchen island, laptop and notes open",
    focus: "50% 30%",
  },
  {
    day: "Day 3",
    title: "Tour it honestly",
    line: "We walk it in person, room by room, with straight answers and no pressure.",
    sticker: "In person",
    icon: "tour",
    image: "/images/process-2-tour.png",
    alt: "Amelia showing a young family around a bright living room during an in-person home tour",
    focus: "50% 40%",
  },
  {
    day: "Day 14",
    title: "Negotiate hard",
    line: "I compare every offer side by side and push for the best terms.",
    sticker: "5 offers in",
    icon: "offer",
    image: "/images/process-3.png",
    alt: "Amelia reviewing offer documents at a table with a confident smile",
    focus: "50% 32%",
  },
  {
    day: "Day 44",
    title: "Close cleanly",
    line: "I run the paperwork to closing, so nothing slips and nothing is left to chase.",
    sticker: "On your date",
    icon: "keys",
    image: "/images/process-4.png",
    alt: "Amelia handing over the keys in front of a deep teal front door",
    focus: "50% 30%",
  },
] as const;
