import { Mail, MessageSquare, Calendar, Code2, PenTool, FileSpreadsheet, Cloud, Webhook } from "lucide-react";
import Reveal from "./Reveal";

const INTEGRATIONS = [
  { icon: Mail, name: "Email", color: "#ff6a3d" },
  { icon: MessageSquare, name: "Team chat", color: "#6d5efc" },
  { icon: Calendar, name: "Calendar", color: "#1c9a5b" },
  { icon: Code2, name: "Code repos", color: "#1c1410" },
  { icon: PenTool, name: "Design files", color: "#ff4d6d" },
  { icon: Webhook, name: "Automations", color: "#e0a800" },
  { icon: FileSpreadsheet, name: "Spreadsheets", color: "#2a9d5c" },
  { icon: Cloud, name: "Cloud storage", color: "#3b82f6" },
];

export default function Integrations() {
  return (
    <section className="integrations">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Integrations</p>
          <h2 className="section-title">Plugs into the tools you already use</h2>
          <p className="section-sub">Over 80 integrations to keep every part of your stack in sync, automatically.</p>
        </Reveal>

        <div className="integration-grid">
          {INTEGRATIONS.map((item, i) => (
            <Reveal key={item.name} delay={i * 40}>
              <div className="integration-card">
                <span className="integration-card__icon" style={{ background: item.color }}>
                  <item.icon size={18} color="#fff" />
                </span>
                {item.name}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
