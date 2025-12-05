"use client";

import { motion } from "framer-motion";
import LawBackground from "@/assets/lawyer-getin.jpg";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EngageToExceed() {
  return (
    <section
      className="relative pt-20 text-white flex flex-col justify-around h-full"
      style={{
        backgroundImage: `url(${LawBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT: Heading & Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Bergabunglah bersama kami.
          </motion.h2>

          <div className="w-24 h-[2px] bg-yellow-600 mb-6 mx-auto lg:mx-0 rounded-full" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg leading-relaxed text-gray-300"
          >
            Kami akan menangani urusan hukum Anda dengan tim berpengalaman kami.
            Hubungi kami hari ini.
          </motion.p>
        </div>
      </div>
      {/* RIGHT: Link */}
      <div className="lg:w-auto flex justify-end items-end mx-6 mt-20 pb-5">
        <Link
          href="/contact"
          className="inline-flex items-center text-white group font-medium text-lg"
        >
          <span className="relative">
            Hubungi Kami
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
          {/* <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 " /> */}
        </Link>
      </div>
    </section>
  );
}
