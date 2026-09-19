export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'casamentos' | 'corporativo' | 'sociais' | 'ambientes';
  alt: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role?: string;
  rating: number;
  date: string;
  comment: string;
  eventType: string;
  verified: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}
