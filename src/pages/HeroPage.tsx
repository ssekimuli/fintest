import { Link } from "react-router";
import Layout from "../components/Layout";
import Icon from "../components/Icon";

export default function HeroPage() {
  return (
    <Layout pageName="home">
      <section className="hero" id="home">
        <div className="hero__bg" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1512403754473-27835f7b9984?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1920"
            alt=""
            className="hero__bg-img"
          />
          <div className="hero__overlay" />
          <div className="hero__glow hero__glow--1" />
          <div className="hero__glow hero__glow--2" />
        </div>

        <div className="container hero__grid">
          <div className="hero__content">
            <div className="eyebrow eyebrow--light">
              <span />
              Journey to Financial Freedom
            </div>
            <h1>
              Your Trusted Partner in <em>Financial Growth</em> &amp; Compliance
            </h1>
            <p className="hero__lead">
              Accessible financial consultancy and integrated business support for individuals and businesses
              across Uganda—built around sound management, compliance, growth, and long-term sustainability.
            </p>
            <div className="hero__actions">
              <Link className="button button--primary button--large" to="/services">
                Explore Our Services
                <Icon name="arrow" size={19} />
              </Link>
            </div>
            <div className="hero__proof">
              <div className="proof__avatars" aria-hidden="true">
                <span>TF</span>
                <span>AC</span>
                <span>+</span>
              </div>
              <div>
                <strong>Established 7 March 2023</strong>
                <span>Serving individuals and businesses in Uganda</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__card">
              <div className="hero__card-header">
                <span className="hero__card-badge">
                  <span className="hero__card-dot" />
                  Regulated Advisory · Uganda
                </span>
                <span className="hero__card-stat-mini">Kampala, UG</span>
              </div>

              <h3 className="hero__card-title">Institutional Financial Solutions</h3>
              <p className="hero__card-subtitle">
                End-to-end consultancy designed for sustainable business operations and compliance.
              </p>

              <div className="hero__card-features">
                <div className="hero__feature-item">
                  <div className="hero__feature-icon">
                    <Icon name="calculator" size={20} />
                  </div>
                  <div className="hero__feature-text">
                    <strong>Accounting &amp; Tax Compliance</strong>
                    <span>Bookkeeping, URA returns &amp; EFRIS assistance</span>
                  </div>
                </div>

                <div className="hero__feature-item">
                  <div className="hero__feature-icon">
                    <Icon name="ledger" size={20} />
                  </div>
                  <div className="hero__feature-text">
                    <strong>Credit &amp; Debt Restructuring</strong>
                    <span>Short-term lending facilities &amp; repayment plans</span>
                  </div>
                </div>

                <div className="hero__feature-item">
                  <div className="hero__feature-icon">
                    <Icon name="building" size={20} />
                  </div>
                  <div className="hero__feature-text">
                    <strong>Business Formalisation</strong>
                    <span>URSB registration, KCCA licenses &amp; land advisory</span>
                  </div>
                </div>
              </div>

              <div className="hero__card-footer">
                <div className="hero__card-trust">
                  <span className="hero__card-trust-icon">
                    <Icon name="shield" size={18} />
                  </span>
                  <div>
                    <strong>Built on Trust &amp; Precision</strong>
                    <small>Strict confidentiality &amp; professional accountability</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
