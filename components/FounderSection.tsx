"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import SectionHeader from "./ui/section-header";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.7,
    },
  },
};

const FounderSection = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollByCard = (direction: "next" | "prev") => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".snap-start");
    if (!card) return;
    const gap = 24; // matches gap-6 (1.5rem)
    const scrollAmount = card.offsetWidth + gap;
    if (direction === "next") {
      // If near end, wrap to start
      if (el.scrollLeft + el.clientWidth + 10 >= el.scrollWidth) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      if (el.scrollLeft <= 0) {
        el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
      } else {
        el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    // autoplay
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    autoplayRef.current = window.setInterval(() => {
      if (!isPaused) scrollByCard("next");
    }, 3500);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, [isPaused]);

  return (
    <section className="w-full bg-blue-950 py-20 px-4 sm:px-8 flex flex-col items-center">
      <motion.div
        className="max-w-7xl w-full grid md:grid-cols-2 gap-5 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Left: Founder Image */}
        <motion.div className="w-full flex justify-center" variants={fadeInUp}>
          <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden flex items-center justify-center ">
            <Image
              src="/images/pendiri.jpeg"
              alt="Elmon Gultom, S.H., M.H."
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
        {/* Right: Founder Info */}
        <motion.div
          className="flex flex-col justify-center"
          variants={fadeInUp}
        >
          <SectionHeader
            title="FOUNDER & MANAGING PARTNER"
            titleColor="#ffffff"
            bgColor="#b24592"
          />
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6 mt-5"
            variants={fadeInUp}
          >
            Elmon Gultom, S.H., M.H.
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 font-light mb-4"
            variants={fadeInUp}
          >
            As the founder of EG Law Firm, he has experience in handling various
            legal cases, both litigation and non-litigation. His dedication to
            justice, strong negotiation skills, and deep understanding of
            Indonesian law make EG Law Firm a trusted partner for every client.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 font-light mb-8"
            variants={fadeInUp}
          >
            With a track record of representing clients from various sectors, he
            always prioritizes sharp analysis, the right strategy, and solutions
            that focus on the best results for clients.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Partner & Associate Subsection */}
      <motion.div
        className="max-w-7xl w-full mt-12 md:mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <SectionHeader
          title="OUR PARTNERS & ASSOCIATES"
          titleColor="#ffffff"
          bgColor="#b24592"
        />
        <div className="relative w-full mx-auto">
          {/* Controls (left/right) */}
          <button
            aria-label="Previous"
            onClick={() => scrollByCard("prev")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollByCard("next")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="overflow-x-auto no-scrollbar -mx-4 px-4 py-4"
          >
            <div className="flex gap-6 pb-4 snap-x snap-mandatory touch-pan-x items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  className="flex-shrink-0 snap-start"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="w-[320px] sm:w-[280px] md:w-[320px] h-[220px] sm:h-[200px] md:h-[220px] overflow-hidden bg-white border border-white/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Image
                      src={`/images/partner${i}.jpeg`}
                      alt={`Partner ${i}`}
                      width={320}
                      height={220}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* hide native scrollbar but keep scroll functionality */}
        <style jsx>{`
          .no-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }
        `}</style>
      </motion.div>
    </section>
  );
};

export default FounderSection;
