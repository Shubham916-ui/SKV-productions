import { useState } from "react";
import { Link } from "react-router-dom";
import PricingSection from "../components/PricingSection";
import "./PageShared.css";
import "./Pricing.css";
import {
  IconSparkles,
  IconChevronDown,
  IconCheck,
  IconWhatsApp
} from "../components/Icons";

const faqs = [
  {
    q: "What is included in the 1-Year Free Domain and Hosting?",
    a: "Every eligible plan (Basic Website and Combo Package) includes 1 full year of standard commercial domain registration (.com, .in, etc.) plus fast, secure cloud hosting with 99.9% uptime, SSL certificate, and automated CDN caching."
  },
  {
    q: "What does the 1-Year Free AMC (Annual Maintenance Contract) cover?",
    a: "Our 1-Year Free AMC includes bug fixes, routine software health checks, dependency & security updates, and dedicated customer support to ensure your business software or website operates flawlessly without downtime."
  },
  {
    q: "Why is the Website + Software Combo our most popular choice?",
    a: "Normally, purchasing the Basic Website (₹4,999) and Basic Business Software (₹8,999) individually totals ₹13,998. With the combo deal at ₹11,999, you instantly save ₹1,999 while getting a unified digital presence and operational system with synchronized support."
  },
  {
    q: "How does the payment process and delivery milestones work?",
    a: "We work with transparent milestone-based payments (typically 40% advance to initiate architecture & design, 30% on mid-term prototype review, and 30% on final testing & live deployment). You retain full ownership of all assets and source code upon final handover."
  },
  {
    q: "What if I need custom features or third-party API integrations?",
    a: "All our plans can be customized! If you need payment gateway integrations (Razorpay, Stripe, Cashfree), SMS/WhatsApp notifications, custom ERP modules, or specialized APIs, we will provide a clear, itemized quote based on your exact specifications."
  },
  {
    q: "How quickly can my project be delivered?",
    a: "Basic websites are typically delivered within 4 to 7 business days. Custom business software and mobile applications range between 2 to 4 weeks depending on scope, database complexity, and approval cycles."
  }
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <div className="page-hero pricing-page-hero">
        <div className="container">
          <div className="section-label">
            <IconSparkles size={14} /> Pricing & Packages
          </div>
          <h1 className="page-title">
            Invest in Quality, Scale with <span className="gradient-text">Confidence</span>
          </h1>
          <p className="page-subtitle">
            Transparent pricing designed for growing brands, startups, and established enterprises.
            1-Year free support, domain, and hosting included across our packages.
          </p>
        </div>
      </div>

      {/* Pricing Section Component */}
      <PricingSection showHeader={false} isPage={true} />

      {/* Feature Comparison Highlights */}
      <section className="pricing-perks-section">
        <div className="container">
          <div className="pricing-perks-card glass">
            <div className="perks-header">
              <h3>All Plans Include Our Core Standards</h3>
              <p>Regardless of which plan you choose, SKV Productions guarantees:</p>
            </div>
            <div className="perks-grid">
              <div className="perk-item">
                <div className="perk-check"><IconCheck size={16} /></div>
                <div>
                  <strong>100% Code Ownership</strong>
                  <p>You own your code, database, and domain credentials completely.</p>
                </div>
              </div>
              <div className="perk-item">
                <div className="perk-check"><IconCheck size={16} /></div>
                <div>
                  <strong>Modern Responsive Design</strong>
                  <p>Pixel-perfect display on iOS, Android, tablets, laptops, and 4K displays.</p>
                </div>
              </div>
              <div className="perk-item">
                <div className="perk-check"><IconCheck size={16} /></div>
                <div>
                  <strong>WhatsApp & Instant Chat</strong>
                  <p>Direct WhatsApp integration for immediate customer inquiry generation.</p>
                </div>
              </div>
              <div className="perk-item">
                <div className="perk-check"><IconCheck size={16} /></div>
                <div>
                  <strong>SEO & Speed Optimization</strong>
                  <p>Fast load times, semantic HTML tags, and search engine readiness.</p>
                </div>
              </div>
              <div className="perk-item">
                <div className="perk-check"><IconCheck size={16} /></div>
                <div>
                  <strong>SSL & Security Hardening</strong>
                  <p>Complimentary HTTPS certificate and secure endpoint protection.</p>
                </div>
              </div>
              <div className="perk-item">
                <div className="perk-check"><IconCheck size={16} /></div>
                <div>
                  <strong>Dedicated Project Support</strong>
                  <p>Continuous assistance and communication throughout the 1-year period.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="pricing-faq-section">
        <div className="container">
          <div className="faq-header">
            <div className="section-label">Common Questions</div>
            <h2 className="faq-title">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="faq-subtitle">
              Have questions regarding how our pricing, deliverables, or support work? We've got answers.
            </p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item glass ${isOpen ? "open" : ""}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="faq-question">
                    <h4>{faq.q}</h4>
                    <span className={`faq-chevron ${isOpen ? "rotated" : ""}`}>
                      <IconChevronDown size={18} />
                    </span>
                  </div>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="faq-support-box glass">
            <div>
              <h3>Still have questions?</h3>
              <p>We are here to help. Reach out directly and we will answer any queries within hours.</p>
            </div>
            <div className="faq-support-actions">
              <Link to="/contact" className="btn-primary">
                Contact Our Team →
              </Link>
              <a
                href="https://wa.me/919369104234?text=Hi%20SKV%20Productions%2C%20I%20have%20a%20question%20about%20your%20pricing%20plans."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <IconWhatsApp size={16} /> Quick WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
