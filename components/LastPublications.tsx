"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const publications = [
  {
    id: 1,
    title: "DDP 9th Anniversary! #NewChapterGratefulJourney",
    date: "01/11/2025",
    category: "INFORMATION",
    image: "/mnt/data/17ad214a-14ca-4e01-91e2-82c920fb163a.png",
    link: "#",
    bgColor: "bg-gold-600", // will customize gold color below
  },
  {
    id: 2,
    title: "Dewi Djalal & Partners (DDP) remains steadfast in upholding ...",
    date: "31/10/2025",
    category: "INFORMATION",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=60",
    link: "#",
    bgColor: "bg-navy-900",
  },
  {
    id: 3,
    title: "DDP Team Plenary Session",
    date: "29/10/2025",
    category: "INFORMATION",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=60",
    link: "#",
    bgColor: "bg-navy-900",
  },
];

export default function LastPublications() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">
            Our Latest <span className="text-gold-600">Publications</span>
          </h2>
          <button className="bg-gold-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-gold-700 transition">
            ALL PUBLICATIONS
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {publications.map(
            ({ id, image, title, date, category, link, bgColor }, i) => (
              <motion.div
                key={id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="rounded-lg overflow-hidden shadow-lg cursor-pointer flex flex-col"
              >
                <div className="relative group">
                  {/* Top bar */}
                  <div className="absolute top-0 left-0 w-full bg-navy-900 text-white text-xs font-semibold uppercase py-2 px-3 z-10 flex items-center justify-center">
                    DEWI DJALAL & PARTNERS
                  </div>
                  <div className="relative w-full aspect-[4/3] brightness-90 group-hover:brightness-100 transition">
                    <Image
                      src={image}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                      priority={id === 1}
                    />
                  </div>
                </div>

                <div
                  className={`${
                    id === 1
                      ? "bg-gold-600 text-white"
                      : "bg-navy-900 text-white"
                  } p-5 flex flex-col flex-grow justify-between`}
                >
                  <div>
                    <div className="text-xs font-semibold uppercase mb-1 opacity-80">
                      {category} • {date}
                    </div>
                    <h3 className="font-bold text-lg mb-3">{title}</h3>
                  </div>
                  <a
                    href={link}
                    className="font-semibold hover:underline flex items-center gap-1"
                  >
                    READ MORE <span aria-hidden="true">→</span>
                  </a>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
}
