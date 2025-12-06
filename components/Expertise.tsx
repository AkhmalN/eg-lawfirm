"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LegalCarousel() {
  const items = [
    {
      category: "Litigasi",
      title: "Perdata",
      image:
        "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=1200&q=60",
    },
    {
      category: "Litigasi",
      title: "Pidana",
      image:
        "https://images.unsplash.com/photo-1661342406509-064b58299ca5?auto=format&fit=crop&w=1200&q=60",
    },
    {
      category: "Non-Litigasi",
      title: "Drafting & Review Kontrak",
      image:
        "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=1200&q=60",
    },
    {
      category: "Non-Litigasi",
      title: "Legal Opinion",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=60",
    },
    {
      category: "Litigasi",
      title: "Sengketa Bisnis & Komersial",
      image:
        "https://images.unsplash.com/photo-1681505531034-8d67054e07f6?auto=format&fit=crop&w=1200&q=60",
    },
    {
      category: "Hukum Ketenagakerjaan",
      title: "Industrial Relations",
      image:
        "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1200&q=60",
    },
    {
      category: "Corporate",
      title: "Corporate & Compliance",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=60",
    },
  ];

  return (
    <section className="md:px-10 bg-white w-full">
      {/* HEADER */}
      <div className="text-start mb-12 px-4 sm:px-6 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-3 tracking-tight">
          Layanan Hukum & Litigasi
        </h2>

        <div className="w-24 h-[2px] bg-yellow-600 mb-4" />

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Tim hukum kami menangani berbagai perkara litigasi dan non-litigasi,
          dengan pendekatan analitis, strategis, dan berorientasi pada solusi
          untuk melindungi kepentingan hukum klien.
        </p>
      </div>

      {/* SWIPER CAROUSEL */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={16}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile
          480: { slidesPerView: 1 }, // small mobile
          640: { slidesPerView: 2 }, // tablet
          1024: { slidesPerView: 3 }, // desktop
          1280: { slidesPerView: 5 }, // large desktop
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[250px] sm:h-[380px] overflow-hidden group shadow-md rounded-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-3 sm:px-4">
                <p className="text-sm sm:text-lg uppercase tracking-wide opacity-90 mb-2 sm:mb-3">
                  {item.category}
                </p>

                <div className="w-16 h-[1px] bg-white/50 mb-2 sm:mb-3" />

                <h3 className="text-lg sm:text-2xl font-semibold tracking-wide leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LINK */}
      <div className="text-center mt-12">
        <Link
          href="/services"
          className="inline-flex items-center text-slate-900 group font-medium text-base sm:text-lg"
        >
          <span className="relative">
            Lihat Semua Pelayanan
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
          </span>

          <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
