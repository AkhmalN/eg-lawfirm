"use client";

import React from "react";
import SectionHeader from "./ui/section-header";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, staggerContainer } from "@/lib/motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const FirmOverviewSection = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full min-h-screen bg-blue-950 text-white flex items-start py-5"
    >
      <div className="px-6 w-full flex flex-col items-start gap-5 md:gap-20">
        {/* ==========================
            HEADER ROW
        ========================== */}
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-10 w-full md:max-w-5xl mx-0 md:mx-64">
          {/* Left Header */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2 }}
            className="md:w-1/3"
          >
            <SectionHeader title="WHO WE ARE" />
          </motion.div>

          {/* Right Header */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2 }}
            className="w-full flex flex-col justify-start text-left"
          >
            <h3 className="text-2xl md:text-4xl lg:text-5xl leading-relaxed font-light">
              A professional legal firm in Jakarta and Bali delivering
              strategic, integrity-driven solutions.
            </h3>
          </motion.div>
        </div>

        {/* ==========================
            CONTENT ROW (agak ke tengah)
        ========================== */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mx-auto max-w-7xl">
          {/* Image side */}
          <motion.div
            variants={fadeInUp}
            className="relative w-full md:w-1/2 h-80 md:h-[600px] lg:h-[800px] xl:h-[900px] overflow-hidden"
          >
            <Image
              src="/images/who-we-are-2.jpg"
              alt="law Building"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={fadeInUp}
            className="md:w-1/2 flex flex-col gap-10 justify-start"
          >
            {/* Main idea */}
            <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-gray-200 leading-relaxed">
              Supported by highly experienced advocates, we provide strategic
              legal guidance across a wide range of services.
            </p>

            {/* Value proposition */}
            <p className="text-lg font-light text-gray-200 leading-relaxed">
              We ensure every legal action we take offers strong protection and
              delivers the best possible outcomes for our clients.
            </p>

            {/* Button */}
            <div className="mt-5 md:mt-24 inline-block group">
              <a href="/about">
                <button className="relative text-white font-thin text-base md:text-lg py-1 md:py-3 overflow-hidden border border-white md:border-0 rounded-full md:rounded-none px-6 md:px-0 transition-all duration-300  hover:text-white">
                  Discover Our Firm
                  {/* Garis bawah untuk desktop */}
                  <span className="hidden md:block absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-2 max-w-7xl mx-0 md:mx-20">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2 }}
            className="md:w-1/3"
          >
            <SectionHeader title="Legal Updates, Publications & News" />
          </motion.div>

          {/* Right Header */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2 }}
            className="w-full flex flex-col justify-start text-left"
          >
            <h3 className="text-2xl md:text-4xl lg:text-5xl leading-relaxed font-light">
              Providing you with the latest updates on legal developments in
              Indonesia.
            </h3>
          </motion.div>

          {/* Button */}
          <div className="mt-10 md:mt-24 inline-block group">
            <button className="relative text-white font-thin text-base md:text-lg py-1 md:py-3 overflow-hidden border border-white md:border-0 rounded-full md:rounded-none px-6 md:px-0 transition-all duration-300  hover:text-white">
              Discover The Indonesia law blog
              {/* Garis bawah untuk desktop */}
              <span className="hidden md:block absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FirmOverviewSection;
