const loremText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

export default function RazonesSection() {
  return (
    <section id="razones" className="section-razones">
      <img
        src="/src/green-rectangle.svg"
        className="green-rect"
        alt=""
        aria-hidden="true"
      />
      <h1 className="razones-title">
        Razones para elegir comprar en High Point Querétaro
      </h1>
      <div className="razones-grid">
        <p className="razones-text">{loremText}</p>
        <img src="/src/fachada.png" alt="Fachada High Point" className="razones-img" />
      </div>
    </section>
  )
}
