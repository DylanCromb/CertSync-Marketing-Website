import PolicyDetailClient from './PolicyDetailClient';

// Generate static params for static export
export async function generateStaticParams() {
  return [
    { slug: 'privacy-policy' },
    { slug: 'terms-of-service' },
    { slug: 'security-policy' },
    { slug: 'cookie-policy' },
    { slug: 'data-processing-agreement' },
    { slug: 'acceptable-use-policy' },
  ];
}

export default async function PolicyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <PolicyDetailClient slug={slug} />;
}
