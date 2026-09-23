export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="bg-[#C12A15] text-[#FAECC6] border-b-2 border-[#4C211B] py-20 sm:py-32 px-4 sm:px-6 text-center relative overflow-hidden">
        <img
          src="/animations/sky.svg"
          alt=""
          aria-hidden="true"
          className="absolute right-[-3rem] bottom-[-3rem] h-48 w-48 sm:h-64 sm:w-64 md:right-[-2rem] md:bottom-[-8rem] md:h-[28rem] md:w-[28rem] object-contain opacity-50 saturate-150 contrast-110 pointer-events-none select-none"
        />
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 sm:gap-8 relative z-10">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight leading-[1.1]">
            Let's build something great.
          </h2>
          <p className="text-base sm:text-xl text-[#FAECC6]/80 leading-relaxed">
            Available for projects · 2026. Reach out and let's talk.
          </p>
          <a
            href="mailto:lawrencekevinmwangi@gmail.com"
            className="px-6 py-4 sm:px-10 sm:py-5 bg-[#FAECC6] text-[#4C211B] rounded-full border-2 border-[#4C211B] shadow-[8px_8px_0px_#4C211B] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_#4C211B] transition-all text-sm sm:text-xl md:text-2xl font-medium break-all sm:break-normal"
          >
            lawrencekevinmwangi@gmail.com
          </a>
        </div>
      </section>

      <footer className="bg-[#FAECC6] py-8 sm:py-10 px-4 sm:px-6 border-t-2 border-[#4C211B]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-sm sm:text-base text-[#4C211B]/60">
          <span className="font-serif text-lg sm:text-xl font-medium text-[#4C211B]">Lawrence Kevin</span>
          <div className="flex gap-5 sm:gap-6">
            <a href="https://www.instagram.com/_k3ylaw_/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C12A15] transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/kevin-lawrence-8388592a7/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C12A15] transition-colors">LinkedIn</a>
            <a href="https://wa.me/254721665112" target="_blank" rel="noopener noreferrer" className="hover:text-[#C12A15] transition-colors">WhatsApp</a>
          </div>
          <span className="text-center text-xs sm:text-sm">© {new Date().getFullYear()} Lawrence Kevin. All rights reserved.</span>
        </div>
      </footer>
    </>
  )
}
