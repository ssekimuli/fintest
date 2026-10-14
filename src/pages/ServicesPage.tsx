import { useState } from "react";
import { Link } from "react-router";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { services } from "../data/siteData";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <Layout pageName="services">
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
    </Layout>
  );
}
