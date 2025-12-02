"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { ShieldCheck, Sparkles, Timer } from "lucide-react";

const rollingContent = [
  {
    id: 1,
    type: "years",
    label: "Years Experience",
    year: 4,
    icon: ShieldCheck,
    bg: "from-yellow-500/20 via-yellow-300/10 to-transparent",
  },
  {
    id: 2,
    type: "text",
    text: "Solusi yang Disesuaikan untuk Semua Klien",
    icon: Sparkles,
    bg: "from-blue-500/20 via-blue-300/10 to-transparent",
  },
  {
    id: 3,
    type: "text",
    text: "Layanan Cepat dan Efisien",
    icon: Timer,
    bg: "from-green-500/20 via-green-300/10 to-transparent",
  },
];

const ExperienceRoller = () => {
  const [index, setIndex] = useState(0);

  // 🔁 Ganti konten setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rollingContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = rollingContent[index];
  const Icon = current.icon;

  return (
    <div className="relative flex items-center justify-center h-full text-center overflow-hidden">
      {/* Background glow animasi */}
      <motion.div
        key={index + "-bg"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${current.bg} blur-2xl`}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -25, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col items-center px-6"
        >
          {/* Ikon animasi */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-4 text-white/80"
          >
            <Icon size={50} />
          </motion.div>

          {/* Konten */}
          {current.type === "years" ? (
            <div>
              <h3 className="text-7xl lg:text-8xl font-extrabold text-white mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <CountUp end={current.year as number} duration={2} start={0} />+
              </h3>
              <p className="text-xl lg:text-2xl text-slate-200 font-medium">
                {current.label}
              </p>
            </div>
          ) : (
            <p className="text-2xl lg:text-3xl font-semibold text-white max-w-xs leading-relaxed">
              {current.text}
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ExperienceRoller;
