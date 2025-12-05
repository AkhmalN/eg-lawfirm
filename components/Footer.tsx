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
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import BrandLogo from "@/assets/logo-brand.png";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200">
      {/* Pre-footer / Thank You Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16"
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Terima Kasih
        </h3>
        <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
          EG Law Firm hadir sebagai mitra hukum yang dapat Anda percaya untuk
          memberikan solusi terbaik dan perlindungan hukum yang komprehensif.
          Dengan integritas dan dedikasi tinggi, kami siap membantu Anda dalam
          setiap kebutuhan hukum.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand & Social */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src={BrandLogo}
                alt="Brand Logo"
                width={BrandLogo.width}
                height={BrandLogo.height}
                className="w-16 h-16 object-contain"
                priority
              />
              <div className="flex flex-col">
                <span className="text-md font-bold text-white tracking-tight">
                  Elmongultom
                </span>
                <span className="text-xs text-slate-400 tracking-wide">
                  Legal Consultant
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Mitra hukum terpercaya dengan pengalaman bertahun-tahun,
              menghadirkan solusi hukum profesional bagi klien korporasi maupun
              personal.
            </p>

            {/* Contact Info */}
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a
                  href="tel:+6282128759115"
                  className="hover:text-white transition-colors"
                >
                  0821-2875-9115
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a
                  href="mailto:eglawfirm19@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  eglawfirm19@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a
                  href="https://elmongultomlawfirm.com"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  elmongultomlawfirm.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            {/* <div className="flex space-x-4 mt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-all duration-300 inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Practice Areas */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-white font-semibold text-lg mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-3">
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
                    className="text-sm hover:text-white transition-all duration-300 inline-block relative group"
                  >
                    {area}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Office Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-white font-semibold text-lg mb-4">
              Office Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>
                  Kantor Pusat: Jl. H. Sa`aba No.10, RT.13/RW.2, Meruya Sel.,
                  Kec. Kembangan, Kota Jakarta Barat, DKI Jakarta 11650
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>
                  Kantor Cabang Bali: Jl. Trenggana No.135, Penatih, Kec.
                  Denpasar Timur, Kota Denpasar, Bali 80238
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>
                  Kantor Cabang Medan: Jl. Suka No 24, Kelurahan Setia Rejo,
                  Kecamatan Medan Kota, Kota Medan 20212 Sumut
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-slate-800 mt-12 pt-8 text-center"
        >
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Elmon Gultom Law Firm. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
