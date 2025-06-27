export const metadata = {
  title: "CricSelva | Cricket Match Management App by Selva Krishnan",
  description: "CricSelva is a web application built by Selva Krishnan for managing cricket matches, teams, players, and rankings — all in one place.",
  keywords: ["CricSelva", "Cricket App", "Match Management", "Cricket Teams", "Selva Krishnan Projects"],
  openGraph: {
    title: "CricSelva | Cricket Match Manager",
    description: "Explore CricSelva — a React + Supabase app for creating and managing cricket matches, players, and stats.",
    url: "https://www.selvakrishnan.in/cricselva",
    images: [
      {
        url: "/CricSelva_Logo.png",
        width: 800,
        height: 600,
        alt: "CricSelva Logo",
      },
    ],
    type: "website",
  },
};

import CricSelva from "@/app/Components/CricSelva";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";

export default function CricSelvaPage() {
  return (
    <div>
      <Header />
      <CricSelva />
      <Footer />
    </div>
  );
}
