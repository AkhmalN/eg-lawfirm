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
      title: "Hukum Perusahaan",
      description:
        "Layanan hukum komprehensif untuk entitas bisnis, merger, akuisisi, dan tata kelola perusahaan.",
      image:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Litigasi Perdata",
      description:
        "Perwakilan ahli dalam penyelesaian sengketa dan proses pengadilan dengan rekam jejak terbukti.",
      image:
        "https://images.unsplash.com/photo-1528747045269-390fe33c19d3?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Hukum Kontrak",
      description:
        "Menyusun, meninjau, dan merundingkan kontrak untuk melindungi kepentingan Anda dan meminimalkan risiko.",
      image:
        "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Hukum Ketenagakerjaan",
      description:
        "Menangani masalah hukum di tempat kerja, sengketa perburuhan, dan masalah kontrak kerja.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Kepatuhan Regulasi",
      description:
        "Memastikan operasi bisnis mematuhi peraturan dan persyaratan hukum di Indonesia.",
      image:
        "https://images.unsplash.com/photo-1529572333334-04a19bb13f77?auto=format&fit=crop&w=1200&q=60",
    },
    {
      title: "Properti & Real Estat",
      description:
        "Dukungan hukum untuk transaksi properti, sengketa tanah, dan pengembangan real estat.",
      image:
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=60",
    },
  ];

  function NextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white border text-white p-3 rounded-full  transition"
        onClick={onClick}
      >
        <ArrowRight className="w-5 h-5 text-slate-700" />
      </div>
    );
  }

  function PrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white border text-white p-3 rounded-full  transition"
        onClick={onClick}
      >
        {/* putar 180° */}
        <ArrowRight className="w-5 h-5 rotate-180 text-slate-700" />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-5">
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
            <motion.div key={index} className="px-3 w-full">
              <Card className="relative h-[320px] overflow-hidden rounded-xl border-0 shadow-lg">
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Optional dark overlay biar teks lebih jelas */}
                <div className="absolute inset-0 bg-black/30" />

                {/* TEXT */}
                <CardContent className="relative z-10 p-10">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-100 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="inline-flex items-center text-white font-semibold hover:translate-x-2 transition-transform"
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
