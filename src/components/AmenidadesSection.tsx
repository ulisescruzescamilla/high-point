import { useState } from 'react'
import Carousel from './Carousel'

const carouselImages = [
  '/src/carrousel/alberca.webp',
  '/src/carrousel/biblioteca.webp',
  '/src/carrousel/family%20room.webp',
  '/src/carrousel/firepit.webp',
  '/src/carrousel/foro.webp',
  '/src/carrousel/gym.webp',
  '/src/carrousel/lobby.webp',
  '/src/carrousel/ludoteca.webp',
  '/src/carrousel/pet.webp',
  '/src/carrousel/salon.webp',
]

const carouselAlts = [
  'Alberca del complejo residencial High Point Querétaro',
  'Biblioteca y sala de lectura en High Point Querétaro',
  'Family room y sala de entretenimiento en High Point Querétaro',
  'Área de fire pit en High Point Querétaro',
  'Foro al aire libre en High Point Querétaro',
  'Gimnasio completamente equipado en High Point Querétaro',
  'Lobby de departamentos High Point Querétaro',
  'Ludoteca infantil en High Point Querétaro',
  'Área pet friendly para mascotas en High Point Querétaro',
  'Salón de eventos en High Point Querétaro',
]

const frameAlts: Record<number, string> = {
  1:  'Ícono área pet friendly - High Point Querétaro',
  2:  'Ícono amenidad - High Point Querétaro',
  3:  'Ícono amenidad - High Point Querétaro',
  4:  'Ícono amenidad - High Point Querétaro',
  5:  'Ícono amenidad - High Point Querétaro',
  6:  'Ícono amenidad - High Point Querétaro',
  7:  'Ícono amenidad - High Point Querétaro',
  8:  'Ícono amenidad - High Point Querétaro',
  9:  'Ícono lobby del edificio - High Point Querétaro',
  10: 'Ícono biblioteca - High Point Querétaro',
  11: 'Ícono ludoteca infantil - High Point Querétaro',
  12: 'Ícono family room - High Point Querétaro',
  13: 'Ícono salón de eventos - High Point Querétaro',
  14: 'Ícono gimnasio - High Point Querétaro',
  15: 'Ícono alberca - High Point Querétaro',
  16: 'Ícono fire pit - High Point Querétaro',
  17: 'Ícono foro al aire libre - High Point Querétaro',
}

const frameToIndex: Record<number, number> = {
  1: 8,   // pet
  9: 6,   // lobby
  10: 1,  // biblioteca
  11: 7,  // ludoteca
  12: 2,  // family room
  13: 9,  // salon
  14: 5,  // gym
  15: 0,  // alberca
  16: 3,  // firepit
  17: 4,  // foro
}

const row1Frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const row2Frames = [13, 14, 15, 16, 17]

export default function AmenidadesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleFrameClick = (frame: number) => {
    if (frame in frameToIndex) setActiveIndex(frameToIndex[frame])
  }

  return (
    <section id="amenidades" className="section-amenidades">
      <h1 className="section-title">Amenidades</h1>

      <div className="amenities-grid">
        {row1Frames.map(frame => (
          <div
            key={frame}
            className={`amenity-cell${frame in frameToIndex ? ' amenity-cell--clickable' : ''}`}
            onClick={() => handleFrameClick(frame)}
          >
            <img src={`/src/amenities/Frame%20${frame}.svg`} alt={frameAlts[frame]} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
      <div className="amenities-grid amenities-grid--row2">
        {row2Frames.map(frame => (
          <div
            key={frame}
            className={`amenity-cell${frame in frameToIndex ? ' amenity-cell--clickable' : ''}`}
            onClick={() => handleFrameClick(frame)}
          >
            <img src={`/src/amenities/Frame%20${frame}.svg`} alt={frameAlts[frame]} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>

      <Carousel
        images={carouselImages}
        alts={carouselAlts}
        index={activeIndex}
        onIndexChange={setActiveIndex}
      />
    </section>
  )
}
