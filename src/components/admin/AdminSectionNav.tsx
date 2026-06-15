import { Link, useLocation } from 'react-router-dom';
import { CalendarCheck, Settings } from 'lucide-react';

export function AdminSectionNav() {
  const location = useLocation();
  const isContent = location.pathname.startsWith('/reception/content');

  return (
    <div className="flex gap-2 mb-6">
      <Link
        to="/reception/dashboard"
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
          !isContent
            ? 'bg-primary text-white border-primary'
            : 'bg-white text-body border-border hover:border-primary'
        }`}
      >
        <CalendarCheck className="w-4 h-4" />
        Appointments
      </Link>
      <Link
        to="/reception/content"
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
          isContent
            ? 'bg-primary text-white border-primary'
            : 'bg-white text-body border-border hover:border-primary'
        }`}
      >
        <Settings className="w-4 h-4" />
        Manage Website
      </Link>
    </div>
  );
}
