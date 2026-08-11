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
    type: "Manufacturing",
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
];

const filters = ["All", "EdTech", "Manufacturing", "Portfolio"];

export default function Work() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.type === active);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e,i)=>{ if(e.isIntersecting){ setTimeout(()=>e.target.classList.add("visible"),i*70); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  }, [filtered]);

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Portfolio</div>
          <h1 className="page-title">Work That Speaks <span className="gradient-text">Louder</span></h1>
          <p className="page-subtitle">Real clients, real results — from bold landing pages to full-scale corporate websites.</p>
        </div>
      </div>
      <section className="page-content">
        <div className="container">
          <div className="work-filters">
            {filters.map(f=>(
              <button key={f} className={`filter-btn${active===f?" active":""}`} onClick={()=>setActive(f)}>{f}</button>
            ))}
          </div>
          <div className="work-grid">
            {filtered.map((p,i)=>(
              <div key={p.id} className={`work-card glass reveal hover-lift${p.isReal ? " real-project" : ""}`}>
                {/* Real client badge */}
                {p.isReal && (
                  <div className="real-badge" style={p.accentColor ? { color: p.accentColor, borderColor: `${p.accentColor}44`, background: `${p.accentColor}18` } : {}}>
                    <span className="real-dot" style={p.accentColor ? { background: p.accentColor } : {}} />
                    Live Client Project
                  </div>
                )}
                <div className="work-thumb" style={{background: p.color}}>
                  <div className="work-type-badge">{p.type}</div>
                  {/* Location for real projects */}
                  {p.location && (
                    <div className="work-location-badge"><IconMapPin size={12} /> {p.location}</div>
                  )}
                  {/* Render Image or Mock UI */}
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="work-image" />
                  ) : (
                    <div className="work-mock-ui">
                      <div className="mock-top-bar" style={p.accentColor ? {background: `${p.accentColor}44`} : {}} />
                      <div className="mock-body">
                        <div className="mock-line long" /><div className="mock-line short" /><div className="mock-line med" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="work-info">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="tags">{p.tags.map(t=><span key={t} className="tag tag-dark">{t}</span>)}</div>
                  {/* Live site link for real projects */}
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="live-link" style={p.accentColor ? { color: p.accentColor, borderColor: `${p.accentColor}44`, background: `${p.accentColor}14` } : {}}>
                      <span className="live-link-dot" style={p.accentColor ? { background: p.accentColor } : {}} />
                      Visit Live Site ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="page-cta glass reveal">
            <h3>Have a project in mind?</h3>
            <p>Let us create something stunning for your brand that delivers real results.</p>
            <Link to="/contact" className="btn-primary">Start Your Project →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

