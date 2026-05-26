export default function Footer() {
  return (
    <footer className="footer">
      <p>
        High Point Querétaro &copy; {new Date().getFullYear()} |{' '}
        <a href="/aviso-de-privacidad">Aviso de privacidad</a>
      </p>
    </footer>
  )
}
