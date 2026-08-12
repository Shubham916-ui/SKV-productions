import { useState } from "react";
import "./PageShared.css";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconInstagram,
  IconWhatsApp,
  IconLinkedIn,
  IconGitHub,
  IconCheck,
  IconSend
} from "../components/Icons";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", service:"", budget:"", message:"" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => { setStatus("done"); setForm({ name:"", email:"", service:"", budget:"", message:"" }); }, 1600);
  };

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Get in Touch</div>
          <h1 className="page-title">Let us Build <span className="gradient-text">Something Great</span></h1>
          <p className="page-subtitle">Tell us about your project and we will get back to you within 24 hours.</p>
        </div>
      </div>
      <section className="page-content">
        <div className="container">
          <div className="contact-layout">
            {/* Left Info */}
            <div className="contact-info">
              <div className="contact-card glass">
                <h3>Contact Details</h3>
                <div className="contact-items">
                  <div className="citem">
                    <span className="citem-icon"><IconPhone size={18} /></span>
                    <div><strong>Phone / WhatsApp</strong><p><a href="tel:+918652750465" style={{ color: "inherit", textDecoration: "none" }}>+91 86527 50465</a></p></div>
                  </div>
                  <div className="citem">
                    <span className="citem-icon"><IconMail size={18} /></span>
                    <div><strong>Email</strong><p><a href="mailto:s.k.v.productions0@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>s.k.v.productions0@gmail.com</a></p></div>
                  </div>
                  <div className="citem">
                    <span className="citem-icon"><IconMapPin size={18} /></span>
                    <div><strong>Location</strong><p>India — Available Worldwide</p></div>
                  </div>
                  <div className="citem">
                    <span className="citem-icon"><IconClock size={18} /></span>
                    <div><strong>Response Time</strong><p>Within 24 hours</p></div>
                  </div>
                </div>
              </div>
              <div className="contact-card glass">
                <h3>Follow Us</h3>
                <div className="social-grid">
                  <a href="https://www.instagram.com/s.k.v.productions0/" target="_blank" rel="noopener noreferrer" className="social-card glass"><IconInstagram size={16} /> Instagram</a>
                  <a href="https://wa.me/918652750465" target="_blank" rel="noopener noreferrer" className="social-card glass"><IconWhatsApp size={16} /> WhatsApp</a>
                  <a href="https://www.linkedin.com/in/skv-undefined/" target="_blank" rel="noopener noreferrer" className="social-card glass"><IconLinkedIn size={16} /> LinkedIn</a>
                  <a href="https://github.com/skvproductions0" target="_blank" rel="noopener noreferrer" className="social-card glass"><IconGitHub size={16} /> GitHub</a>
                </div>
              </div>
            </div>
            {/* Form */}
            <div className="contact-form-wrap glass">
              <h3>Send a Message</h3>
              {status === "done" ? (
                <div className="form-success">
                  <div className="success-icon"><IconCheck size={28} /></div>
                  <h4>Message Sent!</h4>
                  <p>Thank you for reaching out. We will get back to you within 24 hours.</p>
                  <button className="btn-ghost" onClick={()=>setStatus("idle")}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="cform">
                  <div className="form-row">
                    <div className="fgroup">
                      <label>Full Name *</label>
                      <input type="text" placeholder="Rahul Kapoor" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
                    </div>
                    <div className="fgroup">
                      <label>Email Address *</label>
                      <input type="email" placeholder="rahul@example.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="fgroup">
                      <label>Service Required</label>
                      <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>
                        <option value="">Select a service...</option>
                        <option>Website Design</option>
                        <option>Landing Page</option>
                        <option>E-Commerce Store</option>
                        <option>Portfolio Website</option>
                        <option>UI/UX Design</option>
                        <option>Full Package</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="fgroup">
                      <label>Budget Range</label>
                      <select value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})}>
                        <option value="">Select budget...</option>
                        <option>Under ₹15,000</option>
                        <option>₹15,000 – ₹30,000</option>
                        <option>₹30,000 – ₹60,000</option>
                        <option>₹60,000+</option>
                        <option>Let us discuss</option>
                      </select>
                    </div>
                  </div>
                  <div className="fgroup">
                    <label>Tell us about your project *</label>
                    <textarea rows="5" placeholder="Describe your project, goals, and any specific requirements..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required />
                  </div>
                  <button type="submit" className="btn-primary full-w" disabled={status==="sending"}>
                    {status==="sending" ? "Sending..." : <>Send Message <IconSend size={16} /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
