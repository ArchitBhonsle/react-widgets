import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "React Widgets",
  description: "Just a collection of react widgets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className={`${playfair.className} p-5 bg-blue-700`}>
          <div className="text-2xl max-w-2xl mx-auto text-white">
            react widgets
          </div>
        </nav>
        <main className="p-5">
          <div className="max-w-2xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
