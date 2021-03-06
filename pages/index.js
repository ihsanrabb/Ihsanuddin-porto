import Greetings from '../components/Greetings'
import About from '../components/About'
import Experience from '../components/Experience'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Greetings />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
