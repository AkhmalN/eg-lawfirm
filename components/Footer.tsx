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
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-light mb-12">Let’s Talk</h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12"
        >
          {/* Brand & Contact Info */}
          <motion.div variants={fadeInUp} className="text-sm leading-relaxed">
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
                <span className="text-md font-bold tracking-tight text-2xl md:text-xl">
                  E.G Law Firm
                </span>
                <span className=" text-slate-300 tracking-wide text-1xl md:text-md">
                  Advocate & Legal Consultant
                </span>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-slate-300 flex-shrink-0" />
                <a
                  href="tel:+6282128759115"
                  className="hover:text-white transition-colors text-xl md:text-lg"
                >
                  0821-2875-9115
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-slate-300 flex-shrink-0" />
                <a
                  href="mailto:eglawfirm19@gmail.com"
                  className="hover:text-white transition-colors text-xl md:text-lg"
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
                  className="hover:text-white transition-colors text-xl md:text-lg"
                >
                  elmongultomlawfirm.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <h3 className="font-semibold text-2xl md:text-xl mb-4">
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
            <h3 className="font-semibold text-2xl md:text-xl mb-4">
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
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="font-semibold text-2xl md:text-xl mb-4">
              Office Info
            </h3>
            <ul>
              <li className="flex items-start space-x-3 my-2 font-thin">
                <MapPin className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                <span>
                  Kantor Pusat: Jl. H. Sa`aba No.10, RT.13/RW.2, Meruya Sel.,
                  Kec. Kembangan, Kota Jakarta Barat, DKI Jakarta 11650
                </span>
              </li>
              <li className="flex items-start space-x-3 my-2 font-thin">
                <MapPin className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                <span>
                  Kantor Cabang Bali: Jl. Trenggana No.135, Penatih, Kec.
                  Denpasar Timur, Kota Denpasar, Bali 80238
                </span>
              </li>
              <li className="flex items-start space-x-3 my-2 font-thin">
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
          className="flex justify-between items-center mt-12 pt-8 border-t border-white/20 text-sm text-white/70"
        >
          {/* Social media icons */}
          <div className="flex space-x-6">
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
          <div>© {currentYear} Elmon Gultom Law Firm. All rights reserved.</div>
        </motion.div>
      </div>
    </footer>
  );
}
