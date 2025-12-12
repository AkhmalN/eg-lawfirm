"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./ui/section-header";
import { fadeInUp } from "@/lib/motion";

export default function HeroSection() {
  return (
    <section className="relative h-[130vh] flex justify-start items-center md:items-start fade-bottom">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Law background"
          className="w-full h-full object-cover object-[top_center]"
          fill
        />
        <div className="absolute inset-0 bg-black/50"></div>
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
          className="text-3xl md:text-6xl text-white drop-shadow-lg leading-tight font-thin"
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

      {/* News Card — Only Desktop */}
      <div className="hidden md:flex absolute bottom-[35%] left-2/3 -translate-x-1/2 z-20">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6 flex items-center gap-6 w-[900px]">
          {/* Thumbnail */}
          <div className="w-[280px] h-[220px] relative rounded-xl overflow-hidden">
            <Image
              src="/images/dpc-lbh.jpeg"
              alt="News preview"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-evenly h-full gap-4">
            <h3 className="text-xl font-light text-white leading-snug">
              DPC LBH Tangsel Siap Berikan Bantuan Hukum Bagi Masyarakat Yang
              Tidak Mampu
            </h3>

            <a
              href="https://www.tugasbangsa.com/dpc-lbh-tangsel-siap-berikan-bantuan-hukum-bagi-masyarakat-yang-tidak-mampu"
              className="px-6 py-2 border border-white/40 text-white rounded-full text-sm w-fit hover:bg-white/10 transition"
              target="_blank"
            >
              Read Article
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col gap-4">
            <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition">
              →
            </button>
            <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition">
              ←
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
