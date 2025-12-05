"use client";

import { motion } from "framer-motion";
import LawBackground from "@/assets/companies-people.jpg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={LawBackground.src}
          alt="Law background"
          className="w-full h-full object-cover object-[top_center]"
          width={LawBackground.width}
          height={LawBackground.height}
        />

        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center py-20 md:py-32 flex flex-col justify-end sm:justify-evenly">
        <div className="hidden sm:block">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-6"
          >
            “Mitra hukum terpercaya dalam menemukan keadilan dan menyelesaikan
            setiap persoalan dengan integritas.”
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "80px", opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-white/50 mx-auto mb-8 rounded-full"
          />
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg md:text-lg text-white/90 leading-relaxed drop-shadow-md"
          >
            Dengan pengalaman dan keahlian dalam berbagai bidang hukum, kami
            hadir sebagai mitra strategis bagi klien dalam mencari keadilan,
            menyelesaikan sengketa, serta memberikan perlindungan hukum yang
            komprehensif dan profesional.
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
