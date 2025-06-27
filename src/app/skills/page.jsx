
export const metadata = {
  title: "Skills | Selva Krishnan - Full Stack Developer",
  description:
    "Discover Selva Krishnan's technical skill set including React, Next.js, Tailwind CSS, Flask, MySQL, and more.",
  keywords: [
    "Selva Krishnan Skills",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Flask",
    "MySQL",
    "MongoDB",
    "Frontend Developer",
    "Backend Developer",
  ],
  openGraph: {
    title: "Skills | Selva Krishnan Portfolio",
    description:
      "Explore the technologies and tools mastered by Selva Krishnan in full-stack web development.",
    url: "https://www.selvakrishnan.in/skills",
    images: [
      {
        url: "/selva_Mar.JPG",
        width: 800,
        height: 600,
        alt: "Selva Krishnan",
      },
    ],
    type: "website",
  },
};

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Skills from "../Components/Skills";

export default function SkillsPage() {
  return (
    <div>
      <Header />
      <Skills />
      <Footer />
    </div>
  );
}
