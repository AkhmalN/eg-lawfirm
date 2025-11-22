"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const testimonials = [
  {
    name: "Andi Prasetyo",
    role: "CEO PT. Nusantara",
    feedback:
      "Elmon Gultom Law Firm membantu kami menyelesaikan masalah hukum dengan profesionalisme dan cepat. Sangat direkomendasikan!",
    avatar: "/avatars/andi.jpg",
  },
  {
    name: "Siti Rahma",
    role: "Founder Startup Tech",
    feedback:
      "Tim hukum mereka sangat responsif dan solutif. Membuat kami merasa aman menghadapi berbagai permasalahan legal.",
    avatar: "/avatars/siti.jpg",
  },
  {
    name: "Budi Santoso",
    role: "Direktur Operasional",
    feedback:
      "Pengalaman bekerja sama dengan mereka luar biasa. Detail, teliti, dan komunikatif.",
    avatar: "/avatars/budi.jpg",
  },
];

export default function ClientTestimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      <style jsx global>{`
        .slick-dots li button:before {
          color: white !important;
          opacity: 1 !important;
        }
        .slick-dots li.slick-active button:before {
          color: white !important;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Apa Kata Client
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Pengalaman nyata klien kami bekerja sama dengan Elmon Gultom Law
            Firm.
          </p>
        </motion.div>

        <Slider {...settings} className="relative">
          {testimonials.map((client, index) => (
            <motion.div key={index} className="px-4">
              <Card className="h-full border-2 hover:border-slate-900 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-slate-900 mb-4" />
                    <p className="text-slate-700 italic">`{client.feedback}`</p>
                  </div>
                  <div className="flex items-center mt-4">
                    {client.avatar && (
                      <Image
                        src={client.avatar}
                        alt={client.name}
                        width={200}
                        height={200}
                        className="w-16 h-16 object-contain"
                        priority
                      />
                    )}
                    <div>
                      <p className="font-bold text-slate-900">{client.name}</p>
                      <p className="text-slate-500 text-sm">{client.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
}
