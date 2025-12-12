"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
  ArrowRight,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import BrandLogo from "@/assets/logo-brand.png";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="relative w-full mb-8 sm:mb-12 group">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl md:text-6xl font-light text-white/70 tracking-wide transition-all duration-300 group-hover:text-white group-hover:tracking-widest">
              Let’s Talk
            </h2>
            <div className="hidden md:block absolute right-0 top-2 transition-transform duration-300 group-hover:translate-x-4">
              <ArrowRight className="w-10 h-10 text-white transition-transform duration-300" />
            </div>
          </div>
          <div className="mt-4">
            <hr className="border-white/40" />
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 pb-8 sm:pb-12"
        >
          {/* Brand & Contact Info */}
          <motion.div
            variants={fadeInUp}
            className="text-sm sm:text-base leading-relaxed"
          >
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Image
                src={BrandLogo}
                alt="Brand Logo"
                width={BrandLogo.width}
                height={BrandLogo.height}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                priority
              />
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-lg sm:text-xl md:text-2xl">
                  E.G Law Firm
                </span>
                <span className="text-slate-300 tracking-wide text-base sm:text-lg md:text-md">
                  Advocate & Legal Consultant
                </span>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-slate-300 flex-shrink-0" />
                <a
                  href="tel:+6282128759115"
                  className="hover:text-white transition-colors text-base sm:text-lg md:text-lg"
                >
                  0821-2875-9115
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-slate-300 flex-shrink-0" />
                <a
                  href="mailto:eglawfirm19@gmail.com"
                  className="hover:text-white transition-colors text-base sm:text-lg md:text-lg"
                >
                  eglawfirm19@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-slate-300 flex-shrink-0" />
                <a
                  href="https://elmongultomlawfirm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-base sm:text-lg md:text-lg"
                >
                  elmongultomlawfirm.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4">
              Quick Links
            </h3>
            <ul>
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-all duration-300 relative group font-thin text-xl md:text-lg"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Practice Areas */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4">
              Practice Areas
            </h3>
            <ul>
              {[
                "Corporate Law",
                "Civil Litigation",
                "Contract Law",
                "Employment Law",
                "Real Estate",
                "Regulatory Compliance",
              ].map((area) => (
                <li key={area}>
                  <Link
                    href="/services"
                    className="hover:text-white transition-all duration-300 relative group text-xl md:text-lg font-thin"
                  >
                    {area}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Office Info */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4">
              Office Info
            </h3>
            <ul>
              <li className="flex items-start space-x-3 my-2 font-thin text-sm sm:text-base">
                <MapPin className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                <span>
                  Kantor Pusat: Jl. H. Sa`aba No.10, RT.13/RW.2, Meruya Sel.,
                  Kec. Kembangan, Kota Jakarta Barat, DKI Jakarta 11650
                </span>
              </li>
              <li className="flex items-start space-x-3 my-2 font-thin text-sm sm:text-base">
                <MapPin className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                <span>
                  Kantor Cabang Bali: Jl. Trenggana No.135, Penatih, Kec.
                  Denpasar Timur, Kota Denpasar, Bali 80238
                </span>
              </li>
              <li className="flex items-start space-x-3 my-2 font-thin text-sm sm:text-base">
                <MapPin className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                <span>
                  Kantor Cabang Medan: Jl. Suka No 24, Kelurahan Setia Rejo,
                  Kecamatan Medan Kota, Kota Medan 20212 Sumut
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar with social & copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 text-xs sm:text-sm text-white/70 gap-4"
        >
          {/* Social media icons */}
          <div className="flex space-x-6 order-2 md:order-1">
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="order-1 md:order-2 text-center md:text-right w-full md:w-auto">
            © {currentYear} Elmon Gultom Law Firm. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
