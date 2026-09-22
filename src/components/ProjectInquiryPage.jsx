const INTERESTS = ['Website', 'Web Application', 'UI Design', 'Branding', 'Other']

export default function ProjectInquiryPage() {
  return (
    <main className="bg-[#FAECC6] text-[#4C211B] min-h-screen pt-32 px-6 pb-20">
      <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4C211B]/50">Start a project</p>
          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]">Tell me what you're building.</h1>
          <p className="text-xl leading-relaxed text-[#4C211B]/75">
            Whether you need a website, custom web application, or visual identity, share the shape of the idea and I will help you find the right first move.
          </p>
        </div>

        <form action="mailto:lawrencekevinmwangi@gmail.com" method="post" encType="text/plain" className="bg-white border-2 border-[#4C211B] rounded-lg p-6 md:p-8 shadow-[6px_6px_0px_#4C211B] grid grid-cols-1 gap-5">
          <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-widest">
            Name
            <input name="name" required className="h-12 rounded-lg border-2 border-[#4C211B] px-4 text-base font-normal normal-case tracking-normal bg-[#FAECC6]" />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-widest">
            Email
            <input name="email" type="email" required className="h-12 rounded-lg border-2 border-[#4C211B] px-4 text-base font-normal normal-case tracking-normal bg-[#FAECC6]" />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-widest">
            Company / Organization
            <input name="company" className="h-12 rounded-lg border-2 border-[#4C211B] px-4 text-base font-normal normal-case tracking-normal bg-[#FAECC6]" />
          </label>
          <fieldset className="flex flex-col gap-3">
            <legend className="text-sm font-semibold uppercase tracking-widest">I'm interested in</legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {INTERESTS.map(interest => (
                <label key={interest} className="flex items-center gap-2 rounded-lg border-2 border-[#4C211B] bg-[#FAECC6] px-3 py-3 text-sm font-medium">
                  <input type="checkbox" name="interest" value={interest} />
                  {interest}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-widest">
              Estimated budget
              <input name="budget" className="h-12 rounded-lg border-2 border-[#4C211B] px-4 text-base font-normal normal-case tracking-normal bg-[#FAECC6]" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-widest">
              Preferred timeline
              <input name="timeline" className="h-12 rounded-lg border-2 border-[#4C211B] px-4 text-base font-normal normal-case tracking-normal bg-[#FAECC6]" />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-widest">
            Tell me about your project
            <textarea name="message" required rows="6" className="rounded-lg border-2 border-[#4C211B] p-4 text-base font-normal normal-case tracking-normal bg-[#FAECC6] resize-y" />
          </label>
          <button className="justify-self-start px-8 py-4 bg-[#C12A15] text-[#FAECC6] rounded-full border-2 border-[#4C211B] shadow-[6px_6px_0px_#4C211B] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_#4C211B] transition-all text-lg font-medium">
            Send project inquiry
          </button>
        </form>
      </section>
    </main>
  )
}
