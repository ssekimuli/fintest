import { useParams, Link } from "react-router";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import SEOHead from "../components/SEOHead";
import NotFoundPage from "./NotFoundPage";
import { pseoItems } from "../data/pseoData";
import { findKeywordBySlug } from "../data/keyword";

export default function PseoPage() {
  const { slug } = useParams<{ slug: string }>();
  const item = pseoItems.find((p) => p.slug === slug);

  if (!item) {
    return <NotFoundPage />;
  }

  const kw = findKeywordBySlug(item.slug);
  const categoryPath =
    item.category === "guide" ? "/guides" : item.category === "sector" ? "/sectors" : "/locations";
  const canonicalPath = `${categoryPath}/${item.slug}`;

  // Structured Data for the specific pSEO page
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": item.category === "guide" ? "Article" : "Service",
        "@id": `https://titaniumfinancialconsultancy.com${canonicalPath}#webpage`,
        name: item.title,
        headline: item.h1,
        description: item.metaDescription,
        keywords: kw ? [kw.term, ...kw.secondaryKeywords].join(", ") : undefined,
        provider: {
          "@id": "https://titaniumfinancialconsultancy.com/#organization",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: item.targetEntityOrArea,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://titaniumfinancialconsultancy.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: item.categoryLabel,
            item: `https://titaniumfinancialconsultancy.com${categoryPath}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: item.title,
            item: `https://titaniumfinancialconsultancy.com${canonicalPath}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: item.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  const relatedItems = pseoItems.filter((p) => item.relatedSlugs.includes(p.slug));

  return (
    <Layout pageName="pseo">
      <SEOHead
        title={item.title}
        description={item.metaDescription}
        canonicalPath={canonicalPath}
        jsonLd={pageJsonLd}
      />

      {/* Hero Header */}
      <section className="hero" style={{ minHeight: "auto", paddingBottom: "70px" }}>
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__bg-overlay" style={{ opacity: 0.94 }} />
          <div className="hero__bg-pattern" />
          <div className="hero__glow hero__glow--1" />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "40px" }}>
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" className="mb-6" style={{ fontSize: "0.85rem", opacity: 0.85 }}>
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
            <span className="mx-2 text-white/50">/</span>
            <span className="text-white/70">{item.categoryLabel}</span>
            <span className="mx-2 text-white/50">/</span>
            <span className="text-white font-medium">{item.targetEntityOrArea}</span>
          </nav>

          <div style={{ maxWidth: "860px" }}>
            <div className="eyebrow eyebrow--light mb-3">
              <span />
              {item.eyebrow}
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2, color: "var(--white)", marginBottom: "1.2rem" }}>
              {item.h1}
            </h1>

            <p className="hero__lead" style={{ fontSize: "1.15rem", color: "rgba(255, 255, 255, 0.88)", marginBottom: "2rem" }}>
              {item.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link className="button button--primary button--large" to="/contact">
                Schedule Consultation
                <Icon name="arrow" size={19} />
              </Link>
              <a
                href="tel:+256771939934"
                className="button button--outline"
                style={{ borderColor: "rgba(255, 255, 255, 0.4)", color: "var(--white)" }}
              >
                <Icon name="phone" size={17} />
                Call 0771 939 934
              </a>
              <span
                style={{
                  fontSize: "0.85rem",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.12)",
                  color: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80" }} />
                {item.badge}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Content */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "50px" }}>
          
          {/* Overview Section */}
          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "16px", border: "1px solid var(--line)", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
            <div className="eyebrow mb-2">
              <span />
              Strategic Overview
            </div>
            <h2 style={{ fontSize: "1.8rem", color: "var(--navy-deep)", marginBottom: "1rem" }}>
              Practical Guidance for {item.targetEntityOrArea}
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--ink)", opacity: 0.9 }}>
              {item.overview}
            </p>

            {kw && (
              <div
                style={{
                  marginTop: "24px",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--line)",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", color: "var(--muted)" }}>
                  Primary Focus:
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    background: "rgba(15,29,64,0.06)",
                    padding: "3px 10px",
                    borderRadius: "14px",
                    color: "var(--navy-deep)",
                  }}
                >
                  {kw.term}
                </span>
                {kw.semanticEntities.map((ent) => (
                  <span
                    key={ent}
                    style={{
                      fontSize: "0.78rem",
                      background: "rgba(217,30,42,0.06)",
                      padding: "3px 10px",
                      borderRadius: "14px",
                      color: "var(--crimson)",
                      fontWeight: 500,
                    }}
                  >
                    {ent}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Key Points & Challenges */}
          <div>
            <div className="section-heading">
              <div className="eyebrow">
                <span />
                Core Capabilities &amp; Solutions
              </div>
              <h2 style={{ fontSize: "1.8rem" }}>How We Resolve Your Compliance &amp; Growth Needs</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {item.keyPoints.map((point) => (
                <article
                  key={point.title}
                  style={{
                    background: "var(--white)",
                    padding: "30px",
                    borderRadius: "14px",
                    border: "1px solid var(--line)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "rgba(15, 29, 64, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--navy)",
                    }}
                  >
                    <Icon name="check" size={20} />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", margin: 0, color: "var(--navy-deep)" }}>{point.title}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                    {point.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Deliverables & Regulatory Notes */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
            {/* Deliverables List */}
            <div
              style={{
                background: "var(--white)",
                padding: "36px",
                borderRadius: "16px",
                border: "1px solid var(--line)",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", color: "var(--navy-deep)", marginBottom: "1.2rem" }}>
                What We Deliver
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                {item.deliverables.map((del) => (
                  <li key={del} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.95rem", color: "var(--ink)" }}>
                    <span style={{ color: "var(--crimson)", marginTop: "2px", flexShrink: 0 }}>
                      <Icon name="check" size={16} />
                    </span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regulatory Context Box */}
            <div
              style={{
                background: "linear-gradient(145deg, #09142e, #1c315b)",
                color: "var(--white)",
                padding: "36px",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "rgba(217, 30, 42, 0.25)",
                    color: "#ff8088",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Statutory &amp; Regulatory Note
                </span>
                <h3 style={{ fontSize: "1.3rem", color: "var(--white)", marginBottom: "1rem" }}>
                  Regulatory Compliance Context
                </h3>
                <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                  {item.regulatoryNotes}
                </p>
              </div>

              <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <Link to="/documents" className="text-white hover:underline" style={{ fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  Download official compliance forms &amp; agreements
                  <Icon name="arrow" size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions (Unique to this Topic) */}
          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "16px", border: "1px solid var(--line)" }}>
            <div className="section-heading mb-6">
              <div className="eyebrow">
                <span />
                Questions &amp; Direct Answers
              </div>
              <h2 style={{ fontSize: "1.7rem" }}>Frequently Asked Questions</h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {item.faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  open={index === 0}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: "10px",
                    padding: "18px 24px",
                    background: "var(--surface)",
                  }}
                >
                  <summary style={{ fontWeight: 600, color: "var(--navy-deep)", cursor: "pointer", fontSize: "1.05rem" }}>
                    {faq.question}
                  </summary>
                  <p style={{ marginTop: "12px", color: "var(--ink)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Related Hubs & Cross-Linking */}
          {relatedItems.length > 0 && (
            <div>
              <h3 style={{ fontSize: "1.3rem", color: "var(--navy-deep)", marginBottom: "16px" }}>
                Related Guides &amp; Regional Hubs
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                {relatedItems.map((rel) => {
                  const relPath =
                    rel.category === "guide" ? `/guides/${rel.slug}` : rel.category === "sector" ? `/sectors/${rel.slug}` : `/locations/${rel.slug}`;
                  return (
                    <Link
                      key={rel.slug}
                      to={relPath}
                      style={{
                        background: "var(--white)",
                        padding: "20px",
                        borderRadius: "10px",
                        border: "1px solid var(--line)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                      className="hover:shadow-md transition-shadow"
                    >
                      <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--crimson)", fontWeight: 600 }}>
                        {rel.categoryLabel}
                      </span>
                      <strong style={{ fontSize: "0.98rem", color: "var(--navy-deep)" }}>{rel.title}</strong>
                      <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
                        {rel.subtitle.slice(0, 90)}...
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom Consultation CTA */}
          <div
            style={{
              background: "var(--navy-deep)",
              color: "var(--white)",
              padding: "50px 40px",
              borderRadius: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div className="eyebrow eyebrow--light">
              <span />
              Ready to Take Action?
            </div>
            <h2 style={{ fontSize: "2rem", color: "var(--white)", maxWidth: "600px", margin: 0 }}>
              Let&apos;s discuss your financial and compliance requirements.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", maxWidth: "540px", margin: 0 }}>
              Visit our offices at Rowan Village Mall along Najjera-Buwate Road, or request an initial consultation online.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link className="button button--primary button--large" to="/contact">
                Contact Our Advisors
                <Icon name="arrow" size={18} />
              </Link>
              <a href="tel:+256771939934" className="button button--outline" style={{ color: "var(--white)", borderColor: "rgba(255,255,255,0.3)" }}>
                <Icon name="phone" size={17} />
                0771 939 934 / 0744 846 643
              </a>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
