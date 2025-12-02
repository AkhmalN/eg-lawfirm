"use client";

import { motion } from "framer-motion";
import { Shield, Award, TrendingUp } from "lucide-react";
import { slideInLeft, slideInRight } from "@/lib/motion";
import CountUp from "react-countup";
import ExperienceCounter from "./ExperienceCounter";
import ExperienceRoller from "./ExperienceRoller";

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
              Mengapa Memilih EG Law Firm?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Berbagai institusi dan perusahaan dari beragam sektor telah
              mempercayakan kebutuhan hukum mereka kepada kami, menjadi bukti
              komitmen dan kualitas layanan yang konsisten kami hadirkan.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  title:
                    " Pendekatan Hukum yang Strategis & Berorientasi Hasil",
                  description:
                    "Setiap penanganan perkara dilakukan dengan analisis mendalam, strategi terukur, dan fokus pada penyelesaian terbaik bagi klien",
                },
                {
                  icon: Shield,
                  title: "Integritas Tin i & Kepatuhan pada Kode Etik",
                  description:
                    " Setiap layanan diberikan dengan kejujuran, transparansi, serta menjunjung prinsip keadilan dan profesionalitas.",
                },
                {
                  icon: TrendingUp,
                  title: "Responsif, Komunikatif, & Berpengalaman",
                  description:
                    "Tim advokat memberikan pendampingan yang cepat, jelas, dan dapat diandalkan, baik untuk kebutuhan personal maupun korporasi.",
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

          <ExperienceRoller />
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChoose;

{
  /* Animasi angka seperti berapa tahun pengalaman, text besar, animate, informatis */
}
{
  /* <div className="h-full flex flex-col justify-center space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">
                    <CountUp
                      start={0}
                      end={4}
                      duration={2}
                      suffix="+"
                      enableScrollSpy
                    />
                  </div>
                  <div className="text-slate-300">Years Experience</div>
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
              </div> */
}
