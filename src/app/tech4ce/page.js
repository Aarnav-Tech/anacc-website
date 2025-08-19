"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // ✅ dropdown icon
import TargetCursor from "../../../ani/TargetCursor/TargetCursor";

const registrationLink = "/tech4ce";

const AnimatedButton = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-target cursor-none inline-block px-6 py-3 md:px-8 md:py-4 bg-purple-500 text-black font-semibold rounded-lg text-base md:text-lg"
    whileHover={{ scale: 1.05, backgroundColor: "#9f7aea" }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {children}
  </motion.a>
);

const AnimatedCard = ({ children }) => (
  <motion.div
    className="bg-gray-900/80 p-6 md:p-8 rounded-lg backdrop-blur-sm"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
  >
    {children}
  </motion.div>
);

export default function Tech4cePage() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const events = [
    {
      title: "Hackathon",
      classes: "9th-12th",
      type: "Individual Participation",
      venue: "3rd Floor CS Lab",
      software: "HackerRank",
      whatsappLink:
        "https://chat.whatsapp.com/ETosnMhjS2fGnSc0QZHdje?mode=ems_copy_t",
      guidelines: [
        "Each participant gets 40 minutes to complete 3 coding tasks on HackerRank.",
        "Each task has points based on difficulty.",
        "Ties resolved by most efficient and innovative code.",
      ],
      criteria: [
        "Correctness & output accuracy",
        "Efficiency & innovative logic",
        "Code readability & structure",
      ],
      winners: [
        { name: "Maanvik K.     | X-L 🥇", position: "1st" },
        { name: "Adivesh Mishra | XI-D 🥈", position: "2nd" },
        { name: "Muskaan Mittal | XI-K 🥉", position: "3rd" },
      ],
    },
    {
      title: "Product Pitching",
      classes: "9th-12th",
      type: "Individual Participation",
      venue: "Audi 2",
      software: "Any",
      whatsappLink:
        "https://chat.whatsapp.com/CwWRW1zmNsuEfBE8gbPQ46?mode=ems_copy_t",
      guidelines: [
        "Create a futuristic product/service for 2035 integrating technology (AI, IoT, robotics, biotech, space tech, etc.)",
        "The product should solve a problem or improve daily life",
        "5 mins presentation + 2-3 mins Q&A",
      ],
      criteria: [
        "Originality",
        "Creativity",
        "Relevance & feasibility",
        "Presentation skills",
      ],
      winners: [
        { name: "Janya Mongia | XI-G 🥇", position: "1st" },
        { name: "Aman Gupta   | X-I 🥈", position: "2nd" },
        { name: "Tiya Sakhuja | XII-H 🥉", position: "3rd" },
      ],
    },
    {
      title: "AI Theme Generation",
      classes: "9th-12th",
      type: "Individual Participation",
      venue: "Middle Wing Computer Lab",
      software: "Any",
      whatsappLink:
        "https://chat.whatsapp.com/HwBzRdANI8TAHpnQcTpCMo?mode=ems_copy_t",
      guidelines: [
        "Participants get 20 minutes to create art using AI tools",
        "Theme provided on the spot",
        "Must use the declared AI tool only",
      ],
      criteria: ["Originality", "Creativity", "Relevance & composition"],
      winners: [
        { name: "Maulik Mathur | IX-I 🥇", position: "1st" },
        { name: "Mayank Raj Singh | IX-D 🥈", position: "2nd" },
        { name: "Avi Saini | XI-D 🥉", position: "3rd" },
      ],
    },
    {
      title: "Photography",
      classes: "9th-12th",
      type: "Individual Participation",
      venue: "Audi 2",
      software: "Any",
      whatsappLink:
        "https://chat.whatsapp.com/Hj3ggYGLAYALaCKwD0ulXU?mode=ems_copy_t",
      guidelines: [
        "Click 2 photos showing clear contrast between subjects, moods, or elements",
        "Only basic editing allowed (exposure, contrast, color, cropping)",
        "Any camera allowed; tripods & accessories not permitted",
      ],
      criteria: [
        "Creativity & originality",
        "Technical quality (focus, exposure, framing)",
        "Effective editing",
        "Overall impact & storytelling",
      ],
      winners: [
        {
          name: "Darsh Kapoor",
          position: "1st 🥇",
          photo: "/winners/1.jpg",
        },
        {
          name: "Aarit Arora",
          position: "2nd 🥈",
          photo: ["/winners/2.jpg", "/winners/2b.jpg"],
        },
        {
          name: "Mahakk Sharma",
          position: "3rd 🥉",
          photo: "/winners/3.jpg",
        },
        {
          name: "Shaurya Tyagi ⭐",
          position: "Special Mention",
          photo: "/winners/spl.jpg",
        },
      ],
    },
  ];

  const positionColors = {
    "1st": "text-yellow-400",
    "2nd": "text-gray-300",
    "3rd": "text-orange-400",
    "Special Mention": "text-purple-400",
  };

  return (
    <div className="z-10">
      <div className="relative min-h-screen text-white font-space-grotesk p-6 md:p-12 text-base md:text-lg">
        {/* Header */}
        <header className="text-center mb-12">
          <motion.h1
            className="text-5xl md:text-6xl mb-4 font-extrabold underline"
            style={{
              textShadow: "0 0 8px #fff, 0 0 16px #fff, 0 0 24px #fff",
            }}
            animate={{
              textShadow: [
                "0 0 8px #fff, 0 0 16px #fff, 0 0 24px #fff",
                "0 0 12px #fff, 0 0 24px #fff, 0 0 36px #fff",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            TECH4CE 2025
          </motion.h1>

          <p className="text-lg md:text-xl">
            Tech Competition for the Next Generation of Innovators
          </p>
          <p className="text-sm md:text-base mt-2 text-gray-300">
            AN INITIATIVE BY AMITY NOIDA AI & CS CLUB
          </p>

          <div className="mt-6 cursor-not-allowed">
            <AnimatedButton>
              Registration Closed
            </AnimatedButton>
          </div>
        </header>

        {/* Events */}
        <section className="space-y-10">
          {events.map((event) => (
            <AnimatedCard key={event.title}>
              <h3 className="text-2xl md:text-3xl font-space-mono text-purple-500 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-300 mb-2">
                Classes: {event.classes} | {event.type} | Venue: {event.venue} |
                Software: {event.software}
              </p>

              {/* Guidelines */}
              <p className="mt-2 text-gray-300 font-semibold">Guidelines:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {event.guidelines.map((g, i) => (
                  <li key={i}>{g}</li>
                ))}
              </ul>

              {/* Criteria */}
              <p className="mt-2 text-gray-300 font-semibold">
                Judgement Criteria:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {event.criteria.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              {/* Winners + WhatsApp Buttons */}
              {event.winners && (
                <div className="mt-4 flex justify-center gap-3 flex-wrap">
                  {/* Show Winners Button */}
                  <motion.button
                    onClick={() => toggleDropdown(event.title)}
                    className="cursor-target cursor-none flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      scale:
                        openDropdown === event.title ? [1, 1.05, 1] : 1,
                      boxShadow:
                        openDropdown === event.title
                          ? "0 0 12px rgba(168,85,247,0.8)"
                          : "none",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {openDropdown === event.title ? "Hide Winners" : "See Winners"}
                    <motion.span
                      animate={{ rotate: openDropdown === event.title ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </motion.button>

                  {/* WhatsApp Button */}
                  {event.whatsappLink && (
                    <AnimatedButton href={event.whatsappLink}>
                      Join WhatsApp Group
                    </AnimatedButton>
                  )}
                </div>
              )}

              {/* Dropdown Winners */}
              <AnimatePresence>
                {openDropdown === event.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 space-y-4"
                  >
                    {event.winners.map((w, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-r from-gray-900 to-gray-800 border border-purple-600/40 p-4 rounded-lg shadow-md cursor-target"
                      >
                        <p
                          className={`font-bold text-lg ${
                            positionColors[w.position] || "text-purple-300"
                          }`}
                        >
                          {w.position} - {w.name}
                        </p>
                        {w.classSection && (
                          <p className="text-sm text-gray-400 italic">
                            Class {w.classSection}
                          </p>
                        )}
                        {/* Photo(s) */}
                        {Array.isArray(w.photo) ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                            {w.photo.map((p, i) => (
                              <div
                                key={i}
                                className="flex justify-center items-center bg-black rounded-2xl p-2 w-auto max-h-auto"
                              >
                                <img
                                  src={p}
                                  alt={`${w.name} photo ${i + 1}`}
                                  className="rounded-2xl object-contain w-auto max-h-auto"
                                />
                              </div>
                            ))}
                          </div>
                        ) : w.photo ? (
                          <div className="mt-3 flex justify-center">
                            <div className="bg-black rounded-2xl flex justify-center items-center p-2 w-auto max-h-auto">
                              <img
                                src={w.photo}
                                alt={`${w.name}'s winning photo`}
                                className="rounded-2xl object-contain max-h-auto w-auto"
                              />
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimatedCard>
          ))}
        </section>
      </div>
    </div>
  );
}
