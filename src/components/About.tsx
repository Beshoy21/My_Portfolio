import { Code2, Lightbulb, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            I'm a passionate Software Engineer with expertise in building scalable web applications
            and solving complex technical challenges. With a strong foundation in modern technologies
            and best practices, I focus on delivering high-quality solutions that make a real impact.
          </p>

          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            My approach combines technical excellence with clear communication and collaborative
            problem-solving. I'm constantly learning and adapting to new technologies to stay at
            the forefront of software development.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <Code2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Clean Code</h3>
              <p className="text-slate-600">
                Writing maintainable, testable code that scales
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-100 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Problem Solving</h3>
              <p className="text-slate-600">
                Innovative solutions to complex challenges
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Fast Delivery</h3>
              <p className="text-slate-600">
                Efficient development with attention to detail
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
