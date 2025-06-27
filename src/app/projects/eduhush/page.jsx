export const metadata = {
  title: "EduHush | AI-Based Study Platform by Selva Krishnan",
  description: "EduHush is an AI-powered study platform developed by Selva Krishnan. It filters educational videos using machine learning and helps students learn smarter.",
  keywords: ["EduHush", "AI Study Platform", "Educational Videos", "Selva Krishnan Projects", "React", "Next.js", "Machine Learning"],
  openGraph: {
    title: "EduHush | AI-Powered Learning Platform",
    description: "Explore EduHush, a smart platform that uses AI to classify and recommend study-related video content for learners.",
    url: "https://www.selvakrishnan.in/eduhush",
    images: [
      {
        url: "/Eduhush_Logo.png",
        width: 800,
        height: 600,
        alt: "EduHush Logo",
      },
    ],
    type: "website",
  },
};

import EduHushProject from "@/app/Components/Eduhush";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";

export default function EduHushPage() {
  return (
    <div>
      <Header />
      <EduHushProject />
      <Footer />
    </div>
  );
}
