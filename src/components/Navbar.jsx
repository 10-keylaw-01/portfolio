const LINKS = ['Work', 'Services', 'About', 'Contact']

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <header className="bg-[#FAECC6]/80 backdrop-blur-xl border-2 border-[#4C211B]/20 rounded-full h-16 flex items-center px-6 md:px-8 justify-between shadow-[0_8px_32px_rgba(76,33,27,0.08)] pointer-events-auto w-full max-w-[900px] transition-all duration-300 hover:border-[#4C211B]/40">

        <span className="font-serif text-xl font-medium tracking-tight text-[#4C211B]">Lawrence Kevin</span>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-normal text-[#4C211B]/60 hover:text-[#C12A15] transition-colors uppercase tracking-widest"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/documents/KLM.pdf"
            download
            className="px-5 py-2 bg-white text-[#4C211B] rounded-full border-2 border-[#4C211B] shadow-[4px_4px_0px_#4C211B] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#4C211B] transition-all text-sm font-medium uppercase tracking-widest"
          >
            Resume ↓
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-[#C12A15] text-[#FAECC6] rounded-full border-2 border-[#4C211B] shadow-[4px_4px_0px_#4C211B] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#4C211B] transition-all text-sm font-medium uppercase tracking-widest"
          >
            Hire me
          </a>
        </div>
      </header>
    </div>
  )
}
