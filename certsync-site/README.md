# CertSync Website

A modern, responsive website for CertSync - a certificate management platform. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🚀 Next.js 15 with App Router
- 📱 Responsive design with Tailwind CSS
- 🎨 Custom primary color (#2196F3) and gradient utilities
- 📝 TypeScript for type safety
- 🧹 ESLint and Prettier for code quality
- 🎭 Framer Motion for animations
- 🎯 Lucide React for icons
- 📄 Next Sitemap for SEO
- ♿ Accessibility features (ARIA labels, focus management)
- 🎯 12-column grid system with consistent spacing

## Project Structure

```
certsync-site/
├── app/
│   └── (site)/
│       ├── layout.tsx          # Global layout
│       ├── page.tsx            # Home page
│       ├── about/page.tsx      # About page
│       ├── contact/page.tsx    # Contact page
│       ├── policy/page.tsx     # Privacy policy
│       └── pricing/page.tsx    # Pricing page
├── components/
│   ├── BadgeRow.tsx           # Badge row component
│   ├── ContactForm.tsx        # Contact form
│   ├── Container.tsx          # Layout container
│   ├── FeatureCard.tsx        # Feature card
│   ├── Footer.tsx             # Site footer
│   ├── Navbar.tsx             # Navigation bar
│   ├── NumberedItem.tsx       # Numbered list item
│   └── PricingCard.tsx        # Pricing card
├── public/
│   └── assets/                # Static assets
└── ...
```

## Project Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd certsync-site
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes sitemap generation)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## Site Map

### Routes

- `/` - Home page with hero, features, and CTAs
- `/about` - About page with team information
- `/contact` - Contact form with validation
- `/policy` - Policy overview with links to individual policies
- `/policy/[slug]` - Individual policy pages (privacy, terms, etc.)
- `/pricing` - Pricing tiers with comparison table and FAQs

### Key Components

- `Container` - 12-column grid layout wrapper
- `Navbar` - Responsive navigation with mobile menu
- `Footer` - Site footer with links and contact info
- `PrimaryButton` - Primary action button component
- `SecondaryButton` - Secondary/outline button component
- `Card` - Reusable card component with hover effects
- `NumberedItem` - Numbered list item for features
- `SectionEyebrow` - Small caps section labels

## Editing Content

### Copy/Text Content

- **Home page**: `app/HomePage.tsx` - Hero text, feature descriptions, CTAs
- **About page**: `app/(site)/about/AboutPage.tsx` - Team information, company story
- **Contact page**: `app/(site)/contact/ContactPage.tsx` - Form fields, success message
- **Pricing page**: `app/(site)/pricing/PricingPage.tsx` - Pricing tiers, features, FAQs
- **Policy pages**: `app/(site)/policy/` - Policy content and descriptions

### Assets

- **Images**: `public/assets/` - Logos, mockups, app store badges
- **Open Graph**: `public/og.png` - Social media preview image
- **Favicon**: `app/favicon.ico` - Site icon

### Styling

- **Colors**: `tailwind.config.ts` - Primary color, neutral palette
- **Components**: `components/` - Reusable UI components
- **Global styles**: `app/globals.css` - Base styles and utilities

### SEO

- **Metadata**: Each page exports metadata for SEO
- **Sitemap**: Auto-generated via `next-sitemap.config.js`
- **Open Graph**: Configured in layout and page metadata

## Build and Export

### Production Build

```bash
npm run build
```

This command will:

- Build the Next.js application
- Generate sitemap.xml and robots.txt
- Optimize assets for production

### Static Export (if needed)

For static hosting platforms that don't support Next.js server features:

```bash
npm run build
npm run export
```

## Deploy to Netlify (SSR)

### Prerequisites

- Repository connected to Netlify
- Node.js 20 (configured in `.nvmrc`)

### Build Settings

- **Build command**: `npm run build`
- **Publish directory**: Not needed (plugin manages it)
- **Framework**: Next.js (auto-detected)

### Environment Variables (if added later)

- `SITE_URL` - Your production domain (e.g., `https://certsync.com`)
- `NODE_VERSION` - Node.js version (set to 20 in netlify.toml)

### Deployment Steps

1. **Connect Repository to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub/GitLab repository

2. **Configure Build Settings:**
   - Build command: `npm run build`
   - Publish directory: Leave empty (plugin handles it)
   - Framework: Next.js (auto-detected)

3. **Deploy:**
   - Netlify will automatically deploy on every push to main branch
   - The `@netlify/plugin-nextjs` handles SSR routing and functions
   - Custom domain can be configured in site settings

### Testing Direct Routes

After deployment, test these direct URLs to ensure SSR is working:

- `https://your-site.netlify.app/about`
- `https://your-site.netlify.app/policy`
- `https://your-site.netlify.app/pricing`
- `https://your-site.netlify.app/contact`

All routes should load without 404 errors.

### Other Platforms

For other deployment platforms, build the project and serve the `.next` directory:

```bash
npm run build
npm run start
```

### Environment Variables

Set the following environment variables in your deployment platform:

- `SITE_URL` - Your production domain (e.g., `https://certsync.com`)
- `NODE_VERSION` - Node.js version (recommended: 18)

## Customization

### Colors

The primary color is set to `#2196F3` in `tailwind.config.ts`. You can customize the color palette by modifying the theme configuration.

### Components

All components are located in the `components/` directory and can be easily customized or extended.

### Pages

Pages are located in the `app/(site)/` directory. Add new pages by creating new directories with `page.tsx` files.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Next Sitemap** - Sitemap generation
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
