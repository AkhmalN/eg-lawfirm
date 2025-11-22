"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import LawBackground from "@/assets/Case-Law-and-Legal-Strategy-2.png";

export default function TeamPage() {
  const team = [
    {
      name: "Dr. Elmon Gultom, S.H., M.H.",
      role: "Senior Partner & Founder",
      specialization: "Corporate Law, M&A",
      description:
        "Over 20 years of experience in corporate law and mergers & acquisitions.",
    },
    {
      name: "Maria Simanjuntak, S.H.",
      role: "Partner",
      specialization: "Civil Litigation",
      description:
        "Expert litigator with successful track record in complex civil cases.",
    },
    {
      name: "Andi Prasetyo, S.H., M.H.",
      role: "Senior Associate",
      specialization: "Contract Law",
      description:
        "Specialized in contract drafting and commercial agreements.",
    },
    {
      name: "Linda Wijaya, S.H.",
      role: "Associate",
      specialization: "Employment Law",
      description: "Focused on labor disputes and employment compliance.",
    },
    {
      name: "Budi Santoso, S.H.",
      role: "Associate",
      specialization: "Real Estate",
      description: "Expert in property transactions and land disputes.",
    },
    {
      name: "Sarah Kusuma, S.H.",
      role: "Associate",
      specialization: "Regulatory Compliance",
      description: "Specialized in business compliance and regulatory matters.",
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet our experienced legal professionals dedicated to your success
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 hover:border-slate-900 transition-all">
                  <div className="aspect-square bg-slate-100 flex items-center justify-center">
                    <div className="w-32 h-32 bg-slate-900 rounded-full"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-2">{member.role}</p>
                    <p className="text-sm font-medium text-slate-900 mb-3">
                      {member.specialization}
                    </p>
                    <p className="text-sm text-slate-600 mb-4">
                      {member.description}
                    </p>
                    <div className="flex space-x-3">
                      <button className="text-slate-600 hover:text-slate-900">
                        <Mail className="w-5 h-5" />
                      </button>
                      <button className="text-slate-600 hover:text-slate-900">
                        <Linkedin className="w-5 h-5" />
                      </button>
                    </div>
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
