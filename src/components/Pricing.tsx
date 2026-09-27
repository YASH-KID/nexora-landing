import { useMemo, useState } from "react";
import { Check, Users } from "lucide-react";
import Reveal from "./Reveal";

const PLANS = [
  {
    name: "Starter",
    desc: "For small teams getting organized.",
    monthly: 12,
    annual: 9,
    features: ["Up to 10 members", "Unlimited projects", "5 GB file storage", "Basic AI search", "Community support"],
    featured: false,
  },
  {
    name: "Pro",
    desc: "For growing teams that need to move fast.",
    monthly: 28,
    annual: 22,
    features: [
      "Up to 50 members",
      "Unlimited projects",
      "100 GB file storage",
      "Full AI knowledge search",
      "Custom automations",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "For organizations with advanced needs.",
    monthly: 0,
    annual: 0,
    features: ["Unlimited members", "SSO & SCIM", "Dedicated infrastructure", "Audit logs", "Custom contracts", "Dedicated success manager"],
    featured: false,
  },
];

const MIN_SEATS = 1;
const MAX_SEATS = 200;

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const [seats, setSeats] = useState(10);

  const sliderFill = useMemo(() => ((seats - MIN_SEATS) / (MAX_SEATS - MIN_SEATS)) * 100, [seats]);

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title">Simple pricing that scales with your team</h2>
          <p className="section-sub">Start free. Upgrade when your team is ready. No hidden fees, cancel anytime.</p>
        </Reveal>

        <Reveal delay={80}>
          <div className="billing-toggle">
            <span>Monthly</span>
            <button className={`toggle-switch ${annual ? "on" : ""}`} onClick={() => setAnnual((v) => !v)} aria-label="Toggle annual billing" />
            <span>Annual</span>
            <span className="save-badge">Save 20%</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="seat-calculator">
            <div className="seat-calculator__label">
              <Users size={16} />
              How many teammates?
            </div>
            <input
              type="range"
              min={MIN_SEATS}
              max={MAX_SEATS}
              value={seats}
              onChange={(e) => setSeats(Number(e.target.value))}
              className="seat-slider"
              style={{ background: `linear-gradient(to right, var(--accent) ${sliderFill}%, var(--border) ${sliderFill}%)` }}
              aria-label="Number of teammates"
            />
            <div className="seat-calculator__value">
              {seats} {seats === 1 ? "seat" : "seats"}
            </div>
          </div>
        </Reveal>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => {
            const perSeat = annual ? plan.annual : plan.monthly;
            return (
              <Reveal key={plan.name} delay={i * 80}>
                <div className={`price-card ${plan.featured ? "price-card--featured" : ""}`}>
                  {plan.featured && <span className="price-card__badge">Most popular</span>}
                  <h3>{plan.name}</h3>
                  <p className="price-card__desc">{plan.desc}</p>
                  <div className="price-card__price">
                    {plan.monthly > 0 ? (
                      <>
                        <span className="amount">${perSeat}</span>
                        <span className="period">/ user / month</span>
                      </>
                    ) : (
                      <span className="amount">Custom</span>
                    )}
                  </div>
                  {plan.monthly > 0 && (
                    <div className="price-card__total">
                      ≈ <strong>${(perSeat * seats).toLocaleString()}</strong> / mo for {seats} {seats === 1 ? "seat" : "seats"}
                    </div>
                  )}
                  <ul className="price-card__features">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <Check size={16} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#final-cta" className={`btn ${plan.featured ? "btn-on-dark" : "btn-secondary"}`}>
                    {plan.monthly > 0 ? "Start free trial" : "Contact sales"}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
