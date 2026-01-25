# SMS Verification Service

A production-ready website for an SMS verification receiving service, built with Next.js, TypeScript, and Tailwind CSS. Optimized for SEO, speed, and Cloudflare Pages hosting.

## 🚀 Features

- **SEO Optimized**: Complete metadata, JSON-LD structured data, sitemap, and robots.txt
- **Mobile-First Design**: Responsive layout optimized for all devices
- **Performance Focused**: Static generation for fast page loads
- **Cloudflare Ready**: Configured for Cloudflare Pages deployment with edge functions

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Homepage with all sections
│   ├── sitemap.ts        # Dynamic sitemap generation
│   └── robots.ts         # Robots.txt configuration
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── HeroSection.tsx   # Hero with H1 and CTA
│   ├── HowItWorksSection.tsx
│   ├── FeaturesSection.tsx
│   ├── UseCasesSection.tsx
│   ├── SEOContentSection.tsx
│   ├── FAQSection.tsx    # With schema markup
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   └── index.ts          # Component exports
├── functions/
│   └── api/
│       ├── sms.ts        # SMS API endpoint
│       └── numbers.ts    # Numbers API endpoint
├── public/
│   ├── manifest.json     # PWA manifest
│   └── icon.svg          # Site icon
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── wrangler.toml         # Cloudflare configuration
└── package.json          # Dependencies
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Cloudflare Pages
- **Database**: Cloudflare D1 (placeholder)
- **Edge Functions**: Cloudflare Pages Functions

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Build for Cloudflare Pages
npm run pages:build

# Deploy to Cloudflare Pages
npm run pages:deploy
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Site URL (update for production)
NEXT_PUBLIC_SITE_URL=https://smsverify.online

# API keys (add as needed)
# TWILIO_API_KEY=xxx
# DATABASE_URL=xxx
```

### Cloudflare D1 Setup

1. Create a D1 database:
```bash
wrangler d1 create sms-verify-db
```

2. Update `wrangler.toml` with your database ID

3. Run migrations:
```bash
wrangler d1 execute sms-verify-db --file=./migrations/001_init.sql
```

## 📄 SEO Features

- ✅ Optimized metadata with Next.js Metadata API
- ✅ Open Graph and Twitter Card support
- ✅ JSON-LD structured data (FAQ, Organization, WebSite, Service)
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (H1-H6)
- ✅ Keyword-optimized content

## 🎯 Target Keywords

- receive sms online
- sms verification
- temporary phone number
- online sms receiver
- free sms verification

## 📱 Homepage Sections

1. **Hero Section** - SEO-optimized H1, value proposition, CTA
2. **How It Works** - 3-step process explanation
3. **Features** - Why choose us (6 key benefits)
4. **Use Cases** - Platform compatibility (WhatsApp, Telegram, etc.)
5. **SEO Content** - 400+ words of keyword-rich content
6. **FAQ** - 5 questions with schema markup
7. **CTA** - Final conversion section

## 🚀 Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Configure build settings:
   - Build command: `npm run pages:build`
   - Build output directory: `.vercel/output/static`
3. Add environment variables in Cloudflare dashboard
4. Deploy!

### Manual Deployment

```bash
# Build and deploy
npm run pages:deploy
```

## 📝 Next Steps

1. **Add phone number pages**: Create `/app/number/[id]/page.tsx`
2. **Implement real SMS API**: Connect to SMS gateway
3. **Set up D1 database**: Create tables for numbers and messages
4. **Add authentication**: For premium features
5. **Implement real-time updates**: Using Cloudflare Durable Objects
6. **Add country pages**: SEO pages for each country

## 📄 License

MIT License - See LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines first.
