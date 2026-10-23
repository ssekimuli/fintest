import { ReactNode, useState } from "react";
import { Link } from "react-router";
import Logo from "./Logo";
import Icon from "./Icon";
import SEOHead from "./SEOHead";

interface LayoutProps {
  children: ReactNode;
  pageName?: string;
  title?: string;
  description?: string;
  canonicalPath?: string;
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

const PAGE_DEFAULTS: Record<string, { title: string; description: string }> = {
  services: {
    title: "Global Financial Services & Corporate Advisory",
    description:
      "Explore Titanium's global services: corporate accounting, international tax planning, multi-jurisdiction company formation, audit reviews, structured debt advisory, and high-yield investment management.",
  },
  documents: {
    title: "Official Client Agreements & Application Forms",
    description:
      "Download official Titanium Financial contracts, Free-Agent investment agreements, and credit application dossiers in PDF format.",
  },
  about: {
    title: "About Our Global Financial Consultancy",
    description:
      "Learn about Titanium Financial Consultancy Co. Ltd, founded on 7 March 2023 to empower businesses and investors globally across North America, Europe, Africa, and Asia with institutional financial advisory.",
  },
  team: {
    title: "Executive Leadership & Financial Specialists",
    description:
      "Meet our leadership team: Managing Director Namakoola Vivian Ritah, Director of Finance, Accounting & Taxation Odongo Stephen, and Director of Money Lending, Land & Property Winnie.",
  },
  faq: {
    title: "Frequently Asked Questions · Loans & Investment Tiers",
    description:
      "Get clear answers about our 1-month credit facilities, collateral acceptance, interest schedules, and Free-Agent 20% to 30% global investment return tiers.",
  },
  contact: {
    title: "Contact Our Global Advisors · Schedule Consultation",
    description:
      "Connect with our global financial advisors. Reach out via telephone (+256 771 939 934), email, or submit an online inquiry for international business accounting, tax, or investment support.",
  },
};

export default function Layout({
  children,
  pageName = "page",
  title,
  description,
  canonicalPath,
  jsonLd,
}: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const defaultMeta = PAGE_DEFAULTS[pageName];
  const effectiveTitle = title || defaultMeta?.title;
  const effectiveDesc = description || defaultMeta?.description;
  const effectiveCanonical =
    canonicalPath || (pageName === "all" || pageName === "home" ? "/" : `/${pageName}`);

  return (
    <div className={`site-shell site-shell--${pageName}`}>
      {/* Dynamic SEO Head Manager */}
      <SEOHead
        title={effectiveTitle}
        description={effectiveDesc}
        canonicalPath={effectiveCanonical}
        jsonLd={jsonLd}
      />

      <header className="header">
        <div className="container header__inner">
          <Logo height={52} width="auto" responsiveNav />
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name="menu" />
          </button>
          <nav className={`nav ${menuOpen ? "nav--open" : ""}`} aria-label="Primary navigation">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Documents", "/documents"],
              ["About", "/about"],
              ["Team", "/team"],
              ["FAQ", "/faq"],
              ["Guides", "/guides"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link key={label} to={href} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ))}
            <Link className="button button--primary nav__cta" to="/contact" onClick={() => setMenuOpen(false)}>
              Get Consultation
              <Icon name="arrow" size={18} />
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container footer__grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px" }}>
          <div className="footer__brand" style={{ gridColumn: "span 1" }}>
            <Logo light height={62} width="auto" />
            <p>Clear advice. Compliant finances. Confident growth.</p>
            <div className="footer__socials">
              <a
                href="https://instagram.com/tfccl25?xtok=d3pmOHdkamMwcXgw&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram @tfccl25"
                title="Follow us on Instagram @tfccl25"
              >
                <Icon name="instagram" size={18} />
                <span>@tfccl25</span>
              </a>
            </div>
          </div>
          <div className="footer__links">
            <strong>Explore</strong>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/documents">Client Documents &amp; Forms</Link>
            <Link to="/about">About us</Link>
            <Link to="/team">Our team</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer__links">
            <strong>Statutory Guides</strong>
            <Link to="/guides/ursb-company-registration-uganda-guide">URSB Registration Guide</Link>
            <Link to="/guides/ura-efris-tax-compliance-guide">URA EFRIS &amp; VAT Guide</Link>
            <Link to="/guides/short-term-loans-collateral-guide">1-Month Loan Guide</Link>
            <Link to="/guides/free-agent-investment-yield-guide">Investment Yield Guide</Link>
            <Link to="/guides">All Guides &rarr;</Link>
          </div>
          <div className="footer__links">
            <strong>Global &amp; Regional Hubs</strong>
            <Link to="/sectors/global-financial-consultancy-firm">Global Corporate Practice</Link>
            <Link to="/locations/diaspora-investment-property-management-usa-uk-canada">USA, UK &amp; Canada Diaspora</Link>
            <Link to="/locations/cross-border-financial-advisory-east-africa">East Africa Cross-Border</Link>
            <Link to="/sectors/foreign-company-incorporation-tax-uganda">FDI Foreign Entry</Link>
            <Link to="/sectors/expatriate-tax-advisory-philippines-global">Philippines &amp; Expats</Link>
            <Link to="/resources">Global Directory Index &rarr;</Link>
          </div>
          <div className="footer__contact">
            <strong>Get in touch</strong>
            <a href="tel:+256771939934">0771 939 934 / 0744 846 643</a>
            <a href="mailto:titaniumfinances23@gmail.com">titaniumfinances23@gmail.com</a>
            <a
              href="https://instagram.com/tfccl25?xtok=d3pmOHdkamMwcXgw&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-social"
            >
              <Icon name="instagram" size={15} />
              <span>Instagram: @tfccl25</span>
            </a>
            <span>Rowan Village Mall, Room Rubaga Boys, along Najjera-Buwate Road, Uganda</span>
          </div>
        </div>
        <div className="container footer__bottom">
          <span>© {new Date().getFullYear()} Titanium Financial Consultancy Co. Ltd. All rights reserved.</span>
          <span>Financial guidance is provided based on the information available at the time of consultation.</span>
        </div>
      </footer>
    </div>
  );
}

