
export const metadata = {
  title: "Projects | Selva Krishnan - Full Stack Developer",
  description: "Explore the portfolio of Selva Krishnan, featuring full stack projects like EduHush, GPA Calculator, CricSelva, and more.",
  keywords: [
    "Selva Krishnan Projects",
    "Full Stack Developer",
    "EduHush",
    "GPA Calculator",
    "CricSelva",
    "Student Information System",
    "React",
    "Next.js",
    "Flask"
  ],
  openGraph: {
    title: "Projects | Selva Krishnan Portfolio",
    description: "Browse a showcase of full-stack applications developed by Selva Krishnan using React, Next.js, Flask, and other technologies.",
    url: "https://www.selvakrishnan.in/projects",
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
import Projects from "../Components/Projects";

export default function ProjectsPage() {
  return (
    <div>
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}
