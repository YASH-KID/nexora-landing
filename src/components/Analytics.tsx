import Reveal from "./Reveal";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";

const STATS = [
  { value: 4200, suffix: "+", label: "Teams using Nexora" },
  { value: 42, suffix: "%", label: "Faster project delivery" },
  { value: 99.9, suffix: "%", label: "Platform uptime", decimals: 1 },
  { value: 18, suffix: "hrs", label: "Saved per person, monthly" },
];

function Stat({ value, suffix, label, decimals = 0 }: { value: number; suffix: string; label: string; decimals?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const raw = useCountUp(value * 10 ** decimals, inView);
  const display = (raw / 10 ** decimals).toFixed(decimals);

  return (
    <div ref={ref}>
      <div className="stat__value">
        {display}
        {suffix}
      </div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

export default function Analytics() {
  return (
    <section className="analytics">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Results</p>
          <h2 className="section-title">Teams see the difference within weeks</h2>
          <p className="section-sub">Less time searching for context, more time doing the work that matters.</p>
        </Reveal>

        <div className="stats-row">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
