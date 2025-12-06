"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { TNewsDTO } from "@/types/news";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NewsDetailPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState<TNewsDTO | null>(null);
  const [latestNews, setLatestNews] = useState<TNewsDTO[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const res = await fetch(`/api/news/${id}`);
        if (!res.ok) throw new Error("Berita tidak ditemukan");
        const data: TNewsDTO = await res.json();
        setNews(data);

        // Fetch semua berita untuk kategori & berita terbaru
        const allRes = await fetch(`/api/news?limit=10&page=1`);
        const allData = await allRes.json();
        const published: TNewsDTO[] = allData.data.filter(
          (item: TNewsDTO) => item.isPublished
        );

        // Kategori unik
        const uniqueCategories = Array.from(
          new Set(published.map((item) => item.category).filter(Boolean))
        );
        setCategories(uniqueCategories as string[]);

        // Berita terbaru (3 berita terakhir, kecuali yang sedang dibuka)
        const latest = published
          .filter((item) => item.id !== data.id)
          .sort(
            (a, b) =>
              new Date(b.createdAt!).getTime() -
              new Date(a.createdAt!).getTime()
          )
          .slice(0, 3);
        setLatestNews(latest);
      } catch (err: any) {
        setError(err.message || "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (loading)
    return (
      <div className="p-6 text-center h-[80dvh] flex justify-center items-center flex-col">
        <h5
          id="news-section-title"
          className="text-1xl font-bold text-slate-900 mb-4 tracking-tight text-center"
        >
          Loading...
        </h5>
        <div className="flex justify-start mb-6">
          <div className="w-20 h-1 bg-[#CDA772] rounded-full" />
        </div>
      </div>
    );
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;
  if (!news) return null;

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kiri - Detail Berita */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
          <p className="text-sm text-slate-500 mb-6">
            {news.createdAt
              ? new Date(news.createdAt).toLocaleDateString()
              : ""}
          </p>
          {news.image && (
            <div className="relative w-full h-64 md:h-96 mb-6">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover rounded"
              />
            </div>
          )}
          <div className="prose max-w-full text-slate-700">
            {news.content || news.description}
          </div>
        </div>

        {/* Kanan - Sidebar */}
        <div className="space-y-8">
          {/* Kategori */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kategori</h3>
            <div className="flex justify-start mb-6">
              <div className="w-20 h-1 bg-[#CDA772] rounded-full" />
            </div>
            <ul className="space-y-2">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  className="text-slate-600 hover:text-[#CDA772] cursor-pointer"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Berita Terbaru */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Berita Terbaru</h3>
            <div className="flex justify-start mb-6">
              <div className="w-20 h-1 bg-[#CDA772] rounded-full" />
            </div>
            <ul className="space-y-4">
              {latestNews.map((item) => (
                <li key={item.id} className="flex gap-3">
                  {item.image && (
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  )}
                  <div>
                    <a
                      href={`/news/${item.id}`}
                      className="font-medium hover:text-[#CDA772]"
                    >
                      {item.title}
                    </a>
                    <p className="text-xs text-slate-400">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString()
                        : ""}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetailPage;
