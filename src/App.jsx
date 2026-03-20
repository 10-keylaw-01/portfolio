import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientCasebook from './components/ClientCasebook'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import ContactFooter from './components/ContactFooter'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientCasebook />
        <ServicesSection />
        <ProcessSection />
      </main>
      <ContactFooter />
    </>
  )
}
