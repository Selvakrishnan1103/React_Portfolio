import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Selva Krishnan Portfolio",
  description: "Welcome to my personal portfolio showcasing my skills, projects, and contact details.",
  keywords: ["Selva Krishnan", "Portfolio", "Full Stack Developer", "Next.js", "React", "Projects"],
  openGraph: {
    title: "Selva Krishnan Portfolio",
    description: "Explore the work and projects of Selva Krishnan, full stack developer.",
    url: "https://www.selvakrishnan.in",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
