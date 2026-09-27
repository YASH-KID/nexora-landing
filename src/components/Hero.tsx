import { ArrowRight, PlayCircle } from "lucide-react";
import Reveal from "./Reveal";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <Reveal>
          <div className="hero__badge">
            <span className="pill">New</span>
            AI search across every project, doc and message
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="hero__title">
            Your team's work.
            <br />
            Finally in <span className="gradient-text">one place.</span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="hero__subtitle">
            Manage projects, research and team knowledge from a single intelligent workspace built for fast-moving teams.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="hero__ctas">
            <a href="#final-cta" className="btn btn-primary btn-lg">
              Start for free <ArrowRight size={17} />
            </a>
            <a href="#showcase" className="btn btn-secondary btn-lg">
              <PlayCircle size={17} /> View demo
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={260}>
        <div className="hero__preview-wrap container">
          <div className="hero__glow" />
          <DashboardMockup variant="overview" />
        </div>
      </Reveal>
    </section>
  );
}
