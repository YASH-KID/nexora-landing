import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "How long does it take to set up Nexora for my team?",
    a: "Most teams are fully onboarded within a day. Import your existing projects and docs in one click, invite your team, and Nexora's AI starts indexing your knowledge automatically.",
  },
  {
    q: "Can I import data from the tools we use today?",
    a: "Yes. Nexora connects to your existing project management, chat and file storage tools, and can bulk-import projects, tasks and documents during setup.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes, Starter includes a free tier for teams of up to 5 members with core project management and search features, no credit card required.",
  },
  {
    q: "How does the AI knowledge search work?",
    a: "Nexora indexes every project, document and message you give it access to, then lets anyone on your team ask questions in plain language and get answers with direct links back to the source.",
  },
  {
    q: "What happens to our data if we cancel?",
    a: "You can export all of your projects, documents and history at any time. After cancellation, your data is retained for 30 days before permanent deletion.",
  },
  {
    q: "Do you offer discounts for nonprofits or startups?",
    a: "Yes, we offer discounted annual pricing for early-stage startups and registered nonprofits. Reach out to our sales team from the pricing page to apply.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-item__question" onClick={() => setOpen((v) => !v)}>
        {q}
        <Plus size={18} />
      </button>
      <div className="faq-item__answer" style={{ maxHeight: open ? ref.current?.scrollHeight ?? 200 : 0 }}>
        <p ref={ref}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="container">
      <div className="faq" id="faq">
        <Reveal className="section-head align-left">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Frequently asked questions</h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="faq-list">
            {FAQS.map((f) => (
              <FaqItem key={f.q} {...f} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
