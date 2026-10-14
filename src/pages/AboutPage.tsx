import { Link } from "react-router";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { trustPoints } from "../data/siteData";

export default function AboutPage() {
  return (
    <Layout pageName="about">
      <section className="about section" id="about">
        <div className="about__accent" />
        <div className="container about__grid">
          <div className="about__intro">
            <div className="eyebrow eyebrow--light">
              <span />
              Why Titanium
            </div>
            <h2>Financial confidence starts with the right partner.</h2>
            <p>
              Titanium Financial Consultancy Co. Ltd is a Uganda-based financial consultancy and business
              services company providing professional financial, tax, accounting, registration, lending, and
              property-related support.
            </p>
            <div className="about__meta">
              <span>
                <small>Established</small>
                <strong>7 March 2023</strong>
              </span>
              <span>
                <small>Based at</small>
                <strong>Rowan Village Mall, Room Rubaga Boys</strong>
              </span>
            </div>
            <Link className="text-link" to="/contact">
              Let&apos;s grow your business
              <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div className="trust-grid">
            {trustPoints.map((point) => (
              <article className="trust-card" key={point.title}>
                <div className="trust-card__icon">
                  <Icon name={point.icon} size={25} />
                </div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
          <div className="about__audience">
            <span>Who We Serve</span>
            <p>
              Individuals seeking financial guidance, entrepreneurs and start-ups, small and medium-sized
              enterprises, established businesses, borrowers seeking loan or debt restructuring support, and
              property owners requiring land services.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
