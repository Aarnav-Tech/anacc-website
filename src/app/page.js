"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl text-purple-500 mb-4"
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

        {/* Buttons with popup + bounce on hover */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {/* Button 1 */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.15, y: -10 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              scale: {
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 1.2
              },
              y: {
                type: "spring",
                stiffness: 400,
                damping: 10,
                mass: 0.5
              }
            }}
          >
            <Link
              href="/anacc"
              className="cursor-target cursor-none px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition"
            >
              See Departments
            </Link>
          </motion.div>

          {/* Button 2 */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.15, y: -10 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              scale: {
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 1.4
              },
              y: {
                type: "spring",
                stiffness: 400,
                damping: 10,
                mass: 0.5
              }
            }}
          >
            <Link
              href="/tech4ce"
              className="cursor-target cursor-none px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-black transition"
            >
              TECH4CE
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
