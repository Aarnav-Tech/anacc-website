'use client';

import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { FaInstagram, FaTelegram } from 'react-icons/fa';
import TargetCursor from '../../../ani/TargetCursor/TargetCursor';

const profiles = [
  { name: "Vinayak Gupta", title: "Head of Department, Creative Design", handle: "vinayakgupta3110", status: "Online", avatarUrl: "/images/Vinayak.png", instagramUrl: "https://instagram.com/vinayakgupta3110" },
  { name: "Tejaswa Pratap", title: "Head of Department, Programming", handle: "tejaswapratap31", status: "Online", avatarUrl: "/images/Tejaswa.png", instagramUrl: "https://instagram.com/tejaswapratap31" },
  { name: "Panini Rao", title: "Head of Department, Product Pitching", handle: "_panini.2302_", status: "Online", avatarUrl: "/images/Panini.png", instagramUrl: "https://instagram.com/_panini.2302_" },
  { name: "Reeva Sachdev", title: "Head of Department, AI & ML", handle: "reeva1.7", status: "Online", avatarUrl: "/images/Reeva.jpg", instagramUrl: "https://instagram.com/reeva1.7" },
  { name: "Shreya Mathur", title: "Head of Department, Marketing", handle: "shreyaaa_mathur", status: "Online", avatarUrl: "/images/Shreya.jpg", instagramUrl: "https://instagram.com/shreyaaa_mathur" },
  { name: "Aarnav Lokesh", title: "Web Developer, UI/UX Designer", handle: "jumprfit", status: "Online", avatarUrl: "/images/Aarnav.jpg", telegramUrl: "https://t.me/jumprfit" },
];

function ProfileCard({ profile }) {
  const [glintPos, setGlintPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const isTelegramUser = profile.handle === "jumprfit";
  const IconComponent = isTelegramUser ? FaTelegram : FaInstagram;
  const contactUrl = isTelegramUser ? profile.telegramUrl : profile.instagramUrl;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlintPos({ x: 100 - x, y: 100 - y }); // inverse movement
  };

  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.3}
      glareColor="rgba(255,255,255,0.6)"
      glarePosition="all"
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.05}
      transitionSpeed={400}
      className="max-w-sm mx-auto rounded-lg cursor-pointer min-h-[450px]"
      tiltReverse={false}
      perspective={1000}
    >
      <div
        className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-md shadow-lg dark:shadow-gray-600 rounded-lg overflow-hidden transition-shadow duration-300 cursor-target cursor-none flex flex-col h-full relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Glint animation overlay */}
        {hovered && (
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-lg"
            style={{
              background: `radial-gradient(circle at ${glintPos.x}% ${glintPos.y}%, rgba(255,255,255,0.35), transparent 60%)`,
              transition: "background-position 0.1s ease",
            }}
          />
        )}

        <img
          className="w-full aspect-[1/1] object-cover flex-shrink-0"
          src={profile.avatarUrl}
          alt={profile.name}
        />

        <div className="py-4 px-6 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              {profile.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">{profile.title}</p>
            <p className={`mt-1 font-medium ${profile.status === "Online" ? "text-green-500" : "text-red-500"}`}>
              {profile.status}
            </p>
            <p className="mt-2 text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-2">
              <IconComponent className="inline text-lg" />
              {profile.handle}
            </p>
          </div>

          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target cursor-none mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 self-start inline-block text-center"
            onClick={(e) => e.stopPropagation()}
          >
            Contact Me
          </a>
        </div>
      </div>
    </Tilt>
  );
}

export default function ProfilePage() {
  return (
    <>
      <h1 className="py-16 text-6xl text-purple-500 font-extrabold text-center mb-8">
        Our Team
      </h1>

      <section className="w-full flex justify-center px-5 pb-10">
        <div className="grid grid-cols-3 gap-20 max-w-6xl w-full">
          {profiles.map((profile, i) => (
            <ProfileCard key={i} profile={profile} />
          ))}
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 60px !important;
          }
        }
        @media (max-width: 600px) {
          .grid {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
            gap: 30px !important;
            max-width: 400px !important;
            margin: 0 auto !important;
            padding: 0 20px !important;
          }
        }
      `}</style>
    </>
  );
}
