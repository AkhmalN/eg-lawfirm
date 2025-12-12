"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/section-header";

export default function EngagementSection() {
  return (
    <section
      className="relative w-full min-h-[400px] flex items-center justify-center py-24 px-4 sm:px-8"
      style={{
        backgroundImage: `url(/images/engagement.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* LEFT: Header & Text */}
        <div className="md:w-1/2 flex flex-col items-start">
          <SectionHeader
            title="ENGAGE TO EXCEED"
            titleColor="#fff"
            bgColor="#3DB54A"
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-8 md:mb-10 leading-tight max-w-2xl">
            Join us and enhance your legal experience.
          </h2>
        </div>
        {/* RIGHT: Form */}
        <form className="md:w-1/2 w-full flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-4 mt-8 md:mt-20">
          <div className="flex-1 w-full border-b border-white/60 flex items-center">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL ADDRESS"
              className="bg-transparent outline-none border-none text-white placeholder-white/70 px-2 py-4 w-full text-lg tracking-wide"
            />
          </div>
          <button
            type="submit"
            className="ml-0 md:ml-4 mt-4 md:mt-0 px-8 py-3 border border-white text-white rounded-full text-base sm:text-lg font-light tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}
