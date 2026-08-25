import { useState } from "react";
import "./PageShared.css";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconInstagram,
  IconWhatsApp,
  IconCheck,
  IconSend
} from "../components/Icons";

const ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "449d1562-b5f3-49a3-8922-cb68c4f25776";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New Project Inquiry - SKV Productions",
          from_name: "SKV Productions Contact Form",
          name: form.name,
          email: form.email,
          replyto: form.email,
          service: form.service || "Not specified",
          budget: form.budget || "Not specified",
          message: form.message
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus("done");
        setForm({ name: "", email: "", service: "", budget: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      setStatus("error");
      setErrorMsg(
        "Network error. Please check your internet connection and try again."
      );
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Get in Touch</div>
          <h1 className="page-title">
            Let us Build <span className="gradient-text">Something Great</span>
          </h1>
          <p className="page-subtitle">
            Tell us about your project and we will get back to you within 24
            hours.
          </p>
        </div>
      </div>
      <section className="page-content">
        <div className="container">
          <div className="contact-layout">
            {/* Left Info */}
            <div className="contact-info">
              <div className="contact-card glass">
                <h3>Contact Details</h3>
                <div className="contact-items">
                  <div className="citem">
                    <span className="citem-icon">
                      <IconPhone size={18} />
                    </span>
                    <div>
                      <strong>Phone / WhatsApp</strong>
                      <p>
                        <a
                          href="https://wa.me/919369104234?text=Hi%20SKV%20Productions%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          +91 93691 04234
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="citem">
                    <span className="citem-icon">
                      <IconMail size={18} />
                    </span>
                    <div>
                      <strong>Email</strong>
                      <p>
                        <a
                          href="mailto:s.k.v.productions0@gmail.com"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          s.k.v.productions0@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="citem">
                    <span className="citem-icon">
                      <IconMapPin size={18} />
                    </span>
                    <div>
                      <strong>Address</strong>
                      <p>C119/861, Hazaripur, Gorakhpur, Uttar Pradesh 273001</p>
                    </div>
                  </div>
                  <div className="citem">
                    <span className="citem-icon">
                      <IconClock size={18} />
                    </span>
                    <div>
                      <strong>Response Time</strong>
                      <p>Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-card glass">
                <h3>Follow Us</h3>
                <div className="social-grid">
                  <a
                    href="https://www.instagram.com/skvproductions0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card glass"
                  >
                    <IconInstagram size={16} /> Instagram
                  </a>
                  <a
                    href="https://wa.me/919369104234?text=Hi%20SKV%20Productions%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card glass"
                  >
                    <IconWhatsApp size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
            {/* Form */}
            <div className="contact-form-wrap glass">
              <h3>Send a Message</h3>
              {status === "done" ? (
                <div className="form-success">
                  <div className="success-icon">
                    <IconCheck size={28} />
                  </div>
                  <h4>Message Sent!</h4>
                  <p>
                    Thank you for reaching out. We will get back to you within 24
                    hours.
                  </p>
                  <button
                    className="btn-ghost"
                    onClick={() => setStatus("idle")}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="cform">
                  {status === "error" && (
                    <div
                      style={{
                        padding: "12px 16px",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(239, 68, 68, 0.12)",
                        border: "1px solid rgba(239, 68, 68, 0.25)",
                        color: "#f87171",
                        fontSize: "14px",
                        lineHeight: "1.5"
                      }}
                    >
                      {errorMsg || "Failed to send message. Please try again."}
                    </div>
                  )}
                  <div className="form-row">
                    <div className="fgroup">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        placeholder="Rahul Kapoor"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="fgroup">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        placeholder="rahul@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="fgroup">
                      <label>Service Required</label>
                      <select
                        value={form.service}
                        onChange={(e) =>
                          setForm({ ...form, service: e.target.value })
                        }
                      >
                        <option value="">Select a service...</option>
                        <option>Website Design</option>
                        <option>Landing Page</option>
                        <option>E-Commerce Store</option>
                        <option>Portfolio Website</option>
                        <option>UI/UX Design</option>
                        <option>Full Package</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="fgroup">
                      <label>Budget Range</label>
                      <select
                        value={form.budget}
                        onChange={(e) =>
                          setForm({ ...form, budget: e.target.value })
                        }
                      >
                        <option value="">Select budget...</option>
                        <option>Under ₹15,000</option>
                        <option>₹15,000 – ₹30,000</option>
                        <option>₹30,000 – ₹60,000</option>
                        <option>₹60,000+</option>
                        <option>Let us discuss</option>
                      </select>
                    </div>
                  </div>
                  <div className="fgroup">
                    <label>Tell us about your project *</label>
                    <textarea
                      rows="5"
                      placeholder="Describe your project, goals, and any specific requirements..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary full-w"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <IconSend size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
