function Contact() {
return (
<section id="contact">
<div className="section-heading">
<span className="section-eyebrow">Let's talk</span>
<h2 className="section-title">Contact Me</h2>
</div>
<div className="contact-card">
<p className="contact-pitch">
Got an idea, a role, or just want to nerd out about microservices?
My inbox is always open.
</p>
<div className="contact-links">
<a className="contact-chip" href="mailto:patil.mahesh.manoj@gmail.com">
<img src="/assets/email.png" alt="" className="contact-chip-icon" />
patil.mahesh.manoj@gmail.com
</a>
<a className="contact-chip" href="https://www.linkedin.com/in/manoj-patil-1942641aa">
<img src="/assets/linkedin.png" alt="" className="contact-chip-icon" />
LinkedIn
</a>
</div>
</div>
</section>
)
}

export default Contact
