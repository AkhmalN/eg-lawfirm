'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase, BlogPost } from '@/lib/supabase';

export default function DashboardPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    status: 'draft',
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setPosts(data);
  };

  const handleSave = async () => {
    if (currentPost.id) {
      await supabase.from('blog_posts').update(currentPost).eq('id', currentPost.id);
    } else {
      await supabase.from('blog_posts').insert([currentPost]);
    }
    setIsEditing(false);
    setCurrentPost({ title: '', slug: '', content: '', excerpt: '', status: 'draft' });
    fetchPosts();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this post?')) {
      await supabase.from('blog_posts').delete().eq('id', id);
      fetchPosts();
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Blog Dashboard</h1>
          <Button onClick={() => setIsEditing(!isEditing)} className="bg-slate-900">
            <Plus className="w-4 h-4 mr-2" /> New Article
          </Button>
        </div>

        {isEditing && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">{currentPost.id ? 'Edit' : 'New'} Article</h2>
            <div className="space-y-4">
              <Input placeholder="Title" value={currentPost.title} onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })} />
              <Input placeholder="Slug" value={currentPost.slug} onChange={(e) => setCurrentPost({ ...currentPost, slug: e.target.value })} />
              <Textarea placeholder="Excerpt" rows={3} value={currentPost.excerpt || ''} onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })} />
              <Textarea placeholder="Content" rows={10} value={currentPost.content} onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })} />
              <Input placeholder="Meta Title" value={currentPost.meta_title || ''} onChange={(e) => setCurrentPost({ ...currentPost, meta_title: e.target.value })} />
              <Input placeholder="Meta Description" value={currentPost.meta_description || ''} onChange={(e) => setCurrentPost({ ...currentPost, meta_description: e.target.value })} />
              <select value={currentPost.status} onChange={(e) => setCurrentPost({ ...currentPost, status: e.target.value as any })} className="w-full p-2 border rounded">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
              <div className="flex gap-4">
                <Button onClick={handleSave} className="bg-slate-900">Save</Button>
                <Button onClick={() => setIsEditing(false)} variant="outline">Cancel</Button>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid gap-4">
          {posts.map((post) => (
            <motion.div key={post.id} whileHover={{ scale: 1.01 }} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-slate-600 mb-2">{post.excerpt}</p>
                  <div className="flex gap-4 text-sm text-slate-500">
                    <span className={post.status === 'published' ? 'bg-green-100 text-green-800 px-2 py-1 rounded' : 'bg-yellow-100 text-yellow-800 px-2 py-1 rounded'}>
                      {post.status}
                    </span>
                    <span>{new Date(post.created_at).toLocaleDateString('id-ID')}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => { setCurrentPost(post); setIsEditing(true); }}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(post.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
