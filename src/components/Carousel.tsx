import { useState } from 'react'

interface CarouselProps {
  images: string[]
  altPrefix?: string
}

export default function Carousel({ images, altPrefix = 'Slide' }: CarouselProps) {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex(i => Math.max(0, i - 1))
  const next = () => setIndex(i => Math.min(images.length - 1, i + 1))

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        role="list"
        aria-live="polite"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            className="carousel-slide"
          />
        ))}
      </div>
      <button
        className="carousel-btn carousel-btn--prev"
        onClick={prev}
        disabled={index === 0}
        aria-label="Anterior"
        type="button"
      >
        ‹
      </button>
      <button
        className="carousel-btn carousel-btn--next"
        onClick={next}
        disabled={index === images.length - 1}
        aria-label="Siguiente"
        type="button"
      >
        ›
      </button>
    </div>
  )
}
