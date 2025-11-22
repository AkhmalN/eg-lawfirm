# Deployment Guide - Elmon Gultom Law Firm Website

## Quick Start

### 1. Environment Setup

Create `.env.local` file with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

You can find these in your Supabase project settings.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

### 4. Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Click "Deploy"

## Features Implemented

### Pages
- ✅ Home page with animated hero section
- ✅ About Us page
- ✅ Services page  
- ✅ Team page
- ✅ Portfolio page
- ✅ Blog listing and detail pages
- ✅ Contact page with form
- ✅ Admin dashboard for blog management

### Animations (Framer Motion)
- ✅ Hero section animations
- ✅ Page transitions
- ✅ Scroll-triggered animations
- ✅ Hover effects and micro-interactions
- ✅ Stagger animations for cards
- ✅ Respects prefers-reduced-motion

### Database (Supabase)
- ✅ Blog posts with categories and tags
- ✅ Contact form submissions
- ✅ Draft/publish workflow
- ✅ SEO metadata fields
- ✅ Row Level Security policies

### SEO
- ✅ Meta tags on all pages
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Structured data ready
- ✅ SEO-friendly URLs

## Customization

### Update Content
1. **Team Members**: Edit `app/team/page.tsx`
2. **Services**: Edit `app/services/page.tsx`
3. **Portfolio Cases**: Edit `app/portfolio/page.tsx`
4. **Contact Info**: Edit `components/Footer.tsx` and `app/contact/page.tsx`

### Update Colors
Edit `tailwind.config.ts` to change the color scheme.

### Add Blog Posts
1. Visit `/dashboard` in your browser
2. Click "New Article"
3. Fill in all fields including SEO metadata
4. Set status to "Published"
5. Save

## Performance Tips

- Images are optimized automatically
- Code splitting is enabled
- Animations use GPU acceleration
- Static pages are pre-rendered where possible

## Support

For technical issues, check:
- Build logs in Vercel dashboard
- Browser console for client errors
- Network tab for API issues
- Supabase logs for database errors

## License

© 2024 Elmon Gultom Law Firm. All rights reserved.
