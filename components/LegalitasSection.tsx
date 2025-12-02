"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import Image from "next/image";
import skElmon from "../assets/sk elmon.jpeg";

export default function LegalitasSection() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2 Kolom */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* KOLOM KIRI — IMAGE SURAT */}
          <motion.div
            variants={fadeInUp}
            className="bg-white shadow-xl rounded-2xl p-5 border border-gray-200"
          >
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden bg-gray-100 border">
              <Image
                src={skElmon}
                alt="Surat Legalitas Perusahaan"
                fill
                className="object-contain p-4"
              />
            </div>
            <p className="text-center text-gray-500 text-sm mt-3">
              SK Kemenkumham RI: Nomor: AHU-0000576-AH.01.18 TAHUN 2019 Akte
              Pendirian: No. 11, Tanggal 17 Oktober 2019 Notaris: Nuryani, S.H.,
              M.Kn.
            </p>
          </motion.div>

          {/* KOLOM KANAN — TEKS */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900">
                Legalitas & Kredibilitas Perusahaan
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Perusahaan ini beroperasi berdasarkan dokumen resmi yang telah
                disahkan oleh Kementerian Hukum dan HAM Republik Indonesia,
                memastikan legalitas dan kredibilitas dalam setiap kegiatan.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
