# Elmon Gultom Law Firm - Company Profile Website

Modern, professional law firm website built with Next.js 14, Framer Motion animations, and Supabase backend.

## Features

### Frontend
- **Next.js 14** with App Router
- **Framer Motion** animations throughout
- **TailwindCSS** + **shadcn/ui** components
- Fully responsive design
- Professional legal industry aesthetic
- SEO optimized

### Pages
1. **Home** - Hero with animated elements, services overview, stats, CTA
2. **About Us** - Company profile, vision, mission, core values
3. **Services** - Detailed legal service offerings
4. **Team** - Attorney profiles and specializations
5. **Portfolio** - Case studies and successful projects
6. **Blog/Insights** - Legal articles and regulatory updates
7. **Contact** - Contact form with Supabase integration
8. **Dashboard** - Admin panel for blog management

### Animations (Framer Motion)
- **Hero Section**: Parallax backgrounds, fade-in/slide-up headlines, scale/bounce CTAs
- **Page Transitions**: Smooth fade transitions between pages
- **Scroll-Triggered**: Staggered card animations, scale+opacity effects
- **Micro-interactions**: Button hover states, icon animations
- **SVG Illustrations**: Animated legal-themed graphics
- **Performance**: Respects `prefers-reduced-motion` for accessibility

### Database (Supabase)
- Blog posts with SEO metadata
- Categories and tags
- Contact form submissions
- Draft/publish workflow
- RLS policies for security

## Setup Instructions

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Configure Environment Variables
Create `.env.local` file:
\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
\`\`\`

### 3. Database Setup
The database schema has been automatically created via migration. Tables include:
- `blog_posts` - Blog articles with SEO fields
- `blog_categories` - Article categories
- `blog_tags` - Article tags
- `post_categories` - Junction table
- `post_tags` - Junction table
- `contact_submissions` - Contact form entries

### 4. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000`

### 5. Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with Navbar/Footer
│   ├── page.tsx            # Home page
│   ├── about/             # About Us page
│   ├── services/          # Services page
│   ├── team/              # Team page
│   ├── portfolio/         # Portfolio page
│   ├── blog/              # Blog listing & detail
│   ├── contact/           # Contact page
│   └── dashboard/         # Admin dashboard
├── components/
│   ├── Navbar.tsx         # Animated navigation
│   ├── Footer.tsx         # Site footer
│   ├── PageTransition.tsx # Page transition wrapper
│   ├── SEO.tsx            # SEO meta tags component
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── motion.ts          # Framer Motion variants
│   ├── supabase.ts        # Supabase client
│   └── utils.ts           # Utility functions
└── public/                # Static assets
\`\`\`

## Key Features

### SEO Optimization
- Proper HTML structure (H1-H3 hierarchy)
- Meta titles and descriptions on all pages
- Optimized keywords for legal industry
- Alt text for images
- Internal linking strategy
- Structured data (JSON-LD) ready
- Sitemap and robots.txt ready

### Animation Strategy
- **Performance-first**: Lightweight spring animations
- **Accessibility**: Respects motion preferences
- **UX-focused**: Guides user attention to CTAs
- **Consistent**: Unified motion language throughout
- **Non-intrusive**: Enhances rather than distracts

### Admin Dashboard
- Login interface (frontend ready)
- Full CRUD for blog articles
- Image upload capability
- SEO metadata fields
- Draft/publish status
- Article preview
- Ready for backend authentication integration

## Customization

### Colors
The design uses professional slate gray tones. To modify:
- Edit `tailwind.config.ts` color scheme
- Update primary colors in components

### Content
Replace placeholder content in:
- Team member profiles (`app/team/page.tsx`)
- Service descriptions (`app/services/page.tsx`)
- Portfolio cases (`app/portfolio/page.tsx`)
- Blog posts (via Dashboard or Supabase directly)

### Images
Add images to `/public` directory and reference them in components.

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy automatically

### Other Platforms
The static export is configured in `next.config.js`. Compatible with:
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## Performance

- Optimized animations with GPU acceleration
- Lazy loading for images
- Code splitting
- Tree shaking
- Minimal external dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Copyright © 2024 Elmon Gultom Law Firm. All rights reserved.

## Support

For technical support or customization requests, please contact the development team.
