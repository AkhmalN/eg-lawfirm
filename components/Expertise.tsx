"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Shield,
  Scale,
  FileText,
  Users,
  Building2,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExpertiseCarousel() {
  const services = [
    {
      icon: Building2,
      title: "Hukum Perusahaan",
      description:
        "Layanan hukum komprehensif untuk entitas bisnis, merger, akuisisi, dan tata kelola perusahaan.",
    },
    {
      icon: Scale,
      title: "Litigasi Perdata",
      description:
        "Perwakilan ahli dalam penyelesaian sengketa dan proses pengadilan dengan rekam jejak terbukti.",
    },
    {
      icon: FileText,
      title: "Hukum Kontrak",
      description:
        "Menyusun, meninjau, dan merundingkan kontrak untuk melindungi kepentingan Anda dan meminimalkan risiko.",
    },
    {
      icon: Users,
      title: "Hukum Ketenagakerjaan",
      description:
        "Menangani masalah hukum di tempat kerja, sengketa perburuhan, dan masalah kontrak kerja.",
    },
    {
      icon: Shield,
      title: "Kepatuhan Regulasi",
      description:
        "Memastikan operasi bisnis mematuhi peraturan dan persyaratan hukum di Indonesia.",
    },
    {
      icon: Briefcase,
      title: "Properti & Real Estat",
      description:
        "Dukungan hukum untuk transaksi properti, sengketa tanah, dan pengembangan real estat.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Bidang Keahlian Kami
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Bidang praktik kami mencakup berbagai industri dan disiplin hukum.
          </p>
        </motion.div>

        {/* Carousel */}
        <Slider {...settings} className="relative mb-12">
          {services.map((service, index) => (
            <motion.div key={index} className="px-4">
              <Card className="h-full border-2 hover:border-slate-900 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-slate-900 font-semibold group-hover:translate-x-2 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Slider>

        {/* View All Services Button */}
        <div className="text-center mt-8">
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
