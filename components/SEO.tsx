import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  jsonLd?: object;
}

export default function SEO({
  title = 'Elmon Gultom Law Firm - Konsultan Hukum Profesional',
  description = 'Firma hukum terpercaya di Indonesia. Melayani konsultasi hukum perusahaan, litigasi, kontrak, dan berbagai layanan hukum lainnya dengan tim profesional berpengalaman.',
  keywords = 'firma hukum, konsultan hukum, pengacara, advokat, legal consultant, law firm Indonesia, jasa hukum, konsultasi hukum perusahaan',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonical,
  jsonLd
}: SEOProps) {
  const siteTitle = title.includes('Elmon Gultom') ? title : `${title} | Elmon Gultom Law Firm`;
  const siteUrl = 'https://elmongultom.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <link rel="canonical" href={fullCanonical} />

      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Elmon Gultom Law Firm" />
      <meta property="og:locale" content="id_ID" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      <link rel="icon" href="/favicon.ico" />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
