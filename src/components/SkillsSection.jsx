const SKILLS = [
  {
    group: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
    bg: 'bg-[#FAECC6]',
  },
  {
    group: 'Frameworks',
    items: [
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'Django',
      'FastAPI',
      'Tailwind CSS',
    ],
    bg: 'bg-[#B9DD9C]',
    illustration: '/animations/sitting-employee-themed.svg',
  },
  {
    group: 'Tools',
    items: [
      'Git',
      'Linux',
      'Docker',
      'CI/CD',
      'AWS',
      'GCP',
      'PostgreSQL',
      'Jupyter Notebook',
    ],
    bg: 'bg-[#B9D1D5]',
  },
  {
    group: 'Other',
    items: [
      'System Design',
      'REST APIs',
      'GraphQL',
      'Microservices',
      'TDD',
      'Agile',
      'Cybersecurity Fundamentals',
    ],
    bg: 'bg-white',
  },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-b-2 border-[#4C211B] bg-[#FAECC6] px-4 sm:px-6 py-16 sm:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 sm:gap-12">

        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4C211B]/50">Skills</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#4C211B]">
            Technologies and tools I work with.
          </h2>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#4C211B]/70">
            My toolkit keeps growing as I build, study, and follow the long road of becoming sharper with every project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILLS.map((skill) => (
            <article
              key={skill.group}
              className={`
                ${skill.bg}
                relative
                min-h-[200px]
                rounded-lg
                border-2
                border-[#4C211B]
                p-5 sm:p-6
                shadow-[6px_6px_0_#4C211B]
              `}
            >
              {skill.illustration && (
                <img
                  src={skill.illustration}
                  alt=""
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    right-3 sm:right-4 md:right-6
                    top-0
                    z-20
                    -mt-[10px]
                    h-[110px] sm:h-[140px] md:h-[200px]
                    w-auto
                    -translate-y-[52%] sm:-translate-y-[55%] md:-translate-y-[58%]
                    object-contain
                    select-none
                  "
                />
              )}

              <div className={skill.illustration ? 'relative z-10 pt-10 sm:pt-14 md:pt-20' : 'relative z-10'}>
                <h3 className="mb-4 text-xl sm:text-2xl font-medium tracking-tight text-[#4C211B]">
                  {skill.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#4C211B] bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-[#4C211B]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 