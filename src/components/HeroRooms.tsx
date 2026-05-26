const rooms = [
  { src: '/src/hero/room1.svg', alt: 'Sala de estar de departamento en High Point Querétaro' },
  { src: '/src/hero/room2.svg', alt: 'Recámara principal en departamento High Point Querétaro' },
  { src: '/src/hero/room3.svg', alt: 'Cocina moderna en departamento High Point Querétaro' },
]

export default function HeroRooms() {
  return (
    <div className="hero-rooms">
      {rooms.map(({ src, alt }) => (
        <div key={src} className="hero-rooms__cell">
          <img src={src} alt={alt} />
        </div>
      ))}
    </div>
  )
}
