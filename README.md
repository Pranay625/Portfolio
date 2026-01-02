# Modern Portfolio - Pranay Rajesh

A high-performance, visually stunning portfolio website built with Next.js 14+, featuring 3D animations, glassmorphism effects, and smooth interactions.

## 🚀 Features

- **Next.js 14+ App Router** - Latest Next.js features with optimal performance
- **3D Prism Background** - Interactive WebGL background using OGL
- **Framer Motion Animations** - Smooth, professional animations throughout
- **Glassmorphism UI** - Modern glass-effect design elements
- **Responsive Design** - Perfect on all devices
- **SEO Optimized** - Meta tags, sitemap, and robots.txt
- **Performance First** - Optimized images, code splitting, lazy loading
- **Accessibility** - ARIA labels, keyboard navigation, reduced motion support

## 🛠️ Tech Stack

- **Framework:** Next.js 14+
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** OGL, React Three Fiber
- **Language:** JavaScript
- **Deployment:** Vercel (recommended)

## 📦 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── page.js          # Main page
│   ├── layout.js        # Root layout with metadata
│   ├── globals.css      # Global styles
│   └── sitemap.js       # SEO sitemap
├── components/
│   ├── Hero.js          # Hero section with typing effect
│   ├── Navigation.js    # Sticky nav with mobile menu
│   ├── Projects.js      # Project cards with filters
│   ├── About.js         # Experience & skills
│   ├── Contact.js       # Contact form
│   └── Prism.js         # 3D background effect
├── lib/
│   ├── constants.js     # Portfolio data
│   └── utils.js         # Utility functions
└── public/
    ├── images/          # Project images
    └── resume.pdf       # Downloadable resume
```

## 🎨 Customization

### Update Personal Information

Edit `lib/constants.js`:

```javascript
export const PERSONAL_INFO = {
  name: 'Your Name',
  role: 'Your Role',
  email: 'your.email@example.com',
  // ... more fields
}
```

### Add Projects

Add to the `PROJECTS` array in `lib/constants.js`:

```javascript
{
  id: 5,
  title: 'Project Name',
  description: 'Project description',
  tags: ['Tech1', 'Tech2'],
  link: 'https://demo.com',
  github: 'https://github.com/...',
  gradient: 'from-color-500 to-color-500',
}
```

### Modify Colors

Update `tailwind.config.js` for custom color schemes.

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
```

## 📝 Environment Variables

Create `.env.local` for email integration:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

## 🎯 Performance

- **Lighthouse Score:** 95+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Cumulative Layout Shift:** < 0.1

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

## 📄 License

MIT License - feel free to use this for your own portfolio.

## 👤 Author

**Pranay Rajesh**
- LinkedIn: [pranayrajesh](https://www.linkedin.com/in/pranayrajesh/)
- GitHub: [@Pranay625](https://github.com/Pranay625)
- Email: pranayrajesh625@gmail.com

---

Built with ❤️ using Next.js and Framer Motion
