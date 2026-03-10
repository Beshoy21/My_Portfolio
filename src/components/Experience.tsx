const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: [
      'Led development of microservices architecture serving 1M+ users',
      'Reduced API response time by 40% through optimization',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Startup Inc.',
    period: '2020 - 2022',
    description: [
      'Built full-stack web applications using React and Node.js',
      'Implemented CI/CD pipelines improving deployment efficiency by 60%',
      'Collaborated with product team to deliver features on schedule',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'Digital Agency',
    period: '2019 - 2020',
    description: [
      'Developed responsive websites and web applications',
      'Worked with REST APIs and database integration',
      'Participated in agile development processes',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-blue-500"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-slate-500 font-medium">
                    {exp.period}
                  </span>
                </div>

                <p className="text-lg text-blue-600 mb-4">{exp.company}</p>

                <ul className="space-y-2">
                  {exp.description.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-slate-600 flex items-start"
                    >
                      <span className="mr-2 text-blue-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
