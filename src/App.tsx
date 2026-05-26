import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import RazonesSection from './components/RazonesSection'
import SectionBreak from './components/SectionBreak'
import AmenidadesSection from './components/AmenidadesSection'
import DepartamentosSection from './components/DepartamentosSection'
import AcabadosSection from './components/AcabadosSection'
import PlantasSection from './components/PlantasSection'
import UbicacionSection from './components/UbicacionSection'
import AboutSection from './components/AboutSection'
import ContactoSection from './components/ContactoSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page">
      <Navbar />
      <HeroSection />
      <RazonesSection />
      <SectionBreak />
      <AmenidadesSection />
      <DepartamentosSection />
      <AcabadosSection />
      <PlantasSection />
      <UbicacionSection />
      <AboutSection />
      <ContactoSection />
      <a
        href="https://wa.me/525525386374"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <img src="/src/whatsapp.svg" alt="WhatsApp" />
      </a>
      <Footer />
    </div>
  )
}

export default App
