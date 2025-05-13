import MovingGradient from './components/MovingGradient';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <MovingGradient className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Reviews />
      <Contact />
    </MovingGradient>
  );
}

export default App;
