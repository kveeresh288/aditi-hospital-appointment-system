import { useState } from 'react';
import { ArrowRight, ArrowLeft, Clock, IndianRupee, Stethoscope } from 'lucide-react';
import { Button } from '../../ui/Button';
import { bookingDoctors, bookingDepartments, type BookingDoctor } from '../../../data/bookingData';

interface DoctorSelectStepProps {
  selectedDoctorId: string;
  onContinue: (doctor: BookingDoctor) => void;
  onBack: () => void;
}

export function DoctorSelectStep({ selectedDoctorId, onContinue, onBack }: DoctorSelectStepProps) {
  const [department, setDepartment] = useState<string>('all');
  const [selected, setSelected] = useState(selectedDoctorId);

  const visibleDoctors =
    department === 'all'
      ? bookingDoctors
      : bookingDoctors.filter((doc) =>
          bookingDepartments
            .find((d) => d.label === department)
            ?.doctorIds.includes(doc.id)
        );

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-heading mb-2">Choose a Doctor</h2>
      <p className="text-muted mb-6">
        Select the department and the specialist you'd like to consult.
      </p>

      {/* Department Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setDepartment('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            department === 'all'
              ? 'bg-primary text-white border-primary'
              : 'bg-white text-body border-border hover:border-primary'
          }`}
        >
          All Departments
        </button>
        {bookingDepartments.map((dept) => (
          <button
            key={dept.label}
            onClick={() => setDepartment(dept.label)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              department === dept.label
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-body border-border hover:border-primary'
            }`}
          >
            {dept.label}
          </button>
        ))}
      </div>

      {/* Doctor Cards */}
      <div className="grid md:grid-cols-2 gap-5 mb-8">
        {visibleDoctors.map((doctor) => {
          const isSelected = selected === doctor.id;
          return (
            <button
              key={doctor.id}
              onClick={() => setSelected(doctor.id)}
              className={`text-left bg-white rounded-2xl border-2 p-5 flex gap-4 transition-all ${
                isSelected
                  ? 'border-primary shadow-md'
                  : 'border-border hover:border-primary/40 hover:shadow-sm'
              }`}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-heading">{doctor.name}</h3>
                <p className="text-sm text-primary font-medium">{doctor.specialty}</p>
                <p className="text-sm text-muted mt-1">{doctor.qualifications}</p>
                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Stethoscope className="w-3.5 h-3.5" />
                    {doctor.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {formatWorkingHours(doctor)}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-heading">
                    <IndianRupee className="w-3.5 h-3.5" />
                    {doctor.consultationFee} consultation fee
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Button variant="outline" size="lg" icon={<ArrowLeft className="w-5 h-5" />} onClick={onBack}>
          Back
        </Button>
        <Button
          variant="primary"
          size="lg"
          icon={<ArrowRight className="w-5 h-5" />}
          iconPosition="right"
          disabled={!selected}
          onClick={() => {
            const doctor = bookingDoctors.find((d) => d.id === selected);
            if (doctor) onContinue(doctor);
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

function formatWorkingHours(doctor: BookingDoctor): string {
  const fmt = (time: string) => {
    const [h, m] = time.split(':').map(Number);
    const period = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    return `${hour12}${m ? ':' + String(m).padStart(2, '0') : ''} ${period}`;
  };
  return `${fmt(doctor.startTime)} - ${fmt(doctor.endTime)}`;
}
