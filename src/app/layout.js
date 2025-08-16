'use client';
import Navbar from "./Navbar";
import "@/styles/globals.css";
import { BsInstagram } from "react-icons/bs";
import TargetCursor from "../../ani/TargetCursor/TargetCursor";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function RootLayout({ children }) {
  const [enableCursor, setEnableCursor] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isLargeScreen = window.innerWidth >= 1024; // Tailwind 'lg' breakpoint
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      // Enable cursor if large screen AND not touch device
      setEnableCursor(isLargeScreen && !isTouchDevice);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>ANACC | Amity Noida AI & CS Club</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="font-space-grotesk text-white min-h-screen relative">
        {/* Fullscreen Background */}
        <div>
          {/* Render TargetCursor only if enabled */}
          {enableCursor && <TargetCursor spinDuration={3} hideDefaultCursor />}

          {/* Background video with fallback image */}
          <video
            className="fixed inset-0 -z-10 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/gb.png" // fallback image while video loads
          >
            <source src="/bg.mp4" type="video/mp4" />
            {/* Fallback image if video isn't supported */}
            <img
              src="/bg.jpg"
              alt="Background"
              className="fixed inset-0 -z-10 w-full h-full object-cover"
            />
          </video>

          {/* Semi-transparent overlay */}
          <div className="fixed inset-0 -z-5 bg-black/50"></div>

          {/* Client-side Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="relative z-10 pt-20 md:pt-20">{children}</main>

          {/* Footer */}
          <footer className="mt-12 w-full p-6 backdrop-blur-md bg-white/10 border-t border-gray-700 shadow-xl relative z-10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
              {/* About */}
              <div>
                <h2 className=" text-purple-500 text-xl mb-2 font-space-mono font-semibold">
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
                <ul className="font-medium cursor-none">
                  <li className="cursor-target"><NavbarLink href="/">Home</NavbarLink></li>
                  <li className="cursor-target"><NavbarLink href="/anacc">Departments</NavbarLink></li>
                  <li className="cursor-target"><NavbarLink href="/tech4ce">TECH4CE</NavbarLink></li>
                  <li className="cursor-target"><NavbarLink href="/about">About</NavbarLink></li>
                  <li className="cursor-target"><NavbarLink href="/contact">Contact</NavbarLink></li>
                  <li className="cursor-target"><NavbarLink href="/team">Our Team</NavbarLink></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-purple-500 text-xl mb-2 font-space-mono font-semibold">
                  Contact
                </h2>
                <p className="mb-2 font-medium">Follow & DM us on Instagram for queries:</p>
                <div className="cursor-target flex items-center gap-2 text-purple-500 font-medium">
                  <a
                    href="https://www.instagram.com/amity_anacc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsInstagram className="cursor-target w-6 h-6 inline" /> @amity_anacc
                  </a>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-6 text-sm md:text-base font-medium">
              &copy; {new Date().getFullYear()} ANACC - Amity Noida AI & CS Club. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}

// Small helper link component
function NavbarLink({ href, children }) {
  return (
    <Link href={href} className="hover:text-purple-500 transition">
      {children}
    </Link>
  );
}
