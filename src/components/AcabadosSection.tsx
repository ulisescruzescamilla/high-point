import { useState } from 'react'

const acabadoImages = {
  general: '/src/finishes/general.png',
  cocina:  '/src/finishes/kitchen.png',
  bano:    '/src/finishes/bathroom.png',
} as const

type Acabado = keyof typeof acabadoImages

const acabadoTabs: { key: Acabado; label: string }[] = [
  { key: 'general', label: 'Generales' },
  { key: 'cocina',  label: 'Cocina' },
  { key: 'bano',    label: 'Baño' },
]

export default function AcabadosSection() {
  const [active, setActive] = useState<Acabado>('general')

  return (
    <section id="galeria" className="section-acabados">
      <h1 className="section-title">Acabados</h1>
      <div className="tabs">
        {acabadoTabs.map(({ key, label }) => (
          <button
            key={key}
            className={`tab-btn${active === key ? ' tab-btn--active' : ''}`}
            onClick={() => setActive(key)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>
      <div className="acabado-preview">
        <img
          src={acabadoImages[active]}
          alt={`Acabado ${active}`}
          className="acabado-image"
        />
      </div>
    </section>
  )
}
