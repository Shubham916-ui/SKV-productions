import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PageShared.css";
import {
  IconDiamond,
  IconZap,
  IconUsers,
  IconCompass
} from "../components/Icons";

const values = [
  { icon: <IconDiamond size={24} />, title: "Quality First", desc: "We never compromise on quality. Every detail, every pixel, every line of code is crafted with precision." },
  { icon: <IconZap size={24} />, title: "Speed & Performance", desc: "Fast websites aren't optional. We optimize for Core Web Vitals and sub-2-second load times by default." },
  { icon: <IconUsers size={24} />, title: "Client-Centric", desc: "You are our priority. Clear communication, transparent pricing, and genuine care for your success." },
  { icon: <IconCompass size={24} />, title: "Future-Ready", desc: "We build with tomorrow in mind — scalable, maintainable, and ready for whatever comes next." },
];

const teamMembers = [
  {
    name: "Vaibhav Mani Tripathi",
    position: "Founder",
    designation: "Software Engineer",
    experience: "2+ YOE",
    init: "VMT",
    avatar: "/Vaibhav (2).jpg"
  },
  {
    name: "Shubham Vishwakarma",
    position: "Founder",
    designation: "Software Engineer",
    experience: "2.5+ YOE",
    init: "SV",
    avatar: "/shubham.jpg"
  },
  {
    name: "Prashant Srivastav",
    position: "Co-Founder",
    designation: "Software Engineer",
    experience: "2+ YOE",
    init: "PS",
    avatar: "/Prashant.jpg"
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
      (entries) => entries.forEach((e, i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add("visible"), i * 80); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
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
              <h2 className="section-title" style={{ textAlign: "left" }}>Born from a <span className="gradient-text">Passion</span> for Design</h2>
              <p>SKV Productions was founded with a simple belief — every business deserves a website that truly represents its value. Too many great brands are held back by outdated, slow, or generic websites.</p>
              <p>We started as a small team with big ambitions. Today, we've helped 15+ businesses across India and worldwide elevate their digital presence and achieve real, measurable results.</p>
              <p>Our approach combines strategic thinking with beautiful execution — we don't just make pretty websites, we build digital tools that drive business growth.</p>
            </div>
            <div className="story-stats">
              {[["15+", "Projects Completed"], ["10+", "Happy Clients"], ["1.5+", "Years of Excellence"], ["100%", "Client Satisfaction"]].map(([n, l]) => (
                <div key={l} className="story-stat glass">
                  <span className="story-num gradient-text">{n}</span>
                  <p>{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="about-section">
            <div className="section-header" style={{ textAlign: "center", marginBottom: "48px" }}>
              <div className="section-label">What Drives Us</div>
              <h2 className="section-title">Our Core <span className="gradient-text">Values</span></h2>
            </div>
            <div className="values-grid">
              {values.map((v, i) => (
                <div key={i} className="value-card glass reveal hover-lift">
                  <div className="value-icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Team Section */}
          <div className="about-section" id="team">
            <div className="section-header" style={{ textAlign: "center", marginBottom: "48px" }}>
              <div className="section-label">Our Team</div>
              <h2 className="section-title">Meet the <span className="gradient-text">Founders & Team</span></h2>
            </div>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card glass reveal hover-lift">
                  <span className={`team-position-badge ${member.position === "Co-Founder" ? "co-founder" : ""}`}>
                    {member.position}
                  </span>
                  <div className="team-avatar-wrap">
                    {member.avatar ? (
                      <img src={member.avatar} alt={member.name} className="team-avatar-img" style={member.imgStyle || {}} />
                    ) : (
                      <div className="team-avatar-fallback">{member.init}</div>
                    )}
                  </div>
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-designation">{member.designation}</span>
                  <div className="team-exp-badge">
                    <span>Experience:</span>
                    <span className="exp-val">{member.experience}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="about-section">
            <div className="section-header" style={{ textAlign: "center", marginBottom: "48px" }}>
              <div className="section-label">Client Love</div>
              <h2 className="section-title">What Our Clients <span className="gradient-text">Say</span></h2>
            </div>
            <div className="testi-grid">
              {testimonials.map((t, i) => (
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
