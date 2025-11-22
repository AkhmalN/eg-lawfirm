"use client";

import { motion } from "framer-motion";
import { Shield, Award, TrendingUp } from "lucide-react";
import { slideInLeft, slideInRight } from "@/lib/motion";
import LawBackground from "@/assets/companies-people.jpg";
import CountUp from "react-countup";
import ExpertiseCarousel from "@/components/Expertise";
import ClientTestimonials from "@/components/Testimonial";
import WhyChoose from "@/components/WhyChoose";
import LastPublications from "@/components/LastPublications";
import EngageToExceed from "@/components/Enggagement";
import TeamSection from "@/components/Team";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section
        className="relative min-h-screen flex items-center justify-center pt-60 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${LawBackground.src})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-bold text-white drop-shadow-lg mb-6"
          >
            Keunggulan dalam Layanan Hukum
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "80px", opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-white/50 mx-auto mb-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-white/90 leading-relaxed drop-shadow-md"
          >
            Elmon Gultom menyediakan solusi hukum yang komprehensif dengan
            keahlian, integritas, dan dedikasi untuk mencapai hasil terbaik bagi
            klien kami.
          </motion.p>
        </div>

        {/* SCROLL INDICATOR */}
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

      <ExpertiseCarousel />

      <WhyChoose />
      <TeamSection />
      <ClientTestimonials />
      <LastPublications />
      <EngageToExceed />
    </div>
  );
}
