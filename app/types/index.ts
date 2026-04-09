export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  format: 'Coffee' | 'Bar' | 'Drink' | 'Supplement';
  heroDescriptor: string;
  operatorDescription: string;
  primaryOccasion: string;
  accentColor: string; // Tailwind color class or hex
  imagePath: string;
  category: string;
  
  // Strategic Intelligence
  strategicRole: string;
  repeatLogic: string;
  channelFit: string[];
  operatorNote: string;
  themeColor: string; // Hex for atmospheric glows
}

export interface Occasion {
  id: string;
  title: string;
  humanDescription: string;
  behavioralState: string;
  winningFormat: string;
  messageThatWorks: string;
  repeatTrigger: string;
  channelEdge: string;
  riskFriction: string;
  themeColor: string; // Thematic glow color
  bestFitProductIds: string[]; // Linked SKU IDs
}

export interface Module {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  targetUser: string;
  badge: string;
}

export interface SiteContent {
  name: string;
  tagline: string;
  description: string;
  hero: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  manifesto: {
    heading: string;
    body: string;
  };
}
