"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import Image from "next/image";
import LawBackground from "@/assets/Case-Law-and-Legal-Strategy-2.png";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TNewsDTO } from "@/types/news";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const NewsPage = () => {
  const [news, setNews] = useState<TNewsDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/news?page=${page}&limit=${limit}`);
        const json = await res.json();
        setNews(json.data.filter((item: TNewsDTO) => item.isPublished));
        setTotalPages(json.pagination.totalPages);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page]);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div>
      <Navbar />

      <div className="">
        {/* Hero Section */}
        <section
          className=" py-32 text-white relative bg-cover bg-center"
          style={{ backgroundImage: `url(${LawBackground.src})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-4xl mx-auto text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight"
            >
              Berita & Publikasi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-xl sm:text-2xl text-slate-200"
            >
              Jelajahi publikasi terkini EG Law Firm yang menampilkan
              pencapaian, perkembangan kasus, dan insight hukum terbaru dari tim
              profesional kami.
            </motion.p>
          </div>
        </section>

        {/* News Grid */}
        <motion.section
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-white md:px-10 py-12"
        >
          <div className="text-start mb-12 mx-6 max-w-4xl">
            <h2 className="text-4xl font-semibold text-slate-900 mb-3 tracking-tight">
              Semua Berita & Publikasi
            </h2>
            <div className="w-24 h-[3px] bg-[#CDA772] mb-6 rounded-full" />
            <p className="text-lg text-slate-600 leading-relaxed">
              Temukan berita terbaru, insight hukum, dan publikasi resmi dari EG
              Law Firm. Di halaman ini, Anda bisa membaca update proyek, tips
              hukum, perkembangan kasus, serta event dan kegiatan yang relevan.
              Semua berita tersusun berdasarkan tanggal publikasi dan kategori,
              sehingga memudahkan Anda mengikuti informasi yang paling penting
              bagi Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-6">
            {loading
              ? Array.from({ length: limit }).map((_, idx) => (
                  <div
                    key={idx}
                    className="border rounded-lg overflow-hidden shadow-lg animate-pulse h-80 bg-slate-200"
                  />
                ))
              : news.map((item, index) => (
                  <div
                    key={item.id}
                    className="group relative bg-white border border-slate-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                    itemScope
                    itemType="https://schema.org/NewsArticle"
                  >
                    {/* Image with overlay */}
                    {item.image && (
                      <div className="relative w-full h-56 md:h-48 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                          priority={index === 0}
                          itemProp="image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                        {/* Category badge */}
                        {item.category && (
                          <div className="absolute top-4 left-4">
                            <span className="text-xs font-semibold text-white bg-[#CDA772] px-3 py-1.5 rounded-full shadow-md">
                              {item.category}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-6 md:p-7 flex flex-col flex-1">
                      {/* Date */}
                      <time
                        className="text-sm text-slate-500 mb-3 block"
                        dateTime={
                          item.createdAt
                            ? new Date(item.createdAt).toISOString()
                            : ""
                        }
                        itemProp="datePublished"
                      >
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString(
                              "id-ID",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )
                          : ""}
                      </time>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[#CDA772] transition-colors duration-300">
                        <Link
                          href={`/news/${item.id}`}
                          className="focus:outline-none focus:ring-2 focus:ring-[#CDA772] focus:ring-offset-2 rounded"
                          itemProp="url"
                        >
                          <span itemProp="headline">{item.title}</span>
                        </Link>
                      </h3>

                      {/* Description */}
                      <p
                        className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1"
                        itemProp="description"
                      >
                        {item.description ||
                          item.content?.slice(0, 150) + "..."}
                      </p>

                      {/* Read More Link */}
                      <div className="mt-auto pt-4 border-t border-slate-100">
                        <Link
                          href={`/news/${item.id}`}
                          className="inline-flex items-center text-sm font-medium text-[#CDA772] hover:text-slate-900 transition-colors duration-300 group/readmore"
                          aria-label={`Baca selengkapnya tentang ${item.title}`}
                        >
                          Baca Selengkapnya
                          <svg
                            className="ml-2 w-4 h-4 transform group-hover/readmore:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>

                    {/* Schema.org structured data */}
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                          "@context": "https://schema.org",
                          "@type": "NewsArticle",
                          headline: item.title,
                          description:
                            item.description || item.content?.slice(0, 200),
                          image: item.image,
                          datePublished: item.createdAt,
                          dateModified: item.updatedAt || item.createdAt,
                          author: {
                            "@type": "Organization",
                            name: "EG Law Firm",
                          },
                          publisher: {
                            "@type": "Organization",
                            name: "EG Law Firm",
                            logo: {
                              "@type": "ImageObject",
                              url: "https://yourdomain.com/logo.png",
                            },
                          },
                        }),
                      }}
                    />
                  </div>
                ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className="px-4 py-2 bg-[#CDA772] text-white rounded disabled:bg-gray-300"
            >
              <ArrowLeft />
            </button>
            <span className="text-slate-600">
              Halaman {page} dari {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="px-4 py-2 bg-[#CDA772] text-white rounded disabled:bg-gray-300"
            >
              <ArrowRight />
            </button>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default NewsPage;
