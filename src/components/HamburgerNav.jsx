import { useState } from 'react'

function HamburgerNav({ toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav id="hamburger-nav">
      <div className="logo">Manoj Patil</div>
      <div className="hamburger-menu">
        <div 
          className={`hamburger-icon ${isOpen ? 'open' : ''}`} 
          onClick={handleToggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          <li>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); toggleTheme(); handleLinkClick(); }}
            >
              Toggle Mode
            </a>
          </li>
        </div>
      </div>
    </nav>
  )
}

export default HamburgerNav
