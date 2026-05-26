import { useState } from 'react'
import Carousel from './Carousel'

const acabadoTabs = [
  { label: 'Generales', img: '/src/finishes/general.png' },
  { label: 'Cocina',    img: '/src/finishes/kitchen.png' },
  { label: 'Baño',      img: '/src/finishes/bathroom.png' },
]

const acabadoImages = acabadoTabs.map(t => t.img)

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
        altPrefix="Acabado"
        index={activeIndex}
        onIndexChange={setActiveIndex}
      />
    </section>
  )
}
