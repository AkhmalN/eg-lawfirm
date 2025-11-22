"use client";

import { motion } from "framer-motion";
import { Shield, Award, TrendingUp } from "lucide-react";
import { slideInLeft, slideInRight } from "@/lib/motion";
import CountUp from "react-countup";

const WhyChoose = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={slideInLeft}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Mengapa Memilih Firma Hukum Elmon Gultom?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Dengan pengalaman lebih dari 15 tahun, kami telah membangun
              reputasi sebagai mitra hukum tepercaya bagi individu dan bisnis di
              seluruh Indonesia.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  title: "Tim Hukum Ahli",
                  description:
                    "Pengacara berkualifikasi tinggi dengan keahlian terbukti",
                },
                {
                  icon: Shield,
                  title: "Perlindungan Klien",
                  description: "Kepentingan Anda adalah prioritas utama kami",
                },
                {
                  icon: TrendingUp,
                  title: "Berorientasi Hasil",
                  description:
                    "Tingkat keberhasilan 98% dalam kasus yang ditangani",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={slideInRight} className="relative">
            <div className="aspect-square bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="h-full flex flex-col justify-center space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">
                    <CountUp
                      start={0}
                      end={15}
                      duration={2}
                      suffix="+"
                      enableScrollSpy
                    />
                  </div>
                  <div className="text-slate-300">Tahun Keunggulan</div>
                </div>
                <div className="border-t border-white/20"></div>
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">
                    <CountUp
                      start={0}
                      end={500}
                      duration={2}
                      delay={0.2}
                      suffix="+"
                      enableScrollSpy
                    />
                  </div>
                  <div className="text-slate-300">Kasus Sukses</div>
                </div>
                <div className="border-t border-white/20"></div>
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">
                    <CountUp
                      start={0}
                      end={98}
                      duration={2}
                      delay={0.4}
                      suffix="%"
                      enableScrollSpy
                    />
                  </div>
                  <div className="text-slate-300">Kepuasan Klien</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChoose;
