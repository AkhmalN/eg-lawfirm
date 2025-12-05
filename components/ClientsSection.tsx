"use client";

import { motion } from "framer-motion";

const clients = [
  "PT Dekorindo Mandiri",
  "Firstmedia Fatmawati",
  "PT Kinglab Indonesia",
  "PT Nayla Developer",
  "PT Ineal's trading . Co",
  "PT Citra Mutiara Agung",
  "PT Surya Jasa Mulya",
  "PT Cinco Jaya",
];

export default function ClientsSection() {
  return (
    <section className="pb-16 bg-white overflow-hidden md:px-10">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-start mb-12 px-6 max-w-4xl">
          <h2 className="text-4xl font-semibold text-slate-900 mb-3 tracking-tight">
            Klien Kami
          </h2>

          <div className="w-24 h-[2px] bg-yellow-600 mb-4" />

          <p className="text-lg text-slate-600 leading-relaxed">
            Perusahaan, institusi, dan individu terkemuka yang telah
            mempercayakan layanan hukum mereka kepada EG Law Firm, menjadi bukti
            reputasi dan kualitas profesional kami.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {clients.concat(clients).map((client, idx) => (
              <div
                key={idx}
                className="mx-8 text-xl font-semibold text-slate-800 flex-shrink-0"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
