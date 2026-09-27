import { useEffect, useMemo, useRef, useState } from "react";
import { FolderKanban, BookOpen, User, Zap, Search, Moon, Sun, CornerDownLeft, LogIn } from "lucide-react";

interface CommandItem {
  id: string;
  label: string;
  group: "Projects" | "Docs" | "People" | "Actions";
  hint?: string;
  action: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  onOpenLogin: () => void;
}

const GROUP_ICON = {
  Projects: FolderKanban,
  Docs: BookOpen,
  People: User,
  Actions: Zap,
};

export default function CommandPalette({ open, setOpen, theme, toggleTheme, onOpenLogin }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: CommandItem[] = useMemo(
    () => [
      { id: "p1", label: "Q4 Product Launch", group: "Projects", hint: "Live · Marketing", action: () => setOpen(false) },
      { id: "p2", label: "Research: Pricing", group: "Projects", hint: "Draft · Strategy", action: () => setOpen(false) },
      { id: "p3", label: "Customer Interviews", group: "Projects", hint: "Live · Research", action: () => setOpen(false) },
      { id: "d1", label: "Onboarding guide", group: "Docs", hint: "Updated 2d ago", action: () => setOpen(false) },
      { id: "d2", label: "Design system", group: "Docs", hint: "Updated 1w ago", action: () => setOpen(false) },
      { id: "d3", label: "API reference", group: "Docs", hint: "Updated 3d ago", action: () => setOpen(false) },
      { id: "u1", label: "Priya Nathan", group: "People", hint: "Head of Operations, Larkspur", action: () => setOpen(false) },
      { id: "u2", label: "Daniel Osei", group: "People", hint: "Engineering Manager, Modulo", action: () => setOpen(false) },
      { id: "u3", label: "Elena Marsh", group: "People", hint: "COO, Brightloop", action: () => setOpen(false) },
      { id: "a1", label: "Create new project", group: "Actions", action: () => setOpen(false) },
      { id: "a2", label: "Invite a teammate", group: "Actions", action: () => setOpen(false) },
      {
        id: "a3",
        label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        group: "Actions",
        action: () => {
          toggleTheme();
          setOpen(false);
        },
      },
      {
        id: "a4",
        label: "Log in",
        group: "Actions",
        action: () => {
          setOpen(false);
          onOpenLogin();
        },
      },
    ],
    [theme, toggleTheme, setOpen, onOpenLogin]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => item.label.toLowerCase().includes(q) || item.group.toLowerCase().includes(q));
  }, [items, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, open]);

  useEffect(() => {
    function handleGlobalKeydown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
    }
    window.addEventListener("keydown", handleGlobalKeydown);
    return () => window.removeEventListener("keydown", handleGlobalKeydown);
  }, [open, setOpen]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => inputRef.current?.focus(), 10);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  if (!open) return null;

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[activeIndex]) {
      filtered[activeIndex].action();
    }
  }

  let lastGroup: string | null = null;

  return (
    <div className="palette-backdrop" onClick={() => setOpen(false)}>
      <div className="palette" onClick={(e) => e.stopPropagation()} onKeyDown={handleKeyDown}>
        <div className="palette__input-row">
          <Search size={18} color="var(--text-soft)" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, docs, people, actions..."
            className="palette__input"
          />
          <button className="palette__close-hint" onClick={() => setOpen(false)}>
            esc
          </button>
        </div>

        <div className="palette__list">
          {filtered.length === 0 && <div className="palette__empty">No results for "{query}"</div>}

          {filtered.map((item, i) => {
            const showGroupLabel = item.group !== lastGroup;
            lastGroup = item.group;
            const Icon =
              item.id === "a3" ? (theme === "dark" ? Sun : Moon) : item.id === "a4" ? LogIn : GROUP_ICON[item.group];

            return (
              <div key={item.id}>
                {showGroupLabel && <div className="palette__group-label">{item.group}</div>}
                <button
                  className={`palette__item ${i === activeIndex ? "active" : ""}`}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={item.action}
                >
                  <Icon size={16} />
                  <span className="palette__item-label">{item.label}</span>
                  {item.hint && <span className="palette__item-hint">{item.hint}</span>}
                  {i === activeIndex && <CornerDownLeft size={13} className="palette__enter-icon" />}
                </button>
              </div>
            );
          })}
        </div>

        <div className="palette__footer">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> navigate
          </span>
          <span>
            <kbd>↵</kbd> select
          </span>
          <span>
            <kbd>esc</kbd> close
          </span>
        </div>
      </div>
    </div>
  );
}
