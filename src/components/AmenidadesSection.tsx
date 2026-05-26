import { useState } from 'react'
import Carousel from './Carousel'

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

const frameToIndex: Record<number, number> = {
  1: 8,   // pet.png
  9: 6,   // lobby.png
  10: 1,  // biblioteca.png
  11: 7,  // ludoteca.png
  12: 2,  // family room.png
  13: 9,  // salon.png
  14: 5,  // gym.png
  15: 0,  // alberca.png
  16: 3,  // firepit.png
  17: 4,  // foro.png
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
            <img src={`/src/amenities/Frame%20${frame}.svg`} alt={`Amenidad ${frame}`} />
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
            <img src={`/src/amenities/Frame%20${frame}.svg`} alt={`Amenidad ${frame}`} />
          </div>
        ))}
      </div>

      <Carousel
        images={carouselImages}
        altPrefix="Amenidad"
        index={activeIndex}
        onIndexChange={setActiveIndex}
      />
    </section>
  )
}
