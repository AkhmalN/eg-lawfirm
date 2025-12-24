"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NewsArticle = {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  isPublished: number;
  createdAt: string;
  updatedAt: string;
};

export default function NewsPage() {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(`/api/news?limit=10&page=${currentPage}`);
        const data = await response.json();
        console.log("Fetched news data:", data);
        setNewsArticles(data.data || []);
        setTotalPages(data.pagination.totalPages || 1);
      } catch (error) {
        console.error("Failed to fetch news articles:", error);
      }
    }

    fetchNews();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="bg-[#f5f8fb]">
      <Navbar />
      {/* HERO SECTION */}
      <section className="py-16 md:pt-44 md:pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto py-5">
          <div className="flex flex-col md:flex-row md:items-center md:gap-16">
            {/* Section Header */}
            <div className="md:w-1/4 flex flex-col items-start md:items-end md:pr-8 mb-6 md:mb-0">
              <SectionHeader
                title="News & Updates"
                titleColor="#29488a"
                bgColor="#F5C857"
              />
            </div>
            {/* Main Title */}
            <div className="flex-1">
              <h1 className="text-3xl sm:text-5xl font-light text-[#29488a] leading-tight mb-4">
                Stay updated with the latest news and insights from E.G. Lawfirm
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS GRID SECTION */}
      <section className="px-4 sm:px-8 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="rounded-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
                width={500}
                height={200}
              />
              <div className="px-0 py-2">
                <p className="text-sm text-gray-500 mb-2">
                  {article.category} /{" "}
                  {new Date(article.createdAt).toLocaleDateString()}
                </p>
                <h2 className="text-2xl font-semibold text-[#29488a] mb-4">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-700 mb-4">
                  {article.description}
                </p>
                <Link href={`/news/${article.id}`}>
                  <Button className="bg-[#29488a] text-white px-4 py-2 rounded-md">
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAGINATION SECTION */}
      <div className="flex justify-center items-center mt-8 py-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <Footer />
    </div>
  );
}
