const loremText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

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
          <p className="ubicacion-text">{loremText}</p>
          <img src="/src/map.png" alt="Mapa de ubicación" className="ubicacion-map" />
        </div>
      </div>
    </section>
  )
}
