import Link from "next/link";
import { Github, Mail, Linkedin, ArrowUp, Home, User, Code, Briefcase, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 to-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-sm">

        {/* Left - Name/Tagline */}
        <div>
          <h2 className="text-cyan-400 text-xl font-semibold mb-2">Selva Krishnan</h2>
          <p className="text-gray-400">
            Creating clean and scalable web experiences with modern tech stacks.
          </p>
        </div>

        {/* Middle - Icon Navigation */}
        <div>
          <h3 className="text-white font-medium mb-2">Navigation</h3>
          <div className="flex gap-6 mt-3 text-white text-sm">
            <Link href="/" aria-label="Home" className="hover:text-cyan-400 transition">
              <Home className="w-5 h-5" />
            </Link>
            <Link href="/about" aria-label="About" className="hover:text-cyan-400 transition">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/skills" aria-label="Skills" className="hover:text-cyan-400 transition">
              <Code className="w-5 h-5" />
            </Link>
            <Link href="/projects" aria-label="Projects" className="hover:text-cyan-400 transition">
              <Briefcase className="w-5 h-5" />
            </Link>
            <Link href="/contact" aria-label="Contact" className="hover:text-cyan-400 transition">
              <Phone className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Right - Social Media */}
        <div>
          <h3 className="text-white font-medium mb-2">Connect with me</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/Selvakrishnan1103"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-cyan-400 transition"
            >
              <Github />
            </a>
            <a
              href="mailto:selvakrish601@gmail.com"
              aria-label="Email"
              className="hover:text-cyan-400 transition"
            >
              <Mail />
            </a>
            <a
              href="https://www.linkedin.com/in/selva-krishnan-k-6b0459225"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 transition"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-center py-4 text-xs text-gray-500 flex justify-between px-6 items-center">
        <span>© {new Date().getFullYear()} Selva Krishnan. All rights reserved.</span>
        <a href="#" className="text-cyan-400 hover:text-white transition flex items-center gap-1" aria-label="Back to top">
          <ArrowUp className="w-4 h-4" /> Back to top
        </a>
      </div>
    </footer>
  );
}
