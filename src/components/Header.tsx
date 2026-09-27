import { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Product", href: "#showcase" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq" },
];

export default function Header() {
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
