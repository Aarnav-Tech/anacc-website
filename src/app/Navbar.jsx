"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Departments", href: "/anacc" },
    { name: "TECH4CE", href: "/tech4ce" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
        setMenuOpen(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <AnimatePresence>
        {showNavbar && (
          <motion.header
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            exit={{ y: -150 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between w-[90%] max-w-6xl p-3 md:p-5 rounded-2xl backdrop-blur-md bg-white/10 border border-gray-700 shadow-xl"
          >
            <Link href="/">
              <motion.img
                src="/ANACCLOGO.png"
                alt="ANACC Logo"
                className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  filter:
                    "drop-shadow(0 0 8px #9f7aea) drop-shadow(0 0 4px #9f7aea)",
                }}
              />
            </Link>

            <nav className="hidden md:flex gap-5 flex-1 justify-end relative text-sm font-medium">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <div key={link.name} className="relative">
                    <Link
                      href={link.href}
                      className={`hover:text-purple-500 transition ${
                        isActive ? "text-white font-bold" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 rounded shadow-[0_0_10px_#9f7aea]"
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="md:hidden ml-4">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col gap-1 w-6 h-6 justify-center items-center"
              >
                <span
                  className={`block h-0.5 w-full bg-white transition-transform ${
                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-white transition-opacity ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-white transition-transform ${
                    menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="md:hidden fixed top-[90px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl flex flex-col gap-3 p-5 rounded-2xl backdrop-blur-md bg-white/10 text-white shadow-xl z-50 text-sm font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
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
    </>
  );
}
