import { useState } from "react";
import { Check } from "lucide-react";
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

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

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

        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80}>
              <div className={`price-card ${plan.featured ? "price-card--featured" : ""}`}>
                {plan.featured && <span className="price-card__badge">Most popular</span>}
                <h3>{plan.name}</h3>
                <p className="price-card__desc">{plan.desc}</p>
                <div className="price-card__price">
                  {plan.monthly > 0 ? (
                    <>
                      <span className="amount">${annual ? plan.annual : plan.monthly}</span>
                      <span className="period">/ user / month</span>
                    </>
                  ) : (
                    <span className="amount">Custom</span>
                  )}
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
