export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  priceValue: number;
  area: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  type: string;
  featured: boolean;
  virtualTour: boolean;
  description: string;
}

export interface Agent {
  id: number;
  name: string;
  title: string;
  image: string;
  experience: string;
  propertiesSold: number;
  expertise: string[];
  awards: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
}

export interface Testimonial {
  id: number;
  name: string;
  property: string;
  story: string;
  rating: number;
  location: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Azure Oceanfront Villa",
    location: "Malibu, California",
    price: "$12,500,000",
    priceValue: 12500000,
    area: "8,500 sq ft",
    bedrooms: 6,
    bathrooms: 7,
    image: "/images/oceanfront-villa.jpg",
    type: "Villa",
    featured: true,
    virtualTour: true,
    description: "A breathtaking oceanfront masterpiece with panoramic Pacific views, infinity pool, and private beach access."
  },
  {
    id: 2,
    title: "The Pinnacle Penthouse",
    location: "Manhattan, New York",
    price: "$28,000,000",
    priceValue: 28000000,
    area: "12,000 sq ft",
    bedrooms: 5,
    bathrooms: 6,
    image: "/images/sky-penthouse.jpg",
    type: "Penthouse",
    featured: true,
    virtualTour: true,
    description: "Crown jewel of Manhattan with 360° skyline views, private helipad, and world-class amenities."
  },
  {
    id: 3,
    title: "Meridian Smart Estate",
    location: "Beverly Hills, California",
    price: "$18,750,000",
    priceValue: 18750000,
    area: "15,000 sq ft",
    bedrooms: 8,
    bathrooms: 10,
    image: "/images/smart-home.jpg",
    type: "Smart Home",
    featured: true,
    virtualTour: true,
    description: "Fully automated smart estate with AI-integrated systems, home theater, and championship tennis court."
  },
  {
    id: 4,
    title: "Château de Lumière",
    location: "Côte d'Azur, France",
    price: "$35,000,000",
    priceValue: 35000000,
    area: "22,000 sq ft",
    bedrooms: 10,
    bathrooms: 12,
    image: "/images/private-estate.jpg",
    type: "Estate",
    featured: true,
    virtualTour: true,
    description: "A magnificent French Riviera estate set on 5 acres of manicured gardens with Mediterranean views."
  },
  {
    id: 5,
    title: "Skyline Tower Residence",
    location: "Dubai, UAE",
    price: "$8,900,000",
    priceValue: 8900000,
    area: "6,200 sq ft",
    bedrooms: 4,
    bathrooms: 5,
    image: "/images/investment-property.jpg",
    type: "Penthouse",
    featured: false,
    virtualTour: true,
    description: "Ultra-modern residence in Dubai's most prestigious tower with Burj Khalifa views."
  },
  {
    id: 6,
    title: "The Grand Commercial Hub",
    location: "Singapore",
    price: "$45,000,000",
    priceValue: 45000000,
    area: "35,000 sq ft",
    bedrooms: 0,
    bathrooms: 8,
    image: "/images/commercial-space.jpg",
    type: "Commercial",
    featured: false,
    virtualTour: false,
    description: "Premium commercial space in Singapore's financial district with state-of-the-art facilities."
  }
];

export const collections = [
  {
    id: 1,
    name: "Oceanfront Villas",
    description: "Wake up to the sound of waves in beachfront paradises",
    image: "/images/oceanfront-villa.jpg",
    count: 124
  },
  {
    id: 2,
    name: "Sky Penthouses",
    description: "Live above the clouds in architectural masterpieces",
    image: "/images/sky-penthouse.jpg",
    count: 87
  },
  {
    id: 3,
    name: "Smart Luxury Homes",
    description: "AI-powered residences for the modern elite",
    image: "/images/smart-home.jpg",
    count: 156
  },
  {
    id: 4,
    name: "Private Estates",
    description: "Expansive grounds for ultimate privacy and prestige",
    image: "/images/private-estate.jpg",
    count: 63
  },
  {
    id: 5,
    name: "Investment Properties",
    description: "High-yield opportunities in prime global markets",
    image: "/images/investment-property.jpg",
    count: 210
  },
  {
    id: 6,
    name: "Commercial Spaces",
    description: "Premium business addresses for visionary enterprises",
    image: "/images/commercial-space.jpg",
    count: 95
  }
];

export const lifestyleSections = [
  {
    id: 1,
    title: "Waterfront Living",
    description: "Experience the serenity of coastal luxury with private beaches, infinity pools, and uninterrupted ocean panoramas that redefine the meaning of home.",
    image: "/images/waterfront-living.jpg"
  },
  {
    id: 2,
    title: "Urban Skyline Living",
    description: "Rise above the ordinary in penthouses and residences that offer breathtaking city views, world-class amenities, and the pulse of metropolitan life at your doorstep.",
    image: "/images/urban-skyline.jpg"
  },
  {
    id: 3,
    title: "Family Communities",
    description: "Discover gated communities where luxury meets warmth — top-tier schools, private parks, and neighborhoods designed for generations of memories.",
    image: "/images/family-community.jpg"
  },
  {
    id: 4,
    title: "Luxury Retreats",
    description: "Escape to mountain sanctuaries and countryside estates where nature's grandeur meets architectural brilliance in perfect harmony.",
    image: "/images/luxury-retreat.jpg"
  }
];

export const agents: Agent[] = [
  {
    id: 1,
    name: "Victoria Ashford",
    title: "Senior Luxury Advisor",
    image: "/images/agent1.jpg",
    experience: "15 Years",
    propertiesSold: 340,
    expertise: ["Waterfront Estates", "Celebrity Homes", "International Sales"],
    awards: ["Top Producer 2024", "Luxury Excellence Award"]
  },
  {
    id: 2,
    name: "James Blackwell",
    title: "Investment Specialist",
    image: "/images/agent3.jpg",
    experience: "12 Years",
    propertiesSold: 280,
    expertise: ["Commercial Real Estate", "ROI Optimization", "Portfolio Management"],
    awards: ["Best Investment Advisor 2023", "Client Choice Award"]
  },
  {
    id: 3,
    name: "Sophia Chen",
    title: "International Relations Director",
    image: "/images/agent2.jpg",
    experience: "18 Years",
    propertiesSold: 420,
    expertise: ["Cross-Border Transactions", "Asian Markets", "Ultra-High-Net-Worth"],
    awards: ["Global Realtor of the Year", "Asia Pacific Excellence"]
  },
  {
    id: 4,
    name: "Alexander Reeves",
    title: "Penthouse & Urban Living Expert",
    image: "/images/agent4.jpg",
    experience: "10 Years",
    propertiesSold: 195,
    expertise: ["Manhattan Penthouses", "New Developments", "Architectural Gems"],
    awards: ["Rising Star 2022", "Urban Luxury Specialist"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Richard & Eleanor Pemberton",
    property: "Oceanfront Villa, Malibu",
    story: "Aurevia made our dream of owning a Malibu beachfront home a reality. Their attention to detail and understanding of luxury living is unmatched. From the first viewing to closing, every moment was exceptional.",
    rating: 5,
    location: "Malibu, CA"
  },
  {
    id: 2,
    name: "Dr. Natasha Kapoor",
    property: "Sky Penthouse, Manhattan",
    story: "As an international buyer, I needed a team that understood cross-border transactions. Aurevia's global expertise and dedicated support made purchasing my Manhattan penthouse seamless and stress-free.",
    rating: 5,
    location: "New York, NY"
  },
  {
    id: 3,
    name: "Marcus van der Berg",
    property: "Private Estate, Côte d'Azur",
    story: "The investment analysis provided by Aurevia's team was incredibly thorough. They didn't just sell me a property — they helped me build a legacy asset that continues to appreciate remarkably.",
    rating: 5,
    location: "France"
  },
  {
    id: 4,
    name: "Sarah & David Thornton",
    property: "Smart Home, Beverly Hills",
    story: "We were looking for a home that matched our tech-forward lifestyle. Aurevia understood exactly what we needed and presented us with options that exceeded our wildest expectations.",
    rating: 5,
    location: "Beverly Hills, CA"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Smart Luxury Homes: AI-Integrated Living",
    category: "Luxury Living",
    excerpt: "Explore how artificial intelligence is transforming luxury residences, from automated climate control to predictive maintenance systems.",
    image: "/images/smart-home.jpg",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    author: "Victoria Ashford"
  },
  {
    id: 2,
    title: "Global Luxury Market Trends for 2025",
    category: "Market Trends",
    excerpt: "An in-depth analysis of emerging trends in the luxury real estate market, from sustainable building to wellness-focused design.",
    image: "/images/blog-market.jpg",
    date: "Dec 10, 2024",
    readTime: "12 min read",
    author: "James Blackwell"
  },
  {
    id: 3,
    title: "Investment Guide: Maximizing ROI in Premium Real Estate",
    category: "Investment Guides",
    excerpt: "Expert strategies for identifying high-yield luxury properties and building a diversified real estate investment portfolio.",
    image: "/images/investment-property.jpg",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    author: "Sophia Chen"
  },
  {
    id: 4,
    title: "Interior Design Trends Defining Luxury Spaces",
    category: "Interior Design",
    excerpt: "From biophilic design to artisanal craftsmanship, discover the interior trends shaping the most prestigious homes worldwide.",
    image: "/images/blog-interior.jpg",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    author: "Alexander Reeves"
  }
];

export const locations = [
  "Malibu, California",
  "Manhattan, New York",
  "Beverly Hills, California",
  "Miami Beach, Florida",
  "Côte d'Azur, France",
  "Dubai, UAE",
  "Singapore",
  "London, UK",
  "Monaco",
  "Sydney, Australia"
];

export const propertyTypes = [
  "All Types",
  "Villa",
  "Penthouse",
  "Smart Home",
  "Estate",
  "Commercial"
];
