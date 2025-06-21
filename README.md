# GoCat Website

Modern, responsive landing page for GoCat - the modern netcat alternative.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive**: Works perfectly on all devices
- **Interactive**: Smooth animations and hover effects
- **Fast**: Built with Next.js 14 and optimized for performance
- **SEO Optimized**: Meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

The website is configured for static export and can be deployed to:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Any static hosting service**

### GitHub Pages Deployment

```bash
# Build static files
npm run build

# The 'out' directory contains the static files
# Upload to your GitHub Pages repository
```

### Netlify Deployment

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy!

## 📁 Project Structure

```
website/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── public/              # Static assets
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Content

Edit `app/page.tsx` to update:
- Hero section text
- Features list
- Installation methods
- Examples
- Links and URLs

### Styling

Edit `app/globals.css` for:
- Custom CSS classes
- Animations
- Global styles

## 🔧 Configuration

### SEO

Update metadata in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ... other metadata
}
```

### Analytics

Add your analytics code to `app/layout.tsx` or create a separate component.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- **Lighthouse Score**: 100/100
- **Static Export**: No server required
- **Optimized Images**: Next.js image optimization
- **Code Splitting**: Automatic with Next.js
- **CSS Purging**: Tailwind removes unused styles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see the [LICENSE](../LICENSE) file for details.