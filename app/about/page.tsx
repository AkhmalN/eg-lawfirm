"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeInUp } from "@/lib/motion";
import Image from "next/image";
import FounderSection from "@/components/FounderSection";
import ClientsSection from "@/components/ClientsSection";
import SectionHeader from "@/components/ui/section-header";

export default function AboutPage() {
  return (
    <div className="bg-[#f5f8fb]">
      <Navbar />
      {/* HERO SECTION */}
      <section className="py-16 md:pt-44 md:pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:gap-16">
            {/* Section Header */}
            <div className="md:w-1/4 flex flex-col items-start md:items-end md:pr-8 mb-6 md:mb-0">
              <SectionHeader
                title="Our Firm"
                titleColor="#29488a"
                bgColor="#b24592"
              />
            </div>
            {/* Main Title */}
            <div className="flex-1">
              <h1 className="text-3xl sm:text-5xl font-light text-[#29488a] leading-tight mb-4">
                E.G. Law Firm is a reputable Indonesian law firm known for its
                integrity, strategic approach, and client-focused services
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* IMAGE + RIGHT TEXT */}
      <section className="px-4 sm:px-8 pb-16 md:pb-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          <motion.div
            variants={fadeInUp}
            className="relative w-full md:w-1/2 aspect-[4/3]  overflow-hidden shadow-md mb-8 md:mb-0"
          >
            <Image
              src="/images/peoples-in-road.jpg"
              alt="peoples-road"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="flex-1 flex flex-col justify-center md:pl-12">
            <h2 className="text-2xl sm:text-3xl font-light text-[#29488a] mb-6">
              By combining experience, in-depth legal knowledge, and a strategic
              approach, we deliver clear and effective legal solutions for our
              clients.
            </h2>
            <p className="text-base sm:text-lg text-[#29488a] font-light my-1">
              E.G. Law Firm is guided by integrity, professionalism, and a
              strong commitment to our clients. We provide clear, ethical, and
              strategic legal advice while maintaining transparency and trust in
              every engagement.
            </p>
            <p className="text-base sm:text-lg text-[#29488a] font-light my-1">
              We offer practical, results-driven legal solutions through careful
              analysis, responsive communication, and a deep understanding of
              Indonesian law, tailored to both individual and corporate clients.
            </p>
          </div>
        </div>
      </section>

      {/* Firm Values Section */}
      <FounderSection />
      {/* Firm Clients Section */}
      <ClientsSection />
      <Footer />
    </div>
  );
}
