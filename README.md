# 📊 Data Analyst Portfolio

A modern, professional portfolio website showcasing data analytics expertise, certifications, projects, and professional experience. Built with Next.js, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Next.js 15 for optimal speed
- 🎯 **Interactive Navigation** - Smooth scrolling with active section tracking
- 💼 **Professional Sections**:
  - About & Hero Section
  - Skills & Expertise
  - Certifications (IBM Data Analyst Professional Certificate)
  - Projects Portfolio
  - Internship Experience
  - Contact Information

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/budinugroho15/data-analyst-portfolio-website.git
   cd data-analyst-portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
.
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Main portfolio page
│   │   └── globals.css              # Global styles
│   ├── components/
│   │   ├── portfolio/               # Portfolio-specific components
│   │   │   ├── Navigation.tsx       # Header with navigation
│   │   │   ├── HeroSection.tsx      # Hero/About section
│   │   │   ├── SkillsSection.tsx    # Skills showcase
│   │   │   ├── CertificatesSection.tsx  # Certifications
│   │   │   ├── ProjectsSection.tsx  # Projects portfolio
│   │   │   ├── InternshipsSection.tsx   # Work experience
│   │   │   ├── ContactSection.tsx   # Contact information
│   │   │   └── Footer.tsx           # Footer
│   │   └── ui/                      # Reusable UI components
│   ├── data/
│   │   └── portfolio-data.ts        # Portfolio content & data
│   ├── hooks/                       # Custom React hooks
│   └── lib/                         # Utility functions
├── public/                          # Static assets
├── package.json                     # Dependencies
└── README.md                        # This file
```

## 🎨 Tech Stack

### Core Technologies
- **Next.js 15** - React framework with App Router
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### UI & Styling
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

### Key Features
- **Responsive Design** - Mobile-first approach
- **Dark/Light Theme Ready** - Theme toggle support
- **SEO Optimized** - Proper meta tags and structure
- **Type Safe** - Full TypeScript support

## 📝 Customization

### Update Portfolio Content

Edit `src/data/portfolio-data.ts` to customize your portfolio:

```typescript
// Update navigation items
export const NAVIGATION_ITEMS = [...]

// Update certificates
export const CERTIFICATES = [...]

// Update projects
export const PROJECTS = [...]

// Update contact information
export const CONTACT_INFO = {
  email: 'your.email@example.com',
  phone: '+1 234 567 8900',
  location: 'Your City, Country',
  linkedin: 'https://linkedin.com/in/yourprofile'
}
```

### Customize Styling

The portfolio uses a custom color palette defined in `src/app/globals.css`:

```css
:root {
  --color-dark-green: #1F2A23;
  --color-cream: #DAD7CD;
  /* ... customize colors */
}
```

## 🌟 Key Sections

### 1. Hero Section
Professional introduction with name, title, and call-to-action button.

### 2. Skills
Categorized display of technical skills and expertise areas:
- Data Analysis Tools
- Programming & Querying
- Data Management

### 3. Certificates
Detailed certifications with:
- Certificate title and issuer
- Completion dates
- Skills learned
- Course breakdown
- Verification links

### 4. Projects
Portfolio projects showcasing:
- Project descriptions
- Technologies used
- Business impact metrics

### 5. Internships
Professional experience including:
- Role and company
- Duration
- Key achievements

### 6. Contact
Easy-to-find contact information and social links.

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile** (< 768px): Hamburger menu, stacked sections
- **Tablet** (768px - 1024px): Adapted layouts
- **Desktop** (> 1024px): Full navigation, multi-column layouts

## ⚡ Performance

- ✅ Optimized for Core Web Vitals
- ✅ Lazy loading for images
- ✅ Minimal JavaScript bundle
- ✅ Fast Time to Interactive (TTI)

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and adapt it for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Setyo Nugroho Dwi Budi**

- 📧 Email: setyonugrohodwibudi@gmail.com
- 📱 Phone: +62 851 8611 1556
- 📍 Location: East Java, Indonesia
- 💼 LinkedIn: [Connect with me](https://www.linkedin.com/)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
