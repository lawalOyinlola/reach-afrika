# 🌍 Reach Afrika - Building Communities Across Africa

A modern, responsive website for Reach Afrika, a non-profit organization dedicated to building sustainable communities across Africa through education, healthcare, and economic development programs.

## ✨ Features

### 🎨 **Modern Design & UX**

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: Seamless theme switching
- **Smooth Animations**: GSAP-powered loading animations and transitions
- **Custom Fonts**: Bokcero font integration for brand consistency
- **Pixel Art Effects**: Interactive pixelated image animations

### 🚀 **Performance & SEO**

- **Core Web Vitals**: Optimized for Google's performance metrics
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemaps
- **Image Optimization**: WebP format with lazy loading
- **Analytics Ready**: Google Analytics 4 integration
- **PWA Support**: Progressive Web App capabilities

### 🛠 **Technical Stack**

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling
- **GSAP** for animations
- **React Hook Form** with Zod validation
- **Shadcn/ui** components
- **Framer Motion** for scroll animations

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/reach-afrika.git
   cd reach-afrika
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
# or
npm run build
```

## 📁 Project Structure

```
reach-afrika/
├── public/
│   ├── images/           # Optimized images
│   ├── logo/            # Brand assets
│   ├── font/            # Custom fonts
│   ├── robots.txt       # SEO directives
│   ├── sitemap.xml      # Site structure
│   └── site.webmanifest # PWA config
├── src/
│   ├── components/
│   │   ├── sections/    # Page sections
│   │   ├── ui/          # Reusable components
│   │   └── seo/         # SEO components
│   ├── lib/
│   │   ├── utils.ts     # Utility functions
│   │   ├── seo.ts       # SEO utilities
│   │   └── analytics.ts # Analytics tracking
│   ├── hooks/           # Custom React hooks
│   └── types/           # TypeScript definitions
├── index.html           # Main HTML file
└── package.json
```

## 🎯 Key Components

### Loading Animations

- **Basic Loading**: Simple Africa outline animation
- **Advanced Loading**: Enhanced with gradients and effects
- **Scroll-driven**: Pixel image animations tied to scroll

### SEO Components

- **SEOHead**: Dynamic meta tag management
- **StructuredData**: JSON-LD schema markup
- **PerformanceOptimizer**: Core Web Vitals monitoring
- **Breadcrumb**: Navigation with structured data

### Form Components

- **ContactForm**: Multi-step contact form with validation
- **BaseSelect**: Custom select component with multiple selection
- **Form Validation**: Zod schema validation

## 🎨 Design System

### Color Palette

- **Primary Green**: `#155c39` - Brand primary color
- **Secondary Orange**: `#f68116` - Accent color
- **Neutral Grays**: Various shades for text and backgrounds

### Typography

- **Primary Font**: Bokcero (custom)
- **System Fonts**: Inter, system-ui fallbacks
- **Font Weights**: 400, 500, 600, 700, 800

### Spacing & Layout

- **Grid System**: CSS Grid with subgrid support
- **Responsive Breakpoints**: Mobile-first approach
- **Container Max-width**: 1280px

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
REACT_APP_SITE_URL=https://reachafrika.org
```

### SEO Configuration

Update `src/lib/seo.ts` for site-specific SEO settings:

```typescript
export const defaultSEO: SEOProps = {
  title: "Your Site Title",
  description: "Your site description",
  url: "https://yoursite.com",
  // ... other settings
};
```

## 📊 Analytics & Monitoring

### Google Analytics 4

- Page view tracking
- Custom event tracking
- Core Web Vitals monitoring
- User engagement metrics

### Performance Monitoring

- Core Web Vitals (CLS, FID, FCP, LCP, TTFB)
- Custom performance metrics
- Real user monitoring (RUM)

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Netlify

1. Connect repository
2. Build command: `pnpm build`
3. Publish directory: `dist`

### Manual Deployment

1. Run `pnpm build`
2. Upload `dist` folder to your server
3. Configure server for SPA routing

## 🧪 Development

### Code Quality

- **TypeScript**: Strict type checking
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting (if configured)

### Testing

```bash
# Run tests (when implemented)
pnpm test

# Run tests in watch mode
pnpm test:watch
```

### Linting

```bash
# Check for linting errors
pnpm lint

# Fix linting errors
pnpm lint:fix
```

## 📈 Performance Optimization

### Build Optimizations

- **Code Splitting**: Dynamic imports for large components
- **Tree Shaking**: Remove unused code
- **Minification**: Compress JavaScript and CSS
- **Gzip Compression**: Server-level compression

### Runtime Optimizations

- **Image Lazy Loading**: Load images on demand
- **Resource Preloading**: Critical resource hints
- **Service Worker**: Caching strategies (future)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use semantic commit messages
- Write meaningful component documentation
- Test your changes thoroughly

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Shadcn/ui** for beautiful component library
- **Tailwind CSS** for utility-first styling
- **GSAP** for powerful animations
- **React Hook Form** for form management
- **Zod** for schema validation

## 📞 Support

For support, email info@reachafrika.org or create an issue in this repository.

---

**Built with ❤️ for Reach Afrika** - Building communities, one step at a time.
