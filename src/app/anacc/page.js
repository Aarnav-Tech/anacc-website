"use client";
import { motion } from "framer-motion";
import TargetCursor from "../../../ani/TargetCursor/TargetCursor";

const departments = [
  {
    name: "Programming",
    desc: "Coding challenges, club projects, and competitions.",
    tasks: "Algorithm design, web dev, debugging tasks.",
  },
  {
    name: "AI",
    desc: "AI & ML research, projects, and learning sessions.",
    tasks: "Machine learning, data analysis, AI experiments.",
  },
  {
    name: "Product",
    desc: "Product design, pitching ideas, prototyping.",
    tasks: "Concept ideation, feature planning, presentations.",
  },
  {
    name: "Creative",
    desc: "Design and media for the club and events.",
    tasks: "Posters, social media content, presentations.",
  },
];

export default function Anacc() {
  return (
    <div className="relative min-h-screen px-6 py-12">
      {/* TargetCursor now wraps everything inside this div */}
      <TargetCursor spinDuration={0} hideDefaultCursor={true} />

      <main>
        <h1 className="text-4xl text-purple-500 mb-8">ANACC Departments</h1>
        <div className="cursor-target grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dpt, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-900 rounded-xl hover:bg-purple-900 transition cursor-none"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl mb-2">{dpt.name}</h2>
              <p className="mb-2">{dpt.desc}</p>
              <p className="text-sm text-gray-300">
                <strong>Tasks:</strong> {dpt.tasks}
              </p>
              <p className="text-sm mt-2 text-gray-400">
                Meetings: Every Tuesday, Zero Period
              </p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
