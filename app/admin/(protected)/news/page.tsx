"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Trash2,
  Edit,
  Eye,
  EyeOff,
  Search,
  Filter,
  ChevronUp,
  ChevronDown,
  Loader2,
  Plus,
} from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: string;
  isPublished: boolean;
  createdAt?: string;
}

export default function NewsList() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"title" | "category" | "createdAt">(
    "createdAt"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function loadNews() {
    setLoading(true);
    try {
      const res = await fetch("/api/news");
      if (!res.ok) throw new Error("Failed to fetch news");
      const data = await res.json();
      setNews(data);
    } catch (error) {
      console.error("Error loading news:", error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteNews(id: string) {
    if (!confirm("Are you sure you want to delete this news item?")) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/news/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete news");
      await loadNews();
    } catch (error) {
      console.error("Error deleting news:", error);
      alert("Failed to delete news item");
    } finally {
      setDeletingId(null);
    }
  }

  async function togglePublish(id: string, currentStatus: boolean) {
    try {
      const res = await fetch(`/api/news/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isPublished: !currentStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      await loadNews();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  }

  useEffect(() => {
    loadNews();
  }, []);

  // Filter and sort news
  const filteredNews = news
    .filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || item.category === categoryFilter;
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "published" && item.isPublished) ||
        (statusFilter === "draft" && !item.isPublished);
      return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
      const aValue = a[sortBy] || "";
      const bValue = b[sortBy] || "";
      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const categories = Array.from(new Set(news.map((item) => item.category)));

  const handleSort = (field: "title" | "category" | "createdAt") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            News Management
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your news articles and publications
          </p>
        </div>
        <Link
          href="/admin/news/create"
          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium shadow-sm hover:shadow"
        >
          <Plus className="w-4 h-4" />
          Create News
        </Link>
      </div>

      {/* Filters */}

      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-black focus:border-transparent bg-white"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-8 h-8 text-gray-400 animate-spin mb-3" />
            <p className="text-gray-600">Loading news...</p>
          </div>
        ) : filteredNews.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-3">No news found</div>
            <p className="text-gray-600 mb-4">
              {searchTerm || categoryFilter !== "all" || statusFilter !== "all"
                ? "Try changing your filters or search term"
                : "Get started by creating your first news article"}
            </p>
            <Link
              href="/admin/news/create"
              className="inline-flex items-center gap-2 text-black hover:text-gray-800 font-medium"
            >
              <Plus className="w-4 h-4" />
              Create News
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort("title")}
                      className="flex items-center gap-1 text-xs font-semibold text-gray-600 uppercase tracking-wider hover:text-gray-900"
                    >
                      Title
                      {sortBy === "title" &&
                        (sortOrder === "asc" ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        ))}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort("category")}
                      className="flex items-center gap-1 text-xs font-semibold text-gray-600 uppercase tracking-wider hover:text-gray-900"
                    >
                      Category
                      {sortBy === "category" &&
                        (sortOrder === "asc" ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        ))}
                    </button>
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredNews.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">
                        {item.title}
                      </div>
                      {item.createdAt && (
                        <div className="text-xs text-gray-500 mt-1">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600 line-clamp-2 max-w-md">
                        {item.description}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => togglePublish(item.id, item.isPublished)}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          item.isPublished
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        {item.isPublished ? (
                          <>
                            <Eye className="w-3 h-3" />
                            Published
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-3 h-3" />
                            Draft
                          </>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-1">
                        <Link
                          href={`/admin/news/${item.id}`}
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => deleteNews(item.id)}
                          disabled={deletingId === item.id}
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Delete"
                        >
                          {deletingId === item.id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Footer Info */}
      {!loading && filteredNews.length > 0 && (
        <div className="text-sm text-gray-500 text-center">
          Showing {filteredNews.length} of {news.length} news items
        </div>
      )}
    </div>
  );
}
