import { useState } from 'react'
import Carousel from './Carousel'

const plantImages = [
  '/src/plants/Flat1.webp',
  '/src/plants/Flat2.webp',
  '/src/plants/Flat3.webp',
  '/src/plants/Flat4.webp',
]

const plantAlts = [
  'Planta arquitectónica nivel 1 del edificio High Point Querétaro',
  'Planta arquitectónica nivel 2 del edificio High Point Querétaro',
  'Planta arquitectónica nivel 3 del edificio High Point Querétaro',
  'Planta arquitectónica nivel 4 del edificio High Point Querétaro',
]

export default function PlantasSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="plantas" className="section-plantas">
      <h2 className="section-title">Plantas</h2>
      <Carousel
        images={plantImages}
        alts={plantAlts}
        imageWidth={1600}
        imageHeight={1038}
        index={activeIndex}
        onIndexChange={setActiveIndex}
      />
    </section>
  )
}
