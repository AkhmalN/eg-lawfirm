'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { supabase, BlogPost } from '@/lib/supabase';
import { Button } from '@/components/ui/button';

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      fetchPost(params.slug as string);
    }
  }, [params.slug]);

  const fetchPost = async (slug: string) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .maybeSingle();

    if (!error && data) {
      setPost(data);
      await supabase.from('blog_posts').update({ views: data.views + 1 }).eq('id', data.id);
    }
    setLoading(false);
  };

  if (loading) return <div className="pt-32 text-center">Loading...</div>;
  if (!post) return <div className="pt-32 text-center">Article not found</div>;

  return (
    <div className="pt-20">
      <article className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
            </Button>
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">{post.title}</h1>
            
            <div className="flex items-center text-sm text-slate-600 mb-8 space-x-6">
              <span className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author_name}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.published_at || '').toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span>{post.reading_time} min read</span>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
