import { useState } from 'react'
import Carousel from './Carousel'

const acabadoTabs = [
  { label: 'Generales', img: '/src/finishes/general.webp',  alt: 'Acabados generales de departamentos High Point Querétaro' },
  { label: 'Cocina',    img: '/src/finishes/kitchen.webp',  alt: 'Acabados de cocina en departamentos High Point Querétaro' },
  { label: 'Baño',      img: '/src/finishes/bathroom.webp', alt: 'Acabados de baño en departamentos High Point Querétaro' },
]

const acabadoImages = acabadoTabs.map(t => t.img)
const acabadoAlts = acabadoTabs.map(t => t.alt)

export default function AcabadosSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="galeria" className="section-acabados">
      <h1 className="section-title">Acabados</h1>
      <div className="tabs">
        {acabadoTabs.map((tab, i) => (
          <button
            key={tab.label}
            className={`tab-btn${activeIndex === i ? ' tab-btn--active' : ''}`}
            onClick={() => setActiveIndex(i)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <Carousel
        images={acabadoImages}
        alts={acabadoAlts}
        index={activeIndex}
        onIndexChange={setActiveIndex}
      />
    </section>
  )
}
