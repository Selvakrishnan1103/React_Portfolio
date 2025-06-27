
export const metadata = {
  title: "About | Selva Krishnan",
  description: "Learn more about Selva Krishnan, a passionate full-stack developer who builds modern web applications using React, Next.js, Flask, and more.",
  keywords: ["Selva Krishnan", "About", "Portfolio", "Full Stack Developer", "Next.js Developer"],
  openGraph: {
    title: "About | Selva Krishnan",
    description: "Explore the background, skills, and journey of Selva Krishnan as a developer.",
    url: "https://www.selvakrishnan.in/about",
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

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import About from "../../Components/About";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <About />
      <Footer />
    </div>
  );
}
