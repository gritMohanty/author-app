import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Author app",
  description: "The best way to get Hugo award",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex-1 w-full h-full flex-row">
        <div className="layout flex h-screen">
          <nav className="sidebar w-2/12 flex-shrink-0 p-4 border-r-2 border-gray">
            <Sidebar/>
          </nav>
          <main className="content flex-grow px-4 py-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
