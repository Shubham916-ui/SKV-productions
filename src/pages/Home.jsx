import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("visible"), i * 90);
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useCounter() {
  useEffect(() => {
    const stats = document.querySelectorAll("[data-count]");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          let start = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { el.textContent = target; clearInterval(timer); }
            else el.textContent = Math.floor(start);
          }, 25);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    stats.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Home() {
  useReveal();
  useCounter();

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for New Projects
          </div>
          <h1 className="hero-title">
            <span className="line l1">We Design</span>
            <span className="line l2 gradient-text">Websites That</span>
            <span className="line l3">Actually <em>Convert.</em></span>
          </h1>
          <p className="hero-desc">
            SKV Productions crafts premium digital experiences — fast, modern, and visually stunning websites that make your brand unforgettable.
          </p>
          <div className="hero-actions">
            <Link to="/work" className="btn-primary">View Our Work →</Link>
            <Link to="/contact" className="btn-ghost">Start a Project</Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-val"><span data-count="50">0</span><span>+</span></div>
              <p>Projects Done</p>
            </div>
            <div className="stat-bar" />
            <div className="stat">
              <div className="stat-val"><span data-count="30">0</span><span>+</span></div>
              <p>Happy Clients</p>
            </div>
            <div className="stat-bar" />
            <div className="stat">
              <div className="stat-val"><span data-count="3">0</span><span>+</span></div>
              <p>Years Active</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card glass">
            <div className="card-dots">
              <span className="d r" /><span className="d y" /><span className="d g" />
            </div>
            <div className="card-lines">
              <div className="cl long" /><div className="cl short" />
              <div className="card-blocks">
                <div className="cb b1" /><div className="cb b2" />
              </div>
              <div className="cl med" /><div className="cl long" />
            </div>
            <div className="card-label">Live Preview ✦</div>
          </div>
          <div className="fbadge fb1 glass">⭐ Premium Design</div>
          <div className="fbadge fb2 glass">⚡ Fast Delivery</div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <div className="marquee-inner">
            {["Website Design","UI/UX Design","Landing Pages","E-Commerce","Brand Identity","SEO Optimization","Portfolio Sites","Mobile Responsive",
              "Website Design","UI/UX Design","Landing Pages","E-Commerce","Brand Identity","SEO Optimization","Portfolio Sites","Mobile Responsive"].map((t,i)=>(
              <span key={i}>{i%2===0?t:<span className="sep">✦</span>}{i%2!==0?t:""}</span>
            ))}
            {["Website Design","✦","UI/UX Design","✦","Landing Pages","✦","E-Commerce","✦","Brand Identity","✦","SEO Optimization","✦","Portfolio Sites","✦","Mobile Responsive","✦",
              "Website Design","✦","UI/UX Design","✦","Landing Pages","✦","E-Commerce","✦","Brand Identity","✦","SEO Optimization","✦","Portfolio Sites","✦","Mobile Responsive","✦"].map((t,i)=>(
              <span key={"b"+i} className={t==="✦"?"sep":undefined}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <section className="home-services">
        <div className="container">
          <div className="section-header">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Services Built for <span className="gradient-text">Impact</span></h2>
            <p className="section-desc">Everything you need to dominate your digital presence — under one roof.</p>
          </div>
          <div className="services-grid">
            {[
              { icon: "🖥️", title: "Website Design", desc: "Pixel-perfect, responsive websites that look stunning on every screen and device.", tags: ["HTML/CSS","React","Next.js"] },
              { icon: "🎯", title: "Landing Pages", desc: "High-converting landing pages designed to turn visitors into loyal customers.", tags: ["Conversion","A/B Testing"] },
              { icon: "🛒", title: "E-Commerce", desc: "Beautiful online stores optimized for speed, security, and maximum sales.", tags: ["Shopify","WooCommerce"] },
              { icon: "✏️", title: "UI/UX Design", desc: "Intuitive interfaces crafted through deep research, wireframes, and stunning visuals.", tags: ["Figma","Prototyping"] },
            ].map((s, i) => (
              <div key={i} className="svc-card glass reveal hover-lift">
                <div className="svc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tags">{s.tags.map(t=><span key={t} className="tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="center-cta">
            <Link to="/services" className="btn-ghost">See All Services →</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner glass reveal">
            <div className="cta-text">
              <h2>Ready to build something <span className="gradient-text">extraordinary?</span></h2>
              <p>Let us craft a website that truly represents your brand and drives real results.</p>
            </div>
            <Link to="/contact" className="btn-primary">Get Started Today →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
