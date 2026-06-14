import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Services } from './components/sections/Services';
import { Doctors } from './components/sections/Doctors';
import { Facilities } from './components/sections/Facilities';
import { PatientJourney } from './components/sections/PatientJourney';
import { CallbackForm } from './components/sections/CallbackForm';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhyChooseUs />
        <Services />
        <Doctors />
        <Facilities />
        <PatientJourney />
        <CallbackForm />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
