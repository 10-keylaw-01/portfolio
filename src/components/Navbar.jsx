const LINKS = ['Work', 'Services', 'Skills', 'About', 'Contact']

export default function Navbar() {
  const isHome = window.location.pathname === '/'

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header className="bg-[#FAECC6]/80 backdrop-blur-xl border-2 border-[#4C211B]/20 rounded-full h-14 flex items-center px-4 md:px-8 justify-between shadow-[0_8px_32px_rgba(76,33,27,0.08)] pointer-events-auto w-full max-w-[900px] transition-all duration-300 hover:border-[#4C211B]/40">

        <a href="/" className="font-serif text-lg md:text-xl font-medium tracking-tight text-[#4C211B] shrink-0">Lawrence Kevin</a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {LINKS.map(l => (
            <a
              key={l}
              href={`${isHome ? '' : '/'}#${l.toLowerCase()}`}
              className="text-sm font-normal text-[#4C211B]/60 hover:text-[#C12A15] transition-colors uppercase tracking-widest"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/documents/KLM.pdf"
            download
            className="hidden sm:block px-4 py-1.5 bg-white text-[#4C211B] rounded-full border-2 border-[#4C211B] shadow-[3px_3px_0px_#4C211B] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[1px_1px_0px_#4C211B] transition-all text-xs font-medium uppercase tracking-widest"
          >
            Resume ↓
          </a>
          <a
            href="/start-project"
            className="px-4 py-1.5 bg-[#C12A15] text-[#FAECC6] rounded-full border-2 border-[#4C211B] shadow-[3px_3px_0px_#4C211B] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[1px_1px_0px_#4C211B] transition-all text-xs font-medium uppercase tracking-widest"
          >
            Hire me
          </a>
        </div>
      </header>
    </div>
  )
}
