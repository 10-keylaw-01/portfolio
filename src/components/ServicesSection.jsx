const SERVICES = [
  {
    num: '01',
    title: 'Website Development',
    desc: 'Responsive websites built around your brand, goals, and audience with clean UI, contact flows, SEO structure, and launch support.',
    price: 'Starting at $270',
    bg: 'bg-[#FAECC6]',
  },
  {
    num: '02',
    title: 'Web Applications',
    desc: 'Custom dashboards, portals, booking tools, and business systems for teams that need more than a traditional website.',
    price: 'Starting at $386',
    bg: 'bg-[#B9DD9C]',
  },
  {
    num: '03',
    title: 'Design & Branding',
    desc: 'Logo design, social graphics, starter identity kits, and UI direction that make your digital presence feel intentional.',
    price: 'Starting at $30',
    bg: 'bg-[#B9D1D5]',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="border-b-2 border-[#4C211B] bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4C211B]/50">What I offer</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">What I can help you build.</h2>
          <p className="text-lg text-[#4C211B]/70 max-w-2xl leading-relaxed">
            I design and develop modern digital experiences for individuals, startups, and growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map(s => (
            <div
              key={s.num}
              className={`${s.bg} p-8 rounded-lg border-2 border-[#4C211B] shadow-[6px_6px_0px_#4C211B] hover:-translate-y-1 transition-transform flex flex-col gap-4`}
            >
              <div className="w-12 h-12 bg-white rounded-full border-2 border-[#4C211B] flex items-center justify-center text-xl font-medium shadow-[2px_2px_0px_#4C211B]">
                {s.num}
              </div>
              <h3 className="text-2xl font-medium tracking-tight">{s.title}</h3>
              <p className="text-base font-semibold text-[#C12A15]">{s.price}</p>
              <p className="text-lg text-[#4C211B]/70 leading-relaxed">{s.desc}</p>
              <a href="/services" className="mt-auto text-sm font-medium text-[#C12A15]">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
