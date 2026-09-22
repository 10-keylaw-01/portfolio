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
      className="border-b-2 border-[#4C211B] bg-[#FAECC6] px-6 py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12">

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4C211B]/50">
            Skills
          </p>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-[#4C211B] md:text-5xl">
            Technologies and tools I work with.
          </h2>

          <p className="max-w-2xl text-lg leading-relaxed text-[#4C211B]/70">
            My toolkit keeps growing as I build, study, and follow the long
            road of becoming sharper with every project.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILLS.map((skill) => (
            <article
              key={skill.group}
              className={`
                ${skill.bg}
                relative
                min-h-[245px]
                rounded-lg
                border-2
                border-[#4C211B]
                p-6
                shadow-[6px_6px_0_#4C211B]
              `}
            >
              {/* Sitting illustration */}
              {skill.illustration && (
                <img
                  src={skill.illustration}
                  alt=""
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-0
                    z-20

                    -mt-[14px]

                    h-[180px]
                    w-auto
                    -translate-y-[58%]

                    md:right-6
                    md:h-[220px]
                    md:-translate-y-[58%]
                    md:-mt-[14px]

                    object-contain
                    select-none
                  "
                />
              )}

              {/* Content */}
              <div
                className={
                  skill.illustration
                    ? 'relative z-10 pt-20'
                    : 'relative z-10'
                }
              >
                <h3 className="mb-5 text-2xl font-medium tracking-tight text-[#4C211B]">
                  {skill.group}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-[#4C211B]
                        bg-white
                        px-3
                        py-2
                        text-sm
                        font-medium
                        text-[#4C211B]
                      "
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