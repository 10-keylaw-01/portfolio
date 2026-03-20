export default function ProcessSection() {
  return (
    <section id="about" className="border-b-2 border-[#4C211B] bg-[#B9D1D5] py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[#C12A15] rounded-3xl translate-x-4 translate-y-4 border-2 border-[#4C211B]" />
          <div className="relative aspect-[4/5] bg-[#B9DD9C] rounded-3xl border-2 border-[#4C211B] overflow-hidden">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0598941-97b9-43d5-8007-56fa92437c3c_1600w.webp"
              alt="Lawrence Kevin"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#C12A15] rounded-full border-2 border-[#4C211B] flex items-center justify-center rotate-12 shadow-[2px_2px_0px_#4C211B]">
            <span className="text-[#FAECC6] font-serif font-medium text-center leading-tight -rotate-12">Hi<br />there!</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4C211B]/50">About me</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">Lawrence Kevin Mwangi.</h2>
          <p className="text-lg leading-relaxed text-[#4C211B]/80">
            I'm a full-stack developer and designer who turns ideas into polished, production-ready web products.
          </p>
          <p className="text-lg leading-relaxed text-[#4C211B]/80">
            From lifestyle e-commerce to travel platforms and connectivity services — I handle the full stack: design, development, and deployment.
          </p>
          <a
            href="#contact"
            className="self-start px-6 py-3 bg-[#4C211B] text-[#FAECC6] rounded-full border-2 border-[#4C211B] shadow-[4px_4px_0px_#C12A15] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#C12A15] transition-all text-lg font-medium"
          >
            Work with me →
          </a>
        </div>
      </div>
    </section>
  )
}
