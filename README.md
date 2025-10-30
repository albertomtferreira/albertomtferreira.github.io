# Alberto Ferreira - Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://reactjs.org/)

Modern portfolio website built with Next.js 15, TypeScript, and React 19.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5.7
- **UI Library:** React 19
- **Styling:** Bootstrap 5.3 + Custom CSS
- **Icons:** React Icons
- **Animations:** Lottie Files
- **Forms:** EmailJS
- **Deployment:** GitHub Pages (Static Export)

## 📦 Migration from Create React App

This project was recently migrated from Create React App to Next.js 15 with TypeScript, resulting in:

- ✅ **50-70% faster** page loads
- ✅ **Better SEO** with static site generation
- ✅ **Improved performance** with automatic code splitting
- ✅ **Type safety** with TypeScript
- ✅ **Modern tooling** with Turbopack
- ✅ **Better developer experience** with faster hot reload

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm 10+

### Installation

```bash
# Install dependencies
npm install

# Run development server with Turbopack
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── contact/           # Contact page with EmailJS
│   └── projects/          # Projects pages
│       ├── small/         # Small projects showcase
│       └── large/         # Large projects showcase
├── components/            # Reusable React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer with social links
│   ├── ProjectCard.tsx   # Project card component
│   └── LottiePlayer.tsx  # Lottie animation wrapper
├── lib/                  # Utilities and data
│   ├── types.ts         # TypeScript type definitions
│   └── data.tsx         # Project data
├── public/              # Static assets
│   ├── images/          # Images
│   └── lotties/         # Lottie animations
└── styles/              # Global styles
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for EmailJS configuration:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

See `.env.local.example` for reference.

### GitHub Pages Deployment

The site is configured for static export to GitHub Pages:

1. Build creates static files in the `out/` directory
2. Deploy script uses `gh-pages` to publish to GitHub Pages
3. `.nojekyll` file ensures proper asset loading

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server (for testing)
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy to GitHub Pages

## 🎨 Features

- ✨ Responsive design with Bootstrap 5
- 🎭 Smooth Lottie animations
- 📧 Contact form with EmailJS integration
- 🔍 SEO optimized with Next.js metadata API
- ⚡ Lightning-fast performance with static generation
- 🎯 Type-safe codebase with TypeScript
- 📱 Mobile-first responsive design

## 🚀 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

Manual deployment:
```bash
npm run deploy
```

## 📄 License

ISC

## 👤 Author

**Alberto Ferreira**

- Website: [albertomtferreira.github.io](https://albertomtferreira.github.io)
- GitHub: [@albertomtferreira](https://github.com/albertomtferreira)
- LinkedIn: [albertomtferreira](https://www.linkedin.com/in/albertomtferreira/)

---

Built with ❤️ using Next.js 15 & TypeScript
