const SERVICES = [
  {
    num: '01',
    title: 'Web App Development',
    desc: 'Full-stack web applications built with React — from e-commerce platforms to service portals, fast and production-ready.',
    bg: 'bg-[#FAECC6]',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    desc: 'Clean, conversion-focused interfaces. I design and build the experience end-to-end, from wireframe to deployed product.',
    bg: 'bg-[#B9DD9C]',
  },
  {
    num: '03',
    title: 'Landing Pages & Portals',
    desc: 'High-impact landing pages and customer-facing portals that look great and load fast — built to convert.',
    bg: 'bg-[#B9D1D5]',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="border-b-2 border-[#4C211B] bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4C211B]/50">What I offer</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">Services.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map(s => (
            <div
              key={s.num}
              className={`${s.bg} p-8 rounded-3xl border-2 border-[#4C211B] shadow-[6px_6px_0px_#4C211B] hover:-translate-y-1 transition-transform flex flex-col gap-4`}
            >
              <div className="w-12 h-12 bg-white rounded-full border-2 border-[#4C211B] flex items-center justify-center text-xl font-medium shadow-[2px_2px_0px_#4C211B]">
                {s.num}
              </div>
              <h3 className="text-2xl font-medium tracking-tight">{s.title}</h3>
              <p className="text-lg text-[#4C211B]/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
