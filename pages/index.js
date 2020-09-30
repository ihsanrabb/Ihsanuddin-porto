import Container from '@material-ui/core/Container';
import Greetings from '../components/Greetings'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Container maxWidth={false}>
      <Greetings />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  )
}
