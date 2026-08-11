import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PageShared.css";
import {
  IconDiamond,
  IconZap,
  IconUsers,
  IconCompass,
  IconGitHub,
  IconLinkedIn,
  IconInstagram,
  IconBehance
} from "../components/Icons";

const values = [
  { icon: <IconDiamond size={24} />, title:"Quality First", desc:"We never compromise on quality. Every detail, every pixel, every line of code is crafted with precision." },
  { icon: <IconZap size={24} />, title:"Speed & Performance", desc:"Fast websites aren't optional. We optimize for Core Web Vitals and sub-2-second load times by default." },
  { icon: <IconUsers size={24} />, title:"Client-Centric", desc:"You are our priority. Clear communication, transparent pricing, and genuine care for your success." },
  { icon: <IconCompass size={24} />, title:"Future-Ready", desc:"We build with tomorrow in mind — scalable, maintainable, and ready for whatever comes next." },
];

const team = [
  {
    name: "Shubham",
    role: "Founder & Lead Developer",
    bio: "Passionate about building fast, responsive, and scalable React web applications. Focuses on clean code, performance optimization, and modern web architecture.",
    avatar: "/team-shubham.jpg",
    init: "S",
    github: "https://github.com/Shubham916-ui",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  },
  {
    name: "Co-Founder",
    role: "UI/UX & Brand Strategist",
    bio: "Crafts high-impact UI/UX designs, dark-mode glassmorphic layouts, and conversion-focused web visual systems.",
    avatar: "/team-member2.jpg",
    init: "SK",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    behance: "https://behance.net"
  }
];

const testimonials = [
  {
    name: "Harsh",
    role: "Cinematographer & Video Editor",
    init: "H",
    avatar: "/harsh.png",
    text: "SKV Productions built my portfolio website from scratch. The sleek dark aesthetic and smooth interactive touches captured my creative style perfectly. Clients constantly compliment how high-end it looks!"
  },
  {
    name: "Mayank Aggrawal (CA)",
    role: "Director, Shree Shyam Polymers Pvt. Ltd.",
    init: "MA",
    avatar: "/mayank.png",
    text: "SKV Productions delivered an outstanding corporate website for Shree Shyam Polymers. The product showcase, inquiry workflow, and mobile performance exceeded our expectations!"
  },
  {
    name: "Rahul Kapoor",
    role: "CEO, TechBridge Pvt Ltd",
    init: "RK",
    text: "SKV Productions completely transformed our online presence. Our conversion rate and client inquiries went up significantly after launching the new site!"
  },
];

export default function About() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e,i)=>{ if(e.isIntersecting){ setTimeout(()=>e.target.classList.add("visible"),i*80); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">About Us</div>
          <h1 className="page-title">We Build Websites That <span className="gradient-text">Matter</span></h1>
          <p className="page-subtitle">A passionate team of designers and developers dedicated to crafting premium digital experiences for brands that want to stand out.</p>
        </div>
      </div>
      <section className="page-content">
        <div className="container">
          {/* Story */}
          <div className="about-story glass reveal">
            <div className="story-text">
              <div className="section-label">Our Story</div>
              <h2 className="section-title" style={{textAlign:"left"}}>Born from a <span className="gradient-text">Passion</span> for Design</h2>
              <p>SKV Productions was founded with a simple belief — every business deserves a website that truly represents its value. Too many great brands are held back by outdated, slow, or generic websites.</p>
              <p>We started as a small team with big ambitions. Today, we've helped 50+ businesses across India and worldwide elevate their digital presence and achieve real, measurable results.</p>
              <p>Our approach combines strategic thinking with beautiful execution — we don't just make pretty websites, we build digital tools that drive business growth.</p>
            </div>
            <div className="story-stats">
              {[["50+","Projects Completed"],["30+","Happy Clients"],["3+","Years of Excellence"],["100%","Client Satisfaction"]].map(([n,l])=>(
                <div key={l} className="story-stat glass">
                  <span className="story-num gradient-text">{n}</span>
                  <p>{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="about-section">
            <div className="section-header" style={{textAlign:"center",marginBottom:"48px"}}>
              <div className="section-label">What Drives Us</div>
              <h2 className="section-title">Our Core <span className="gradient-text">Values</span></h2>
            </div>
            <div className="values-grid">
              {values.map((v,i)=>(
                <div key={i} className="value-card glass reveal hover-lift">
                  <div className="value-icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="about-section">
            <div className="section-header" style={{textAlign:"center",marginBottom:"48px"}}>
              <div className="section-label">The Minds Behind SKV</div>
              <h2 className="section-title">Meet Our <span className="gradient-text">Team</span></h2>
              <p className="page-subtitle" style={{margin:"12px auto 0", maxWidth:"560px"}}>We are a compact, high-impact 2-person studio blending strategy, design, and code.</p>
            </div>
            <div className="team-grid">
              {team.map((m, i) => (
                <div key={i} className="team-card glass reveal hover-lift">
                  <div className="team-avatar-wrap">
                    {m.avatar ? (
                      <img src={m.avatar} alt={m.name} className="team-avatar-img" onError={(e)=>{e.target.style.display='none'; e.target.nextSibling.style.display='flex';}} />
                    ) : null}
                    <div className="team-avatar-fallback" style={{display: m.avatar ? 'none' : 'flex'}}>{m.init}</div>
                  </div>
                  <h3 className="team-name">{m.name}</h3>
                  <span className="team-role">{m.role}</span>
                  <p className="team-bio">{m.bio}</p>
                  <div className="team-socials">
                    {m.github && (
                      <a href={m.github} target="_blank" rel="noopener noreferrer" className="team-social-btn" title="GitHub">
                        <IconGitHub size={16} />
                      </a>
                    )}
                    {m.linkedin && (
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="team-social-btn" title="LinkedIn">
                        <IconLinkedIn size={16} />
                      </a>
                    )}
                    {m.instagram && (
                      <a href={m.instagram} target="_blank" rel="noopener noreferrer" className="team-social-btn" title="Instagram">
                        <IconInstagram size={16} />
                      </a>
                    )}
                    {m.behance && (
                      <a href={m.behance} target="_blank" rel="noopener noreferrer" className="team-social-btn" title="Behance">
                        <IconBehance size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="about-section">
            <div className="section-header" style={{textAlign:"center",marginBottom:"48px"}}>
              <div className="section-label">Client Love</div>
              <h2 className="section-title">What Our Clients <span className="gradient-text">Say</span></h2>
            </div>
            <div className="testi-grid">
              {testimonials.map((t,i)=>(
                <div key={i} className="testi-card glass reveal">
                  <div className="stars">5.0 / 5.0 Rating</div>
                  <p className="testi-text">"{t.text}"</p>
                  <div className="testi-client">
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} className="testi-avatar-img" />
                    ) : (
                      <div className="testi-avatar">{t.init}</div>
                    )}
                    <div><strong>{t.name}</strong><span>{t.role}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-cta glass reveal">
            <h3>Want to work with us?</h3>
            <p>We would love to hear about your project and see how we can help your brand grow.</p>
            <Link to="/contact" className="btn-primary">Get in Touch →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
