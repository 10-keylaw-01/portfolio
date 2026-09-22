import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientCasebook from './components/ClientCasebook'
import ServicesSection from './components/ServicesSection'
import SkillsSection from './components/SkillsSection'
import ProcessSection from './components/ProcessSection'
import ContactFooter from './components/ContactFooter'
import ServicesPage from './components/ServicesPage'
import ProjectInquiryPage from './components/ProjectInquiryPage'

export default function App() {
  const path = window.location.pathname

  if (path === '/services') {
    return (
      <>
        <Navbar />
        <ServicesPage />
        <ContactFooter />
      </>
    )
  }

  if (path === '/start-project') {
    return (
      <>
        <Navbar />
        <ProjectInquiryPage />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientCasebook />
        <ServicesSection />
        <SkillsSection />
        <ProcessSection />
      </main>
      <ContactFooter />
    </>
  )
}
