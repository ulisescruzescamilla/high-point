interface CarouselProps {
  images: string[]
  altPrefix?: string
  alts?: string[]
  index?: number
  onIndexChange?: (i: number) => void
}

export default function Carousel({ images, altPrefix = 'Slide', alts, index = 0, onIndexChange }: CarouselProps) {
  if (images.length === 0) return null

  const navigate = (i: number) => onIndexChange?.(i)

  const prev = () => navigate(Math.max(0, index - 1))
  const next = () => navigate(Math.min(images.length - 1, index + 1))

  return (
    <div>
      <div className="carousel">
        <div
          className="carousel-track"
          aria-live="polite"
          style={{ transform: `translateX(calc(12.5% - ${index * 75}%))` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={alts?.[i] ?? `${altPrefix} ${i + 1}`}
              className={`carousel-slide${i === index ? ' carousel-slide--active' : ''}`}
              loading={i === index ? 'eager' : 'lazy'}
              decoding="async"
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
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`carousel-dot${i === index ? ' carousel-dot--active' : ''}`}
            onClick={() => navigate(i)}
            aria-label={`Imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
