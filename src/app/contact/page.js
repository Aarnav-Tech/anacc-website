"use client";
import { BsInstagram } from "react-icons/bs";
import TargetCursor from "../../../ani/TargetCursor/TargetCursor";

export default function Contact() {
  return (
    <div>
      <TargetCursor
        spinDuration={0}
        hideDefaultCursor={true}
      />

    <div className="max-w-5xl mx-auto px-6 py-12 text-base md:text-lg">
      <h1 className="text-3xl md:text-4xl font-space-mono text-purple-500 mb-6">
        Contact Us
      </h1>

      <p className="mb-4">
        For any queries regarding ANACC or TECH4CE events, feel free to reach out directly via Instagram:
      </p>

      <div className="cursor-target mt-4">
        <a
          href="https://www.instagram.com/amity_anacc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-purple-500 hover:text-white transition transform hover:scale-99"
        >
          <BsInstagram className="cursor-target w-6 h-6" /> @amity_anacc
        </a>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-space-mono text-purple-500 mb-2">Students in Charge</h2>
        <ul className="space-y-1">
          <li className="cursor-target">Vinayak Gupta - +91 99109 20913</li>
          <li className="cursor-target">Panini Rao - +91 98915 56255</li>
          <li className="cursor-target">Tejaswa Pratap - +91 75992 79276</li>
          <li className="cursor-target">Reeva Sachdev - +91 81307 32000</li>
          <li className="cursor-target">Shreya Mathur - +91 88513 62992</li>
          <li className="cursor-target">Momin Faisal - +91 88269 72617</li>
          <li className="cursor-target">Aarnav Lokesh - +91 76769 46930</li>
        </ul>

        <h2 className="text-2xl font-space-mono text-purple-500 mt-6 mb-2">Teachers in Charge</h2>
        <ul className="space-y-1">
          <li className="cursor-target">Neha Sinha Ma’am - +91 95822 62161</li>
          <li className="cursor-target">Seema Sabherwal Ma’am - +91 99713 57464</li>
        </ul>
      </div>
    </div>
    </div>
  );
}
