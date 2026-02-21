
export interface Module {
  title: string;
  icon: string;
  description: string;
  details: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Bonus {
  title: string;
  value: string;
  description: string;
  image: string;
}
