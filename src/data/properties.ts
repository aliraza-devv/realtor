// Sample content: replace the agent profile, listings and photos with real data.

const photo = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const heroBase = "https://images.unsplash.com/photo-1724362180955-271d1200803c";

/**
 * Hero frame: one person at a modern home, cropped (focal point) so she sits on the right.
 * The hero mirrors it so she heads toward the headline. Shown as shot, with no filter.
 * Replace with the agent's own photo.
 */
export const heroPhoto = `${heroBase}?auto=format&fit=crop&crop=focalpoint&fp-x=0.64&fp-y=0.55&fp-z=1.3&w=3200&h=2000&q=80`;

export const agent = {
  name: "Amelia Hart",
  brand: "Hart Residential",
  title: "Principal Broker",
  handle: "@ameliahart.homes",
  instagramUrl: "https://www.instagram.com/",
  followers: "214K",
  phone: "(512) 555-0142",
  email: "hello@hartresidential.example",
  office: "1200 S Congress Ave, Suite 210, Austin, TX",
  // Face-focused, mirrored crop of the hero photo, so the avatar, About portrait and hero show one person.
  photo: `${heroBase}?auto=format&fit=crop&crop=focalpoint&fp-x=0.49&fp-y=0.5&fp-z=2.4&w=900&h=1125&flip=h&q=80`,
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
    image: photo("1600573472592-401b489a3cdc"),
    alt: "A modern white home with a pool under a blue sky",
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
    pain: "I took a day off work to tour a house that looked nothing like its photos.",
    cost: "A wasted Saturday, a long drive across Austin, and a growing suspicion that every listing is dressed up. Wide-angle lenses and heavy edits can make a small room look twice its size.",
  },
  {
    icon: "tag",
    topic: "A price that's too high",
    pain: "We listed too high, watched it sit for two months, then cut the price anyway.",
    cost: "Stale listings lose their leverage. Buyers read every price cut as a warning, and you often end up with less than if you had priced it right on day one.",
  },
  {
    icon: "warning",
    topic: "Surprises after the offer",
    pain: "The inspection found a foundation problem that nobody mentioned.",
    cost: "Foundation, roof and drainage issues can run to tens of thousands of dollars, and they tend to surface after you have fallen in love and put money down.",
  },
  {
    icon: "phone",
    topic: "An agent who vanishes",
    pain: "My agent disappeared the moment the contract was signed.",
    cost: "Texts go unanswered for days, an assistant handles your calls, and nobody is there when closing gets stressful and the deadline gets close.",
  },
] as const;

// Sample video testimonials. Each `video` is a placeholder clip and each `poster` a stock
// portrait: replace both with real client recordings and stills before publishing.
const sampleVideo = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
const portrait = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.36&fp-z=1&w=1600&h=900&q=80`;

export const videoTestimonials = [
  {
    name: "Priya & Daniel R.",
    detail: "Sold in Zilker",
    result: "$45K over asking in 9 days",
    quote: "She told us what to fix and what to leave alone. We never felt rushed.",
    poster: portrait("1494790108377-be9c29b29330"),
    video: sampleVideo,
  },
  {
    name: "Marcus T.",
    detail: "Sold in Mueller",
    result: "7 offers in 6 days",
    quote: "Her pre-listing inspection kept every offer clean. No surprises, no renegotiating.",
    poster: portrait("1507003211169-0a1dd7228f2d"),
    video: sampleVideo,
  },
  {
    name: "Chidi Okafor",
    detail: "Sold in Travis Heights",
    result: "Sold at asking in 21 days",
    quote: "Our neighbors sat for months. She gave us the honest price on day one.",
    poster: portrait("1544005313-94ddf0286df2"),
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

// Sample client stories, one per sold home in the case studies. Replace with real,
// permissioned reviews.
export const testimonials = [
  {
    quote:
      "Amelia told us what to fix before listing and what to leave alone. We sold in nine days, $45K over asking.",
    name: "Priya & Daniel R.",
    detail: "Sold in Zilker",
    image: photo("1600573472592-401b489a3cdc"),
  },
  {
    quote:
      "Two buyers and one deadline. Her pre-listing inspection kept every offer clean, and we picked our own closing date.",
    name: "Marcus & Lena T.",
    detail: "Sold in Mueller",
    image: photo("1583608205776-bfd35f0d9f83"),
  },
  {
    quote:
      "Our neighbors' homes sat for months. Amelia gave us the honest price on day one, and we closed the first weekend.",
    name: "The Okafor family",
    detail: "Sold in Travis Heights",
    image: photo("1600607688969-a5bfcd646154"),
  },
] as const;

export const processSteps = [
  {
    title: "Talk it through.",
    body: "A free call to understand your timeline, your budget and what a good outcome looks like for you.",
    detail: "30 minutes, no pressure",
  },
  {
    title: "Tour it honestly.",
    body: "Weekly shortlists, off-market access and unedited walkthroughs that show what the listing leaves out.",
    detail: "On camera before you drive over",
  },
  {
    title: "Close it cleanly.",
    body: "Firm negotiation and a closing checklist handled end to end, so nothing slips between offer and keys.",
    detail: "One agent, start to finish",
  },
] as const;
