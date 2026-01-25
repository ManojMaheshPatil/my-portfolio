import DesktopNav from './components/DesktopNav'
import HamburgerNav from './components/HamburgerNav'
import Profile from './components/Profile'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <DesktopNav theme={theme} toggleTheme={toggleTheme} />
      <HamburgerNav toggleTheme={toggleTheme} />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
