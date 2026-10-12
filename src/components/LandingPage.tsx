import { FormEvent, ReactNode, useState } from "react";
import { Link } from "react-router";
import Logo from "./Logo";
import managingDirectorImg from "../assets/managing-director.png";

type IconName =
  | "arrow"
  | "building"
  | "calculator"
  | "check"
  | "document"
  | "headset"
  | "ledger"
  | "mail"
  | "menu"
  | "phone"
  | "pin"
  | "shield"
  | "target";

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  building: (
    <>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-4h6v4M8 9h1m6 0h1M8 13h1m6 0h1M2 21h20" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M8 6h8v4H8zM8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  document: (
    <>
      <path d="M6 2h8l4 4v16H6zM14 2v5h5" />
      <path d="M9 13h6M9 17h6M9 9h1" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H5a1 1 0 0 1-1-1zM20 14h-3v6h2a1 1 0 0 0 1-1z" />
      <path d="M17 20c0 1.1-2.2 2-5 2" />
    </>
  ),
  ledger: (
    <>
      <path d="M4 4h16v16H4zM8 2v4M16 2v4M4 9h16" />
      <path d="M8 13h3M8 17h8M15 13h1" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a15 15 0 0 0 5 5L15 13l5 2v4c0 1.1-.9 2-2 2C9.7 20.5 3.5 14.3 3 6a2 2 0 0 1 2-2Z" />,
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.8 3.2 8 7.5 9.5 4.3-1.5 7.5-4.7 7.5-9.5V6z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v3M21 12h-3M12 21v-3M3 12h3" />
    </>
  ),
};

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {iconPaths[name]}
    </svg>
  );
}


const services: {
  icon: IconName;
  number: string;
  title: string;
  description: string;
  points: string[];
  about: string;
  deliverables: string[];
}[] = [
  {
    icon: "calculator",
    number: "01",
    title: "Accounting & Financial Management",
    description: "Reliable records, reporting, and financial support for stronger day-to-day decisions.",
    points: ["Bookkeeping & reconciliations", "Financial reporting"],
    about:
      "We help businesses maintain accurate financial records and turn their financial activity into clear, decision-ready information that supports performance, planning, and sustainable growth.",
    deliverables: [
      "Accounting services and financial record preparation",
      "Bookkeeping and financial reconciliations",
      "Financial reporting and management support",
      "Business performance and decision support",
    ],
  },
  {
    icon: "shield",
    number: "02",
    title: "Audit Services",
    description: "Thorough financial reviews that improve record-keeping and strengthen internal controls.",
    points: ["Financial record reviews", "Internal control support"],
    about:
      "Our audit-related services examine financial information and supporting documentation to identify gaps, improve record-keeping practices, and strengthen internal financial controls.",
    deliverables: [
      "Financial information and document examination",
      "Financial record and process reviews",
      "Internal financial control assessment",
      "Practical record-keeping recommendations",
    ],
  },
  {
    icon: "document",
    number: "03",
    title: "Taxation & Statutory Compliance",
    description: "Practical tax guidance and filing support that keeps statutory obligations manageable.",
    points: ["Tax returns & EFRIS", "TIN & PRN support"],
    about:
      "We simplify tax and statutory compliance by preparing filings, supporting registrations, and guiding clients through electronic invoicing and payment processes.",
    deliverables: [
      "Tax consultancy and compliance support",
      "Preparation and filing of tax returns",
      "EFRIS e-invoicing and e-receipts assistance",
      "TIN applications, PRN generation, and payment guidance",
    ],
  },
  {
    icon: "building",
    number: "04",
    title: "Business & Company Registration",
    description: "End-to-end formalisation and documentation guidance for businesses and companies.",
    points: ["URSB requirements", "KCCA licensing"],
    about:
      "We support entrepreneurs and businesses through registration, formalisation, documentation, and relevant regulatory or licensing processes.",
    deliverables: [
      "Business and company registration support",
      "Formalisation and documentation assistance",
      "URSB registration process guidance",
      "KCCA and other licensing requirement support",
    ],
  },
  {
    icon: "ledger",
    number: "05",
    title: "Loan Application & Debt Restructuring",
    description: "Structured support for borrowers preparing applications or managing existing debt.",
    points: ["Loan documentation", "Repayment planning"],
    about:
      "We help prospective and existing borrowers prepare financial information, understand lending requirements, and create practical repayment or debt restructuring plans.",
    deliverables: [
      "Loan application and documentation assistance",
      "Financial guidance for prospective borrowers",
      "Debt restructuring and repayment planning",
      "Collateral documentation guidance",
    ],
  },
  {
    icon: "target",
    number: "06",
    title: "Financial & Investment Consultancy",
    description: "Objective guidance to align financial and investment decisions with your goals.",
    points: ["Financial planning", "Investment consultations"],
    about:
      "We provide practical financial planning and investment consultations to help clients evaluate options, make informed decisions, and align opportunities with their objectives.",
    deliverables: [
      "Personal and business financial planning",
      "Decision-support guidance",
      "Investment option consultations",
      "Goal and opportunity alignment",
    ],
  },
  {
    icon: "calculator",
    number: "07",
    title: "Money Lending",
    description: "Structured short-term lending with clear documentation and repayment arrangements.",
    points: ["One-month facilities", "Documented repayment terms"],
    about:
      "We provide money-lending services subject to applicable laws, licensing, assessment, and internal procedures, with clear loan documentation and repayment arrangements.",
    deliverables: [
      "Short-term loan assessment",
      "Loan documentation support",
      "Collateral and eligibility review",
      "Repayment arrangement guidance",
    ],
  },
  {
    icon: "building",
    number: "08",
    title: "Land & Property Management",
    description: "Practical support for property management, land valuation, and documentation processes.",
    points: ["Property management", "Land valuation"],
    about:
      "We support property owners with management needs, valuation services, and guidance through relevant land documentation and administrative processes.",
    deliverables: [
      "Property management support",
      "Land valuation services",
      "Land-related documentation guidance",
      "Process and administrative support",
    ],
  },
];

const trustPoints: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "shield",
    title: "Our Vision",
    description:
      "To become a trusted and leading provider of financial consultancy and integrated business solutions in Uganda and beyond.",
  },
  {
    icon: "target",
    title: "Our Mission",
    description:
      "To empower individuals and businesses through accessible, professional, and reliable financial consultancy and business support.",
  },
  {
    icon: "headset",
    title: "Our Core Values",
    description: "Professionalism, integrity, reliability, confidentiality, accountability, and client focus.",
  },
];

const team = [
  {
    id: "managing-director",
    icon: "target" as IconName,
    name: "Namakoola Vivian Ritah",
    role: "Managing Director",
    specialty: "Leadership · Strategic direction · Operations · Service delivery · Growth",
    image: managingDirectorImg,
  },
  {
    id: "director-accounting-finance-taxation",
    icon: "calculator" as IconName,
    name: "Accounting, Finance & Taxation",
    role: "Director",
    specialty: "Accounting · Financial management · Taxation services",
  },
  {
    id: "director-lending-land-property",
    icon: "building" as IconName,
    name: "Money Lending, Land & Property",
    role: "Director",
    specialty: "Money lending · Land services · Property management",
  },
];

const faqs: { category: string; question: string; answer: string; points?: string[] }[] = [
  {
    category: "Loans",
    question: "What are the loan interest rates and tiers?",
    answer:
      "Interest and fees are charged monthly according to the amount borrowed.",
    points: [
      "Tier 1 — UGX 10,000,000 and above: 6% per month",
      "Tier 2 — UGX 5,000,000 to 9,999,999: 8% per month",
      "Tier 3 — UGX 1,000,000 to 4,999,999: 10% per month",
      "Tier 4 — UGX 100,000 to 999,999: 12% per month",
    ],
  },
  {
    category: "Loans",
    question: "Which forms of identification are accepted?",
    answer:
      "We accept national IDs and passports. In some cases, an LC letter may also be accepted.",
  },
  {
    category: "Loans",
    question: "What collateral and supporting documents are accepted?",
    answer:
      "We accept land titles and other valuable items equal to the loan amount. Depending on the facility, an employment letter, certificate of incorporation, or trading license may also be required.",
  },
  {
    category: "Loans",
    question: "What is the loan duration?",
    answer:
      "Loans are issued strictly on a one-month basis, subject to assessment, documentation, and the agreed repayment arrangement.",
  },
  {
    category: "Loans",
    question: "How long does loan processing take?",
    answer:
      "Loan processing typically takes 3 to 7 working days after the required information and documents have been submitted.",
  },
  {
    category: "Free-Agent Investment",
    question: "What is the minimum investment and when is it due?",
    answer:
      "The minimum investment is UGX 200,000 per month. It may be paid as a lump sum or through payments completed within the first 5 days of the month.",
  },
  {
    category: "Free-Agent Investment",
    question: "What is the investment period and late-payment policy?",
    answer:
      "The minimum investment period to maturity is one year. A penalty is incurred when an investment is not made on time.",
  },
  {
    category: "Free-Agent Investment",
    question: "What are the annual investment return tiers?",
    answer: "Annual returns are determined by the total qualifying investment amount.",
    points: [
      "Tier 1 — UGX 4,800,000 and above: 30% returns per year",
      "Tier 2 — UGX 3,600,000 to 4,799,999: 25% returns per year",
      "Tier 3 — UGX 2,400,000 to 3,599,999: 20% returns per year",
    ],
  },
  {
    category: "Free-Agent Investment",
    question: "What is required to become an investor?",
    answer: "A valid form of identification is required to complete investor onboarding.",
  },
];

type PageName = "all" | "home" | "services" | "about" | "team" | "faq" | "contact";

function LandingPage({ page = "all" }: { page?: PageName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className={`site-shell site-shell--${page}`}>
      <header className="header">
        <div className="container header__inner">
          <Logo height={52} width="auto" />
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

      <main>
        {(page === "all" || page === "home") && (
          <section className="hero" id="home">
            <div className="hero__bg" aria-hidden="true">
              <img
                src="https://images.unsplash.com/photo-1512403754473-27835f7b9984?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1920"
                alt=""
                className="hero__bg-img"
              />
              <div className="hero__bg-overlay" />
              <div className="hero__bg-pattern" />
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
                  <Link className="button button--primary button--large" to="/contact">
                    Schedule Consultation
                    <Icon name="arrow" size={19} />
                  </Link>
                  <Link className="button button--outline button--large" to="/services">
                    View Services
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
                including eligibility, timelines, rates, and return tiers.
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
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <Logo light height={62} width="auto" />
            <p>Clear advice. Compliant finances. Confident growth.</p>
          </div>
          <div className="footer__links">
            <strong>Explore</strong>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
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

export default LandingPage;
