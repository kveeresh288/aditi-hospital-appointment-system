import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BookingPage } from './pages/BookingPage';
import { MyAppointmentsPage } from './pages/MyAppointmentsPage';
import { ReceptionLoginPage } from './pages/reception/ReceptionLoginPage';
import { ReceptionDashboardPage } from './pages/reception/ReceptionDashboardPage';
import { ProtectedRoute } from './components/reception/ProtectedRoute';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/my-appointments" element={<MyAppointmentsPage />} />
          <Route path="/reception/login" element={<ReceptionLoginPage />} />
          <Route
            path="/reception/dashboard"
            element={
              <ProtectedRoute>
                <ReceptionDashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
