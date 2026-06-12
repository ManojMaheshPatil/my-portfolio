import { useTypewriter } from '../hooks/useTypewriter'

function Profile() {
const { displayText, color } = useTypewriter()

return (
<section id="profile">
<div className="hero-grid">
<div className="hero-text">
<span className="hero-hello">Hello there! I'm</span>
<h1 className="hero-title">
Manoj<br />Patil
</h1>
<div className="hero-role-bubble">
<span className="typing-text" style={{ color }}>{displayText}</span>
<span className="cursor">|</span>
</div>
<p className="hero-tagline">
Fullstack developer with 4+ years of experience turning messy
real-world problems into clean, scalable software.
</p>
<div className="btn-container">
<button
className="btn btn-primary"
onClick={() => { window.location.href = '#contact' }}
>
Say Hello 👋
</button>
<button
className="btn btn-secondary"
onClick={() => window.open('/assets/Manoj_Patil.pdf')}
>
Download CV
</button>
</div>
<div className="socials-row">
<a
className="social-sticker"
href="https://www.linkedin.com/in/manoj-patil-1942641aa"
aria-label="LinkedIn"
>
<img src="/assets/linkedin.png" alt="LinkedIn" />
</a>
<a
className="social-sticker"
href="https://github.com/ManojMaheshPatil"
aria-label="GitHub"
>
<img src="/assets/github.png" alt="GitHub" />
</a>
</div>
</div>
<div className="hero-pic">
<div className="hero-pic-blob"></div>
<img src="/assets/profile-pic.png" alt="Manoj Patil" />
<span className="doodle doodle-star">★</span>
<span className="doodle doodle-spark">✦</span>
</div>
</div>
<div className="ticker" aria-hidden="true">
<div className="ticker-track">
{[...Array(2)].map((_, i) => (
<span key={i}>
React.js ✦ Python ✦ AWS ✦ Node.js ✦ FastAPI ✦ SQL ✦
Event-Driven Microservices ✦ Redux ✦ React Query ✦ Figma ✦&nbsp;
</span>
))}
</div>
</div>
</section>
)
}

export default Profile
