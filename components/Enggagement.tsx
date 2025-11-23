"use client";

import { motion } from "framer-motion";
import LawBackground from "@/assets//lawyer-getin.jpg";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EngageToExceed() {
  return (
    <section
      className="relative py-24 text-white"
      style={{
        backgroundImage: `url(${LawBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* dark overlay */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          Engage to Exceed
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8"
        >
          Let us handle your legal matters with our experienced team. Contact us
          today.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-block"
        >
          <Link href={"/contact"}>
            <Button className="border border-white text-white bg-transparent hover:bg-white hover:text-slate-900 transition flex items-center gap-2">
              Get in touch <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.a>
      </div>
    </section>
  );
}
