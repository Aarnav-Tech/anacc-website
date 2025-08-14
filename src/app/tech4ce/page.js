"use client";

import { motion } from "framer-motion";

const registrationLink = "https://forms.gle/Tzk325q6tErKNwuZA";

const AnimatedButton = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-8 py-4 bg-purple-500 text-black font-semibold rounded-lg text-lg md:text-xl"
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
  const events = [
    {
      title: "Hackathon",
      classes: "9th-12th",
      type: "Individual Participation",
      venue: "3rd Floor CS Lab",
      software: "HackerRank",
      guidelines: [
        "Each participant gets 40 minutes to complete 3 coding tasks on HackerRank.",
        "Each task has points based on difficulty.",
        "Ties resolved by most efficient and innovative code."
      ],
      criteria: [
        "Correctness & output accuracy",
        "Efficiency & innovative logic",
        "Code readability & structure"
      ]
    },
    {
      title: "Product Pitching",
      classes: "9th-12th",
      type: "Individual Participation",
      venue: "Audi 2",
      software: "Any",
      guidelines: [
        "Create a futuristic product/service for 2035 integrating technology (AI, IoT, robotics, biotech, space tech, etc.)",
        "The product should solve a problem or improve daily life",
        "5 mins presentation + 2-3 mins Q&A"
      ],
      criteria: [
        "Originality",
        "Creativity",
        "Relevance & feasibility",
        "Presentation skills"
      ]
    },
    {
      title: "AI Theme Generation",
      classes: "9th-12th",
      type: "Individual Participation",
      venue: "Middle Wing Computer Lab",
      software: "Any",
      guidelines: [
        "Participants get 20 minutes to create art using AI tools",
        "Theme provided on the spot",
        "Must use the declared AI tool only"
      ],
      criteria: ["Originality", "Creativity", "Relevance & composition"]
    },
    {
      title: "Photography",
      classes: "9th-12th",
      type: "Individual Participation",
      venue: "Audi 2",
      software: "Any",
      guidelines: [
        "Click 2 photos showing clear contrast between subjects, moods, or elements",
        "Only basic editing allowed (exposure, contrast, color, cropping)",
        "Any camera allowed; tripods & accessories not permitted"
      ],
      criteria: [
        "Creativity & originality",
        "Technical quality (focus, exposure, framing)",
        "Effective editing",
        "Overall impact & storytelling"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen text-white font-space-grotesk p-8 md:p-16 text-lg md:text-xl">
      {/* Overlay for readability */}
      <div className="" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center mb-12">
          <motion.h1
            className="text-5xl md:text-6xl mb-4 font-extrabold underline"
            style={{
              textShadow: "0 0 8px #ffffff, 0 0 16px #ffffff, 0 0 24px #ffffff"
            }}
            animate={{
              textShadow: [
                "0 0 8px #ffffff, 0 0 16px #ffffff, 0 0 24px #ffffff",
                "0 0 12px #ffffff, 0 0 24px #ffffff, 0 0 36px #ffffff"
              ]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            TECH4CE 2025
          </motion.h1>

          <p className="text-xl md:text-2xl">
            Tech Competition for the Next Generation of Innovators
          </p>
          <p className="text-base md:text-lg mt-2 text-gray-300">
            AN INITIATIVE BY AMITY NOIDA AI & CS CLUB
          </p>

          <div className="mt-6">
            <AnimatedButton href={registrationLink}>Register Now</AnimatedButton>
          </div>
        </header>

        {/* General Instructions */}
        <section className="mb-12">
          <h2 className="text-3xl font-space-mono text-purple-500 mb-4">General Instructions</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Online registration closes at 11:59 PM on 17th August 2025. No entries will be accepted beyond this deadline.</li>
            <li>Registration to be done at TECH4CE 2025-26.</li>
            <li>Report to respective venues by 7:50 AM sharp on the day of the event. Late entries may not be entertained.</li>
            <li>The school is not responsible for the security or safety of any equipment or personal belongings brought by participants.</li>
            <li>The decision of the judges will be final and binding.</li>
            <li>All participants are requested to join the official WhatsApp group via the TECH4CE link for updates.</li>
          </ul>
        </section>

        {/* Events */}
        <section className="space-y-12">
          {events.map((event) => (
            <AnimatedCard key={event.title}>
              <h3 className="text-2xl md:text-3xl font-space-mono text-purple-500 mb-2">{event.title}</h3>
              <p className="text-gray-300 mb-2">
                Classes: {event.classes} | {event.type} | Venue: {event.venue} | Software: {event.software}
              </p>

              <p className="mt-2 text-gray-300 font-semibold">Guidelines:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {event.guidelines.map((g, i) => <li key={i}>{g}</li>)}
              </ul>

              <p className="mt-2 text-gray-300 font-semibold">Judgement Criteria:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {event.criteria.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </AnimatedCard>
          ))}
        </section>

        {/* Bottom Register Button */}
        <div className="text-center mt-12">
          <AnimatedButton href={registrationLink}>Register Now</AnimatedButton>
        </div>
      </div>
    </div>
  );
}
