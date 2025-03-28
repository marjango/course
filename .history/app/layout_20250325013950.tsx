import type { Metadata } from "next";
import "./globals.css";
import './fonts.css';


export const metadata: Metadata = {
  title: "сourse",
  description: "it course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
