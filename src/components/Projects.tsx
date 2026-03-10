import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, and analytics.',
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'API Analytics Dashboard',
    description: 'Real-time monitoring dashboard for API performance metrics, error tracking, and usage analytics.',
    technologies: ['Next.js', 'TypeScript', 'GraphQL', 'Redis'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Machine Learning Pipeline',
    description: 'Automated ML pipeline for data processing, model training, and deployment with monitoring capabilities.',
    technologies: ['Python', 'TensorFlow', 'Docker', 'AWS'],
    github: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Featured Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200"
            >
              <h3 className="text-2xl font-semibold mb-3 text-slate-900">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                  <span>Code</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
