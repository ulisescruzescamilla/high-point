const places = [
  'Centro Histórico de QUERÉTARO 5.2km',
  'Acueducto de Querétaro 4.8km',
  'Plaza de Armas 5.3km',
  'Templo de Santa Rosa de Viterbo 5.5km',
  'Universidad Autónoma de Querétaro 4.1km',
  'Estadio Corregidora 2.1km',
  'Hospital General de Querétaro 3.9km',
  'Cerro de las Campanas 6.8km',
  'Alameda Hidalgo 5.7km',
  'Teatro Metropolitano 1.2km',
  'Centro de Congresos de Querétaro 1.5km',
  'Club Campestre de Querétaro 7.8km',
  'Tecnológico de Monterrey Campus Querétaro 5.8km',
  'Hospital de Especialidades del Niño y de la Mujer 4.5km',
  'Hospital Regional No.1 del IMSS 6.2km',
]

export default function UbicacionSection() {
  return (
    <section id="ubicacion" className="section-ubicacion">
      <img
        src="/src/logo-background.png"
        className="logo-bg-overlay"
        alt=""
        aria-hidden="true"
      />
      <div className="ubicacion-content">
        <h1 className="ubicacion-title">Ubicación</h1>
        <p className="ubicacion-subtitle">
          Centro Sur 76090 Santiago de Querétaro, Querétaro
        </p>
        <div className="ubicacion-grid">
          <div className="ubicacion-list-wrap">
            <ol className="ubicacion-text ubicacion-list">
              {places.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ol>
            <a
              href="https://www.google.com/maps?q=centro+sur+76090+santiago+de+quer%C3%A9taro,+quer%C3%A9taro"
              target="_blank"
              rel="noopener noreferrer"
              className="ubicacion-map-btn"
            >
              Ver en Google Maps
            </a>
          </div>
          <img src="/src/map.png" alt="Mapa de ubicación" className="ubicacion-map" />
        </div>
      </div>
    </section>
  )
}
