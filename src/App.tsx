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
      <Footer />
    </div>
  )
}

export default App
