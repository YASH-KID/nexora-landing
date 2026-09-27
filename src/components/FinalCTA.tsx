import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="final-cta" id="final-cta">
      <div className="container">
        <Reveal>
          <div className="final-cta__box">
            <h2 className="final-cta__title">Ready to bring your team's work into one place?</h2>
            <p className="final-cta__sub">Join thousands of teams already running projects, docs and knowledge through Nexora. Free for 14 days, no card required.</p>
            <div className="final-cta__ctas">
              <a href="#" className="btn btn-on-dark btn-lg">
                Start for free <ArrowRight size={17} />
              </a>
              <a href="#" className="btn btn-outline-light btn-lg">
                Talk to sales
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
