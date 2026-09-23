import RocketAnimation from './RocketAnimation'

const STEPS = [
  { num: '01', label: 'Discover & Plan' },
  { num: '02', label: 'Design & Build' },
  { num: '03', label: 'Ship & Iterate' },
]

export default function Hero() {
  return (
    <section className="border-b-2 border-[#4C211B] px-4 sm:px-6 flex flex-col min-h-screen relative overflow-hidden">
      <RocketAnimation className="absolute left-0 top-[68px] h-[110px] w-[110px] sm:h-[160px] sm:w-[160px] md:left-[32px] md:top-[96px] md:h-[280px] md:w-[280px] pointer-events-none" />

      <div className="flex-1 flex flex-col items-center justify-center text-center pt-24 sm:pt-28 pb-12 relative">
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center gap-5 md:gap-8">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-white border-2 border-[#4C211B] rounded-full text-xs sm:text-sm md:text-base font-medium shadow-[2px_2px_0px_#4C211B] -rotate-1">
            <span className="text-[#C12A15] font-semibold">Available</span> for projects · 2026
          </div>

          <h1 className="font-serif text-[2.1rem] leading-[1.15] sm:text-5xl md:text-7xl font-medium tracking-tight text-[#4C211B]">
            I build useful products while learning out loud.
          </h1>

          <p className="text-sm sm:text-lg md:text-2xl text-[#4C211B]/70 max-w-xl leading-relaxed px-2">
            Full-stack developer, designer, and cybersecurity learner crafting e-commerce platforms, business systems, and service portals from idea to live product.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#work"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-[#C12A15] text-[#FAECC6] rounded-full border-2 border-[#4C211B] shadow-[4px_4px_0px_#4C211B] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#4C211B] transition-all text-base sm:text-xl font-medium text-center"
            >
              View my work
            </a>
            <a
              href="/start-project"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-[#4C211B] rounded-full border-2 border-[#4C211B] shadow-[4px_4px_0px_#4C211B] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#4C211B] transition-all text-base sm:text-xl font-medium text-center"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>

      {/* Process strip — astronaut sits on top of the border */}
      <div className="relative border-t-2 border-[#4C211B] grid grid-cols-3">
        <img
          src="/animations/astronaut-themed.svg"
          alt=""
          aria-hidden="true"
          className="absolute right-2 sm:right-4 md:right-8 -top-29 sm:-top-44 md:-top-60 h-32 w-32 sm:h-44 sm:w-44 md:h-60 md:w-60 object-contain pointer-events-none select-none z-10"
        />

        {STEPS.map((s, i) => (
          <div
            key={s.num}
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-0.5 sm:gap-3 px-2 sm:px-5 py-3 sm:py-5 ${i < STEPS.length - 1 ? 'border-r-2 border-[#4C211B]' : ''}`}
          >
            <span className="font-serif text-lg sm:text-2xl md:text-3xl font-medium text-[#C12A15] leading-none">{s.num}</span>
            <span className="text-[10px] sm:text-sm md:text-base font-medium tracking-tight leading-tight">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
