"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChartNoAxesGantt,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Twitter,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/assets/logo-brand.png";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Firm" },
  { href: "/services", label: "Our Expertise" },
  { href: "/news", label: "Our Blog" },
  // { href: "/contact", label: "Lets Talk" },
];

export default function Navbar() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false); // close mobile menu on path change
  }, [pathname]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const isActive = (href: string) => currentPath === href;
  const isHomePath = currentPath === "/";

  return (
    <motion.nav
      // initial={{ y: -100 }}
      // animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${(isMobile && isOpen) || isScrolled ? "bg-blue-950" : "bg-transparent"}
  `}
      style={{ borderBottom: "0.1px solid #B0B0B0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-24 py-3 md:py-0">
          <Link href="/" className="flex items-center space-x-1 group ">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-fit"
            >
              <Image
                src={BrandLogo}
                alt="Brand Logo"
                width={BrandLogo.width}
                height={BrandLogo.height}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                priority
              />
            </motion.div>

            <div className="flex flex-col leading-tight">
              <span
                className={`text-sm md:text-lg font-semibold ${
                  isHomePath || isScrolled ? "text-white/80" : "text-gray-400"
                } tracking-tight`}
              >
                E.G Law Firm
              </span>
              <span
                className={`text-[10px] md:text-base ${
                  isHomePath || isScrolled ? "text-white/50" : "text-gray-400"
                } tracking-wide`}
              >
                Advocate & Legal Consultant
              </span>
            </div>
          </Link>
          {/* Desktop links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2"
                >
                  <span
                    className={`text-md font-thin transition-colors
                      text-slate-400
                    `}
                  >
                    {link.label}
                  </span>
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-[50%] transition-all
                      ${
                        isActive(link.href) && !isScrolled
                          ? "bg-blue-950 opacity-100"
                          : isActive(link.href)
                          ? "bg-white opacity-100"
                          : "opacity-0"
                      }
                    `}
                  ></div>
                </motion.div>
              </Link>
            ))}
            <button
              className={`relative ${
                isScrolled ? "bg-white text-blue-950" : "bg-blue-950 text-white"
              }  font-normal text-base py-3 px-6 rounded-full overflow-hidden group flex`}
            >
              <div>Let&apos;s talk </div>
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
              <span
                className={`absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full`}
              ></span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md ${
              isHomePath || isScrolled || isOpen
                ? "text-white"
                : "text-blue-950"
            }`}
          >
            {isOpen ? (
              <X className="w-10 h-10" />
            ) : (
              <ChartNoAxesGantt className="w-10 h-10" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black"
            />

            {/* Panel */}
            <motion.aside
              key="panel"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-blue-950 overflow-auto"
              aria-modal="true"
              role="dialog"
            >
              <div className="px-6 py-6 min-h-screen flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src={BrandLogo}
                      alt="Logo"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                    <div className="text-white">
                      <div className="font-semibold">E.G Law Firm</div>
                      <div className="text-xs text-white/70">
                        Advocate & Legal Consultant
                      </div>
                    </div>
                  </Link>
                  <button
                    aria-label="Close menu"
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md text-white/90"
                  >
                    <X className="w-7 h-7" />
                  </button>
                </div>

                <nav className="flex-1">
                  <ul className="space-y-3">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block w-full py-4 text-2xl font-light text-white/90 hover:text-white transition-colors ${
                            isActive(link.href) ? "text-white" : "text-white/80"
                          }`}
                        >
                          {link.label}
                        </Link>
                        <div className="h-[1px] bg-white/10 w-full" />
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <button className="w-full bg-white text-blue-950 py-3 rounded-full font-medium flex items-center justify-center gap-2">
                        Let&apos;s talk
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>

                  <div className="mt-6 text-sm text-white/80 space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <a href="tel:+6282128759115" className="underline">
                        0821-2875-9115
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      <a
                        href="mailto:eglawfirm19@gmail.com"
                        className="underline"
                      >
                        eglawfirm19@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5" />
                      <a
                        href="https://elmongultomlawfirm.com"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        elmongultomlawfirm.com
                      </a>
                    </div>
                  </div>
                </nav>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <a
                        href="#"
                        aria-label="LinkedIn"
                        className="text-white/70 hover:text-white"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        aria-label="Instagram"
                        className="text-white/70 hover:text-white"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        aria-label="Twitter"
                        className="text-white/70 hover:text-white"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                    <div className="text-xs text-white/60">
                      © {currentYear} Elmon Gultom Law Firm
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
