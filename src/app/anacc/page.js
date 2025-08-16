"use client";
import { motion } from "framer-motion";

const departments = [
  {
    name: "Programming",
    desc: "Coding challenges, club projects, and competitions.",
    tasks: "Algorithm design, web dev, debugging tasks.",
    img: "/images/programming.jpg",
  },
  {
    name: "AI",
    desc: "AI & ML research, projects, and learning sessions.",
    tasks: "Machine learning, data analysis, AI experiments.",
    img: "/images/ai.jpg",
  },
  {
    name: "Product",
    desc: "Product design, pitching ideas, prototyping.",
    tasks: "Concept ideation, feature planning, presentations.",
    img: "/images/product.jpg",
  },
  {
    name: "Creative",
    desc: "Design, media, and photography for the club and events.",
    tasks: "Posters, social media content, presentations, photography, photo editing.",
    img: "/images/creative.jpg",
  },

];

export default function Anacc() {
  return (
    <div className="relative min-h-screen px-6 py-12">
      <main>
        <h1 className="text-4xl text-purple-500 mb-8">ANACC Departments</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dpt, i) => (
            <motion.div
              key={i}
              className="cursor-target cursor-none rounded-xl overflow-hidden relative group h-72"
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundImage: `url(${dpt.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              {/* Text content */}
              <div className="relative p-6 flex flex-col justify-end h-full text-white">
                <h2 className="text-2xl mb-2">{dpt.name}</h2>
                <p className="mb-2">{dpt.desc}</p>
                <p className="text-sm text-gray-300">
                  <strong>Tasks:</strong> {dpt.tasks}
                </p>
                <p className="text-sm mt-2 text-gray-400">
                  Meetings: Every Tuesday, Zero Period
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
