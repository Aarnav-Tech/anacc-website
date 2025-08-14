"use client";
import "@/styles/globals.css";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { BsInstagram } from "react-icons/bs";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Departments", href: "/anacc" },
    { name: "TECH4CE", href: "/tech4ce" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="bg-black text-white font-space-grotesk flex flex-col min-h-screen text-base md:text-lg">
        {/* Navbar */}
        <header className="p-6 flex justify-between items-center border-b border-gray-800">
          <h1 className="text-2xl font-space-mono text-purple-500">ANACC</h1>

          {/* Desktop Links with animated underline */}
          <nav className="hidden md:flex gap-6 relative">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.name} className="relative">
                  <Link
                    href={link.href}
                    className="hover:text-purple-500 transition font-space-grotesk"
                  >
                    {link.name}
                  </Link>

                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 rounded"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1 w-6 h-6 justify-center items-center"
            >
              <span
                className={`block h-0.5 w-full bg-white transition-transform ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-opacity ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-transform ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </header>

        {/* Mobile Menu with animations */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="md:hidden flex flex-col bg-gray-900 text-white p-6 gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="hover:text-purple-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 mt-12 p-8 text-base md:text-lg">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h2 className="text-purple-500 text-xl mb-2 font-space-mono">ANACC</h2>
              <p>
                Students meet every Tuesday for discussions, workshops, and competitions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-purple-500 text-xl mb-2 font-space-mono">Quick Links</h2>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-purple-500 transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-purple-500 text-xl mb-2 font-space-mono">Contact</h2>
              <p className="mb-2">Follow & DM us on Instagram for queries:</p>
              <a
                href="https://www.instagram.com/amity_anacc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-500 hover:text-white transition"
              >
                <BsInstagram className="w-6 h-6" /> @amity_anacc
              </a>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm md:text-base">
            &copy; {new Date().getFullYear()} ANACC - Amity Noida AI & CS Club. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
