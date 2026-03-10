const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Agile'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Skills & Technologies
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-900 border-b-2 border-blue-500 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <li
                    key={skillIdx}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
