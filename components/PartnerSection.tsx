"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Partner1 from "@/assets/partner1.jpeg";
import Partner2 from "@/assets/partner2.jpeg";
import Partner3 from "@/assets/partner3.jpeg";

export default function PartnersSection() {
  const partners = [Partner1, Partner2, Partner3];
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % partners.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + partners.length) % partners.length);

  return (
    <section className="relative bg-white md:px-10">
      {/* Header */}
      <div className="text-start mb-12 px-6 max-w-4xl">
        <h2 className="text-4xl font-semibold text-slate-900 mb-3 tracking-tight">
          Partners & Associate
        </h2>
        <div className="w-24 h-[3px] bg-[#CDA772] mb-6 rounded-full" />
        <p className="text-lg text-slate-600 leading-relaxed">
          Kami bekerja sama dengan partner hukum terpercaya dan associate
          profesional yang mendukung setiap kebutuhan klien kami.
        </p>
      </div>

      {/* Carousel */}
      <div className="flex justify-center items-center gap-1 relative">
        {/* Prev Button */}
        <button onClick={prev} className=" ">
          <ChevronLeft className="w-6 h-6 text-slate-700 hover:text-yellow-500" />
        </button>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="md:w-[70%] md:h-[70%] overflow-hidden shadow-2xl border border-slate-200 relative"
          >
            <Image
              src={partners[current]}
              alt={`Partner ${current + 1}`}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Next Button */}
        <button onClick={next} className=" ">
          <ChevronRight className="w-6 h-6 text-slate-700 hover:text-yellow-500" />
        </button>
      </div>
    </section>
  );
}
