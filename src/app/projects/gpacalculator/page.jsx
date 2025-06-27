
export const metadata = {
  title: "GPA Calculator | Selva Krishnan",
  description: "A simple and efficient GPA Calculator developed by Selva Krishnan to help students accurately calculate their academic GPA.",
  keywords: ["GPA Calculator", "CGPA Tool", "Academic GPA", "Selva Krishnan Projects", "Student Tools", "React", "Next.js"],
  openGraph: {
    title: "GPA Calculator | Built by Selva Krishnan",
    description: "Calculate your GPA easily using this academic tool designed by Selva Krishnan. Fast, reliable, and user-friendly.",
    url: "https://www.selvakrishnan.in/gpacalculator",
    images: [
      {
        url: "/GPA_Logo.webp",
        width: 800,
        height: 600,
        alt: "GPA Calculator Logo",
      },
    ],
    type: "website",
  },
};

import Footer from "@/app/Components/Footer";
import GPACalculatorProject from "@/app/Components/GPACalculator";
import Header from "@/app/Components/Header";

export default function GPACalculatorPage() {
  return (
    <div>
      <Header />
      <GPACalculatorProject />
      <Footer />
    </div>
  );
}
