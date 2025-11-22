/*
  # Blog System for Elmon Gultom Law Firm

  ## Overview
  Complete blog management system with SEO optimization features for legal articles and insights.

  ## Tables Created
  
  ### `blog_posts`
  - `id` (uuid, primary key) - Unique identifier for each blog post
  - `title` (text) - Article title
  - `slug` (text, unique) - SEO-friendly URL slug
  - `content` (text) - Full article content
  - `excerpt` (text) - Short summary/description
  - `featured_image` (text) - URL to featured image
  - `author_name` (text) - Author's full name
  - `author_role` (text) - Author's position/title
  - `author_avatar` (text) - Author's profile picture URL
  - `meta_title` (text) - SEO meta title
  - `meta_description` (text) - SEO meta description
  - `focus_keyword` (text) - Primary SEO keyword
  - `status` (text) - 'draft' or 'published'
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  - `views` (integer) - Article view count
  - `reading_time` (integer) - Estimated reading time in minutes

  ### `blog_categories`
  - `id` (uuid, primary key) - Unique identifier for category
  - `name` (text, unique) - Category name
  - `slug` (text, unique) - URL-friendly slug
  - `description` (text) - Category description
  - `created_at` (timestamptz) - Creation timestamp

  ### `blog_tags`
  - `id` (uuid, primary key) - Unique identifier for tag
  - `name` (text, unique) - Tag name
  - `slug` (text, unique) - URL-friendly slug
  - `created_at` (timestamptz) - Creation timestamp

  ### `post_categories` (junction table)
  - Links posts to categories (many-to-many)

  ### `post_tags` (junction table)
  - Links posts to tags (many-to-many)

  ### `contact_submissions`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Client name
  - `email` (text) - Client email
  - `phone` (text) - Client phone
  - `subject` (text) - Inquiry subject
  - `message` (text) - Detailed message
  - `status` (text) - 'new', 'contacted', 'closed'
  - `created_at` (timestamptz) - Submission timestamp

  ## Security
  - RLS enabled on all tables
  - Public read access for published blog content
  - Authenticated access required for admin operations
  - Contact submissions are private

  ## Indexes
  - Optimized for blog listing, search, and filtering
  - Slug-based lookups for SEO URLs
  - Status filtering for draft/published content
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  featured_image text,
  author_name text NOT NULL DEFAULT 'Elmon Gultom Law Firm',
  author_role text DEFAULT 'Legal Consultant',
  author_avatar text,
  meta_title text,
  meta_description text,
  focus_keyword text,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  views integer DEFAULT 0,
  reading_time integer DEFAULT 5
);

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create blog_tags table
CREATE TABLE IF NOT EXISTS blog_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create post_categories junction table
CREATE TABLE IF NOT EXISTS post_categories (
  post_id uuid REFERENCES blog_posts(id) ON DELETE CASCADE,
  category_id uuid REFERENCES blog_categories(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

-- Create post_tags junction table
CREATE TABLE IF NOT EXISTS post_tags (
  post_id uuid REFERENCES blog_posts(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES blog_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);
CREATE INDEX IF NOT EXISTS idx_blog_tags_slug ON blog_tags(slug);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for blog_posts
CREATE POLICY "Public can view published blog posts"
  ON blog_posts FOR SELECT
  USING (status = 'published');

CREATE POLICY "Authenticated users can view all blog posts"
  ON blog_posts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for blog_categories
CREATE POLICY "Public can view categories"
  ON blog_categories FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage categories"
  ON blog_categories FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for blog_tags
CREATE POLICY "Public can view tags"
  ON blog_tags FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage tags"
  ON blog_tags FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for post_categories
CREATE POLICY "Public can view post categories"
  ON post_categories FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage post categories"
  ON post_categories FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for post_tags
CREATE POLICY "Public can view post tags"
  ON post_tags FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage post tags"
  ON post_tags FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for contact_submissions
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submission status"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert sample categories
INSERT INTO blog_categories (name, slug, description) VALUES
  ('Corporate Law', 'corporate-law', 'Legal services for business entities and corporate matters'),
  ('Civil Litigation', 'civil-litigation', 'Dispute resolution and court representation'),
  ('Contract Law', 'contract-law', 'Contract drafting, review, and enforcement'),
  ('Employment Law', 'employment-law', 'Workplace legal issues and labor disputes'),
  ('Real Estate', 'real-estate', 'Property transactions and real estate matters'),
  ('Regulatory Compliance', 'regulatory-compliance', 'Business compliance and regulatory matters')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample tags
INSERT INTO blog_tags (name, slug) VALUES
  ('Legal Update', 'legal-update'),
  ('Case Study', 'case-study'),
  ('Best Practices', 'best-practices'),
  ('Regulations', 'regulations'),
  ('Business Tips', 'business-tips'),
  ('Legal Opinion', 'legal-opinion')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample blog post
INSERT INTO blog_posts (
  title,
  slug,
  content,
  excerpt,
  author_name,
  author_role,
  meta_title,
  meta_description,
  focus_keyword,
  status,
  published_at,
  reading_time
) VALUES (
  'Memahami Kewajiban Hukum Perusahaan dalam Era Digital',
  'memahami-kewajiban-hukum-perusahaan-era-digital',
  'Di era transformasi digital, perusahaan menghadapi tantangan hukum yang semakin kompleks. Artikel ini membahas berbagai aspek kewajiban hukum yang harus dipahami oleh pelaku usaha.\n\n## Perlindungan Data Pribadi\n\nDengan berlakunya regulasi perlindungan data, perusahaan wajib memastikan keamanan data pelanggan dan karyawan.\n\n## Transaksi Elektronik\n\nKontrak digital dan tanda tangan elektronik kini memiliki kekuatan hukum yang sama dengan dokumen fisik.\n\n## Kepatuhan Perpajakan\n\nSistem perpajakan digital mengharuskan perusahaan untuk lebih transparan dalam pelaporan.',
  'Panduan lengkap tentang kewajiban hukum perusahaan di era digital, mencakup perlindungan data, transaksi elektronik, dan kepatuhan perpajakan.',
  'Dr. Elmon Gultom, S.H., M.H.',
  'Senior Partner',
  'Kewajiban Hukum Perusahaan Era Digital | Elmon Gultom Law Firm',
  'Pelajari kewajiban hukum perusahaan di era digital. Konsultasi dengan firma hukum terpercaya untuk memastikan kepatuhan bisnis Anda.',
  'kewajiban hukum perusahaan',
  'published',
  now(),
  8
) ON CONFLICT (slug) DO NOTHING;