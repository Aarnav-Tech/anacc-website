"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
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
    <main className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6">
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-7xl text-purple-500 mb-4 font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ANACC
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg md:text-2xl mb-8 text-center"
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
    </main>
  );
}
