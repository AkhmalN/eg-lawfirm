"use client";

import { useEffect, useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  RefreshCw,
  ChevronRight,
  BarChart3,
  Newspaper,
  CheckCircle,
  PenTool,
  Eye,
  AlertCircle,
  FileText,
  ArrowUpRight,
  Loader2,
} from "lucide-react";
import Link from "next/link";

interface Stats {
  total_news: number;
  total_published: number;
  total_draft: number;
}

interface NewsItem {
  id: string;
  title: string;
  isPublished: boolean;
  createdAt?: string;
  category: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    total_news: 0,
    total_published: 0,
    total_draft: 0,
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [recentNews, setRecentNews] = useState<NewsItem[]>([]);
  const [timeRange, setTimeRange] = useState<"day" | "week" | "month">("week");

  async function fetchStats() {
    try {
      setRefreshing(true);
      const [statsRes] = await Promise.all([fetch("/api/stats")]);
      if (!statsRes.ok) throw new Error("Failed to fetch stats");

      const statsData = await statsRes.json();

      setStats(statsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);

  const handleRefresh = () => {
    fetchStats();
  };

  const publishPercentage =
    stats.total_news > 0
      ? Math.round((stats.total_published / stats.total_news) * 100)
      : 0;

  const draftPercentage =
    stats.total_news > 0
      ? Math.round((stats.total_draft / stats.total_news) * 100)
      : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-gray-400 animate-spin mx-auto mb-3" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="w-5 h-5 text-blue-900" />
                <h1 className="text-1xl font-bold text-blue-900 italic">
                  Welcome Back, Admin
                </h1>
              </div>
              <p className="text-gray-600">
                Here`s an overview of your news platform
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-500">
                <Clock className="w-4 h-4 inline mr-1" />
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <button
                onClick={handleRefresh}
                disabled={refreshing}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <RefreshCw
                  className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`}
                />
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total News Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Newspaper className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    Total News
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {stats.total_news}
                  </h3>
                  <span className="text-sm text-gray-500">articles</span>
                </div>
              </div>
              <div
                className={`text-sm font-medium px-2 py-1 rounded-full ${
                  stats.total_news > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {stats.total_news > 0 ? (
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Active
                  </div>
                ) : (
                  "No data"
                )}
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/admin/news"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
              >
                View all news
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Published Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    Published
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {stats.total_published}
                  </h3>
                  <span className="text-sm text-gray-500">
                    ({publishPercentage}%)
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <div className="mb-2 flex justify-between text-sm text-gray-600">
                <span>Publication rate</span>
                <span className="font-medium">{publishPercentage}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full transition-all duration-500"
                  style={{ width: `${publishPercentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Draft Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-2 bg-amber-50 rounded-lg">
                    <PenTool className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    Drafts
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {stats.total_draft}
                  </h3>
                  <span className="text-sm text-gray-500">
                    ({draftPercentage}%)
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <div className="mb-2 flex justify-between text-sm text-gray-600">
                <span>Draft rate</span>
                <span className="font-medium">{draftPercentage}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${draftPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Recent News Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent News */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent News
                </h2>
                <Link
                  href="/admin/news"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  View all
                </Link>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Latest articles in your platform
              </p>
            </div>

            <div className="divide-y divide-gray-200">
              {recentNews.length > 0 ? (
                recentNews.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              item.isPublished
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {item.isPublished ? "Published" : "Draft"}
                          </span>
                          <span className="text-xs text-gray-500">
                            {item.category}
                          </span>
                          {item.createdAt && (
                            <span className="text-xs text-gray-500">
                              {new Date(item.createdAt).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                      <Link
                        href={`/admin/news/${item.id}`}
                        className="ml-4 p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center">
                  <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No news articles yet</p>
                  <Link
                    href="/admin/news/create"
                    className="inline-block mt-3 text-sm text-blue-600 hover:text-blue-700"
                  >
                    Create your first article
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions & Insights */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/admin/news/create"
                  className="group p-4 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors text-center"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-2 bg-white rounded-lg group-hover:bg-blue-50 transition-colors">
                      <PenTool className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      Create News
                    </span>
                  </div>
                </Link>
                <Link
                  href="/admin/news"
                  className="group p-4 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors text-center"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-2 bg-white rounded-lg group-hover:bg-green-50 transition-colors">
                      <Newspaper className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      Manage News
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Insights */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Insights
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Published Rate
                      </p>
                      <p className="text-xs text-gray-500">
                        Percentage of published articles
                      </p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-green-600">
                    {publishPercentage}%
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Attention Needed
                      </p>
                      <p className="text-xs text-gray-500">
                        Draft articles waiting
                      </p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-amber-600">
                    {stats.total_draft}
                  </span>
                </div>
              </div>
            </div>

            {/* Platform Status */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Platform Status
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Articles</span>
                  <span className="font-medium">{stats.total_news}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Published Articles
                  </span>
                  <span className="font-medium text-green-600">
                    {stats.total_published}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Draft Articles</span>
                  <span className="font-medium text-amber-600">
                    {stats.total_draft}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
