const items = [
  {
    title: 'Estilo de vida exclusiva',
    text: 'Sé parte del nuevo ícono en Querétaro en una zona estratégica con ubicación clave, cerca de todo.',
  },
  {
    title: 'Preventa',
    text: 'Al invertir en etapa de preventa, serás de los primeros en elegir tu departamento para que te quedes con la mejor opción.',
  },
  {
    title: 'Formas de pago',
    text: 'Nos adaptamos a tus posibilidades, pues aceptamos cofinanciamientos, Infonavit, Instituciones Bancarias, etc.',
  },
  {
    title: 'Alta plusvalía',
    text: 'No es lo mismo comprar en obra que al finalizar la misma. Tenemos para ti precios desde lista cero, ¡Eso quiere decir que cada porcentaje avanzado en venta incrementará tu inversión!',
  },
  {
    title: 'Rendimiento de inversión',
    text: 'Disfruta los rendimientos de tu renta o disfruta viviéndolo.',
  },
  {
    title: 'Seguridad',
    text: 'Ya tenemos un gran avance en la obra, pues ya está construida toda la estructura.',
  },
  {
    title: 'Experiencia',
    text: 'OR-B Desarrolladora tiene más de 15 años en el mercado, ha construido edificios icónicos en todo México como: Mitikah, St. Regis Reforma, St. Regis Punta Mita, etc.',
  },
]

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
        <div className="razones-list">
          {items.map((item, i) => (
            <p key={i} className="razones-item">
              <strong>{item.title}:</strong>
              {' '}{item.text}
            </p>
          ))}
        </div>
        <img src="/src/fachada.webp" alt="Fachada del edificio High Point Querétaro, departamentos en preventa en Centro Sur" className="razones-img" loading="lazy" decoding="async" />
      </div>
    </section>
  )
}
