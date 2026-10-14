import { Link } from "react-router";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { faqs } from "../data/siteData";

export default function FaqPage() {
  return (
    <Layout pageName="faq">
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
    </Layout>
  );
}
