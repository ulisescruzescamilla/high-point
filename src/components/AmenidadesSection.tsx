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

const amenityFrames = Array.from({ length: 12 }, (_, i) => `/src/amenities/Frame%20${i + 1}.svg`)
const amenityFramesRow2 = Array.from({ length: 5 }, (_, i) => `/src/amenities/Frame%20${i + 13}.svg`)

export default function AmenidadesSection() {
  return (
    <section id="amenidades" className="section-amenidades">
      <h1 className="section-title">Amenidades</h1>

      <div className="amenities-grid">
        {amenityFrames.map((src, i) => (
          <div key={i} className="amenity-cell">
            <img src={src} alt={`Amenidad ${i + 1}`} />
          </div>
        ))}
      </div>
      <div className="amenities-grid amenities-grid--row2">
        {amenityFramesRow2.map((src, i) => (
          <div key={i} className="amenity-cell">
            <img src={src} alt={`Amenidad ${i + 13}`} />
          </div>
        ))}
      </div>

      <Carousel images={carouselImages} altPrefix="Amenidad" />
    </section>
  )
}
