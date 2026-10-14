import { FormEvent, useState } from "react";
import { Link } from "react-router";
import Layout from "./Layout";
import Icon from "./Icon";
import {
  services,
  trustPoints,
  team,
  faqs,
  clientDocuments,
  ClientDocument,
} from "../data/siteData";

export type PageName = "all" | "home" | "services" | "documents" | "about" | "team" | "faq" | "contact";

function LandingPage({ page = "all" }: { page?: PageName }) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  const handleDocumentDownload = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    doc: ClientDocument
  ) => {
    e.preventDefault();
    try {
      const { documentPdfBase64, downloadPdfBlob } = await import("../data/documentPdfData");
      const base64Data = documentPdfBase64[doc.id];
      if (base64Data) {
        downloadPdfBlob(base64Data, doc.downloadName);
        return;
      }
    } catch (err) {
      console.warn("PDF dynamic load failed, falling back to direct URL", err);
    }
    window.open(doc.filePath, "_blank");
  };

  return (
    <Layout pageName={page}>
      {(page === "all" || page === "home") && (
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
      )}

      {(page === "all" || page === "services") && (
        <section className="services section" id="services">
          <div className="container">
            <div className="section-heading section-heading--center">
              <div className="eyebrow">
                <span />
                What We Do
              </div>
              <h2>Our Core Financial Services</h2>
              <p>
                From accounting and statutory compliance to lending, investment, and property support, our
                integrated services help you move forward with clarity.
              </p>
            </div>
            <div className="services__grid">
              {services.map((service, index) => (
                <a
                  className={`service-card ${selectedService === index ? "service-card--active" : ""}`}
                  href="#service-detail"
                  key={service.title}
                  onClick={() => setSelectedService(index)}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span className="service-card__number">{service.number}</span>
                  <div className="service-card__icon">
                    <Icon name={service.icon} size={28} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>
                        <span>
                          <Icon name="check" size={13} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="service-card__more">
                    Explore service
                    <Icon name="arrow" size={16} />
                  </span>
                </a>
              ))}
            </div>
            <article className="service-detail" id="service-detail">
              <div className="service-detail__intro">
                <div className="service-detail__icon">
                  <Icon name={services[selectedService].icon} size={31} />
                </div>
                <span>Service {services[selectedService].number}</span>
                <h3>{services[selectedService].title}</h3>
                <p>{services[selectedService].about}</p>
                <Link className="button button--primary" to="/contact">
                  Discuss this service
                  <Icon name="arrow" size={18} />
                </Link>
              </div>
              <div className="service-detail__deliverables">
                <span>What we can help with</span>
                <ul>
                  {services[selectedService].deliverables.map((deliverable) => (
                    <li key={deliverable}>
                      <span>
                        <Icon name="check" size={15} />
                      </span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
                <p>
                  Need something more specific? Every engagement is tailored to your business size, current
                  records, and compliance requirements.
                </p>
              </div>
            </article>
          </div>
        </section>
      )}

      {(page === "all" || page === "documents") && (
        <section className="documents section" id="documents">
          <div className="container">
            <div className="section-heading section-heading--center">
              <div className="eyebrow">
                <span />
                Official Documentation &amp; Downloads
              </div>
              <h2>Client Agreements, Application Forms &amp; Contracts</h2>
              <p>
                Download and review official Titanium Financial agreements and credit application packages.
                Complete, sign, and submit in person at Rowan Village Mall or via our digital consultation channels.
              </p>
            </div>

            <div className="documents__grid">
              {clientDocuments.map((doc) => (
                <article className="document-card" key={doc.id}>
                  <div className="document-card__header">
                    <span className="document-card__tag">{doc.tag}</span>
                    <span className="document-card__meta">
                      {doc.pages} · {doc.fileSize}
                    </span>
                  </div>

                  <div className="document-card__icon-title">
                    <div className="document-card__icon">
                      <Icon name={doc.icon} size={28} />
                    </div>
                    <div>
                      <span className="document-card__tier">{doc.tierHighlight}</span>
                      <h3>{doc.title}</h3>
                      <small>{doc.subtitle}</small>
                    </div>
                  </div>

                  <div className="document-card__actions">
                    <a
                      className="button button--primary document-card__download-btn"
                      href={doc.filePath}
                      download={doc.downloadName}
                      onClick={(e) => handleDocumentDownload(e, doc)}
                      title={`Download ${doc.title}`}
                    >
                      <Icon name="download" size={18} />
                      Download PDF ({doc.fileSize})
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="documents__notice">
              <div className="documents__notice-icon">
                <Icon name="shield" size={24} />
              </div>
              <div className="documents__notice-text">
                <strong>Need help completing your application?</strong>
                <p>
                  You can print and fill these forms prior to visiting our office at Rowan Village Mall, Room Rubaga Boys.
                  Our documentation officers are also available to guide you through required attachments (National ID, URSB certificates, trading licenses).
                </p>
              </div>
              <Link className="button button--outline" to="/contact">
                Contact Document Support
                <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {(page === "all" || page === "about") && (
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
      )}

      {(page === "all" || page === "team") && (
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
      )}

      {(page === "all" || page === "faq") && (
        <section className="faq section" id="faq">
          <div className="faq__accent" />
          <div className="container faq__grid">
            <div className="faq__intro">
              <div className="eyebrow">
                <span />
                Frequently Asked Questions
              </div>
              <h2>Clear answers before we get started.</h2>
              <p>
                Review key information about our one-month loan facilities and Free-Agent Investment offering,
                including eligibility, documentation, timelines, and return tiers.
              </p>
              <div className="faq__support">
                <span className="faq__support-icon">
                  <Icon name="headset" size={23} />
                </span>
                <span>
                  <small>Still have a question?</small>
                  <Link to="/contact">Talk to our team</Link>
                </span>
              </div>
            </div>
            <div className="faq__list">
              {faqs.map((faq, index) => (
                <details className="faq__item" key={faq.question} open={index === 0}>
                  <summary>
                    <span className="faq__number">{String(index + 1).padStart(2, "0")}</span>
                    <strong>{faq.question}</strong>
                    <span className="faq__toggle" aria-hidden="true" />
                  </summary>
                  <div className="faq__answer">
                    <span>{faq.category}</span>
                    <p>{faq.answer}</p>
                    {faq.points && (
                      <ul>
                        {faq.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {(page === "all" || page === "contact") && (
        <section className="contact section" id="contact">
          <div className="container">
            <div className="section-heading section-heading--center">
              <div className="eyebrow">
                <span />
                Start a Conversation
              </div>
              <h2>Let&apos;s build your financial future.</h2>
              <p>Tell us what you need. Our team will get back to you with clear next steps.</p>
            </div>
            <div className="contact__card">
              <div className="contact__info">
                <span className="contact__label">Contact Details</span>
                <h3>Expert advice is one conversation away.</h3>
                <p>Reach us directly or send a consultation request. We&apos;re ready to help.</p>
                <div className="contact__list">
                  <a href="tel:+256771939934">
                    <span className="contact__icon">
                      <Icon name="phone" size={21} />
                    </span>
                    <span>
                      <small>Call us</small>
                      <strong>0771 939 934 / 0744 846 643</strong>
                    </span>
                  </a>
                  <a href="mailto:titaniumfinances23@gmail.com">
                    <span className="contact__icon">
                      <Icon name="mail" size={21} />
                    </span>
                    <span>
                      <small>Email us</small>
                      <strong>titaniumfinances23@gmail.com</strong>
                    </span>
                  </a>
                  <div>
                    <span className="contact__icon">
                      <Icon name="pin" size={21} />
                    </span>
                    <span>
                      <small>Visit us</small>
                      <strong>Rowan Village Mall, Room Rubaga Boys</strong>
                      <em>Along Najjera-Buwate Road, Uganda</em>
                    </span>
                  </div>
                  <a
                    href="https://instagram.com/tfccl25?xtok=d3pmOHdkamMwcXgw&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact__icon">
                      <Icon name="instagram" size={21} />
                    </span>
                    <span>
                      <small>Follow us on Instagram</small>
                      <strong>@tfccl25</strong>
                    </span>
                  </a>
                </div>
              </div>
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form__heading">
                  <span>Request a consultation</span>
                  <p>Complete the form and we&apos;ll be in touch.</p>
                </div>
                <div className="form__row">
                  <label>
                    Full name
                    <input name="name" placeholder="Your full name" required />
                  </label>
                  <label>
                    Phone number
                    <input name="phone" type="tel" placeholder="e.g. 0744 000 000" required />
                  </label>
                </div>
                <label>
                  Email address
                  <input name="email" type="email" placeholder="you@company.com" required />
                </label>
                <label>
                  Service needed
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.title}>{service.title}</option>
                    ))}
                  </select>
                </label>
                <label>
                  How can we help?
                  <textarea name="message" rows={3} placeholder="Tell us a little about your needs" />
                </label>
                <button className="button button--primary button--submit" type="submit">
                  Send Consultation Request
                  <Icon name="arrow" size={18} />
                </button>
                {submitted && (
                  <p className="form__success" role="status">
                    Thank you. Your request has been received and our team will contact you shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

export default LandingPage;
