import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Heart, CalendarCheck } from 'lucide-react';
import { navLinks, hospitalInfo } from '../../data/hospitalData';
import { Button } from '../ui/Button';
import { useScrollSpy } from '../../hooks/useAnimation';

export function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on resize to desktop
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-heading">
                {hospitalInfo.name}
              </h1>
              <p className="text-xs text-muted hidden sm:block">
                {hospitalInfo.localName}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-base font-medium transition-colors duration-200 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-primary'
                    : 'text-body hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${hospitalInfo.contact.phone}`}
              className="flex items-center text-primary hover:text-primary-hover transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">{hospitalInfo.contact.phone}</span>
            </a>
            <button
              onClick={() => navigate('/my-appointments')}
              className="text-base font-medium text-body hover:text-primary transition-colors"
            >
              My Appointments
            </button>
            <Button
              onClick={() => navigate('/book')}
              icon={<CalendarCheck className="w-4 h-4" />}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-body hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Rendered outside container for full-width backdrop */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-[500px] opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="container-custom pt-4 pb-4">
          <div className="bg-white rounded-xl border border-border p-4 shadow-lg space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-primary/10 text-primary'
                    : 'text-body hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <a
                href={`tel:${hospitalInfo.contact.phone}`}
                className="flex items-center px-4 py-3 text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors"
              >
                <Phone className="w-4 h-4 mr-3" />
                {hospitalInfo.contact.phone}
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/my-appointments');
                }}
                className="block w-full text-left px-4 py-3 rounded-lg font-medium text-body hover:bg-gray-50 transition-colors"
              >
                My Appointments
              </button>
              <Button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/book');
                }}
                className="w-full"
                icon={<CalendarCheck className="w-4 h-4" />}
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
