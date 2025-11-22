"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/lib/motion";

// Contoh data lawyer
const lawyers = [
  {
    name: "Elmon Gultom",
    position: "Founder & Senior Partner",
    photo: "/lawyers/elmon.jpg",
  },
  {
    name: "Dewi Saraswati",
    position: "Corporate Law Specialist",
    photo: "/lawyers/dewi.jpg",
  },
  {
    name: "Rian Pratama",
    position: "Litigation Expert",
    photo: "/lawyers/rian.jpg",
  },
  {
    name: "Fitri Handayani",
    position: "Employment Law Specialist",
    photo: "/lawyers/fitri.jpg",
  },
];

export default function TeamSection() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Dedicated Experts, Ready to Serve
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of experienced lawyers is committed to providing top-notch
            legal support for your business and personal needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {lawyers.map((lawyer, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden text-center"
            >
              <div className="relative w-full h-64">
                <Image
                  src={lawyer.photo}
                  alt={lawyer.name}
                  fill
                  className="object-cover"
                  priority={index === 0} // prioritas untuk gambar pertama
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {lawyer.name}
                </h3>
                <p className="mt-2 text-gray-600">{lawyer.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
