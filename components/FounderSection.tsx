"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "./ui/section-header";
import { motion } from "framer-motion";

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
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-blue-950">
          <div className="flex gap-6 min-w-[320px] pb-2">
            {[1, 2, 3].map((i) => (
              <motion.div key={i} className="flex-shrink-0" variants={fadeInUp}>
                <Image
                  src={`/images/partner${i}.jpeg`}
                  alt={`Partner ${i}`}
                  width={180}
                  height={220}
                  className="object-cover w-[480px] h-auto md:w-[320px] md:h-[220px] border-2 border-white bg-white"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FounderSection;
