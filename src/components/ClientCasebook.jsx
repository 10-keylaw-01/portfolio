const PROJECTS = [
  {
    url: 'https://emberlimited.vercel.app/',
    title: 'Ember Limited',
    meta: 'Premium Lifestyle E-commerce',
    description: 'A polished online storefront with a premium landing experience, product storytelling, and fast customer pathways.',
    tech: ['React', 'Vercel', 'E-commerce', 'UI Design'],
    bg: 'bg-[#B9DD9C]',
  },
  {
    url: 'https://www.avenza.co.ke/',
    title: 'Avenza',
    meta: 'Business Website & Digital Presence',
    description: 'A responsive company website shaped around credibility, clear service discovery, and smooth mobile browsing.',
    tech: ['React', 'Tailwind CSS', 'Vercel', 'Responsive Design'],
    bg: 'bg-[#B9D1D5]',
  },
  {
    url: 'https://tujitume.com/',
    title: 'Tujitume',
    meta: 'Community Platform',
    description: 'A public-facing platform designed to make information accessible, structured, and easy to act on.',
    tech: ['Web Design', 'Content Structure', 'Performance', 'SEO'],
    bg: 'bg-[#FAECC6]',
  },
]

export default function ClientCasebook() {
  return (
    <section id="work" className="border-b-2 border-[#4C211B] bg-[#FAECC6] py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4C211B]/50">Selected work</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">A few of many projects.</h2>
          <p className="text-base sm:text-lg text-[#4C211B]/70 max-w-2xl leading-relaxed">
            A selection of client and personal projects I've designed, built, and shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map(p => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${p.bg} rounded-lg border-2 border-[#4C211B] shadow-[6px_6px_0px_#4C211B] overflow-hidden hover:-translate-y-1 transition-transform flex flex-col`}
            >
              <div className="relative bg-white border-b-2 border-[#4C211B] overflow-hidden" style={{height: '200px'}}>
                <iframe
                  src={p.url}
                  title={`${p.title} preview`}
                  scrolling="no"
                  style={{
                    width: '1280px',
                    height: '800px',
                    border: 'none',
                    transform: 'scale(0.31)',
                    transformOrigin: 'top left',
                    pointerEvents: 'none',
                  }}
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight">{p.title}</h3>
                  <p className="text-sm text-[#4C211B]/60">{p.meta}</p>
                </div>
                <p className="text-sm text-[#4C211B]/70 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-white border border-[#4C211B] rounded-full text-xs font-medium text-[#4C211B]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-auto text-sm font-medium text-[#C12A15]">View project →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
