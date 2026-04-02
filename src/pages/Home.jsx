import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <section className='bg-gray-800 w-full h-screen flex justify-center flex-col items-center font-bold text-gray-300 gap-10'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </section>
  )
}
