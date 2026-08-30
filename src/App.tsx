import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { EcosystemSection } from './components/EcosystemSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { TechnologySection } from './components/TechnologySection';
import { LabsSection } from './components/LabsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PeacockBackground } from './components/PeacockBackground';
import { NexovChatbot } from './components/NexovChatbot';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'capabilities', 'ecosystem', 'projects', 'services', 'technology', 'labs', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: '#fafafc' }}>

      {/* ── Peacock Level Luminous Background (Zero Grid Lines!) ─────────── */}
      <PeacockBackground />

      {/* ── Main Application Content ────────────────────────────────────── */}
      <div className="relative z-10 animate-in fade-in duration-500">
        <Header activeSection={activeSection} onNavigate={scrollToSection} />
        <main>
          <HeroSection
            onExploreClick={() => scrollToSection('about')}
            onProjectsClick={() => scrollToSection('projects')}
          />
          <div className="section-divider my-2" />
          <AboutSection />
          <div className="section-divider my-2" />
          <CapabilitiesSection />
          <div className="section-divider my-2" />
          <EcosystemSection />
          <div className="section-divider my-2" />
          <ProjectsSection onContactClick={() => scrollToSection('contact')} />
          <div className="section-divider my-2" />
          <ServicesSection />
          <div className="section-divider my-2" />
          <TechnologySection />
          <div className="section-divider my-2" />
          <LabsSection />
          <div className="section-divider my-2" />
          <ContactSection />
        </main>
        <Footer onNavigate={scrollToSection} />
        <NexovChatbot />
      </div>
    </div>
  );
}

export default App;
