"use client";

import { motion } from "framer-motion";
import { Building2, Scale, Users, Award } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import LawBackground from "@/assets/Case-Law-and-Legal-Strategy-2.png";

export default function PortfolioPage() {
  const cases = [
    {
      icon: Building2,
      title: "Major Corporate Merger",
      client: "Confidential",
      description:
        "Successfully advised on a multi-billion rupiah merger between two leading Indonesian companies.",
      outcome:
        "Merger completed within 6 months with full regulatory approval.",
    },
    {
      icon: Scale,
      title: "Complex Commercial Dispute",
      client: "PT Mandiri Sejahtera",
      description:
        "Represented client in high-stakes commercial litigation involving breach of contract.",
      outcome: "Won favorable settlement of IDR 5 billion for client.",
    },
    {
      icon: Users,
      title: "Labor Dispute Resolution",
      client: "Manufacturing Company",
      description: "Handled mass labor dispute involving 200+ employees.",
      outcome: "Achieved amicable settlement avoiding lengthy litigation.",
    },
    {
      icon: Award,
      title: "Real Estate Transaction",
      client: "Property Developer",
      description:
        "Facilitated major real estate acquisition and development project.",
      outcome: "Successful completion of IDR 50 billion property transaction.",
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="py-24  text-white"
        style={{ backgroundImage: `url(${LawBackground.src})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Portfolio</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Successful cases and proven results
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="bg-slate-50 rounded-xl p-8 h-full">
                  <item.icon className="w-12 h-12 text-slate-900 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Client: {item.client}
                  </p>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm font-semibold text-slate-900">
                      Outcome:
                    </p>
                    <p className="text-sm text-slate-600">{item.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
