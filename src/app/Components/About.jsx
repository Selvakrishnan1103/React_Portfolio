"use client";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-950 text-white px-6 py-24 font-sans">
      
      {/* Title */}
      <section className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-cyan-400 leading-tight">
          About Me
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
          I'm Selva Krishnan, a passionate full-stack developer who loves building clean, scalable, and impactful web applications. I blend creativity with code to bring ideas to life.
        </p>
      </section>

      {/* Profile */}
      <section className="max-w-5xl mx-auto mt-20 flex flex-col md:flex-row items-center gap-10">
        <div className="relative lg:w-112 w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg hover:scale-105 transition-transform duration-300">
          <Image src="/Selva_Mar.jpg" alt="Profile" fill className="object-cover" />
        </div>

        <div className="space-y-4 text-gray-300 text-base sm:text-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-300">
            Hello again! 👋
          </h2>
          <p>
            I'm continuously exploring new tools and frameworks to stay ahead in the tech world. My recent works include building platforms like <strong>EduHush</strong> and <strong>Algo Arena</strong>. I'm enthusiastic about AI, backend design, and full-stack architecture.
          </p>
          <p>
            I prioritize clean code, optimized performance, and great user experience in everything I build.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-semibold text-cyan-300 mb-6">🛠 Tech Stack</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300 text-lg list-disc list-inside">
          <li>React.js</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>Flask (Python)</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Redux Toolkit</li>
        </ul>
      </section>

      {/* Projects & Experience */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-semibold text-cyan-300 mb-6">💼 Projects & Experience</h2>
        <ul className="text-gray-300 space-y-3 text-lg list-disc list-inside">
          <li><strong>EduHush</strong> – AI-powered study video platform with smart recommendations</li>
          <li><strong>Student Information System</strong> – Secure records and reporting tool for students</li>
          <li><strong>GPA Calculator</strong> – Clean interface to calculate academic GPA</li>
          <li><strong>Cricket App</strong> – Real-time player stats & match management via Supabase</li>
        </ul>
      </section>

      {/* Personal Interests */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-semibold text-cyan-300 mb-6">🎯 Beyond Coding</h2>
        <p className="text-gray-300 text-lg">
          Outside of coding, I enjoy sketching, reading tech blogs, and discovering tools that improve productivity. I love working on community-centric ideas and experimenting with creative side projects.
        </p>
      </section>

      {/* Quote */}
      <section className="max-w-5xl mx-auto mt-20 text-center">
        <p className="italic text-gray-400 text-lg border-l-4 border-cyan-400 pl-4 mx-auto max-w-2xl">
          “Code is like humor. When you have to explain it, it’s bad.” — Cory House
        </p>
      </section>

      {/* Call to Action */}
      <section className="mt-20 text-center flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/Selva_Krishnan_NextJS_Developer.pdf"
          target="_blank"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition hover:scale-105"
        >
          📄 Download Resume
        </a>
        <Link
          href="/contact"
          className="border border-cyan-500 hover:bg-cyan-600 hover:text-white text-cyan-400 font-semibold px-6 py-3 rounded-full transition hover:scale-105"
        >
          📬 Contact Me
        </Link>
      </section>
    </main>
  );
}
