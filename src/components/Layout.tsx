import { ReactNode, useState } from "react";
import { Link } from "react-router";
import Logo from "./Logo";
import Icon from "./Icon";

interface LayoutProps {
  children: ReactNode;
  pageName?: string;
}

export default function Layout({ children, pageName = "page" }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`site-shell site-shell--${pageName}`}>
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
        <div className="container footer__grid">
          <div className="footer__brand">
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
            <strong>Services</strong>
            <Link to="/services">Accounting &amp; Audit</Link>
            <Link to="/services">Taxation &amp; Filing</Link>
            <Link to="/services">Lending &amp; Investment</Link>
            <Link to="/services">Land &amp; Property</Link>
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
