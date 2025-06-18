"use client";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiFlask,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiPostman,
  SiRedux,
  SiVisualstudiocode,
  SiVercel,
} from "react-icons/si";

export default function Skills() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-950 text-white px-6 py-24 font-sans">
      
      {/* Header */}
      <section className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold text-cyan-400"
        >
          My Skills
        </motion.h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
          A snapshot of my technical toolbox — spanning full-stack development, APIs, and modern frameworks.
        </p>
      </section>

      {/* Skills Grid */}
      <section className="mt-20 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-400 transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">🎨 Frontend</h2>
          <div className="flex flex-wrap gap-6 text-4xl text-cyan-400">
            <SiReact title="React.js" />
            <SiNextdotjs title="Next.js" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiJavascript title="JavaScript" />
            <SiRedux title="Redux Toolkit" />
          </div>
        </motion.div>

        {/* Backend + DB */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-400 transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">🛠 Backend & Database</h2>
          <div className="flex flex-wrap gap-6 text-4xl text-cyan-400">   
            <SiNextdotjs title="Next.js" />
            <SiFlask title="Flask" />
            <SiMysql title="MySQL" />
            <SiMongodb title="MongoDB" />
          </div>
        </motion.div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-400 transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">🧰 Tools & Platforms</h2>
          <div className="flex flex-wrap gap-6 text-4xl text-cyan-400">
            <SiGithub title="GitHub" />
            <SiPostman title="Postman" />
            <SiVercel title="Vercel" />
          </div>
        </motion.div>

        {/* Other Abilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-400 transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">💡 Other Abilities</h2>
          <ul className="list-disc list-inside text-gray-300 text-base space-y-2 ml-2">
            <li>Clean Code & Documentation</li>
            <li>Responsive UI Development</li>
            <li>REST API Integration</li>
            <li>Version Control (Git)</li>
            <li>Team Collaboration & Agile Workflows</li>
          </ul>
        </motion.div>
      </section>
    </main>
  );
}
