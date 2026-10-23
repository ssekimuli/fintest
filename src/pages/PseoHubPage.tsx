import { useState, useMemo } from "react";
import { Link } from "react-router";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import SEOHead from "../components/SEOHead";
import { getAllPseoDirectorySummaries, type PseoDirectorySummary } from "../data/pseoEngine";

interface PseoHubPageProps {
  filterCategory?: "location" | "guide" | "sector";
}

const ITEMS_PER_PAGE = 24;

export default function PseoHubPage({ filterCategory }: PseoHubPageProps) {
  const allSummaries = useMemo(() => getAllPseoDirectorySummaries(), []);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter items by category, region, and search term
  const filtered = useMemo(() => {
    return allSummaries.filter((item) => {
      // Category filter
      if (filterCategory && item.category !== filterCategory) {
        return false;
      }

      // Region filter
      if (selectedRegion !== "all") {
        if (selectedRegion === "usa" && item.region !== "usa") return false;
        if (selectedRegion === "canada" && item.region !== "canada") return false;
        if (selectedRegion === "europe" && item.region !== "europe") return false;
        if (selectedRegion === "philippines" && item.region !== "philippines") return false;
        if (selectedRegion === "africa" && item.region !== "africa") return false;
        if (selectedRegion === "uganda" && item.region !== "uganda") return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesSubtitle = item.subtitle.toLowerCase().includes(q);
        const matchesArea = item.targetEntityOrArea.toLowerCase().includes(q);
        const matchesSlug = item.slug.toLowerCase().includes(q);
        return matchesTitle || matchesSubtitle || matchesArea || matchesSlug;
      }

      return true;
    });
  }, [allSummaries, filterCategory, selectedRegion, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const title =
    filterCategory === "location"
      ? "Global & Regional Financial Consultancy Hubs | Titanium Financial"
      : filterCategory === "guide"
      ? "Statutory Guides, URA Tax & Corporate Registration | Titanium Financial"
      : filterCategory === "sector"
      ? "Industry Sector Financial Solutions Worldwide | Titanium Financial"
      : "Global Financial Advisory, Regional Hubs & Guides Directory";

  const description =
    filterCategory === "location"
      ? "Explore Titanium Financial Consultancy practice hubs across North America, Europe, the Philippines, Continental Africa, and Uganda."
      : filterCategory === "guide"
      ? "Authoritative statutory guides covering URSB corporate registration, URA EFRIS electronic tax invoicing, Free-Agent investments, and land due diligence."
      : "Complete directory of specialized corporate accounting, international tax compliance, and commercial wealth services.";

  const canonicalPath = filterCategory
    ? filterCategory === "guide"
      ? "/guides"
      : filterCategory === "sector"
      ? "/sectors"
      : "/locations"
    : "/resources";

  const counts = useMemo(() => {
    return {
      all: allSummaries.length,
      locations: allSummaries.filter((i) => i.category === "location").length,
      guides: allSummaries.filter((i) => i.category === "guide").length,
      sectors: allSummaries.filter((i) => i.category === "sector").length,
    };
  }, [allSummaries]);

  return (
    <Layout pageName="resources">
      <SEOHead title={title} description={description} canonicalPath={canonicalPath} />

      {/* Hero Header */}
      <section className="hero" style={{ minHeight: "auto", paddingBottom: "70px" }}>
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__bg-overlay" style={{ opacity: 0.94 }} />
          <div className="hero__bg-pattern" />
          <div className="hero__glow hero__glow--1" />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "40px" }}>
          <div style={{ maxWidth: "860px" }}>
            <div className="eyebrow eyebrow--light mb-3">
              <span />
              Knowledge &amp; Service Directory (2,000+ Indexed Practices)
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--white)", marginBottom: "1rem" }}>
              {title}
            </h1>
            <p className="hero__lead" style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.88)", marginBottom: "2rem" }}>
              {description}
            </p>

            {/* Live Search Input */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(12px)",
                padding: "8px 16px",
                borderRadius: "14px",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                maxWidth: "600px",
              }}
            >
              <span style={{ color: "var(--white)", opacity: 0.8 }}>
                <Icon name="search" size={20} />
              </span>
              <input
                type="text"
                placeholder="Search by city, country, service, or keyword (e.g. London, Dallas, EFRIS, URSB)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#ffffff",
                  fontSize: "1rem",
                  width: "100%",
                }}
                className="placeholder:text-white/60"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "rgba(255,255,255,0.7)",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                  }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          {/* Category Tabs */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              to="/resources"
              style={{
                padding: "8px 18px",
                borderRadius: "30px",
                background: !filterCategory ? "var(--navy)" : "var(--white)",
                color: !filterCategory ? "var(--white)" : "var(--ink)",
                border: "1px solid var(--line)",
                fontWeight: 600,
                fontSize: "0.88rem",
              }}
            >
              All Directory ({counts.all})
            </Link>
            <Link
              to="/locations"
              style={{
                padding: "8px 18px",
                borderRadius: "30px",
                background: filterCategory === "location" ? "var(--navy)" : "var(--white)",
                color: filterCategory === "location" ? "var(--white)" : "var(--ink)",
                border: "1px solid var(--line)",
                fontWeight: 600,
                fontSize: "0.88rem",
              }}
            >
              Regional Hubs ({counts.locations})
            </Link>
            <Link
              to="/guides"
              style={{
                padding: "8px 18px",
                borderRadius: "30px",
                background: filterCategory === "guide" ? "var(--navy)" : "var(--white)",
                color: filterCategory === "guide" ? "var(--white)" : "var(--ink)",
                border: "1px solid var(--line)",
                fontWeight: 600,
                fontSize: "0.88rem",
              }}
            >
              Statutory Guides ({counts.guides})
            </Link>
            <Link
              to="/sectors"
              style={{
                padding: "8px 18px",
                borderRadius: "30px",
                background: filterCategory === "sector" ? "var(--navy)" : "var(--white)",
                color: filterCategory === "sector" ? "var(--white)" : "var(--ink)",
                border: "1px solid var(--line)",
                fontWeight: 600,
                fontSize: "0.88rem",
              }}
            >
              Industry Sectors ({counts.sectors})
            </Link>
          </div>

          {/* Region Filter Pills */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "32px",
              flexWrap: "wrap",
              alignItems: "center",
              padding: "12px 16px",
              background: "var(--white)",
              borderRadius: "12px",
              border: "1px solid var(--line)",
            }}
          >
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase" }}>
              Filter by Region:
            </span>
            {[
              { key: "all", label: "All Geographies" },
              { key: "usa", label: "United States (USA)" },
              { key: "canada", label: "Canada" },
              { key: "europe", label: "Europe & UK" },
              { key: "philippines", label: "Philippines & APAC" },
              { key: "africa", label: "Continental Africa" },
              { key: "uganda", label: "Uganda (Domestic)" },
            ].map((reg) => (
              <button
                key={reg.key}
                type="button"
                onClick={() => {
                  setSelectedRegion(reg.key);
                  setCurrentPage(1);
                }}
                style={{
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "0.82rem",
                  fontWeight: selectedRegion === reg.key ? 700 : 500,
                  background: selectedRegion === reg.key ? "var(--crimson)" : "rgba(15,29,64,0.05)",
                  color: selectedRegion === reg.key ? "var(--white)" : "var(--ink)",
                  transition: "all 0.15s ease",
                }}
              >
                {reg.label}
              </button>
            ))}
          </div>

          {/* Results Summary */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <span style={{ fontSize: "0.92rem", color: "var(--muted)" }}>
              Showing <strong>{filtered.length}</strong> matching entries (Page {safeCurrentPage} of {totalPages})
            </span>
          </div>

          {/* Cards Grid */}
          {paginatedItems.length === 0 ? (
            <div
              style={{
                background: "var(--white)",
                padding: "60px 40px",
                borderRadius: "16px",
                textAlign: "center",
                border: "1px solid var(--line)",
              }}
            >
              <h3 style={{ fontSize: "1.4rem", color: "var(--navy-deep)", marginBottom: "8px" }}>
                No directory results found
              </h3>
              <p style={{ color: "var(--muted)", margin: "0 0 20px 0" }}>
                Try adjusting your search query or switching regions.
              </p>
              <button
                type="button"
                className="button button--outline button--small"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedRegion("all");
                  setCurrentPage(1);
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {paginatedItems.map((item) => (
                <article
                  key={item.slug}
                  style={{
                    background: "var(--white)",
                    padding: "26px",
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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: "var(--crimson)",
                          background: "rgba(217, 30, 42, 0.08)",
                          padding: "3px 9px",
                          borderRadius: "16px",
                        }}
                      >
                        {item.categoryLabel}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 500 }}>
                        {item.targetEntityOrArea}
                      </span>
                    </div>

                    <h2 style={{ fontSize: "1.18rem", color: "var(--navy-deep)", margin: "0 0 10px 0", lineHeight: 1.35 }}>
                      <Link to={item.path} className="hover:text-red-700 transition-colors">
                        {item.title}
                      </Link>
                    </h2>

                    <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                      {item.subtitle.slice(0, 135)}...
                    </p>
                  </div>

                  <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px solid var(--line)" }}>
                    <Link
                      to={item.path}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "var(--navy)",
                      }}
                      className="hover:underline"
                    >
                      Read full guidance
                      <Icon name="arrow" size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div
              style={{
                marginTop: "48px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <button
                type="button"
                disabled={safeCurrentPage === 1}
                onClick={() => {
                  setCurrentPage((p) => Math.max(1, p - 1));
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }}
                className="button button--outline button--small"
                style={{ opacity: safeCurrentPage === 1 ? 0.4 : 1, cursor: safeCurrentPage === 1 ? "not-allowed" : "pointer" }}
              >
                Previous
              </button>

              <span style={{ padding: "0 12px", fontSize: "0.92rem", fontWeight: 600, color: "var(--ink)" }}>
                Page {safeCurrentPage} of {totalPages}
              </span>

              <button
                type="button"
                disabled={safeCurrentPage === totalPages}
                onClick={() => {
                  setCurrentPage((p) => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }}
                className="button button--outline button--small"
                style={{ opacity: safeCurrentPage === totalPages ? 0.4 : 1, cursor: safeCurrentPage === totalPages ? "not-allowed" : "pointer" }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
