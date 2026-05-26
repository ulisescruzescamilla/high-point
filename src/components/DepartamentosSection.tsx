import { useState } from 'react'

const flatTabs = [
  { label: '48.50 m²', img: '/src/flats/1.webp' },
  { label: '43.3 m²',  img: '/src/flats/2.webp' },
  { label: '50.9 m²',  img: '/src/flats/3.webp' },
  { label: '65.0 m²',  img: '/src/flats/4.webp' },
  { label: '68.4 m²',  img: '/src/flats/5.webp' },
  { label: '80.4 m²',  img: '/src/flats/6.webp' },
  { label: '84.7 m²',  img: '/src/flats/7.webp' },
  { label: '88.4 m²',  img: '/src/flats/8.webp' },
]

export default function DepartamentosSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="departamentos" className="section-departamentos">
      <h2 className="section-title">Departamentos</h2>
      <div className="tabs">
        {flatTabs.map((flat, i) => (
          <button
            key={i}
            className={`tab-btn${activeIndex === i ? ' tab-btn--active' : ''}`}
            onClick={() => setActiveIndex(i)}
            type="button"
          >
            {flat.label}
          </button>
        ))}
      </div>
      <div className="flat-preview">
        <img
          src={flatTabs[activeIndex].img}
          alt={`Plano de departamento de ${flatTabs[activeIndex].label} en High Point Querétaro`}
          className="flat-image"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}
