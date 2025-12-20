"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import SectionHeader from "./ui/section-header";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, staggerContainer } from "@/lib/motion";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { TNewsDTO } from "@/types/news";

const FirmOverviewSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [news, setNews] = useState<TNewsDTO[]>([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/news?limit=5");
        const data = await res.json();
        console.log("Fetched news data:", data.data);
        setNews(data.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchNews();
  }, []);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);

  const updateProgress = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const pct = maxScroll <= 0 ? 0 : (el.scrollLeft / maxScroll) * 100;
    setProgress(pct);
  }, []);

  const scrollBy = useCallback((offset: number) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: offset, behavior: "smooth" });
  }, []);

  const scrollToNext = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const itemWidth =
      el.querySelector("article")?.clientWidth ?? el.clientWidth;
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: itemWidth + 16, behavior: "smooth" });
    }
  }, []);

  const scrollToPrev = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const itemWidth =
      el.querySelector("article")?.clientWidth ?? el.clientWidth;
    if (el.scrollLeft <= 5) {
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -(itemWidth + 16), behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateProgress();
    const onScroll = () => updateProgress();
    el.addEventListener("scroll", onScroll, { passive: true });

    // autoplay
    autoplayRef.current = window.setInterval(() => {
      scrollToNext();
    }, 5000);

    return () => {
      el.removeEventListener("scroll", onScroll);
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, [scrollToNext, updateProgress]);

  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full min-h-screen bg-blue-950 text-white flex items-start py-5 pb-00 md:py-20 md:pb-32"
    >
      <div className="px-6 w-full flex flex-col items-start gap-5 md:gap-20">
        {/* ==========================
            HEADER ROW
        ========================== */}
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-10 w-full md:max-w-5xl mx-0 md:mx-64">
          {/* Left Header */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2 }}
            className="md:w-1/3"
          >
            <SectionHeader title="WHO WE ARE" bgColor="#F5C857" />
          </motion.div>

          {/* Right Header */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2 }}
            className="w-full flex flex-col justify-start text-left"
          >
            <h3 className="text-2xl md:text-4xl lg:text-5xl leading-relaxed font-light">
              A professional legal firm in Jakarta and Bali delivering
              strategic, integrity-driven solutions.
            </h3>
          </motion.div>
        </div>

        {/* ==========================
            CONTENT ROW (agak ke tengah)
        ========================== */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mx-auto max-w-7xl">
          {/* Image side */}
          <motion.div
            variants={fadeInUp}
            className="relative w-full md:w-1/2 h-80 md:h-[600px] lg:h-[800px] xl:h-[900px] overflow-hidden"
          >
            <Image
              src="/images/who-we-are-2.jpg"
              alt="law Building"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={fadeInUp}
            className="md:w-1/2 flex flex-col gap-10 justify-start"
          >
            {/* Main idea */}
            <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-gray-200 leading-relaxed">
              Supported by highly experienced advocates, we provide strategic
              legal guidance across a wide range of services.
            </p>

            {/* Value proposition */}
            <p className="text-lg font-light text-gray-200 leading-relaxed">
              We ensure every legal action we take offers strong protection and
              delivers the best possible outcomes for our clients.
            </p>

            {/* Button */}
            <div className="mt-5 md:mt-24">
              <Button
                className="relative bg-[#F5C857] text-white font-normal text-base py-3 px-6 rounded-full overflow-hidden group flex items-center justify-center gap-2 shadow-md hover:bg-[#D4A441] transition-all duration-300"
                asChild
              >
                <a
                  href="/services"
                  aria-label="Discover What We Do"
                  className="relative inline-flex items-center gap-2"
                >
                  <span>Discover What We Do</span>
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-2 w-full mx-0 md:mx-20 mt-20 md:mt-5">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2 }}
          >
            <SectionHeader
              title="Legal Updates, Publications & News"
              bgColor="#F5C857"
            />
          </motion.div>

          {/* Right Header */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2 }}
            className="max-w-6xl flex flex-col justify-start text-left"
          >
            <h3 className="text-2xl md:text-4xl lg:text-5xl leading-relaxed font-light">
              Providing you with the latest updates on legal developments in
              Indonesia.
            </h3>
            {/* Button */}
            <div className="mt-12 md:mt-16 inline-block group">
              <Button
                className="relative bg-[#F5C857] text-white font-normal text-base py-3 px-6 rounded-full overflow-hidden group flex items-center justify-center gap-2 shadow-md hover:bg-[#D4A441] transition-all duration-300"
                asChild
              >
                <a
                  href="/services"
                  aria-label="Discover What We Do"
                  className="relative inline-flex items-center gap-2"
                >
                  <span>Discover the Indonesia Law Blog</span>
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* carousel blog cards */}
          <motion.div
            variants={fadeInUp}
            className="w-full mt-8 md:mt-12 items-end"
          >
            <div className="max-w-7xl mx-auto relative">
              <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar px-4 py-6"
                aria-label="Featured news carousel"
              >
                {news.map((item, idx) => (
                  <article
                    key={idx}
                    className="w-[100%] md:w-[720px] snap-start rounded-xl p-4 flex-shrink-0"
                  >
                    <div className="relative h-56 rounded-md overflow-hidden mb-4">
                      <Image
                        src={item.image || "/images/news-placeholder.jpg"}
                        alt={item.title}
                        fill
                        className="object-cover object-[20%_40%] md:object-[50%_40%]"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 mb-4">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString()
                        : "Unknown Date"}
                    </p>

                    <h4 className="text-lg md:text-3xl font-light text-white mb-2">
                      {item.title}
                    </h4>

                    <div className="mt-4">
                      <Link
                        href={
                          item.optional_link
                            ? item.optional_link
                            : `/news/${item.id}`
                        }
                        target="_blank"
                        className="inline-block"
                      >
                        <button className="px-6 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-[#2f4f8f] transition-all duration-200">
                          Read Article
                        </button>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* hide native scrollbars but keep scrolling — progress bar remains visible */}
              <style jsx global>{`
                .hide-scrollbar {
                  -ms-overflow-style: none; /* IE and Edge */
                  scrollbar-width: none; /* Firefox */
                }
                .hide-scrollbar::-webkit-scrollbar {
                  display: none; /* Safari and Chrome */
                }
              `}</style>

              {/* progress bar */}
              <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(progress)}
                  className="h-1 bg-white rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* controls below the progress bar, left-aligned (start layout) */}
              <div className="mt-4 flex items-center justify-start gap-3">
                <button
                  onClick={scrollToPrev}
                  aria-label="Previous"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center backdrop-blur hover:bg-white/10 transition"
                >
                  <ChevronLeft size={18} className="text-white/90" />
                </button>

                <button
                  onClick={scrollToNext}
                  aria-label="Next"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center backdrop-blur hover:bg-white/10 transition"
                >
                  <ChevronRight size={18} className="text-white/90" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FirmOverviewSection;
