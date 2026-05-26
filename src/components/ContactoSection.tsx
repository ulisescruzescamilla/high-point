export default function ContactoSection() {
  return (
    <section id="contacto" className="section-contacto">
      <h2 className="contacto-title">Contáctanos</h2>
      <div className="contacto-grid">
        <div className="contacto-left">
          <div className="contacto-row">
            <svg className="contacto-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="1" y="3" width="14" height="10" rx="1" stroke="#29362F" strokeWidth="1.2" fill="none" />
              <path d="M1 4L8 9L15 4" stroke="#29362F" strokeWidth="1.2" fill="none" />
            </svg>
            <span className="contacto-email">xael@inside.com</span>
          </div>
          <div className="contacto-row">
            <svg className="contacto-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 3.5C2 2.67 2.67 2 3.5 2h1.86c.34 0 .64.22.74.54l.85 2.7c.1.32-.02.67-.3.84l-1.2.8a9.34 9.34 0 0 0 4.67 4.67l.8-1.2c.17-.28.52-.4.84-.3l2.7.85c.32.1.54.4.54.74v1.86c0 .83-.67 1.5-1.5 1.5H12C6.48 14 2 9.52 2 4.5V3.5z" stroke="#29362F" strokeWidth="1.2" fill="none" />
            </svg>
            <a href="tel:+525525386374" className="contacto-phone">55 2538 6374</a>
          </div>
          <a
            href="https://wa.me/525525386374"
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-btn"
          >
            Agenda tu cita
          </a>
        </div>
        <div className="contacto-right">
          <a
            href="https://wa.me/525525386374"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/whatsapp.svg" alt="WhatsApp" className="contacto-whatsapp" />
          </a>
        </div>
      </div>
    </section>
  )
}
