# Women in Tech Society Website

A modern, responsive website for the Women in Tech Society at IIT Madras BS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd web
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5174` in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📋 Project Structure

```
web/
├── src/
│   ├── components/     # Reusable UI components
│   ├── Home.tsx       # Landing page
│   ├── AboutPage.tsx  # About page
│   ├── Teams.tsx      # Team members page
│   ├── App.tsx        # Main app router
│   ├── main.tsx       # Entry point
│   └── globals.css    # Global styles
├── public/            # Static assets
├── index.html         # HTML entry point
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript config
├── vite.config.ts     # Vite configuration
└── tailwind.config.js # Tailwind CSS config
```

## 🛠️ Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics
- **React Router v7** - Client-side routing

## ✨ Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/Light theme support
- ✅ Interactive 3D components
- ✅ Smooth animations
- ✅ Error boundaries for stability
- ✅ Accessibility (WCAG)
- ✅ SEO optimized
- ✅ TypeScript strict mode

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

## 🔒 Environment Variables

Copy `.env.example` to `.env` and update as needed:

```bash
VITE_APP_NAME=Women in Tech Society
VITE_APP_URL=https://wits.iitm.ac.in
VITE_LINKEDIN_URL=https://www.linkedin.com/company/wits-iitmadras-bs
# ... other variables
```

## ✅ Code Quality

- **TypeScript Strict Mode** - Full type checking
- **ESLint** - Code linting with best practices
- **Error Boundaries** - Graceful error handling
- **Accessibility** - ARIA labels and semantic HTML

### Run Linting

```bash
npm run lint
```

## 🎨 Styling

- **Tailwind CSS** - Utility classes for styling
- **CSS Variables** - Theme customization in `globals.css`
- **Responsive Classes** - Mobile-first approach

### Color Scheme

The site supports both light and dark themes with CSS custom properties:

- Primary brand color: `--purple`
- Accent colors: `--teal`, `--coral`, `--sage`, `--gold`
- Theme colors defined in `globals.css`

## 🚨 Performance

- Lazy loading for 3D components
- Suspense boundaries for async components
- Error boundaries for crash prevention
- Optimized animations with `prefers-reduced-motion` support

## 📊 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📝 Code Style Guide

- Use TypeScript for all code
- Functional components with hooks
- Descriptive variable and function names
- Comments for complex logic
- Proper error handling
- Accessibility first approach

## 🐛 Known Issues

None currently.

## 📄 License

Proprietary - Women in Tech Society

## 📧 Support

For issues or questions, contact: womenintech.society@study.iitm.ac.in
