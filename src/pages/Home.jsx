import { useState } from 'react';
import { translations } from '../data/translations';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Experience from '../components/sections/Experience';
import Services from '../components/sections/Services';
import Activity from '../components/sections/Activity';

export default function Home() {
  const [lang, setLang] = useState("pt");
  const t = translations[lang];

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t.header} />
      <Hero t={t.hero} />
      <About t={t.about} />
      <Projects t={t.projects} />
      <Activity t={t.activity} />
      <Skills t={t.skills} />
      <Experience t={t.experience} />
      <Services t={t.services} />
      <Contact t={t.contact} />
      <Footer t={t.footer} />
    </>
  );
}