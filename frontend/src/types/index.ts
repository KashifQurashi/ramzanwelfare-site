export interface Initiative {
  title: string;
  description: string;
  image: string;
  stat: string;
  statLabel: string;
  category: "all" | "medical" | "welfare" | "education";
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  slug: string;
  category: string;
  author: string;
  readTime: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
  date: string;
}

export interface MediaItem {
  id: string;
  title: string;
  image: string;
  date: string;
  url: string;
  type: "video" | "image";
  duration: string;
  videoId: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  slug: string;
  category: string;
}

export interface DonationCause {
  title: string;
  description: string;
  image: string;
  slug: string;
  category: "general" | "food" | "medical" | "welfare" | "education";
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface ImpactStat {
  value: string;
  label: string;
}
