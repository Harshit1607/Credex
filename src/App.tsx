import MovingGradient from './components/MovingGradient';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import AIChat from './components/AiChat';

function App() {
  return (
    <MovingGradient className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Reviews />
      <Contact />
      <AIChat />
    </MovingGradient>
  );
}

export default App;
