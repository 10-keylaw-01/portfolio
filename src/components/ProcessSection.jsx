export default function ProcessSection() {
  return (
    <section id="about" className="border-b-2 border-[#4C211B] bg-[#B9D1D5] py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[#C12A15] rounded-lg translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 border-2 border-[#4C211B]" />
          <div className="relative aspect-[4/5] bg-[#B9DD9C] rounded-lg border-2 border-[#4C211B] overflow-hidden">
            <img
              src="/lawrence-portrait.png"
              alt="Lawrence Kevin"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 bg-[#C12A15] rounded-full border-2 border-[#4C211B] flex items-center justify-center rotate-12 shadow-[2px_2px_0px_#4C211B]">
            <span className="text-[#FAECC6] font-serif font-medium text-center leading-tight -rotate-12 text-sm sm:text-base">Hi<br />there!</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4C211B]/50">About me</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">Lawrence Kevin Mwangi.</h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#4C211B]/80">
            I'm a full-stack developer and designer who likes taking messy early ideas and giving them structure, taste, and a real path to launch.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-[#4C211B]/80">
            My work sits between design, code, and product thinking: clean interfaces, practical systems, and websites that feel considered on every screen. I'm also deeply interested in cybersecurity, because building well means thinking about trust, resilience, and the details people do not always see.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-[#4C211B]/80">
            Learning is a journey for me. Every project sharpens the next one, and I bring that curiosity into how I build, debug, document, and collaborate.
          </p>
          <a
            href="/start-project"
            className="self-start px-5 py-2.5 sm:px-6 sm:py-3 bg-[#4C211B] text-[#FAECC6] rounded-full border-2 border-[#4C211B] shadow-[4px_4px_0px_#C12A15] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#C12A15] transition-all text-base sm:text-lg font-medium"
          >
            Work with me →
          </a>
        </div>
      </div>
    </section>
  )
}
