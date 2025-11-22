"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scale,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import BrandLogo from "@/assets/logo-brand.png";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src={BrandLogo}
                alt="Brand Logo"
                width={BrandLogo.width}
                height={BrandLogo.height}
                className="w-16 h-16 object-contain"
                priority
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">
                  Elmon Gultom
                </span>
                <span className="text-xs text-slate-400">Law Firm</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Firma hukum profesional yang berkomitmen memberikan solusi hukum
              terbaik untuk individu dan perusahaan di Indonesia.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Our Team", href: "/team" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

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
                    className="text-sm hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Jl. Sudirman No. 123, Jakarta Pusat 10220, Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a
                  href="tel:+622112345678"
                  className="text-sm hover:text-white transition-colors"
                >
                  +62 21 1234 5678
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a
                  href="mailto:info@elmongultom.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  info@elmongultom.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

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
