/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://certsync.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: ['https://certsync.com/sitemap.xml'],
  },
  exclude: ['/api/*', '/_next/*', '/admin/*'],
  transform: async (config, path) => {
    // Custom transform for specific pages
    const customConfig = {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };

    // Set higher priority for main pages
    if (path === '/') {
      customConfig.priority = 1.0;
    } else if (['/about', '/pricing', '/contact'].includes(path)) {
      customConfig.priority = 0.8;
    }

    return customConfig;
  },
};
