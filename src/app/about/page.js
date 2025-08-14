"use client";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-base md:text-lg">
      <h1 className="text-3xl md:text-4xl font-space-mono text-purple-500 mb-6">
        About ANACC
      </h1>

      <p className="mb-4">
        ANACC (Amity Noida AI & CS Club) brings together students interested in programming, AI, product development, and creative design. We meet every Tuesday in zero period to collaborate, learn, and work on exciting projects.
      </p>

      <p className="mb-4">
        Our mission is to encourage innovation, build technical skills, and provide a platform for students to showcase their ideas through competitions like TECH4CE, hackathons, product pitching, and more.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-space-mono text-purple-500 mb-2">Connect with us</h2>
        <p className="mb-2">Follow & DM us on Instagram for queries and updates:</p>
        <a
          href="https://www.instagram.com/amity_anacc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-purple-500 hover:text-white transition transform hover:scale-99"
        >
          <BsInstagram className="w-6 h-6" /> @amity_anacc
        </a>
      </div>
    </div>
  );
}
