"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { TNewsDTO } from "@/types/news";
import Image from "next/image";
import Link from "next/link";

const NewsSection = () => {
  const [news, setNews] = useState<TNewsDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news?page=1&limit=4");
        const json = await res.json();
        console.log("Response API:", json);

        // Ambil array dari json.data
        const published = (json.data as TNewsDTO[]).filter(
          (item) => item.isPublished
        );

        setNews(published);
      } catch (error) {
        console.error("Gagal mengambil berita:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  console.log("news", news);
  // Skeleton card
  const SkeletonCard = () => (
    <div
      className="border rounded-lg overflow-hidden shadow-lg animate-pulse flex flex-col h-full"
      role="status"
      aria-label="Memuat berita..."
    >
      <div className="bg-gradient-to-r from-slate-100 to-slate-200 w-full h-56 md:h-48" />
      <div className="p-6 flex flex-col flex-1">
        <div className="bg-gradient-to-r from-slate-100 to-slate-200 h-4 w-24 mb-3 rounded-full" />
        <div className="bg-gradient-to-r from-slate-100 to-slate-200 h-6 w-full mb-3 rounded" />
        <div className="bg-gradient-to-r from-slate-100 to-slate-200 h-4 w-full mb-2 rounded" />
        <div className="bg-gradient-to-r from-slate-100 to-slate-200 h-4 w-full mb-2 rounded" />
        <div className="mt-auto pt-4">
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 h-3 w-32 rounded" />
        </div>
      </div>
    </div>
  );

  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white px-6 md:px-10 lg:px-16"
      aria-labelledby="news-section-title"
    >
      {/* Header with improved semantics */}
      <header className="text-start mx-auto">
        <h2
          id="news-section-title"
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight"
        >
          Berita & Publikasi Terbaru
        </h2>
        <div className="flex justify-start mb-6">
          <div className="w-20 h-1 bg-[#CDA772] rounded-full" />
        </div>
        <p className="text-lg text-slate-600 leading-relaxed mx-auto">
          Jelajahi publikasi terkini EG Law Firm yang menampilkan pencapaian,
          perkembangan kasus, dan insight hukum terbaru dari tim profesional
          kami.
        </p>
      </header>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
        {loading
          ? Array.from({ length: 3 }).map((_, idx) => (
              <SkeletonCard key={idx} />
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
                      ? new Date(item.createdAt).toLocaleDateString("id-ID", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
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
                    {item.description || item.content?.slice(0, 150) + "..."}
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

      {/* View All Button */}
      {!loading && news.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/news"
            className="inline-flex items-center px-8 py-3 bg-[#CDA772] text-white font-semibold rounded-lg hover:bg-slate-900 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            aria-label="Lihat semua berita dan publikasi"
          >
            Lihat Semua Publikasi
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      )}

      {/* Empty State */}
      {!loading && news.length === 0 && (
        <div
          className="text-center py-12"
          role="status"
          aria-label="Tidak ada berita tersedia"
        >
          <div className="text-slate-400 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">
            Belum Ada Publikasi
          </h3>
          <p className="text-slate-500 max-w-md mx-auto">
            Publikasi terbaru akan segera tersedia. Pantau terus halaman ini
            untuk update terkini.
          </p>
        </div>
      )}
    </motion.section>
  );
};

export default NewsSection;
