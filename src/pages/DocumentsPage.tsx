import React from "react";
import { Link } from "react-router";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { clientDocuments, ClientDocument } from "../data/siteData";

export default function DocumentsPage() {
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
    <Layout pageName="documents">
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
    </Layout>
  );
}
