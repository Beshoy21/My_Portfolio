import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,0),rgba(0,0,0,0.8))]"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold">
                SE
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Software Engineer
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-slide-up animation-delay-200">
            Building elegant solutions to complex problems
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
            Passionate about creating high-performance applications and turning ideas into reality through clean, maintainable code.
          </p>

          <div className="flex gap-6 justify-center mb-12 animate-slide-up animation-delay-600">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="w-12 h-12 rounded-full bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
}
