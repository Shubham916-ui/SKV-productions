import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  IconMonitor,
  IconCode,
  IconSmartphone,
  IconTerminal,
  IconShoppingBag,
  IconCpu,
  IconMapPin
} from "../components/Icons";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e, i) => {
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
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const targetStr = el.dataset.count;
            const target = parseFloat(targetStr);
            const isFloat = targetStr.includes(".");
            let start = 0;
            const step = target / 60;
            const timer = setInterval(() => {
              start += step;
              if (start >= target) {
                el.textContent = isFloat ? target.toFixed(1) : target;
                clearInterval(timer);
              } else {
                el.textContent = isFloat
                  ? start.toFixed(1)
                  : Math.floor(start);
              }
            }, 25);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    stats.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function use3DTilt() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(
      2
    )}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.04, 1.04, 1.04)`;
    card.style.transition = "transform 0.08s ease-out";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    card.style.transition = "transform 0.5s ease-out";
  };

  return { cardRef, handleMouseMove, handleMouseLeave };
}

const featuredServices = [
  {
    icon: <IconMonitor size={24} />,
    title: "Website Design",
    desc: "Pixel-perfect, responsive websites that look stunning on every screen and device.",
    tags: ["HTML/CSS", "React", "Next.js"],
  },
  {
    icon: <IconCode size={24} />,
    title: "Web App Development",
    desc: "Custom web applications built to solve real business problems with high performance.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    icon: <IconSmartphone size={24} />,
    title: "Mobile App Development",
    desc: "Modern mobile applications for Android & iOS with smooth, intuitive performance.",
    tags: ["React Native", "Node.js", "REST APIs"],
  },
  {
    icon: <IconTerminal size={24} />,
    title: "Custom Software & Desktop Apps",
    desc: "Tailored business software and desktop apps built around your exact workflow.",
    tags: ["Electron", "TypeScript", "SQLite"],
  },
  {
    icon: <IconShoppingBag size={24} />,
    title: "E-Commerce Stores",
    desc: "Fast, secure online stores designed to deliver seamless shopping experiences.",
    tags: ["Shopify", "WooCommerce", "Custom"],
  },
  {
    icon: <IconCpu size={24} />,
    title: "AI & Automation",
    desc: "Practical AI features, automated workflows, and intelligent assistants for your business.",
    tags: ["AI Automation", "Chatbots", "APIs"],
  },
];

const featuredProjects = [
  {
    title: "EduNexus — Gamified Learning Quest",
    type: "EdTech",
    desc: "Interactive gamified learning platform with boss quizzes, XP progression, and Math Duels.",
    image: "/edunexus.png",
    liveUrl: "https://edu-nexus-v2-frontend-5zzz.vercel.app/",
    location: "India",
  },
  {
    title: "Shree Shyam Polymers",
    type: "Web Apps",
    desc: "Full corporate website & product showcase for Nepal's leading plastic manufacturer.",
    image: "/shyampoly.png",
    liveUrl: "https://shyampoly.com",
    location: "Nepal",
  },
  {
    title: "Harsh — Cinematographer",
    type: "Portfolio",
    desc: "Sleek dark-mode portfolio for a professional cinematographer & video editor.",
    image: "/harsh_portfolio.png",
    liveUrl: "https://harsh-portfolio-seven-hazel.vercel.app/",
    location: "Chandigarh, India",
  },
];

const marqueeItems = [
  "Website Design",
  "Web Applications",
  "Mobile Apps",
  "Desktop Software",
  "E-Commerce",
  "AI Integration",
  "SEO Optimization",
  "UI/UX Design",
];

export default function Home() {
  useReveal();
  useCounter();
  const { cardRef, handleMouseMove, handleMouseLeave } = use3DTilt();

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
            <span className="line l1">We Design & Build</span>
            <span className="line l2 gradient-text">Digital Products</span>
            <span className="line l3">That Actually <em>Convert.</em></span>
          </h1>
          <p className="hero-desc">
            SKV Productions crafts premium websites, web apps, mobile apps, and custom software — fast, modern, and visually stunning digital solutions for your business.
          </p>
          <div className="hero-actions">
            <Link to="/work" className="btn-primary">View Our Work →</Link>
            <Link to="/contact" className="btn-ghost">Start a Project</Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-val">
                <span data-count="15">0</span>
                <span>+</span>
              </div>
              <p>Projects Done</p>
            </div>
            <div className="stat-bar" />
            <div className="stat">
              <div className="stat-val">
                <span data-count="10">0</span>
                <span>+</span>
              </div>
              <p>Happy Clients</p>
            </div>
            <div className="stat-bar" />
            <div className="stat">
              <div className="stat-val">
                <span data-count="1.5">0</span>
                <span>+</span>
              </div>
              <p>Years Active</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div
            ref={cardRef}
            className="hero-code-card glass"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="code-header">
              <div className="card-dots">
                <span className="d r" />
                <span className="d y" />
                <span className="d g" />
              </div>
              <span className="code-filename">App.jsx — SKV Studio</span>
            </div>
            <pre className="code-body">
              <code>
                <span className="c-keyword">import</span> &#123;{" "}
                <span className="c-func">createDigitalSolution</span> &#125;{" "}
                <span className="c-keyword">from</span>{" "}
                <span className="c-string">'@skv/studio'</span>;{"\n\n"}
                <span className="c-comment">
                  // Crafting digital excellence across web & mobile
                </span>
                {"\n"}
                <span className="c-keyword">const</span>{" "}
                <span className="c-var">solution</span> ={" "}
                <span className="c-func">createDigitalSolution</span>(&#123;{"\n"}
                {"  "}
                <span className="c-prop">client</span>:{" "}
                <span className="c-string">'Your Brand'</span>,{"\n"}
                {"  "}
                <span className="c-prop">architecture</span>:{" "}
                <span className="c-string">'Scalable & Modern'</span>,{"\n"}
                {"  "}
                <span className="c-prop">performance</span>:{" "}
                <span className="c-string">'100/100 Core Vitals'</span>,{"\n"}
                {"  "}
                <span className="c-prop">conversion</span>:{" "}
                <span className="c-string">'High Impact'</span>,{"\n"}
                &#125;);{"\n\n"}
                <span className="c-var">solution</span>.
                <span className="c-func">deploy</span>(&#123;{" "}
                <span className="c-prop">status</span>:{" "}
                <span className="c-string">'Live'</span> &#125;);{" "}
                <span className="c-cursor">|</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <div className="marquee-inner">
            {marqueeItems.concat(marqueeItems).map((t, i) => (
              <span key={i}>
                {t}
                <span className="sep"> • </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <section className="home-services">
        <div className="container">
          <div className="section-header">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">
              Services Built for <span className="gradient-text">Impact</span>
            </h2>
            <p className="section-desc">
              Everything you need to dominate your digital presence — under one roof.
            </p>
          </div>
          <div className="services-grid">
            {featuredServices.map((s, i) => (
              <div key={i} className="svc-card glass reveal hover-lift">
                <div className="svc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tags">
                  {s.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="center-cta" style={{ marginTop: "40px" }}>
            <Link to="/services" className="btn-ghost">
              See All 15 Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Showcase */}
      <section className="home-work" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label">Selected Work</div>
            <h2 className="section-title">
              Featured Client <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-desc">
              Explore real client projects crafted with precision, speed, and modern aesthetics.
            </p>
          </div>

          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px"
            }}
          >
            {featuredProjects.map((p, i) => (
              <div key={i} className="svc-card glass reveal hover-lift">
                <div
                  style={{
                    height: "180px",
                    borderRadius: "var(--radius-sm)",
                    overflow: "hidden",
                    marginBottom: "16px",
                    position: "relative"
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top"
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      background: "rgba(6,6,10,0.85)",
                      fontSize: "11px",
                      color: "#94a3b8",
                      fontFamily: "Outfit, sans-serif"
                    }}
                  >
                    <IconMapPin size={11} /> {p.location}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--purple)",
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.8px",
                    marginBottom: "6px"
                  }}
                >
                  {p.type}
                </div>
                <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{p.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "16px" }}>
                  {p.desc}
                </p>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    color: "var(--purple)",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontFamily: "Outfit, sans-serif"
                  }}
                >
                  Visit Live Site ↗
                </a>
              </div>
            ))}
          </div>

          <div className="center-cta" style={{ marginTop: "40px" }}>
            <Link to="/work" className="btn-primary">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner glass reveal">
            <div className="cta-text">
              <h2>
                Ready to build something <span className="gradient-text">extraordinary?</span>
              </h2>
              <p>
                Let us craft a website or digital product that truly represents your brand and drives real results.
              </p>
            </div>
            <Link to="/contact" className="btn-primary">
              Get Started Today →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
