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

export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Appointment {
  id: string;
  booking_reference: string;
  patient_name: string;
  patient_phone: string;
  patient_email: string | null;
  patient_age: number | null;
  patient_gender: string | null;
  doctor_id: string;
  doctor_name: string;
  department: string;
  appointment_date: string;
  appointment_time: string;
  reason: string | null;
  status: AppointmentStatus;
  notes: string | null;
  created_at: string;
}

export interface PatientIdentity {
  fullName: string;
  phoneNumber: string;
}

export interface BookingDraft {
  doctorId: string;
  appointmentDate: string;
  appointmentTime: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  patientAge: string;
  patientGender: string;
  reason: string;
}
