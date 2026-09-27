import { useState } from "react";
import { Sparkles, Menu, X, Search, Sun, Moon } from "lucide-react";

const LINKS = [
  { label: "Product", href: "#showcase" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq" },
];

const isMac = typeof navigator !== "undefined" && /mac/i.test(navigator.platform);

interface HeaderProps {
  onOpenSearch: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Header({ onOpenSearch, theme, toggleTheme }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="brand">
          <span className="brand__mark">
            <Sparkles size={16} />
          </span>
          Nexora
        </a>

        <nav className="nav">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button className="search-trigger" onClick={onOpenSearch} aria-label="Open search">
            <Search size={14} />
            Search
            <span className="kbd">{isMac ? "⌘K" : "Ctrl K"}</span>
          </button>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a href="#login" className="link-btn">
            Log in
          </a>
          <a href="#final-cta" className="btn btn-primary">
            Start free
          </a>
          <button className="mobile-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <button
          onClick={() => {
            setOpen(false);
            onOpenSearch();
          }}
        >
          <Search size={16} /> Search
        </button>
        <button onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />} {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
        {LINKS.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#login" onClick={() => setOpen(false)}>
          Log in
        </a>
        <a href="#final-cta" onClick={() => setOpen(false)}>
          Start free
        </a>
      </div>
    </header>
  );
}
