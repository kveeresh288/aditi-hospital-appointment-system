import {
  Stethoscope,
  Heart,
  Baby,
  Activity,
  Users,
  ClipboardCheck,
  Microscope,
  Home,
  Clock,
  Award,
  Sparkles,
  UserCheck,
} from 'lucide-react';

// Hospital Information
export const hospitalInfo = {
  name: 'Aditi Hospital',
  localName: 'ಅದಿತಿ ಹಾಸ್ಪಿಟಲ್',
  tagline: 'Compassionate Healthcare for Women, Children, and Families.',
  description:
    'Serving the Kalaburagi community with trusted medical care, experienced specialists, and patient-focused healthcare services.',
  address: {
    street: 'Shanti Nagar',
    city: 'Kalaburagi',
    state: 'Karnataka',
    pincode: '585103',
    full: 'Shanti Nagar, Kalaburagi, Karnataka 585103',
  },
  contact: {
    phone: '+91 98861 56782',
    email: 'contact@aditihospital.in',
    emergency: '+91 98861 56782',
  },
  workingHours: 'Open 24 Hours',
  mapUrl:
    'https://www.google.com/maps/place/Aditi+Hospital/@17.3286609,76.8175479,17z/data=!4m14!1m7!3m6!1s0x3bc8b8ae25c37871:0x6b78646a4b17dc42!2sAditi+Hospital!8m2!3d17.3286609!4d76.8175479!16s%2Fg%2F11bw4sfw2d!3m5!1s0x3bc8b8ae25c37871:0x6b78646a4b17dc42!8m2!3d17.3286609!4d76.8175479!16s%2Fg%2F11bw4sfw2d!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.5936338521503!2d76.81535921486872!3d17.328660888114675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8b8ae25c37871%3A0x6b78646a4b17dc42!2sAditi%20Hospital!5e0!3m2!1sen!2sin!4v1718384400000!5m2!1sen!2sin',
  social: {
    facebook: 'https://facebook.com/aditihospital',
    instagram: 'https://instagram.com/aditihospital',
    twitter: 'https://twitter.com/aditihospital',
    linkedin: 'https://linkedin.com/company/aditihospital',
  },
};

// Navigation Links
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Contact', href: '#contact' },
];

// Trust Statistics
export const trustStats = [
  {
    value: 15,
    suffix: '+',
    label: 'Years of Trusted Care',
  },
  {
    value: 25000,
    suffix: '+',
    label: 'Patients Served',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Healthcare Professionals',
  },
  {
    value: 4.0,
    suffix: '\u2605',
    label: 'Patient Rating',
  },
];

// Why Choose Us Features
export const whyChooseUs = [
  {
    icon: Award,
    title: 'Experienced Specialists',
    description:
      'Our team of highly qualified doctors brings decades of combined experience in their respective fields.',
  },
  {
    icon: Sparkles,
    title: 'Modern Facilities',
    description:
      'State-of-the-art medical equipment and comfortable, hygienic environment for the best patient experience.',
  },
  {
    icon: Clock,
    title: 'Fast Appointments',
    description:
      'Quick scheduling process with minimal wait times, because your health should never wait.',
  },
  {
    icon: UserCheck,
    title: 'Patient-Centered Care',
    description:
      'Every treatment plan is tailored to your unique needs, ensuring personalized attention and care.',
  },
];

// Services
export const services = [
  {
    icon: Heart,
    title: 'Maternity Care',
    description:
      'Comprehensive prenatal, delivery, and postnatal care with experienced obstetricians and modern facilities.',
  },
  {
    icon: Heart,
    title: "Women's Health",
    description:
      'Specialized healthcare services addressing the unique medical needs of women at every stage of life.',
  },
  {
    icon: Stethoscope,
    title: 'Gynecology',
    description:
      'Expert gynecological care for reproductive health, menstrual disorders, and preventive screenings.',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description:
      'Dedicated child healthcare from newborns to adolescents, including vaccinations and growth monitoring.',
  },
  {
    icon: Activity,
    title: 'General Medicine',
    description:
      'Comprehensive primary care for common illnesses, chronic disease management, and health screenings.',
  },
  {
    icon: ClipboardCheck,
    title: 'Preventive Health Checkups',
    description:
      'Regular health screenings and wellness programs to detect and prevent health issues early.',
  },
  {
    icon: Microscope,
    title: 'Diagnostic Services',
    description:
      'In-house laboratory and imaging services for accurate and timely diagnosis.',
  },
  {
    icon: Home,
    title: 'Family Healthcare',
    description:
      'Complete healthcare solutions for the entire family under one roof, from children to elders.',
  },
];

// Doctors
export const doctors = [
  {
    id: 'dr-anjali-sharma',
    name: 'Dr. Anjali Sharma',
    specialty: 'Senior Consultant Gynecologist',
    qualifications: 'MBBS, MD (OBG), DNB',
    experience: '18+ Years Experience',
    availability: 'Mon - Sat, 10:00 AM - 2:00 PM',
    image:
      'https://images.pexels.com/photos/545229/pexels-photo-545229.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'dr-rajesh-kulkarni',
    name: 'Dr. Rajesh Kulkarni',
    specialty: 'Consultant General Physician',
    qualifications: 'MBBS, MD (General Medicine)',
    experience: '15+ Years Experience',
    availability: 'Mon - Sat, 6:00 PM - 9:00 PM',
    image:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'dr-sneha-patil',
    name: 'Dr. Sneha Patil',
    specialty: 'Pediatric Specialist',
    qualifications: 'MBBS, MD (Pediatrics)',
    experience: '12+ Years Experience',
    availability: 'Mon - Sat, 11:00 AM - 1:00 PM',
    image:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'dr-vikram-deshmukh',
    name: 'Dr. Vikram Deshmukh',
    specialty: 'Consultant Surgeon',
    qualifications: 'MBBS, MS (General Surgery)',
    experience: '20+ Years Experience',
    availability: 'Mon - Sat, 3:00 PM - 6:00 PM',
    image:
      'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

// Facilities
export const facilities = [
  {
    title: 'Modern Maternity Ward',
    description: 'Fully equipped delivery rooms with advanced monitoring systems.',
    image:
      'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Consultation Rooms',
    description: 'Private and comfortable consultation spaces for patient comfort.',
    image:
      'https://images.pexels.com/photos/6758193/pexels-photo-6758193.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Diagnostic Laboratory',
    description: 'In-house lab with quick turnaround times for accurate results.',
    image:
      'https://images.pexels.com/photos/4056863/pexels-photo-4056863.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Emergency Care Unit',
    description: '24/7 emergency services with trained medical staff.',
    image:
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Pharmacy',
    description: 'Well-stocked pharmacy with genuine medicines and healthcare products.',
    image:
      'https://images.pexels.com/photos/3873149/pexels-photo-3873149.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Observation Beds',
    description: 'Clean observation facilities for post-procedure recovery.',
    image:
      'https://images.pexels.com/photos/6567608/pexels-photo-6567608.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Vaccination Center',
    description: 'Safe vaccination services for children and adults.',
    image:
      'https://images.pexels.com/photos/4173319/pexels-photo-4173319.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Waiting Lounge',
    description: 'Comfortable seating area with amenities for patients and families.',
    image:
      'https://images.pexels.com/photos/263637/pexels-photo-263637.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Digital Appointment Assistance',
    description: 'Easy online and phone-based appointment scheduling.',
    image:
      'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Patient Counseling Area',
    description: 'Dedicated space for patient education and counseling.',
    image:
      'https://images.pexels.com/photos/6627443/pexels-photo-6627443.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

// Patient Journey Steps
export const patientJourney = [
  {
    step: 1,
    title: 'Choose Service',
    description: 'Select the healthcare service you need from our comprehensive offerings.',
    icon: ClipboardCheck,
  },
  {
    step: 2,
    title: 'Select Doctor',
    description: 'Choose from our team of experienced specialists based on your needs.',
    icon: Users,
  },
  {
    step: 3,
    title: 'Book Appointment',
    description: 'Schedule your visit at a convenient time through phone or online.',
    icon: Stethoscope,
  },
  {
    step: 4,
    title: 'Visit Clinic',
    description: 'Arrive at the hospital and receive quality healthcare from our team.',
    icon: Activity,
  },
];

// Testimonials
export const testimonials = [
  {
    name: 'Priya Hegde',
    location: 'Kalaburagi',
    rating: 5,
    text: 'The doctors and staff were incredibly supportive throughout my pregnancy journey. Excellent care and guidance.',
    avatar:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Ramesh Patil',
    location: 'Kalaburagi',
    rating: 5,
    text: 'Clean facilities, professional doctors, and smooth appointment management. Highly recommended.',
    avatar:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Sunita Kulkarni',
    location: 'Kalaburagi',
    rating: 5,
    text: 'The team made us feel comfortable from the very first visit. Wonderful experience.',
    avatar:
      'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Mahesh Deshmukh',
    location: 'Kalaburagi',
    rating: 5,
    text: 'Very attentive doctors and courteous staff. The consultation process was seamless.',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
];

// FAQs
export const faqs = [
  {
    question: 'Do I need an appointment before visiting?',
    answer:
      'While walk-ins are welcome for general consultations, we recommend booking an appointment to minimize wait times and ensure doctor availability. You can book online or call us to schedule your visit.',
  },
  {
    question: 'What services are available?',
    answer:
      'We offer comprehensive healthcare services including maternity care, gynecology, pediatrics, general medicine, preventive health checkups, diagnostic services, and family healthcare. Visit our Services section for detailed information.',
  },
  {
    question: 'Are emergency services available?',
    answer:
      'Yes, Aditi Hospital provides 24/7 emergency care services. Our emergency unit is staffed with trained medical professionals and equipped to handle urgent medical situations.',
  },
  {
    question: 'Can I request a callback?',
    answer:
      "Absolutely! You can request a callback through our website or by calling our reception. Our team will get in touch with you to discuss your healthcare needs and help schedule an appointment.",
  },
  {
    question: 'Can appointments be rescheduled?',
    answer:
      'Yes, appointments can be rescheduled. Please inform us at least 4 hours in advance by calling our reception. We will help you find a more convenient time based on doctor availability.',
  },
];

// Hero images
export const heroImage =
  'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1200';

// Callback form departments
export const departments = [
  'Maternity Care',
  "Women's Health",
  'Gynecology',
  'Pediatrics',
  'General Medicine',
  'Preventive Checkups',
  'Diagnostic Services',
  'Surgery Consultation',
];

// Preferred callback times
export const preferredTimes = [
  'Morning (9 AM - 12 PM)',
  'Afternoon (12 PM - 4 PM)',
  'Evening (4 PM - 8 PM)',
];
