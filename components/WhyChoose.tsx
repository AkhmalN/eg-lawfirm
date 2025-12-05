"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Shield, Award, TrendingUp } from "lucide-react";
import { slideInLeft } from "@/lib/motion";
import { useEffect, useState } from "react";

const features = [
  {
    icon: Award,
    title: "Pendekatan Strategis Berbasis Analisis Mendalam",
    description:
      "Setiap langkah hukum dirancang melalui evaluasi menyeluruh, memastikan strategi yang efektif dan berorientasi pada hasil terbaik bagi klien.",
  },
  {
    icon: Shield,
    title: "Integritas, Etika, dan Keandalan Profesional",
    description:
      "Kami menjunjung tinggi standar integritas dan kode etik advokat, memberikan pelayanan yang jujur, transparan, dan penuh tanggung jawab.",
  },
  {
    icon: TrendingUp,
    title: "Responsif, Berpengalaman, dan Tepat Sasaran",
    description:
      "Dengan pengalaman beragam perkara, tim kami memberikan pendampingan yang cepat, komunikatif, dan solutif.",
  },
];

const experienceCards = [
  {
    id: 1,
    title: "4 Tahun Pengalaman",
    description:
      "Didukung pengalaman menangani beragam kebutuhan hukum klien individual maupun korporasi.",
  },
  {
    id: 2,
    title: "Pendekatan Hukum yang Disesuaikan",
    description:
      "Setiap klien memperoleh strategi hukum yang dirancang khusus sesuai kebutuhan dan dinamika perkaranya.",
  },
  {
    id: 3,
    title: "Pelayanan Efisien & Terukur",
    description:
      "Respons cepat dan kualitas kerja yang konsisten menjadi komitmen utama kami.",
  },
];

const WhyChoose = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % experienceCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = experienceCards[index];

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white w-full md:px-10"
    >
      {/* Title */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div className="flex flex-col">
          <div className="text-start mb-12 px-6 max-w-4xl">
            <h2 className="text-4xl font-semibold text-slate-900 mb-3 tracking-tight">
              Professionalisme dan keunggulan
            </h2>

            <div className="w-24 h-[2px] bg-yellow-600 mb-4" />

            <p className="text-lg text-slate-600 leading-relaxed">
              EG Law Firm hadir sebagai mitra hukum tepercaya bagi individu,
              pelaku usaha, dan institusi yang membutuhkan pendampingan hukum
              profesional dengan kualitas layanan yang berorientasi hasil dan
              berbasis integritas.
            </p>
          </div>
          <div className="px-6 max-w-4xl">
            <h5 className="text-lg sm:text-xl mb-5 font-semibold text-[#CDA772]">
              Nilai Professional yang Kami Hadirkan:
            </h5>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="p-6 bg-white/5 backdrop-blur-md border border-[#CDA772]/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <p className="font-semibold text-slate-900 mb-1 tracking-tight">
                    {current.title}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {current.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT — Static Feature Cards */}
        <div className="relative flex flex-col items-center justify-start h-full text-center overflow-hidden">
          <h5 className="text-lg sm:text-xl font-semibold mb-6 text-[#CDA772]">
            Komitmen & Keunggulan Kami:
          </h5>

          <div className="grid gap-6 w-full max-w-xl px-3 pb-2">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex items-start space-x-5 p-5 bg-white/5 backdrop-blur-md border border-[#CDA772]/20 rounded-2xl  transition-all"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center bg-[#CDA772]/10 rounded-xl text-[#CDA772]">
                  <item.icon className="w-10 h-8" />
                </div>

                {/* Content */}
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChoose;
