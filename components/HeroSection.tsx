"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./ui/section-header";
import { fadeInUp } from "@/lib/motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex justify-start items-center md:items-start">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Law background"
          className="w-full h-full object-cover object-[top_center]"
          fill
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 py-20 sm:py-44 flex flex-col justify-center items-center md:items-start md:justify-start text-center md:text-left">
        <motion.div variants={fadeInUp} className="md:w-1/3 px-3">
          <SectionHeader title="Serve now, stand firm" bgColor="#ca8a04" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl text-white drop-shadow-lg leading-tight font-thin"
        >
          Trusted legal partner delivering justice with integrity and expertise.
        </motion.h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "80px", opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-1 bg-white/50 mt-6 rounded-full"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-300"
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
