import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualifications: string;
  experience: string;
  availability: string;
  image: string;
}

export interface Facility {
  title: string;
  description: string;
  image: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CallbackFormData {
  fullName: string;
  phoneNumber: string;
  department: string;
  preferredTime: string;
}
