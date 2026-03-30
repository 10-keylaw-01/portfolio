const PROJECTS = [
  {
    url: 'https://ember-five-mu.vercel.app/',
    logo: 'https://ember-five-mu.vercel.app/logoClean.png',
    logoAlt: 'Ember logo',
    title: 'Ember',
    meta: 'Premium Lifestyle E-commerce',
    description: 'Full-stack e-commerce platform with product catalog, cart management, and secure checkout.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    bg: 'bg-[#B9DD9C]',
    logoBg: 'bg-white',
  },
  {
    url: 'https://www.rafikitravels.com/',
    logo: 'https://www.rafikitravels.com/favicon.ico',
    logoAlt: 'Rafiki Travels logo',
    title: 'Rafiki Travels',
    meta: 'East Africa Safari & Tours Platform',
    description: 'Travel booking platform featuring safari packages, itinerary customization, and real-time availability.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Google Maps API'],
    bg: 'bg-[#B9D1D5]',
    logoBg: 'bg-white',
  },
  {
    url: 'https://keylaw-tek-wifi.vercel.app/',
    logo: 'https://keylaw-tek-wifi.vercel.app/favicon.ico',
    logoAlt: 'keylaw.tek logo',
    title: 'keylaw.tek',
    meta: 'Premium Wi-Fi On Demand',
    description: 'IoT-enabled Wi-Fi service platform with subscription management and network analytics.',
    tech: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
    bg: 'bg-[#FAECC6]',
    logoBg: 'bg-[#4C211B]',
  },
]

export default function ClientCasebook() {
  return (
    <section id="work" className="border-b-2 border-[#4C211B] bg-[#FAECC6] py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4C211B]/50">Selected work</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">A few of many projects.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map(p => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${p.bg} rounded-3xl border-2 border-[#4C211B] shadow-[6px_6px_0px_#4C211B] overflow-hidden hover:-translate-y-1 transition-transform flex flex-col`}
            >
              <div className={`${p.logoBg} aspect-[4/3] flex items-center justify-center border-b-2 border-[#4C211B]`}>
                {p.logo
                  ? <img src={p.logo} alt={p.logoAlt} className="w-28 h-28 object-contain" />
                  : <span className="font-serif text-2xl font-medium text-[#FAECC6] tracking-tight">{p.title}</span>
                }
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                  <p className="text-base text-[#4C211B]/60">{p.meta}</p>
                </div>
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

        <div className="text-center pt-8 border-t-2 border-[#4C211B]">
          <p className="text-base text-[#4C211B]/60">These are just some of the many projects I've built.</p>
        </div>
      </div>
    </section>
  )
}
