import "./globals.css";

export const metadata = {
  title: "Sakuni Portfolio | Full Stack Developer",
  description: "Full Stack Developer Portfolio showcasing MERN projects and skills",
  keywords: "Full Stack Developer, MERN, React, Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] text-white">
        {children}
      </body>
    </html>
  );
}