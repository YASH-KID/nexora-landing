import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "We replaced four separate tools with Nexora in about a week. The AI search alone saved our PMs hours every day — nobody digs through old Slack threads anymore.",
    name: "Priya Nathan",
    role: "Head of Operations, Larkspur",
    color: "#ff6a3d",
  },
  {
    quote:
      "The rollout was painless and the team actually adopted it, which almost never happens with a new tool. Our sprint reviews are twice as fast now.",
    name: "Daniel Osei",
    role: "Engineering Manager, Modulo",
    color: "#6d5efc",
  },
  {
    quote:
      "Nexora's automations quietly handle the busywork we used to do by hand — status updates, handoffs, reminders. It just runs in the background now.",
    name: "Elena Marsh",
    role: "COO, Brightloop",
    color: "#1c9a5b",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title">Loved by teams who used to hate their tools</h2>
        </Reveal>

        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="testimonial-card">
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <div className="testimonial-card__meta">
                  <span className="avatar" style={{ background: t.color }}>
                    {initials(t.name)}
                  </span>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
