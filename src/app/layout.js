import Navbar from "./Navbar";
import "@/styles/globals.css";
import { BsInstagram } from "react-icons/bs";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ANACC | Amity Noida AI & CS Club</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-space-grotesk text-white min-h-screen relative">
        {/* Fullscreen Background */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        ></div>

        {/* Semi-transparent overlay */}
        <div className="fixed inset-0 -z-5 bg-black/50"></div>

        {/* Client-side Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="relative z-10 pt-32">{children}</main>

        {/* Footer */}
        <footer className="mt-12 w-full p-6 backdrop-blur-md bg-white/10 border-t border-gray-700 shadow-xl relative z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {/* About */}
            <div>
              <h2 className="text-purple-500 text-xl mb-2 font-space-mono font-semibold">
                ANACC
              </h2>
              <p className="font-medium">
                Students meet every Tuesday in senior computer lab for discussions, workshops, and competitions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-purple-500 text-xl mb-2 font-space-mono font-semibold">
                Quick Links
              </h2>
              <ul className="space-y-1 font-medium">
                <li><NavbarLink href="/">Home</NavbarLink></li>
                <li><NavbarLink href="/anacc">Departments</NavbarLink></li>
                <li><NavbarLink href="/tech4ce">TECH4CE</NavbarLink></li>
                <li><NavbarLink href="/about">About</NavbarLink></li>
                <li><NavbarLink href="/contact">Contact</NavbarLink></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-purple-500 text-xl mb-2 font-space-mono font-semibold">
                Contact
              </h2>
              <p className="mb-2 font-medium">Follow & DM us on Instagram for queries:</p>
              <div className="flex items-center gap-2 text-purple-500 font-medium">
                <a href="https://www.instagram.com/amity_anacc" target="_blank" rel="noopener noreferrer">
                  <BsInstagram className="w-6 h-6 inline" /> @amity_anacc
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-6 text-sm md:text-base font-medium">
            &copy; {new Date().getFullYear()} ANACC - Amity Noida AI & CS Club. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}

// Small helper to fix the <a> ESLint issue
import Link from "next/link";
function NavbarLink({ href, children }) {
  return (
    <Link href={href} className="hover:text-purple-500 transition">
      {children}
    </Link>
  );
}
