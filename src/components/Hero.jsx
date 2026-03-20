const STEPS = [
  { num: '01', label: 'Discover & Plan' },
  { num: '02', label: 'Design & Build' },
  { num: '03', label: 'Ship & Iterate' },
]

export default function Hero() {
  return (
    <section className="border-b-2 border-[#4C211B] px-6 flex flex-col min-h-screen">
      {/* Main hero content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#B9DD9C] rounded-full mix-blend-multiply opacity-60 blur-2xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#B9D1D5] rounded-full mix-blend-multiply opacity-60 blur-2xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center gap-8">
          <div className="inline-block px-4 py-1.5 bg-white border-2 border-[#4C211B] rounded-full text-base font-medium shadow-[2px_2px_0px_#4C211B] -rotate-1">
            <span className="text-[#C12A15] font-semibold">Available</span> for projects · 2025
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-[#4C211B]">
            I build products people actually want to use.
          </h1>

          <p className="text-xl md:text-2xl text-[#4C211B]/70 max-w-xl leading-relaxed">
            Full-stack developer & designer crafting e-commerce platforms, travel experiences, and service portals — from idea to live product.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="px-8 py-4 bg-[#C12A15] text-[#FAECC6] rounded-full border-2 border-[#4C211B] shadow-[6px_6px_0px_#4C211B] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_#4C211B] transition-all text-xl font-medium"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-[#4C211B] rounded-full border-2 border-[#4C211B] shadow-[6px_6px_0px_#4C211B] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_#4C211B] transition-all text-xl font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Process strip — pinned to bottom of hero */}
      <div className="border-t-2 border-[#4C211B] grid grid-cols-3">
        {STEPS.map((s, i) => (
          <div
            key={s.num}
            className={`flex items-center gap-4 px-6 py-5 ${i < STEPS.length - 1 ? 'border-r-2 border-[#4C211B]' : ''}`}
          >
            <span className="font-serif text-3xl font-medium text-[#C12A15]">{s.num}</span>
            <span className="text-base font-medium tracking-tight">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
