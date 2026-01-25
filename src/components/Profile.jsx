import { useTypewriter } from '../hooks/useTypewriter'

function Profile() {
  const { displayText, gradient } = useTypewriter()

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="/assets/profile-pic.png" alt="Manoj Patil profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Manoj Patil</h1>
        <p className="section__text__p2">
          <span className="typing-text" style={{ backgroundImage: gradient }}>{displayText}</span>
          <span className="cursor">|</span>
        </p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('/assets/Manoj_Patil.pdf')}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => { window.location.href = '#contact' }}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => { window.location.href = 'https://www.linkedin.com/in/manoj-patil-1942641aa' }}
          />
          <img
            src="/assets/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() => { window.location.href = 'https://github.com/ManojMaheshPatil' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Profile
