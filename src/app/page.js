"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import TargetCursor from "../../ani/TargetCursor/TargetCursor";

export default function Home() {
  return (
    <div className="z-10">
      <TargetCursor 
        spinDuration={0}
        hideDefaultCursor={true}
      />
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-5xl md:text-7xl text-purple-500 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ANACC
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Amity Noida AI & CS Club
      </motion.p>
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="/anacc"
          className="cursor-target cursor-none px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition"
        >
          See Departments
        </Link>
        <Link
          href="/tech4ce"
          className="cursor-target cursor-none px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-black transition"
        >
          TECH4CE
        </Link>
      </motion.div>
    </main>
    </div>
  );
}
