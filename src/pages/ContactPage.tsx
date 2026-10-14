import { FormEvent, useState } from "react";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { services } from "../data/siteData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <Layout pageName="contact">
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
    </Layout>
  );
}
