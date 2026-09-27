import { useState } from "react";
import { LayoutGrid, BarChart3, BookOpen } from "lucide-react";
import Reveal from "./Reveal";
import DashboardMockup from "./DashboardMockup";

const TABS = [
  { key: "overview", label: "Overview", icon: LayoutGrid, caption: "See every project, deadline and owner at a glance the moment you log in." },
  { key: "analytics", label: "Analytics", icon: BarChart3, caption: "Track velocity, workload and delivery trends without exporting a single spreadsheet." },
  { key: "docs", label: "Knowledge", icon: BookOpen, caption: "Every doc, spec and decision, indexed and searchable by your team's AI." },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export default function ProductShowcase() {
  const [active, setActive] = useState<TabKey>("overview");
  const activeTab = TABS.find((t) => t.key === active)!;

  return (
    <section className="showcase" id="showcase">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Product</p>
          <h2 className="section-title">One workspace, every view your team needs</h2>
          <p className="section-sub">Switch between how you plan, measure and document work, without switching tools.</p>
        </Reveal>

        <Reveal delay={80}>
          <div className="showcase__tabs">
            {TABS.map((tab) => (
              <button key={tab.key} className={`tab-btn ${active === tab.key ? "active" : ""}`} onClick={() => setActive(tab.key)}>
                <tab.icon size={15} />
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="showcase__panel">
            <DashboardMockup variant={active} />
            <p className="showcase__caption">{activeTab.caption}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
