const rooms = [
  { src: '/src/hero/room1.svg', alt: 'Sala de estar de departamento en High Point Querétaro', width: 288, height: 104 },
  { src: '/src/hero/room2.svg', alt: 'Recámara principal en departamento High Point Querétaro', width: 291, height: 104 },
  { src: '/src/hero/room3.svg', alt: 'Cocina moderna en departamento High Point Querétaro', width: 275, height: 104 },
]

export default function HeroRooms() {
  return (
    <div className="hero-rooms">
      {rooms.map(({ src, alt, width, height }) => (
        <div key={src} className="hero-rooms__cell">
          <img src={src} alt={alt} width={width} height={height} />
        </div>
      ))}
    </div>
  )
}
