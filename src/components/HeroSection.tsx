import heroImg from '/src/hero.webp'
import HeroCard from './HeroCard'
import HeroRooms from './HeroRooms'

export default function HeroSection() {
  return (
    <section id="proyecto" className="section-hero">
      <img src={heroImg} alt="" className="hero-bg" aria-hidden="true" fetchPriority="high" decoding="async" />
      <div className="hero-col hero-col--left" />
      <div className="hero-col hero-col--right">
        <HeroCard />
        <HeroRooms />
      </div>
    </section>
  )
}
