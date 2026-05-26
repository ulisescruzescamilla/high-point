import { lazy, Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const RazonesSection       = lazy(() => import('./components/RazonesSection'))
const SectionBreak         = lazy(() => import('./components/SectionBreak'))
const AmenidadesSection    = lazy(() => import('./components/AmenidadesSection'))
const DepartamentosSection = lazy(() => import('./components/DepartamentosSection'))
const AcabadosSection      = lazy(() => import('./components/AcabadosSection'))
const PlantasSection       = lazy(() => import('./components/PlantasSection'))
const UbicacionSection     = lazy(() => import('./components/UbicacionSection'))
const AboutSection         = lazy(() => import('./components/AboutSection'))
const ContactoSection      = lazy(() => import('./components/ContactoSection'))
const Footer               = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="page">
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
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
          <img src="/src/whatsapp.svg" alt="WhatsApp" width={128} height={128} />
        </a>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
