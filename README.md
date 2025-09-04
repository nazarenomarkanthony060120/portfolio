# Modern Portfolio Website

A professional, modern, and responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features beautiful animations, dark mode support, and a fully responsive design.

## ✨ Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations and transitions using Framer Motion
- **TypeScript**: Full TypeScript support for better development experience
- **Performance**: Optimized for speed and SEO
- **Accessible**: Built with accessibility best practices
- **Dark Mode Ready**: Prepared for dark mode implementation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
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

## 🔧 Troubleshooting

If you encounter issues during setup:

1. **Dependency conflicts**: Delete `node_modules` and `package-lock.json`, then run `npm install` again
2. **Framer Motion SSR errors**: The project includes a ClientWrapper component to handle SSR issues
3. **Next.js warnings**: The configuration has been updated for Next.js 14 compatibility

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── ClientWrapper.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   └── Projects.tsx
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

- `components/Hero.tsx` - Name, title, description, social links
- `components/About.tsx` - About content, skills, experience
- `components/Projects.tsx` - Your projects and work
- `components/Contact.tsx` - Contact information
- `components/Footer.tsx` - Footer content
- `app/layout.tsx` - Meta information and SEO

### Styling

- Modify `tailwind.config.js` for custom colors, fonts, and animations
- Update `app/globals.css` for global styles
- Customize component styles in individual component files

### Images

Replace placeholder images in the Projects component with your actual project images. You can use:

- Local images in the `public/` directory
- External image URLs (ensure they're optimized)
- Image CDN services

## 🌟 Key Components

### Navigation

- Smooth scrolling navigation
- Mobile-responsive hamburger menu
- Background blur effect on scroll

### Hero Section

- Animated entrance effects
- Gradient backgrounds
- Call-to-action buttons
- Social media links

### About Section

- Skills showcase with progress bars
- Professional experience
- Personal information

### Projects Section

- Project cards with hover effects
- Technology tags
- Links to GitHub and live demos
- Responsive grid layout

### Contact Section

- Contact form with validation
- Contact information
- Social media links

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help customizing the template, feel free to reach out!
