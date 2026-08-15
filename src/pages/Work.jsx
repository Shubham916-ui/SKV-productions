import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PageShared.css";
import "./Work.css";
import { IconMapPin } from "../components/Icons";

const projects = [
  {
    id: 1,
    title: "EduNexus — Gamified Learning Quest",
    type: "EdTech",
    desc: "Interactive gamified learning platform transforming Class 6–10 school curriculum into legendary quests. Features expert lessons, timed boss quizzes, XP progression system, and real-time Math Duel battles.",
    tags: ["React", "Vite", "Gamification", "EdTech", "Web App"],
    color: "rgba(147,51,234,0.2)",
    accentColor: "#a855f7",
    liveUrl: "https://edu-nexus-v2-frontend-5zzz.vercel.app/",
    isReal: true,
    location: "India",
    image: "/edunexus.png",
  },

  {
    id: 0,
    title: "Shree Shyam Polymers",
    type: "Web Apps",
    desc: "Full corporate website for Nepal's leading plastic manufacturer — Shree Shyam Polymers Pvt. Ltd. Product showcase, company profile, and inquiry system for HDPE pipes, garbage bags, and mulch films.",
    tags: ["React", "Vite", "Responsive Design", "SEO"],
    color: "rgba(234,88,12,0.2)",
    accentColor: "#f97316",
    liveUrl: "https://shyampoly.com",
    isReal: true,
    location: "Nepal",
    image: "/shyampoly.png",
  },

  {
    id: 10,
    title: "Harsh — Cinematographer",
    type: "Portfolio",
    desc: "Cinematic portfolio for Harsh — Cinematographer & Video Editor with 5+ years of experience in short films, brand commercials, and creative editing.",
    tags: ["React", "Vite", "Dark Mode", "Portfolio"],
    color: "rgba(236,72,153,0.18)",
    accentColor: "#ec4899",
    liveUrl: "https://harsh-portfolio-seven-hazel.vercel.app/",
    isReal: true,
    location: "Chandigarh, India",
    image: "/harsh_portfolio.png",
  },

  {
    id: 13,
    title: "E-Commerce Web Store",
    type: "E-Commerce",
    desc: "Responsive e-commerce website designed with a clean shopping experience featuring product listings, promotional sections, and a user-friendly online store interface.",
    tags: ["HTML", "CSS", "JavaScript", "E-Commerce", "Responsive Design"],
    color: "rgba(245,158,11,0.2)",
    accentColor: "#f59e0b",
    liveUrl: "https://e-commerce-dummyproject.netlify.app/",
    isReal: true,
    location: "India",
    image: "/E-commerce_image.png",
  },

  {
    id: 14,
    title: "The React Quiz",
    type: "Web Apps",
    desc: "Interactive quiz application built with React that provides an engaging experience for users to answer questions and test their knowledge.",
    tags: ["React", "JavaScript", "Quiz App", "Web App"],
    color: "rgba(14,165,233,0.2)",
    accentColor: "#0ea5e9",
    liveUrl: "https://quiz-contest-inreact.netlify.app/",
    isReal: true,
    location: "India",
    image: "/Quiz_app-image.png",
  },

  {
    id: 15,
    title: "Split With Friends",
    type: "Web Apps",
    desc: "Full-stack expense splitting web application built with the MERN stack that helps friends and groups manage shared expenses, split bills, and keep track of who owes what.",
    tags: ["React", "Node.js", "Express", "MongoDB", "MERN", "Web App"],
    color: "rgba(168,85,247,0.2)",
    accentColor: "#8b5cf6",
    liveUrl: "https://split-with-friends-sigma.vercel.app/",
    isReal: true,
    location: "India",
    image: "/Split-with-friends.png",
  },

  /* In Development / Working Stage Projects */
  {
    id: 11,
    title: "Six Sigma Engineers",
    type: "Web Apps",
    status: "in-development",
    desc: "Professional corporate website for Six Sigma Engineers showcasing their HVAC and engineering services with a modern digital presence and responsive user experience.",
    tags: [
      "React",
      "Vite",
      "Engineering",
      "Corporate Website",
      "Responsive Design",
    ],
    color: "rgba(59,130,246,0.2)",
    accentColor: "#3b82f6",
    // liveUrl: "https://six-sigma-engineers.vercel.app/",
    isReal: false,
    location: "Lucknow, India",
    image: "/SSE_image.png",
  },

  {
    id: 12,
    title: "FixHub",
    type: "Mobile Apps",
    status: "in-development",
    desc: "Cross-platform mobile application built with React Native and Node.js to provide a smooth service experience with a modern mobile interface and backend integration.",
    tags: ["React Native", "Node.js", "Mobile App", "REST API"],
    color: "rgba(59,130,246,0.2)",
    accentColor: "#3b82f6",
    // liveUrl: "https://fix-hub-inky.vercel.app/",
    isReal: false,
    location: "Gorakhpur, India",
    image: "/Fix-hub-logo.png",
  },

  {
    id: 16,
    title: "School Management System",
    type: "Desktop Apps",
    status: "in-development",
    desc: "A comprehensive school management system currently under development to simplify student admissions, teacher management, attendance, fees, academic records, and day-to-day school operations.",
    tags: [
      "React",
      "TypeScript",
      "Electron",
      "Prisma",
      "SQLite",
      "Desktop App",
      "EdTech",
    ],
    color: "rgba(59,130,246,0.2)",
    accentColor: "#3b82f6",
    // liveUrl: null,
    isReal: false,
    location: "India",
    image: "/school-management.png",
  },
];

const filters = [
  "All",
  "Web Apps",
  "Mobile Apps",
  "Desktop Apps",
  "E-Commerce",
  "Portfolio",
  "EdTech",
];

export default function Work() {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  const liveProjects = filteredProjects.filter((p) => p.status !== "in-development");
  const devProjects = filteredProjects.filter((p) => p.status === "in-development");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 70);
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [filteredProjects]);

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Portfolio</div>
          <h1 className="page-title">
            Work That Speaks <span className="gradient-text">Louder</span>
          </h1>
          <p className="page-subtitle">
            Real clients, real results — from bold landing pages to full-scale
            corporate websites and platforms.
          </p>
        </div>
      </div>
      <section className="page-content">
        <div className="container">
          <div className="work-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn${active === f ? " active" : ""}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Section 1: Live / Completed Projects */}
          {liveProjects.length > 0 && (
            <div className="work-grid" style={{ marginBottom: devProjects.length > 0 ? "60px" : "0" }}>
              {liveProjects.map((p) => (
                <div
                  key={p.id}
                  className="work-card glass reveal hover-lift real-project"
                >
                  <div
                    className="real-badge"
                    style={
                      p.accentColor
                        ? {
                            color: p.accentColor,
                            borderColor: `${p.accentColor}44`,
                            background: `${p.accentColor}18`,
                          }
                        : {}
                    }
                  >
                    <span
                      className="real-dot"
                      style={p.accentColor ? { background: p.accentColor } : {}}
                    />
                    Live Client Project
                  </div>

                  <div className="work-thumb" style={{ background: p.color }}>
                    <div className="work-type-badge">{p.type}</div>
                    {p.location && (
                      <div className="work-location-badge">
                        <IconMapPin size={12} /> {p.location}
                      </div>
                    )}
                    {p.image ? (
                      <img src={p.image} alt={p.title} className="work-image" />
                    ) : (
                      <div className="work-mock-ui">
                        <div
                          className="mock-top-bar"
                          style={
                            p.accentColor
                              ? { background: `${p.accentColor}44` }
                              : {}
                          }
                        />
                        <div className="mock-body">
                          <div className="mock-line long" />
                          <div className="mock-line short" />
                          <div className="mock-line med" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="work-info">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="tags">
                      {p.tags.map((t) => (
                        <span key={t} className="tag tag-dark">
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-link"
                        style={
                          p.accentColor
                            ? {
                                color: p.accentColor,
                                borderColor: `${p.accentColor}44`,
                                background: `${p.accentColor}14`,
                              }
                            : {}
                        }
                      >
                        <span
                          className="live-link-dot"
                          style={
                            p.accentColor ? { background: p.accentColor } : {}
                          }
                        />
                        Visit Live Site ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Section 2: Projects In Development / Working Stage */}
          {devProjects.length > 0 && (
            <div className="dev-section" style={{ marginTop: "70px" }}>
              <div
                className="section-header"
                style={{ textAlign: "center", marginBottom: "40px" }}
              >
                <div className="section-label">Working Stage</div>
                <h2 className="section-title">
                  Projects <span className="gradient-text">In Development</span>
                </h2>
                <p className="section-desc">
                  Systems, apps, and platforms currently in active building and working stage.
                </p>
              </div>

              <div className="work-grid">
                {devProjects.map((p) => (
                  <div key={p.id} className="work-card glass reveal hover-lift dev-project">
                    <div className="coming-soon-badge">
                      <span className="coming-soon-dot" />
                      Coming Soon
                    </div>
                    <div className="work-thumb" style={{ background: p.color }}>
                      <div className="work-type-badge">{p.type}</div>
                      {p.location && (
                        <div className="work-location-badge">
                          <IconMapPin size={12} /> {p.location}
                        </div>
                      )}
                      {p.image ? (
                        <>
                          <img src={p.image} alt={p.title} className="work-image" />
                          <div className="in-dev-overlay">
                            <div className="in-dev-overlay-content">
                              <span>⚡</span> Coming Soon
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="work-mock-ui">
                          <div
                            className="mock-top-bar"
                            style={
                              p.accentColor
                                ? { background: `${p.accentColor}44` }
                                : {}
                            }
                          />
                          <div className="mock-body">
                            <div className="mock-line long" />
                            <div className="mock-line short" />
                            <div className="mock-line med" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="work-info">
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                      <div className="tags">
                        {p.tags.map((t) => (
                          <span key={t} className="tag tag-dark">
                            {t}
                          </span>
                        ))}
                      </div>
                      {/* liveUrl is commented out for working stage / in-development projects as requested */}
                      {/* p.liveUrl && (
                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="live-link">
                          Visit Live Site ↗
                        </a>
                      ) */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="page-cta glass reveal" style={{ marginTop: "80px" }}>
            <h3>Have a project in mind?</h3>
            <p>
              Let us create something stunning for your brand that delivers real
              results.
            </p>
            <Link to="/contact" className="btn-primary">
              Start Your Project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
