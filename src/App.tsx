import { useState } from 'react'
import heroImg from '/src/hero.png'
import './App.css'

const carouselImages = [
  '/src/carrousel/alberca.png',
  '/src/carrousel/biblioteca.png',
  '/src/carrousel/family%20room.png',
  '/src/carrousel/firepit.png',
  '/src/carrousel/foro.png',
  '/src/carrousel/gym.png',
  '/src/carrousel/lobby.png',
  '/src/carrousel/ludoteca.png',
  '/src/carrousel/pet.png',
  '/src/carrousel/salon.png',
]

const amenityFrames = Array.from({ length: 12 }, (_, i) => `/src/amenities/Frame%20${i + 1}.svg`)
const amenityFramesRow2 = Array.from({ length: 5 }, (_, i) => `/src/amenities/Frame%20${i + 13}.svg`)

const flatTabs = [
  { label: '48.50 m²', img: '/src/flats/1.png' },
  { label: '43.3 m²',  img: '/src/flats/2.png' },
  { label: '50.9 m²',  img: '/src/flats/3.png' },
  { label: '65.0 m²',  img: '/src/flats/4.png' },
  { label: '68.4 m²',  img: '/src/flats/5.png' },
  { label: '80.4 m²',  img: '/src/flats/6.png' },
  { label: '84.7 m²',  img: '/src/flats/7.png' },
  { label: '88.4 m²',  img: '/src/flats/8.png' },
]

const acabadoImages = {
  general: '/src/finishes/general.png',
  cocina:  '/src/finishes/kitchen.png',
  bano:    '/src/finishes/bathroom.png',
} as const

type Acabado = keyof typeof acabadoImages

const navLinks = [
  { label: 'Proyecto',      href: '#proyecto' },
  { label: 'Amenidades',    href: '#amenidades' },
  { label: 'Departamentos', href: '#departamentos' },
  { label: 'Galería',       href: '#galeria' },
  { label: 'Ubicación',     href: '#ubicacion' },
  { label: 'Nosotros',      href: '#about-us' },
  { label: 'Contacto',      href: '#contacto' },
]

const loremText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

function App() {
  const [activeFlatIndex, setActiveFlatIndex] = useState(0)
  const [activeAcabado, setActiveAcabado] = useState<Acabado>('general')
  const [carouselIndex, setCarouselIndex] = useState(0)

  const prevSlide = () => setCarouselIndex(i => Math.max(0, i - 1))
  const nextSlide = () => setCarouselIndex(i => Math.min(carouselImages.length - 1, i + 1))

  return (
    <div className="page">
      {/* Navbar */}
      <nav className="navbar">
        <img src="/logo.svg" alt="High Point" className="navbar-logo" />
        <ul className="navbar-links">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Section 1 — Hero */}
      <section
        id="proyecto"
        className="section-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-col hero-col--left" />
        <div className="hero-col hero-col--right" />
      </section>

      {/* Section 2 — Razones */}
      <section id="razones" className="section-razones">
        <img
          src="/src/green-rectangle.svg"
          className="green-rect"
          alt=""
          aria-hidden="true"
        />
        <h1 className="razones-title">
          Razones para elegir comprar en High Point Querétaro
        </h1>
        <div className="razones-grid">
          <p className="razones-text">{loremText}</p>
          <img src="/src/fachada.png" alt="Fachada High Point" className="razones-img" />
        </div>
      </section>

      {/* Section 3 — Image break */}
      <section className="section-break">
        <img src="/src/section.svg" alt="" />
      </section>

      {/* Section 4 — Amenidades */}
      <section id="amenidades" className="section-amenidades">
        <h1 className="section-title">Amenidades</h1>

        {/* Amenities grid */}
        <div className="amenities-grid">
          {amenityFrames.map((src, i) => (
            <div key={i} className="amenity-cell">
              <img src={src} alt={`Amenidad ${i + 1}`} />
            </div>
          ))}
        </div>
        <div className="amenities-grid amenities-grid--row2">
          {amenityFramesRow2.map((src, i) => (
            <div key={i} className="amenity-cell">
              <img src={src} alt={`Amenidad ${i + 13}`} />
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
          >
            {carouselImages.map((src, i) => (
              <img key={i} src={src} alt={`Amenidad ${i + 1}`} className="carousel-slide" />
            ))}
          </div>
          <button
            className="carousel-btn carousel-btn--prev"
            onClick={prevSlide}
            disabled={carouselIndex === 0}
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            className="carousel-btn carousel-btn--next"
            onClick={nextSlide}
            disabled={carouselIndex === carouselImages.length - 1}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </section>

      {/* Section 5 — Departamentos */}
      <section id="departamentos" className="section-departamentos">
        <div className="tabs">
          {flatTabs.map((flat, i) => (
            <button
              key={i}
              className={`tab-btn${activeFlatIndex === i ? ' tab-btn--active' : ''}`}
              onClick={() => setActiveFlatIndex(i)}
              type="button"
            >
              {flat.label}
            </button>
          ))}
        </div>
        <div className="flat-preview">
          <img
            src={flatTabs[activeFlatIndex].img}
            alt={`Departamento ${flatTabs[activeFlatIndex].label}`}
            className="flat-image"
          />
        </div>
      </section>

      {/* Section 6 — Acabados */}
      <section id="galeria" className="section-acabados">
        <h1 className="section-title">Acabados</h1>
        <div className="tabs">
          {(
            [
              { key: 'general', label: 'Generales' },
              { key: 'cocina',  label: 'Cocina' },
              { key: 'bano',    label: 'Baño' },
            ] as { key: Acabado; label: string }[]
          ).map(({ key, label }) => (
            <button
              key={key}
              className={`tab-btn${activeAcabado === key ? ' tab-btn--active' : ''}`}
              onClick={() => setActiveAcabado(key)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
        <div className="acabado-preview">
          <img
            src={acabadoImages[activeAcabado]}
            alt={`Acabado ${activeAcabado}`}
            className="acabado-image"
          />
        </div>
      </section>

      {/* Section 7 — Ubicación */}
      <section id="ubicacion" className="section-ubicacion">
        <img
          src="/src/logo-background.png"
          className="logo-bg-overlay"
          alt=""
          aria-hidden="true"
        />
        <div className="ubicacion-content">
          <h1 className="ubicacion-title">Ubicación</h1>
          <p className="ubicacion-subtitle">
            Centro Sur 76090 Santiago de Querétaro, Querétaro
          </p>
          <div className="ubicacion-grid">
            <p className="ubicacion-text">{loremText}</p>
            <img src="/src/map.png" alt="Mapa de ubicación" className="ubicacion-map" />
          </div>
        </div>
      </section>

      {/* Section 8 — About Us */}
      <section id="about-us" className="section-about">
        <div className="about-left">
          <h1>¿Quiénes somos?</h1>
          <p>
            Pertenecemos a la destacada familia de
            proyectos de OR-B, una desarrolladora con
            un historial de éxitos que incluye Mítikah,
            The St. Regis Mexico City y muchos más.
            Nuestra dedicación a los detalles, calidad y
            experiencia profesional, nos ha permitido
            colaborar con inversores de renombre como
            Prudential Real Estate Investors y LaSalle Investors
            México, forjando alianzas con múltiples grupos
            institucionales desde 2010.
          </p>
        </div>
        <div className="about-right">
          <img src="/src/brand.png" alt="High Point brand" />
        </div>
      </section>

      {/* Section 9 — Contacto */}
      <section id="contacto" className="section-contacto">
        <h1 className="contacto-title">Contáctanos</h1>
        <div className="contacto-grid">
          <div className="contacto-left">
            <div className="contacto-row">
              <svg className="contacto-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1" y="3" width="14" height="10" rx="1" stroke="#848484" strokeWidth="1.2" fill="none" />
                <path d="M1 4L8 9L15 4" stroke="#848484" strokeWidth="1.2" fill="none" />
              </svg>
              <span>xael@inside.com</span>
            </div>
            <div className="contacto-row">
              <svg className="contacto-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 3.5C2 2.67 2.67 2 3.5 2h1.86c.34 0 .64.22.74.54l.85 2.7c.1.32-.02.67-.3.84l-1.2.8a9.34 9.34 0 0 0 4.67 4.67l.8-1.2c.17-.28.52-.4.84-.3l2.7.85c.32.1.54.4.54.74v1.86c0 .83-.67 1.5-1.5 1.5H12C6.48 14 2 9.52 2 4.5V3.5z" stroke="#848484" strokeWidth="1.2" fill="none" />
              </svg>
              <span>5525386374</span>
            </div>
          </div>
          <div className="contacto-right">
            <img src="/src/whatsapp.svg" alt="WhatsApp" className="contacto-whatsapp" />
          </div>
        </div>
      </section>
          
      {/* Footer */}
      <footer className="footer">
        <p>High Point Querétaro &copy; 2025 | Aviso de privacidad</p>
      </footer>

    </div>
  )
}

export default App
