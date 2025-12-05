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
      className=" bg-white md:px-10"
    >
      {/* Header */}
      <div className="text-start mb-12 mx-6 max-w-4xl">
        <h2 className="text-4xl font-semibold text-slate-900 mb-3 tracking-tight">
          Legalitas & Kredibilitas
        </h2>
        <div className="w-24 h-[3px] bg-[#CDA772] mb-6 rounded-full" />
        <p className="text-lg text-slate-600 leading-relaxed">
          EG Law Firm beroperasi dengan dasar dokumen resmi yang telah disahkan
          oleh Kementerian Hukum dan HAM Republik Indonesia, menjamin legalitas,
          kredibilitas, dan kepercayaan bagi seluruh klien dan mitra kami.
        </p>
      </div>

      {/* Image + Info */}
      <motion.div variants={fadeInUp} className="flex justify-center px-6">
        <div className="relative w-full ">
          {/* Info di atas image untuk desktop */}
          <motion.div variants={fadeInUp} className="flex justify-center px-6">
            <div className="relative w-full md:w-1/2 h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-[#CDA772]/40 bg-gray-50 group">
              {/* Info teks tetap di atas */}
              <div className="absolute top-4 left-4 right-4 z-10 bg-white/70 backdrop-blur-sm p-4 rounded-xl text-center transition-all duration-300 group-hover:opacity-0">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  SK Kemenkumham RI Nomor:{" "}
                  <span className="font-semibold text-slate-900">
                    AHU-0000576-AH.01.18 TAHUN 2019
                  </span>
                  <br />
                  Akta Pendirian No. 11, 17 Oktober 2019
                  <br />
                  Notaris:{" "}
                  <span className="font-semibold text-slate-900">
                    Nuryani, S.H., M.Kn.
                  </span>
                </p>
              </div>

              {/* Image dengan efek zoom on hover */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={skElmon}
                  alt="Surat Legalitas Perusahaan"
                  fill
                  className="object-contain p-6 transform transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
