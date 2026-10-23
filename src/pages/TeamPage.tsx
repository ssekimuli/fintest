import { Link } from "react-router";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { team } from "../data/siteData";

export default function TeamPage() {
  return (
    <Layout pageName="team">
      <section className="team section" id="team">
        <div className="container">
          <div className="team__top">
            <div className="section-heading">
              <div className="eyebrow">
                <span />
                Our Team
              </div>
              <h2>Expertise with a human touch.</h2>
            </div>
            <p>
              Our leadership combines strategic direction with specialist oversight across finance, taxation,
              lending, land, and property management.
            </p>
          </div>
          <div className="team__grid">
            {team.map((member, index) => (
              <article className="team-card" key={member.id}>
                <div className={`team-card__image ${member.image ? "" : "team-card__image--symbol"}`}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} loading="lazy" />
                  ) : (
                    <Icon name={member.icon} size={56} />
                  )}
                  <span className="team-card__index">0{index + 1}</span>
                </div>
                <div className="team-card__content">
                  <span>{member.role}</span>
                  <h3>{member.name}</h3>
                  <p>{member.specialty}</p>
                  {member.email && (
                    <a className="team-card__email" href={`mailto:${member.email}`}>
                      <Icon name="mail" size={13} />
                      <span>{member.email}</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="team__note">
            <span className="team__note-icon">
              <Icon name="headset" size={24} />
            </span>
            <p>
              <strong>One connected team.</strong> Whatever your financial need, you&apos;ll have the right
              specialist by your side.
            </p>
            <Link className="text-link" to="/contact">
              Work with us
              <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
