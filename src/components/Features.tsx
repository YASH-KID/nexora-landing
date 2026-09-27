import { FolderKanban, BrainCircuit, Users, Search, Workflow, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: FolderKanban,
    title: "Project management",
    desc: "Plan sprints, track tasks and see status across every team in one shared timeline.",
  },
  {
    icon: BrainCircuit,
    title: "AI knowledge search",
    desc: "Ask a question in plain language and get the answer, pulled from every doc, task and message.",
  },
  {
    icon: Users,
    title: "Real-time collaboration",
    desc: "Co-edit docs, comment inline and see who's online, without leaving your workspace.",
  },
  {
    icon: Search,
    title: "Unified search",
    desc: "One search bar across projects, files and chats. Stop hunting through five different apps.",
  },
  {
    icon: Workflow,
    title: "Custom automations",
    desc: "Trigger updates, notifications and handoffs automatically as work moves forward.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    desc: "SSO, granular permissions and audit logs, built in from day one.",
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Features</p>
          <h2 className="section-title">Everything your team needs, minus the app-switching</h2>
          <p className="section-sub">Nexora replaces the six tabs you keep open with one workspace that actually understands your work.</p>
        </Reveal>

        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="feature-card">
                <div className="feature-card__icon">
                  <f.icon size={20} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
