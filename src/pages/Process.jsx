import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PageShared.css";
import {
  IconMessage,
  IconFigma,
  IconZap,
  IconRocket,
  IconCheck
} from "../components/Icons";

const steps = [
  { num:"01", icon: <IconMessage size={28} />, title:"Discovery Call", desc:"We start with a focused consultation to deeply understand your vision, business goals, target audience, and project scope. No templates — just your unique story.", details:["30-60 min strategy session","Brand & audience analysis","Scope & timeline planning","Custom project roadmap"] },
  { num:"02", icon: <IconFigma size={28} />, title:"Design & Concept", desc:"We craft detailed wireframes and high-fidelity visual mockups in Figma. You review, give feedback, and we refine until every pixel is exactly right.", details:["Wireframes & user flows","High-fidelity Figma mockups","2 rounds of revisions","Mobile-first approach"] },
  { num:"03", icon: <IconZap size={28} />, title:"Development", desc:"Your approved design is built with clean, optimized code. We ensure blazing-fast load times, SEO best practices, and flawless responsiveness across all devices.", details:["React / Next.js / HTML","Mobile-responsive build","SEO & performance optimization","Cross-browser testing"] },
  { num:"04", icon: <IconRocket size={28} />, title:"Launch & Support", desc:"We deploy your website to a production server, configure your domain, and provide post-launch support to ensure everything runs flawlessly.", details:["Deployment & DNS setup","Post-launch QA testing","1 month free support","Training & handover"] },
];

export default function Process() {
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
          <div className="section-label">How We Work</div>
          <h1 className="page-title">Simple. Smooth. <span className="gradient-text">Stunning.</span></h1>
          <p className="page-subtitle">Our streamlined 4-step process ensures you get the perfect website — on time, every time, no stress.</p>
        </div>
      </div>
      <section className="page-content">
        <div className="container">
          <div className="process-steps">
            {steps.map((s, i) => (
              <div key={i} className="process-item glass reveal">
                <div className="process-num">{s.num}</div>
                <div className="process-body">
                  <div className="process-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="process-details">
                    {s.details.map(d=><li key={d}><IconCheck size={14} /> {d}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="page-cta glass reveal">
            <h3>Ready to get started?</h3>
            <p>Book your free discovery call and let us build something great together.</p>
            <Link to="/contact" className="btn-primary">Book a Call →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
