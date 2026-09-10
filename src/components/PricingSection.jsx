import { useState } from "react";
import { Link } from "react-router-dom";
import "./PricingSection.css";
import {
  IconCheck,
  IconSparkles,
  IconWhatsApp,
  IconShield,
  IconZap,
  IconStar
} from "./Icons";

const pricingPlans = [
  {
    id: "basic-website",
    category: "web",
    badge: "1 YEAR PLAN",
    name: "Basic Website",
    tagline: "Professional, lightning-fast digital storefront",
    price: "₹4,999",
    period: "1 Year",
    isStartingPrice: false,
    featured: false,
    ctaText: "Start a Project",
    features: [
      "Professional Responsive Website",
      "Mobile + Desktop Friendly",
      "Free Domain – 1 Year",
      "Free Hosting – 1 Year",
      "SSL Certificate",
      "Basic SEO Setup",
      "WhatsApp / Call Integration",
      "Contact Form",
      "Social Media Integration",
      "1 Year Customer Support"
    ],
    whatsappMsg: "Hi SKV Productions, I want to start a project with the Basic Website plan (₹4,999)."
  },
  {
    id: "business-software",
    category: "software",
    badge: "1 YEAR PLAN",
    name: "Basic Business Software",
    tagline: "Streamline operations with custom software",
    price: "₹8,999",
    period: "1 Year",
    isStartingPrice: true,
    featured: false,
    ctaText: "Discuss Your Software",
    features: [
      "Customized Business Software",
      "Desktop Application",
      "Data Management",
      "Reports",
      "Backup Support",
      "Free Hosting / Cloud Support – 1 Year",
      "1 Year Free AMC",
      "Customer Support – 1 Year",
      "Basic Updates & Bug Fixes"
    ],
    whatsappMsg: "Hi SKV Productions, I want to discuss the Basic Business Software plan (Starting ₹8,999)."
  },
  {
    id: "combo-pack",
    category: "combo",
    badge: "RECOMMENDED • MOST POPULAR • BEST VALUE",
    name: "Website + Software Combo",
    tagline: "The ultimate power duo for complete business digitization",
    price: "₹11,999",
    period: "1 Year",
    isStartingPrice: false,
    featured: true,
    comboBreakdown: {
      website: "₹4,999",
      software: "₹8,999",
      regularTotal: "₹13,998",
      comboPrice: "₹11,999",
      savings: "₹1,999"
    },
    ctaText: "Get the Combo",
    features: [
      "Complete Website Package",
      "Complete Business Software Package",
      "Free Domain – 1 Year",
      "Free Hosting / Cloud Support – 1 Year",
      "SSL Certificate",
      "Customer Support – 1 Year",
      "1 Year Free AMC",
      "Basic Updates & Bug Fixes"
    ],
    whatsappMsg: "Hi SKV Productions, I want to get the Website + Software Combo plan (₹11,999 - Save ₹1,999)."
  },
  {
    id: "android-app",
    category: "mobile",
    badge: "MOBILE APP",
    name: "Android App + Play Store",
    tagline: "Reach millions on the Google Play Store",
    price: "₹24,999",
    period: "1 Year Support",
    isStartingPrice: false,
    featured: false,
    ctaText: "Build My App",
    features: [
      "Custom Android Application",
      "Modern UI/UX",
      "Business / Service App",
      "API / Backend Integration",
      "Admin Panel Integration",
      "App Testing",
      "Play Store Publishing Assistance",
      "1 Year Support"
    ],
    whatsappMsg: "Hi SKV Productions, I want to build an Android App with Play Store publishing (₹24,999)."
  },
  {
    id: "custom-app",
    category: "mobile",
    badge: "CUSTOM SOLUTION",
    name: "Custom Android + iOS App",
    tagline: "Full-scale cross-platform ecosystem",
    price: "₹49,999",
    period: "Bespoke",
    isStartingPrice: true,
    featured: false,
    footnote: "Final pricing depends on features, complexity and integrations.",
    ctaText: "Discuss Custom App",
    features: [
      "Android App",
      "iOS App",
      "Custom UI/UX",
      "Backend & API",
      "Admin Panel",
      "Database Integration",
      "Deployment Assistance",
      "Support & Maintenance"
    ],
    whatsappMsg: "Hi SKV Productions, I would like to discuss a Custom Android + iOS App solution (Starting ₹49,999)."
  }
];

export default function PricingSection({ showHeader = true, isPage = false }) {
  const [filter, setFilter] = useState("all");

  const filteredPlans = pricingPlans.filter((plan) => {
    if (filter === "all") return true;
    if (filter === "web") return plan.category === "web" || plan.category === "combo";
    if (filter === "software") return plan.category === "software" || plan.category === "combo";
    if (filter === "mobile") return plan.category === "mobile";
    return true;
  });

  return (
    <section className={`pricing-section ${isPage ? "pricing-page-mode" : ""}`} id="pricing">
      <div className="container">
        {showHeader && (
          <div className="pricing-header-block reveal">
            <div className="section-label">
              <IconSparkles size={14} /> Transparent Pricing
            </div>
            <h2 className="pricing-section-title">
              Clear Plans, <span className="gradient-text">Zero Surprises</span>
            </h2>
            <p className="pricing-section-subtitle">
              Transparent, all-inclusive packages engineered to scale your digital presence.
              Every plan comes backed with 1-Year free hosting, domain, or AMC support.
            </p>

            {/* Filter Tabs */}
            <div className="pricing-tabs">
              <button
                className={`pricing-tab-btn ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                All Packages ({pricingPlans.length})
              </button>
              <button
                className={`pricing-tab-btn ${filter === "web" ? "active" : ""}`}
                onClick={() => setFilter("web")}
              >
                Web & Combo
              </button>
              <button
                className={`pricing-tab-btn ${filter === "software" ? "active" : ""}`}
                onClick={() => setFilter("software")}
              >
                Business Software
              </button>
              <button
                className={`pricing-tab-btn ${filter === "mobile" ? "active" : ""}`}
                onClick={() => setFilter("mobile")}
              >
                Mobile Apps (Android & iOS)
              </button>
            </div>
          </div>
        )}

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card glass reveal hover-lift ${plan.featured ? "featured-plan" : ""}`}
            >
              {plan.featured && (
                <div className="featured-banner">
                  <IconStar size={13} />
                  <span>MOST POPULAR • BEST VALUE</span>
                </div>
              )}

              {/* Plan Header */}
              <div className="plan-header">
                <div className="plan-category-badge">{plan.badge}</div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>
              </div>

              {/* Price Tag */}
              <div className="plan-price-wrap">
                {plan.isStartingPrice && (
                  <span className="price-starting-label">Starting price</span>
                )}
                <div className="price-main">
                  <span className="price-value">{plan.price}</span>
                  {plan.period && <span className="price-period">/ {plan.period}</span>}
                </div>
              </div>

              {/* Combo Breakdown Box if present */}
              {plan.comboBreakdown && (
                <div className="combo-breakdown-box">
                  <div className="combo-breakdown-row">
                    <span>Website Plan:</span>
                    <strong>{plan.comboBreakdown.website}</strong>
                  </div>
                  <div className="combo-breakdown-row">
                    <span>Software Plan:</span>
                    <strong>{plan.comboBreakdown.software}</strong>
                  </div>
                  <div className="combo-breakdown-row regular-row">
                    <span>Regular Total:</span>
                    <span className="strikethrough">{plan.comboBreakdown.regularTotal}</span>
                  </div>
                  <div className="combo-savings-pill">
                    <IconZap size={14} /> You Save: {plan.comboBreakdown.savings}!
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="plan-actions">
                <Link
                  to={`/contact?plan=${encodeURIComponent(plan.name)}`}
                  className={`btn-primary plan-cta-btn ${plan.featured ? "combo-cta-glow" : ""}`}
                >
                  {plan.ctaText} ↗
                </Link>
                <a
                  href={`https://wa.me/919369104234?text=${encodeURIComponent(plan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plan-wa-btn"
                  title="Inquire via WhatsApp"
                >
                  <IconWhatsApp size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="plan-divider" />

              {/* Features List */}
              <div className="plan-features-wrap">
                <div className="features-label">What's included:</div>
                <ul className="plan-features-list">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="plan-feature-item">
                      <span className="feature-check-icon">
                        <IconCheck size={14} />
                      </span>
                      <span className="feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footnote if any */}
              {plan.footnote && (
                <p className="plan-footnote">*{plan.footnote}</p>
              )}
            </div>
          ))}
        </div>

        {/* Value Trust Banner */}
        <div className="pricing-trust-banner glass reveal">
          <div className="trust-item">
            <div className="trust-icon-box">
              <IconShield size={22} />
            </div>
            <div>
              <strong>1 Year Free Support & AMC</strong>
              <p>Peace of mind with dedicated support and maintenance included.</p>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon-box">
              <IconZap size={22} />
            </div>
            <div>
              <strong>Free Domain, Hosting & SSL</strong>
              <p>Everything configured out of the box with zero server headaches.</p>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon-box">
              <IconSparkles size={22} />
            </div>
            <div>
              <strong>100% Transparent Pricing</strong>
              <p>No hidden fees, no surprise invoices. Honest and value-driven.</p>
            </div>
          </div>
        </div>

        {/* Bottom Contact Help */}
        <div className="pricing-custom-inquiry glass reveal">
          <div className="inquiry-content">
            <h3>Need a tailor-made plan or enterprise solution?</h3>
            <p>
              Have specific custom requirements, database migrations, or high-concurrency needs?
              We can build a tailored package just for you.
            </p>
          </div>
          <div className="inquiry-btns">
            <Link to="/contact" className="btn-primary">
              Request Custom Quote →
            </Link>
            <a
              href="https://wa.me/919369104234?text=Hi%20SKV%20Productions%2C%20I%20need%20a%20custom%20quote%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <IconWhatsApp size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
