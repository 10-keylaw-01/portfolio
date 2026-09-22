const SERVICE_GROUPS = [
  {
    eyebrow: '01 — Web Development',
    title: 'Website Development',
    price: 'Starting from $270',
    body: 'Modern, responsive websites designed around your brand and business goals.',
    points: ['Responsive desktop, tablet, and mobile design', 'Modern user interface', 'Contact forms and interactive sections', 'Basic SEO structure', 'Performance optimization', 'Deployment assistance'],
  },
  {
    eyebrow: '02 — Web Systems',
    title: 'Web Application / System Development',
    price: 'Starting from $386',
    body: 'Custom web-based systems for businesses that need more than a traditional website.',
    points: ['Management dashboards', 'Admin portals', 'Booking and reservation systems', 'Inventory systems', 'Database-powered applications', 'Authentication and role-based access'],
  },
  {
    eyebrow: '03 — Design & Branding',
    title: 'Brand Identity Kit',
    price: 'Starting from $30',
    body: 'A starter visual identity package for businesses, personal brands, and digital products.',
    points: ['Logo design from $10', 'Social media design from $18', 'Brand colors and typography', 'Logo variations', 'Basic usage guidelines', 'Social media assets'],
  },
]

const EXTRAS = [
  'Document editing from $3.85',
  'Academic support and editing from $0.02/word',
  'Online learning support for course materials, formatting, and technical tasks',
  'Priority delivery may be available for selected 24-hour projects',
]

export default function ServicesPage() {
  return (
    <main className="bg-[#FAECC6] text-[#4C211B] pt-32">
      <section className="border-b-2 border-[#4C211B] px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-end">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4C211B]/50">Services & Pricing</p>
            <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]">What I can help you build.</h1>
          </div>
          <p className="text-xl leading-relaxed text-[#4C211B]/75">
            I design and develop modern digital experiences for individuals, startups, and growing businesses, from visual identities and marketing materials to responsive websites and complete web systems.
          </p>
        </div>
      </section>

      <section className="border-b-2 border-[#4C211B] bg-white px-6 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-6">
          {SERVICE_GROUPS.map(service => (
            <article key={service.title} className="rounded-lg border-2 border-[#4C211B] bg-[#FAECC6] p-6 md:p-8 shadow-[6px_6px_0px_#4C211B]">
              <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-8">
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C12A15]">{service.eyebrow}</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">{service.title}</h2>
                  <p className="text-lg font-semibold">{service.price}</p>
                  <p className="text-lg leading-relaxed text-[#4C211B]/70">{service.body}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.points.map(point => (
                    <div key={point} className="bg-white border border-[#4C211B] rounded-lg px-4 py-3 text-base font-medium">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b-2 border-[#4C211B] bg-[#B9D1D5] px-6 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4C211B]/50">Additional services</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mt-3">Useful support when the project needs it.</h2>
          </div>
          <div className="flex flex-col gap-3">
            {EXTRAS.map(extra => (
              <div key={extra} className="bg-white border-2 border-[#4C211B] rounded-lg px-5 py-4 text-lg font-medium">
                {extra}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAECC6] px-6 py-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">Have a project in mind?</h2>
            <p className="text-lg text-[#4C211B]/70 mt-3 max-w-2xl">
              Tell me what you're building and I'll help you determine the right approach.
            </p>
          </div>
          <a href="/start-project" className="self-start px-8 py-4 bg-[#C12A15] text-[#FAECC6] rounded-full border-2 border-[#4C211B] shadow-[6px_6px_0px_#4C211B] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_#4C211B] transition-all text-xl font-medium">
            Start a project
          </a>
        </div>
      </section>
    </main>
  )
}
