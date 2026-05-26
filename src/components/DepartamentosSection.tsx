import { useState } from 'react'

const flatTabs = [
  { label: '48.50 m²', img: '/src/flats/1.webp', width: 1290, height: 532 },
  { label: '43.3 m²',  img: '/src/flats/2.webp', width: 1290, height: 677 },
  { label: '50.9 m²',  img: '/src/flats/3.webp', width: 1290, height: 580 },
  { label: '65.0 m²',  img: '/src/flats/4.webp', width: 1290, height: 454 },
  { label: '68.4 m²',  img: '/src/flats/5.webp', width: 1290, height: 449 },
  { label: '80.4 m²',  img: '/src/flats/6.webp', width: 1290, height: 697 },
  { label: '84.7 m²',  img: '/src/flats/7.webp', width: 1290, height: 678 },
  { label: '88.4 m²',  img: '/src/flats/8.webp', width: 1290, height: 398 },
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
          width={flatTabs[activeIndex].width}
          height={flatTabs[activeIndex].height}
        />
      </div>
    </section>
  )
}
