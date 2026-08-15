import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PageShared.css";
import {
  IconMonitor,
  IconTarget,
  IconShoppingBag,
  IconUser,
  IconSmartphone,
  IconSearch,
  IconLayers,
  IconCode,
  IconServer,
  IconWrench,
  IconTerminal
} from "../components/Icons";

const services = [
  {
    icon: <IconMonitor size={24} />,
    title: "Website Design",
    desc: "Pixel-perfect responsive websites that look stunning on every screen. We blend aesthetics with functionality to build websites that impress and convert.",
    tags: ["HTML", "CSS", "React", "Next.js", "Vue"],
  },
  {
    icon: <IconCode size={24} />,
    title: "Web Application Development",
    desc: "Custom web applications built to solve real business problems, from dashboards and portals to complete business platforms.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: <IconSmartphone size={24} />,
    title: "Mobile App Development",
    desc: "Modern mobile applications for Android and iOS with smooth performance, intuitive interfaces, and reliable backend integration.",
    tags: ["React Native", "Node.js", "REST APIs"],
  },
  {
    icon: <IconMonitor size={24} />,
    title: "Desktop Application Development",
    desc: "Powerful desktop applications built for businesses that need secure, reliable, and efficient software for everyday operations.",
    tags: ["Electron", "React", "TypeScript", "SQLite"],
  },
  {
    icon: <IconTerminal size={24} />,
    title: "Custom Software Development",
    desc: "Business software built around your exact workflow instead of forcing your business to adapt to existing software.",
    tags: ["Custom Solutions", "Automation", "Scalable"],
  },
  {
    icon: <IconShoppingBag size={24} />,
    title: "E-Commerce Stores",
    desc: "Beautiful, fast, and secure online stores designed to provide a smooth shopping experience and help businesses grow online.",
    tags: ["Shopify", "WooCommerce", "Custom"],
  },
  {
    icon: <IconTarget size={24} />,
    title: "Landing Pages",
    desc: "High-converting landing pages designed to turn visitors into customers using clear messaging, strong design, and conversion-focused layouts.",
    tags: ["CRO", "A/B Testing", "Analytics"],
  },
  {
    icon: <IconUser size={24} />,
    title: "Portfolio Websites",
    desc: "Professional portfolio websites that showcase your work, build your personal brand, and help you stand out online.",
    tags: ["Personal Brand", "Freelancers", "Agencies"],
  },

  {
    icon: <IconCode size={24} />,
    title: "API Development & Integration",
    desc: "Reliable APIs and third-party integrations that connect your applications, services, and business systems together.",
    tags: ["REST APIs", "Integrations", "Backend"],
  },
  {
    icon: <IconSearch size={24} />,
    title: "SEO Optimization",
    desc: "We build websites that are ready to rank with technical SEO, fast load times, semantic HTML, and performance-focused development.",
    tags: ["Core Web Vitals", "Schema", "Speed"],
  },

  {
    icon: <IconWrench size={24} />,
    title: "Website Maintenance & Support",
    desc: "Keep your website secure, updated, fast, and running smoothly with ongoing maintenance, monitoring, and technical support.",
    tags: ["Updates", "Security", "Performance"],
  },
  {
    icon: <IconServer size={24} />,
    title: "Domain & Hosting",
    desc: "Complete setup for your digital presence including domain connection, hosting deployment, SSL, and basic configuration.",
    tags: ["Domain", "Hosting", "Deployment", "SSL"],
  },
  {
    icon: <IconLayers size={24} />,
    title: "Full Package",
    desc: "Design, Development, SEO, Domain, and Hosting — everything handled end to end. You focus on your business while we handle the technology.",
    tags: ["Complete Solution", "Best Value"],
    featured: true,
  },
];

export default function Services() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 60);
            obs.unobserve(e.target);
          }
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
          <h1 className="page-title">
            Services Built for <span className="gradient-text">Impact</span>
          </h1>
          <p className="page-subtitle">
            Everything you need to dominate your digital presence — under one roof, done right.
          </p>
        </div>
      </div>
      <section className="page-content">
        <div className="container">
          <div className="services-grid-full">
            {services.map((s, i) => (
              <div
                key={i}
                className={`svc-card-full glass reveal hover-lift${
                  s.featured ? " featured" : ""
                }`}
              >
                {s.featured && (
                  <div className="feat-badge">Most Popular</div>
                )}
                <div className="svc-icon-lg">{s.icon}</div>
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
          <div className="page-cta glass reveal">
            <h3>Not sure which service you need?</h3>
            <p>
              Let us understand your goals and recommend the best solution for your business.
            </p>
            <Link to="/contact" className="btn-primary">
              Talk to Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
