import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'
import Experience from '../components/sections/Experience'
import Services from '../components/sections/Services'
import Activity from '../components/sections/Activity'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Activity />
      <Skills />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
