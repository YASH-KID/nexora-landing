import Reveal from "./Reveal";

const LOGOS = ["Fenwick", "Larkspur", "Modulo", "Brightloop", "Cascadia", "Verdant Labs"];

export default function LogoStrip() {
  return (
    <section className="logo-strip">
      <div className="container">
        <Reveal>
          <p className="logo-strip__label">Trusted by 4,000+ product and operations teams</p>
        </Reveal>
        <Reveal delay={80}>
          <div className="logo-strip__row">
            {LOGOS.map((logo) => (
              <span key={logo} className="logo-item">
                {logo}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
