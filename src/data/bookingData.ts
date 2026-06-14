// Doctors available for online appointment booking.
// workingDays: 0 = Sunday ... 6 = Saturday
// startTime/endTime in 24h "HH:mm" format, slotMinutes = duration of each slot
export interface BookingDoctor {
  id: string;
  name: string;
  specialty: string;
  qualifications: string;
  experience: string;
  department: string;
  image: string;
  workingDays: number[];
  startTime: string;
  endTime: string;
  slotMinutes: number;
  consultationFee: number;
}

export const bookingDoctors: BookingDoctor[] = [
  {
    id: 'dr-anjali-sharma',
    name: 'Dr. Anjali Sharma',
    specialty: 'Senior Consultant Gynecologist',
    qualifications: 'MBBS, MD (OBG), DNB',
    experience: '18+ Years Experience',
    department: 'Gynecology',
    image:
      'https://images.pexels.com/photos/545229/pexels-photo-545229.jpeg?auto=compress&cs=tinysrgb&w=400',
    workingDays: [1, 2, 3, 4, 5, 6],
    startTime: '10:00',
    endTime: '14:00',
    slotMinutes: 20,
    consultationFee: 500,
  },
  {
    id: 'dr-rajesh-kulkarni',
    name: 'Dr. Rajesh Kulkarni',
    specialty: 'Consultant General Physician',
    qualifications: 'MBBS, MD (General Medicine)',
    experience: '15+ Years Experience',
    department: 'General Medicine',
    image:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    workingDays: [1, 2, 3, 4, 5, 6],
    startTime: '18:00',
    endTime: '21:00',
    slotMinutes: 15,
    consultationFee: 400,
  },
  {
    id: 'dr-sneha-patil',
    name: 'Dr. Sneha Patil',
    specialty: 'Pediatric Specialist',
    qualifications: 'MBBS, MD (Pediatrics)',
    experience: '12+ Years Experience',
    department: 'Pediatrics',
    image:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    workingDays: [1, 2, 3, 4, 5, 6],
    startTime: '11:00',
    endTime: '13:00',
    slotMinutes: 20,
    consultationFee: 450,
  },
  {
    id: 'dr-vikram-deshmukh',
    name: 'Dr. Vikram Deshmukh',
    specialty: 'Consultant Surgeon',
    qualifications: 'MBBS, MS (General Surgery)',
    experience: '20+ Years Experience',
    department: 'Surgery Consultation',
    image:
      'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
    workingDays: [1, 2, 3, 4, 5, 6],
    startTime: '15:00',
    endTime: '18:00',
    slotMinutes: 20,
    consultationFee: 600,
  },
];

// Departments available for booking (subset that maps to a doctor above,
// plus general categories routed to the most relevant doctor)
export const bookingDepartments = [
  { label: 'Gynecology', doctorIds: ['dr-anjali-sharma'] },
  { label: "Women's Health & Maternity Care", doctorIds: ['dr-anjali-sharma'] },
  { label: 'General Medicine', doctorIds: ['dr-rajesh-kulkarni'] },
  { label: 'Pediatrics', doctorIds: ['dr-sneha-patil'] },
  { label: 'Surgery Consultation', doctorIds: ['dr-vikram-deshmukh'] },
  {
    label: 'Preventive Health Checkup',
    doctorIds: ['dr-rajesh-kulkarni', 'dr-anjali-sharma'],
  },
];

export const genderOptions = ['Male', 'Female', 'Other'];

const DAY_MS = 24 * 60 * 60 * 1000;

// Returns the next `count` dates (including today) on which the given doctor works
export function getAvailableDates(doctor: BookingDoctor, count = 14): Date[] {
  const dates: Date[] = [];
  let cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  while (dates.length < count) {
    if (doctor.workingDays.includes(cursor.getDay())) {
      dates.push(new Date(cursor));
    }
    cursor = new Date(cursor.getTime() + DAY_MS);
  }

  return dates;
}

// Generates all slot start times ("HH:mm") for a doctor on a given day
export function generateTimeSlots(doctor: BookingDoctor): string[] {
  const slots: string[] = [];
  const [startH, startM] = doctor.startTime.split(':').map(Number);
  const [endH, endM] = doctor.endTime.split(':').map(Number);

  let minutes = startH * 60 + startM;
  const endMinutes = endH * 60 + endM;

  while (minutes + doctor.slotMinutes <= endMinutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
    minutes += doctor.slotMinutes;
  }

  return slots;
}

// Formats "HH:mm" (24h) to a friendly "h:mm AM/PM" label
export function formatTimeLabel(time: string): string {
  const [h, m] = time.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, '0')} ${period}`;
}

// Formats a Date as YYYY-MM-DD (local date, no timezone shift)
export function toDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// Formats a Date for display, e.g. "Mon, 15 Jun"
export function formatDateLabel(date: Date): string {
  return date.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}

// Generates a human-friendly booking reference, e.g. AH-20260615-4F2K
export function generateBookingReference(): string {
  const now = new Date();
  const datePart = toDateKey(now).replace(/-/g, '');
  const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `AH-${datePart}-${randomPart}`;
}

export function getDoctorById(id: string): BookingDoctor | undefined {
  return bookingDoctors.find((doc) => doc.id === id);
}
