import { useState } from 'react'
import Carousel from './Carousel'

const plantImages = [
  '/src/plants/Flat1.png',
  '/src/plants/Flat2.png',
  '/src/plants/Flat3.png',
  '/src/plants/Flat4.png',
]

export default function PlantasSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="plantas" className="section-plantas">
      <h1 className="section-title">Plantas</h1>
      <Carousel
        images={plantImages}
        altPrefix="Planta"
        index={activeIndex}
        onIndexChange={setActiveIndex}
      />
    </section>
  )
}
