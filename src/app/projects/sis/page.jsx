
export const metadata = {
  title: "Student Information System | Selva Krishnan",
  description: "A web-based Student Information System built by Selva Krishnan to manage student records, reports, and academic data efficiently.",
  keywords: [
    "Student Information System",
    "SIS",
    "Student Records App",
    "Selva Krishnan Projects",
    "React",
    "Flask",
    "Full Stack Development"
  ],
  openGraph: {
    title: "Student Information System | Built by Selva Krishnan",
    description: "Explore the Student Information System (SIS) developed by Selva Krishnan, designed to streamline academic data and reporting.",
    url: "https://www.selvakrishnan.in/sis",
    images: [
      {
        url: "/SIS_Logo.png",
        width: 800,
        height: 600,
        alt: "Student Information System Logo",
      },
    ],
    type: "website",
  },
};

import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import SISProject from "@/app/Components/SIS";

export default function SISPage() {
  return (
    <div>
      <Header />
      <SISProject />
      <Footer />
    </div>
  );
}
