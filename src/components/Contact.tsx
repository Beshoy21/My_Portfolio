import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Email</h3>
              <a
                href="mailto:contact@example.com"
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                contact@example.com
              </a>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                <Phone className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Phone</h3>
              <a
                href="tel:+1234567890"
                className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
              >
                +1 (234) 567-890
              </a>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-100 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Location</h3>
              <p className="text-slate-600">
                San Francisco, CA
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:contact@example.com"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
