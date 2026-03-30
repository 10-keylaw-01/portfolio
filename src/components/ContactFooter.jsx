export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="bg-[#C12A15] text-[#FAECC6] border-b-2 border-[#4C211B] py-32 px-6 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-8 relative z-10">
          <h2 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1]">
            Let's build something great.
          </h2>
          <p className="text-xl text-[#FAECC6]/80 leading-relaxed">
            Available for projects · 2025. Reach out and let's talk.
          </p>
          <a
            href="mailto:lawrencekevinmwangi@gmail.com"
            className="px-10 py-5 bg-[#FAECC6] text-[#4C211B] rounded-full border-2 border-[#4C211B] shadow-[8px_8px_0px_#4C211B] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_#4C211B] transition-all text-xl md:text-2xl font-medium"
          >
            lawrencekevinmwangi@gmail.com
          </a>
        </div>
      </section>

      <footer className="bg-[#FAECC6] py-10 px-6 border-t-2 border-[#4C211B]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-base text-[#4C211B]/60">
          <span className="font-serif text-xl font-medium text-[#4C211B]">Lawrence Kevin</span>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/_k3ylaw_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C12A15] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-lawrence-8388592a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C12A15] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/254721665112"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C12A15] transition-colors"
            >
              WhatsApp
            </a>
          </div>
          <span>© {new Date().getFullYear()} Lawrence Kevin. All rights reserved.</span>
        </div>
      </footer>
    </>
  )
}
