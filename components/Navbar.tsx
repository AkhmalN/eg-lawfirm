"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChartNoAxesGantt, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/assets/logo-brand.png";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Firm" },
  { href: "/services", label: "Our Expertise" },
  // { href: "/news", label: "Our Blog" },
  // { href: "/contact", label: "Lets Talk" },
];

export default function Navbar() {
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
              className="w-fit hidden md:block"
            >
              <Image
                src={BrandLogo}
                alt="Brand Logo"
                width={BrandLogo.width}
                height={BrandLogo.height}
                className="w-16 h-16 md:w-16 md:h-16 object-contain"
                priority
              />
            </motion.div>

            <div className="hidden lg:flex flex-col leading-tight">
              <span
                className={`text-sm md:text-lg font-semibold ${
                  isScrolled ? "text-white/80" : "text-gray-400"
                } tracking-tight`}
              >
                E.G Law Firm
              </span>
              <span
                className={`text-[10px] md:text-base ${
                  isScrolled ? "text-white/50" : "text-gray-400"
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
              isScrolled || isOpen ? "text-white" : "text-blue-950"
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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden bg-blue-950  overflow-hidden mt-5`}
          >
            <div className="px-4 py-4 space-y-1 h-full">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-md text-2xl font-normal transition-colors hover:text-slate-200 ${
                      isActive(link.href)
                        ? " text-white"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                  <div
                    className={`translate-x-1/3 -bottom-1 h-[2px] w-[20%] transition-all
                      ${
                        isActive(link.href)
                          ? "bg-white opacity-100"
                          : "opacity-0"
                      }
                    `}
                  ></div>{" "}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
