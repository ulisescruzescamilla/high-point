const rooms = [
  { src: '/src/hero/room1.svg', alt: 'Room 1' },
  { src: '/src/hero/room2.svg', alt: 'Room 2' },
  { src: '/src/hero/room3.svg', alt: 'Room 3' },
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
