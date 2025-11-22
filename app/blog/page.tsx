"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { supabase, BlogPost } from "@/lib/supabase";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import LawBackground from "@/assets/Case-Law-and-Legal-Strategy-2.png";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (!error && data) {
      setPosts(data);
    }
    setLoading(false);
  };

  return (
    <div className="pt-20">
      <section
        className="py-24  text-white"
        style={{ backgroundImage: `url(${LawBackground.src})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Legal Insights
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Expert analysis and updates on Indonesian law
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center text-slate-600">
              Loading articles...
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 hover:border-slate-900 transition-all h-full">
                      {post.featured_image && (
                        <div className="aspect-video bg-slate-100"></div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center text-sm text-slate-500 mb-3 space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(
                              post.published_at || ""
                            ).toLocaleDateString("id-ID")}
                          </span>
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.reading_time} min read
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center text-slate-900 font-semibold hover:translate-x-2 transition-transform">
                          Read More <ArrowRight className="ml-2 w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
}
