import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-slate-400 text-center">
            <p className="flex items-center gap-2 mb-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Software Engineer
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
