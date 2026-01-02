# Quick Setup Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies
```bash
cd portfolio-nextjs
npm install
```

This will install:
- Next.js 14+
- React 18
- Framer Motion
- Tailwind CSS
- OGL (for 3D effects)
- React Three Fiber
- Other dependencies

### 2. Start Development Server
```bash
npm run dev
```

The site will be available at: http://localhost:3000

### 3. Customize Your Portfolio

#### Update Personal Info
Edit `lib/constants.js`:
- Change name, email, social links
- Update institution and role
- Modify projects array
- Adjust skills and experience

#### Add Your Resume
- Place your resume PDF in `public/resume.pdf`
- Or update the link in `components/About.js`

#### Add Project Images
- Add images to `public/images/`
- Update image paths in `lib/constants.js`

### 4. Build for Production
```bash
npm run build
npm start
```

### 5. Deploy

#### Option A: Vercel (Recommended)
1. Push to GitHub
2. Go to vercel.com
3. Import your repository
4. Deploy automatically

#### Option B: Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder

#### Option C: Custom Server
1. Build: `npm run build`
2. Start: `npm start`
3. Use PM2 or similar for process management

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Email Integration (Optional)

To enable contact form:

1. Sign up at emailjs.com
2. Create email service and template
3. Create `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

4. Update `components/Contact.js` to use EmailJS

## Performance Tips

1. **Optimize Images**: Use WebP format, compress before uploading
2. **Lazy Load**: Components already use lazy loading
3. **Analytics**: Add Vercel Analytics or Google Analytics
4. **CDN**: Use Vercel or Cloudflare for global distribution

## Need Help?

- Check Next.js docs: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/docs

Happy coding! 🚀
