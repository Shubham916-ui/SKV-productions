import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PageShared.css";

const services = [
  { icon: "🖥️", title: "Website Design", desc: "Pixel-perfect, responsive websites that look stunning on every screen. We blend aesthetics with functionality to build sites that impress and convert.", tags: ["HTML/CSS","React","Next.js","Vue"] },
  { icon: "🎯", title: "Landing Pages", desc: "High-converting landing pages designed specifically to turn visitors into loyal customers. Built with proven conversion principles.", tags: ["CRO","A/B Testing","Analytics"] },
  { icon: "🛒", title: "E-Commerce Stores", desc: "Beautiful, fast, and secure online stores that are optimized from browse to checkout to maximize your revenue.", tags: ["Shopify","WooCommerce","Custom"] },
  { icon: "👤", title: "Portfolio Websites", desc: "Make a lasting impression with a portfolio that showcases your best work powerfully and gets you noticed.", tags: ["Personal Brand","Freelancers","Agencies"] },
  { icon: "✏️", title: "UI/UX Design", desc: "Intuitive user interfaces crafted through research, wireframing, and stunning visual design. Figma-first workflow.", tags: ["Figma","User Research","Prototyping"] },
  { icon: "📱", title: "Mobile-First Design", desc: "Every website we build is fully optimized for mobile, ensuring your users get the best experience on any device.", tags: ["Responsive","PWA","Performance"] },
  { icon: "🔍", title: "SEO Optimization", desc: "We build websites that rank. Technical SEO, fast load times, and semantic HTML baked in from day one.", tags: ["Core Web Vitals","Schema","Speed"] },
  { icon: "⚡", title: "Full Package", desc: "Design + Development + SEO + Domain + Hosting — everything handled end-to-end. You focus on growth, we handle the rest.", tags: ["Complete Solution","Best Value"] },
];

export default function Services() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) { setTimeout(() => e.target.classList.add("visible"), i * 80); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Our Services</div>
          <h1 className="page-title">Services Built for <span className="gradient-text">Impact</span></h1>
          <p className="page-subtitle">Everything you need to dominate your digital presence — under one roof, done right.</p>
        </div>
      </div>
      <section className="page-content">
        <div className="container">
          <div className="services-grid-full">
            {services.map((s, i) => (
              <div key={i} className={`svc-card-full glass reveal hover-lift${s.title === "Full Package" ? " featured" : ""}`}>
                {s.title === "Full Package" && <div className="feat-badge">⭐ Most Popular</div>}
                <div className="svc-icon-lg">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tags">{s.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="page-cta glass reveal">
            <h3>Not sure which service you need?</h3>
            <p>Let us understand your goals and recommend the best solution for your business.</p>
            <Link to="/contact" className="btn-primary">Talk to Us →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
