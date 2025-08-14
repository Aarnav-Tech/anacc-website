"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Departments", href: "/anacc" },
    { name: "TECH4CE", href: "/tech4ce" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname(); // current route

  return (
    <nav className="flex gap-6 justify-center md:justify-start p-6 border-b border-gray-800 relative">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <div key={link.name} className="relative">
            <Link
              href={link.href}
              className="text-white hover:text-purple-500 transition font-space-grotesk"
            >
              {link.name}
            </Link>

            {/* Animated underline */}
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
  );
}
