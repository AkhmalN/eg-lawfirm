"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Scale,
  FileText,
  Users,
  Shield,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import LawBackground from "@/assets/Case-Law-and-Legal-Strategy-2.png";

export default function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: "Hukum Perusahaan",
      description:
        "Layanan hukum komprehensif untuk entitas bisnis, merger, akuisisi, tata kelola perusahaan, dan pembentukan perusahaan.",
      features: [
        "Pembentukan Perusahaan",
        "Konsultasi Merger & Akuisisi",
        "Tata Kelola Perusahaan",
        "Perjanjian Pemegang Saham",
      ],
    },
    {
      icon: Scale,
      title: "Litigasi Perdata",
      description:
        "Perwakilan ahli dalam penyelesaian sengketa, proses pengadilan, arbitrase, dan mediasi dengan rekam jejak terbukti.",
      features: [
        "Perwakilan di Pengadilan",
        "Arbitrase",
        "Layanan Mediasi",
        "Proses Banding",
      ],
    },
    {
      icon: FileText,
      title: "Hukum Kontrak",
      description:
        "Menyusun, meninjau, dan merundingkan kontrak untuk melindungi kepentingan Anda dan meminimalkan risiko hukum.",
      features: [
        "Penyusunan Kontrak",
        "Peninjauan Kontrak",
        "Dukungan Negosiasi",
        "Penyelesaian Pelanggaran Kontrak",
      ],
    },
    {
      icon: Users,
      title: "Hukum Ketenagakerjaan",
      description:
        "Menangani masalah hukum di tempat kerja, sengketa perburuhan, kontrak kerja, dan kepatuhan HR.",
      features: [
        "Kontrak Kerja",
        "Sengketa Perburuhan",
        "Kepatuhan HR",
        "Masalah Pemutusan Hubungan Kerja",
      ],
    },
    {
      icon: Shield,
      title: "Kepatuhan Regulasi",
      description:
        "Memastikan operasi bisnis mematuhi peraturan dan persyaratan hukum di Indonesia.",
      features: [
        "Audit Kepatuhan",
        "Konsultasi Regulasi",
        "Permohonan Izin",
        "Hubungan dengan Pemerintah",
      ],
    },
    {
      icon: Briefcase,
      title: "Properti & Real Estat",
      description:
        "Dukungan hukum untuk transaksi properti, sengketa tanah, perjanjian sewa, dan pengembangan real estat.",
      features: [
        "Transaksi Properti",
        "Sengketa Tanah",
        "Perjanjian Sewa",
        "Proyek Pengembangan",
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="py-24 text-white"
        style={{ backgroundImage: `url(${LawBackground.src})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Layanan Hukum
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Solusi hukum komprehensif yang disesuaikan dengan kebutuhan Anda
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
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-2 hover:border-slate-900 transition-all hover:shadow-xl">
                  <CardContent className="p-8">
                    <service.icon className="w-12 h-12 text-slate-900 mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-16">
            <Link href="/contact">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                Minta Konsultasi <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
