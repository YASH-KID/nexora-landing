import { Sparkles, Globe, MessageCircle, Share2 } from "lucide-react";

const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Guides", "API reference", "Status"],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" className="brand">
              <span className="brand__mark">
                <Sparkles size={16} />
              </span>
              Nexora
            </a>
            <p>The AI workspace that brings your team's projects, research and knowledge into one intelligent place.</p>
          </div>

          {COLUMNS.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Nexora, Inc. A fictional product built as a design portfolio piece.</span>
          <div className="social-icons">
            <a href="#" aria-label="Social">
              <Share2 size={16} />
            </a>
            <a href="#" aria-label="Community">
              <MessageCircle size={16} />
            </a>
            <a href="#" aria-label="Website">
              <Globe size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
