# 🌟 Blockchain SaaS Dark Theme

A modern, responsive blockchain SaaS application built with Astro.js featuring a sleek dark theme, interactive animations, and comprehensive content management.

## 🚀 Live Demo

**🔗 [View Live Project](<(https://keen-piroshki-08aa3b.netlify.app/)>)**

_Note: Replace with your actual deployment URL once deployed_

## 📸 Screenshots

![Hero Section](![alt text](image.png))
_Modern hero section with animated 3D elements_

![Features Section](![alt text](image-1.png))
_Interactive card carousel showcasing blockchain features_

## ✨ Features

### 🎨 **Modern Design**

- **Dark Theme** - Sleek, professional dark interface
- **Cut-Corner Design** - Unique geometric design elements
- **Responsive Layout** - Perfect on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion powered interactions

### 🔧 **Technical Features**

- **Astro.js Framework** - Fast, optimized static site generation
- **React Components** - Interactive UI components with TypeScript
- **Tailwind CSS** - Utility-first CSS framework
- **Content Collections** - Dynamic blog and career pages
- **SEO Optimized** - Meta tags and semantic HTML

### 📱 **Pages & Sections**

- **Homepage** - Hero, features, testimonials, latest posts
- **Blog System** - Dynamic blog with categories and post details
- **Careers Page** - Job listings with filters
- **Contact Form** - Professional contact form with validation
- **404 Page** - Custom error page

### 🎭 **Interactive Elements**

- **3D Animations** - Scroll-triggered 3D object rotations
- **Card Carousel** - Auto-playing feature showcase
- **Hexagon Backgrounds** - Animated geometric patterns
- **Hover Effects** - Smooth transitions and micro-interactions

## 🛠️ Tech Stack

| Technology        | Purpose               | Version  |
| ----------------- | --------------------- | -------- |
| **Astro.js**      | Static Site Generator | ^4.0.0   |
| **React**         | UI Components         | ^18.0.0  |
| **TypeScript**    | Type Safety           | ^5.0.0   |
| **Tailwind CSS**  | Styling               | ^3.0.0   |
| **Framer Motion** | Animations            | ^10.0.0  |
| **Markdown**      | Content Management    | Built-in |

## 📁 Project Structure

```
saas-blockchain-dark/
├── public/
│   ├── assets/
│   │   └── images/          # 3D objects, avatars, icons
│   └── favicon.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Card.tsx
│   │   ├── CutCornerButton.tsx
│   │   ├── Hexagon.tsx
│   │   └── ...
│   ├── content/            # Content collections
│   │   ├── blog/           # Blog posts (Markdown)
│   │   └── positions/      # Career listings
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route pages
│   │   ├── blog/
│   │   ├── careers.astro
│   │   ├── contact.astro
│   │   └── index.astro
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── FeaturesCardsSection.tsx
│   │   └── ...
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/CANDELY001/saas-blockchain-dark.git
   cd saas-blockchain-dark
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist/` folder to [Netlify](https://netlify.com)

### GitHub Pages

```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📝 Content Management

### Adding Blog Posts

Create new `.md` files in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Post description"
pubDate: "2024-01-15"
category: "Technology"
author:
  name: "Author Name"
  title: "Job Title"
  image: "/assets/images/avatar.jpg"
---

Your blog content here...
```

### Adding Career Positions

Create new `.md` files in `src/content/positions/`:

```markdown
---
title: "Frontend Developer"
description: "Join our development team"
category: "Engineering"
remote: true
type: "Full-time"
---

Position details...
```

## 🎨 Customization

### Colors

Edit theme colors in `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#a855f7', // Fuchsia
      }
    }
  }
}
```

### Fonts

The project uses:

- **Heading**: Karla (Google Fonts)
- **Body**: Inter (Google Fonts)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**CANDELY001**

- GitHub: [@CANDELY001](https://github.com/CANDELY001)
- Repository: [saas-blockchain-dark](https://github.com/CANDELY001/saas-blockchain-dark)

## 🙏 Acknowledgments

- **Astro.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Unsplash** - For high-quality images (if used)

---

⭐ **If you found this project helpful, please give it a star!** ⭐
