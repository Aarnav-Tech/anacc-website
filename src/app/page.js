"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsInstagram } from "react-icons/bs";

export default function HomeAbout() {
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen width on mount
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768); // md breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Reusable pop effect for desktop only
  const popHover = isDesktop
    ? { scale: [1, 1.08, 1], transition: { duration: 0.3 } }
    : {};

  return (
    <main className="min-h-screen flex flex-col">
      {/* ===== HERO (Home) ===== */}
      <section className="flex flex-col items-center justify-center flex-grow px-4 md:px-6 text-center min-h-screen">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl text-purple-500 mb-4 font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ANACC
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Amity Noida AI & CS Club
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {/* Button 1 */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={popHover}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: 1.2,
            }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/anacc"
              className="cursor-target block text-center px-6 py-3 w-full sm:w-auto bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 transition"
            >
              See Departments
            </Link>
          </motion.div>

          {/* Button 2 */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={popHover}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: 1.4,
            }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/tech4ce"
              className="cursor-target block text-center px-6 py-3 w-full sm:w-auto border border-purple-500 text-purple-500 font-medium rounded-lg hover:bg-purple-500 hover:text-white transition"
            >
              TECH4CE
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="z-10 max-w-5xl mx-auto px-6 py-16 text-base md:text-lg">
        <h1 className="text-3xl md:text-4xl font-space-mono text-purple-500 mb-6">
          About ANACC
        </h1>

        <p className="mb-4">
          ANACC (Amity Noida AI & CS Club) brings together students interested
          in programming, AI, product development, and creative design. We meet
          every Tuesday in zero period (senior computer lab) to collaborate,
          learn, and work on exciting projects.
        </p>

        <p className="mb-4">
          Our mission is to encourage innovation, build technical skills, and
          provide a platform for students to showcase their ideas through
          competitions like TECH4CE, hackathons, product pitching, and more.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-space-mono text-purple-500 mb-2">
            Connect with us
          </h2>
          <p className="mb-2">
            Follow & DM us on Instagram for queries and updates:
          </p>
          <div className="flex items-center gap-2 text-purple-500 font-medium">
            <a
              href="https://www.instagram.com/amity_anacc"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target"
            >
              <BsInstagram className="cursor-target w-6 h-6 inline" /> @amity_anacc
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
