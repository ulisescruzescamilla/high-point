import { useState } from 'react'

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

export default function DepartamentosSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="departamentos" className="section-departamentos">
      <h1 className="section-title">Departamentos</h1>
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
          alt={`Departamento ${flatTabs[activeIndex].label}`}
          className="flat-image"
        />
      </div>
    </section>
  )
}
