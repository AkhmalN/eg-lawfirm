import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featured_image: string | null;
  author_name: string;
  author_role: string;
  author_avatar: string | null;
  meta_title: string | null;
  meta_description: string | null;
  focus_keyword: string | null;
  status: 'draft' | 'published';
  published_at: string | null;
  created_at: string;
  updated_at: string;
  views: number;
  reading_time: number;
};

export type ContactSubmission = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};
