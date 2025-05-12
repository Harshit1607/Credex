import Contact from './components/Contact'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import WhyChooseUs from './components/WhyChooseUs'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Reviews />
        <Contact />
      </div>
    </>
  )
}

export default App
