import { LayoutGrid, FolderKanban, BookOpen, BarChart3, Settings, Bell } from "lucide-react";

type Variant = "overview" | "analytics" | "docs";

const NAV_ITEMS = [
  { icon: LayoutGrid, label: "Overview", key: "overview" },
  { icon: FolderKanban, label: "Projects", key: "projects" },
  { icon: BookOpen, label: "Knowledge", key: "docs" },
  { icon: BarChart3, label: "Analytics", key: "analytics" },
  { icon: Settings, label: "Settings", key: "settings" },
];

const BAR_HEIGHTS: Record<Variant, number[]> = {
  overview: [38, 56, 44, 70, 52, 84, 60],
  analytics: [50, 65, 40, 78, 58, 90, 72],
  docs: [30, 42, 36, 48, 40, 55, 46],
};

export default function DashboardMockup({ variant = "overview" }: { variant?: Variant }) {
  return (
    <div className="dash">
      <aside className="dash__sidebar">
        <div className="dash__brand">
          <span className="dot" />
          Nexora
        </div>
        {NAV_ITEMS.map((item) => (
          <div key={item.key} className={`dash__nav-item ${item.key === variant ? "active" : ""}`}>
            <item.icon size={15} />
            {item.label}
          </div>
        ))}
      </aside>

      <div className="dash__main">
        <div className="dash__topbar">
          <h4>{variant === "overview" ? "Workspace overview" : variant === "analytics" ? "Team analytics" : "Knowledge base"}</h4>
          <div className="dash__topbar-actions">
            <Bell size={16} color="var(--text-soft)" />
            <span className="dash__pill-btn">+ New</span>
            <span className="dash__avatar" />
          </div>
        </div>

        <div className="dash__stats">
          <div className="stat-card">
            <div className="stat-card__label">Active projects</div>
            <div className="stat-card__value">24</div>
            <div className="stat-card__delta">+3 this week</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__label">{variant === "analytics" ? "Team velocity" : "Tasks done"}</div>
            <div className="stat-card__value">{variant === "analytics" ? "92%" : "312"}</div>
            <div className="stat-card__delta">+18%</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__label">{variant === "docs" ? "Docs indexed" : "Docs synced"}</div>
            <div className="stat-card__value">1.2k</div>
            <div className="stat-card__delta">+64 today</div>
          </div>
        </div>

        <div className="dash__panels">
          <div className="panel">
            <div className="panel__head">
              <span>Weekly activity</span>
              <span className="muted">Last 7 days</span>
            </div>
            <div className="bar-chart">
              {BAR_HEIGHTS[variant].map((h, i) => (
                <div key={i} className={`bar ${i === BAR_HEIGHTS[variant].length - 2 ? "active" : ""}`} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel__head">
              <span>{variant === "docs" ? "Recently updated" : "Recent projects"}</span>
            </div>
            <div className="dash__list-row">
              <span className="name">{variant === "docs" ? "Onboarding guide" : "Q4 Product Launch"}</span>
              <span className="tag green">Live</span>
            </div>
            <div className="dash__list-row">
              <span className="name">{variant === "docs" ? "Design system" : "Research: Pricing"}</span>
              <span className="tag orange">Draft</span>
            </div>
            <div className="dash__list-row">
              <span className="name">{variant === "docs" ? "API reference" : "Customer Interviews"}</span>
              <span className="tag green">Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
