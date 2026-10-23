import { Link } from "react-router";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import SEOHead from "../components/SEOHead";
import { pseoItems } from "../data/pseoData";

interface PseoHubPageProps {
  filterCategory?: "location" | "guide" | "sector";
}

export default function PseoHubPage({ filterCategory }: PseoHubPageProps) {
  const filtered = filterCategory
    ? pseoItems.filter((i) => i.category === filterCategory)
    : pseoItems;

  const title =
    filterCategory === "location"
      ? "Regional Financial Consultancy Hubs in Uganda"
      : filterCategory === "guide"
      ? "Uganda Tax, URSB Registration & Financial Guides"
      : filterCategory === "sector"
      ? "Industry Sector Financial Solutions in Uganda"
      : "Uganda Financial Consultancy Hubs & Guides Directory";

  const description =
    filterCategory === "location"
      ? "Explore Titanium Financial Consultancy services across Kampala, Najjera, Kira, Wakiso, Mukono, and Uganda."
      : filterCategory === "guide"
      ? "Authoritative statutory guides on URSB company registration, URA EFRIS compliance, short-term loans, and Free-Agent investments."
      : "Comprehensive directory of specialized financial, tax, and registration services for Ugandan businesses.";

  const canonicalPath = filterCategory
    ? filterCategory === "guide"
      ? "/guides"
      : filterCategory === "sector"
      ? "/sectors"
      : "/locations"
    : "/resources";

  return (
    <Layout pageName="resources">
      <SEOHead title={title} description={description} canonicalPath={canonicalPath} />

      <section className="hero" style={{ minHeight: "auto", paddingBottom: "70px" }}>
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__bg-overlay" style={{ opacity: 0.94 }} />
          <div className="hero__bg-pattern" />
          <div className="hero__glow hero__glow--1" />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "40px" }}>
          <div style={{ maxWidth: "800px" }}>
            <div className="eyebrow eyebrow--light mb-3">
              <span />
              Knowledge &amp; Service Directory
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--white)", marginBottom: "1rem" }}>
              {title}
            </h1>
            <p className="hero__lead" style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.85)" }}>
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          {/* Category Tabs */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "36px", flexWrap: "wrap" }}>
            <Link
              to="/resources"
              style={{
                padding: "10px 20px",
                borderRadius: "30px",
                background: !filterCategory ? "var(--navy)" : "var(--white)",
                color: !filterCategory ? "var(--white)" : "var(--ink)",
                border: "1px solid var(--line)",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              All Directory Items ({pseoItems.length})
            </Link>
            <Link
              to="/locations"
              style={{
                padding: "10px 20px",
                borderRadius: "30px",
                background: filterCategory === "location" ? "var(--navy)" : "var(--white)",
                color: filterCategory === "location" ? "var(--white)" : "var(--ink)",
                border: "1px solid var(--line)",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              Regional Hubs ({pseoItems.filter((i) => i.category === "location").length})
            </Link>
            <Link
              to="/guides"
              style={{
                padding: "10px 20px",
                borderRadius: "30px",
                background: filterCategory === "guide" ? "var(--navy)" : "var(--white)",
                color: filterCategory === "guide" ? "var(--white)" : "var(--ink)",
                border: "1px solid var(--line)",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              Statutory Guides ({pseoItems.filter((i) => i.category === "guide").length})
            </Link>
            <Link
              to="/sectors"
              style={{
                padding: "10px 20px",
                borderRadius: "30px",
                background: filterCategory === "sector" ? "var(--navy)" : "var(--white)",
                color: filterCategory === "sector" ? "var(--white)" : "var(--ink)",
                border: "1px solid var(--line)",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              Industry Sectors ({pseoItems.filter((i) => i.category === "sector").length})
            </Link>
          </div>

          {/* Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {filtered.map((item) => {
              const itemPath =
                item.category === "guide"
                  ? `/guides/${item.slug}`
                  : item.category === "sector"
                  ? `/sectors/${item.slug}`
                  : `/locations/${item.slug}`;

              return (
                <article
                  key={item.slug}
                  style={{
                    background: "var(--white)",
                    padding: "30px",
                    borderRadius: "16px",
                    border: "1px solid var(--line)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                  }}
                  className="hover:shadow-md transition-shadow"
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: "var(--crimson)",
                          background: "rgba(217, 30, 42, 0.08)",
                          padding: "4px 10px",
                          borderRadius: "20px",
                        }}
                      >
                        {item.categoryLabel}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{item.targetEntityOrArea}</span>
                    </div>

                    <h2 style={{ fontSize: "1.25rem", color: "var(--navy-deep)", margin: "0 0 10px 0", lineHeight: 1.35 }}>
                      <Link to={itemPath} className="hover:text-red-700 transition-colors">
                        {item.title}
                      </Link>
                    </h2>

                    <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                      {item.subtitle.slice(0, 140)}...
                    </p>
                  </div>

                  <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid var(--line)" }}>
                    <Link
                      to={itemPath}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "0.92rem",
                        fontWeight: 600,
                        color: "var(--navy)",
                      }}
                      className="hover:underline"
                    >
                      Read full guidance
                      <Icon name="arrow" size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
