import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pranay Rajesh | ML Developer & Tech Enthusiast',
  description: 'Portfolio of Pranay Rajesh - ML Developer & Technologist specializing in Machine Learning, Deep Learning, and AI at VIT-AP',
  keywords: ['Machine Learning', 'Deep Learning', 'AI', 'Python', 'TensorFlow', 'PyTorch', 'React', 'Next.js'],
  authors: [{ name: 'Pranay Rajesh' }],
  creator: 'Pranay Rajesh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pranayrajesh.dev',
    title: 'Pranay Rajesh | ML Developer & Technologist',
    description: 'Portfolio of Pranay Rajesh - ML Developer & Tech Enthusiast',
    siteName: 'Pranay Rajesh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranay Rajesh | ML Developer & Technologist',
    description: 'Portfolio of Pranay Rajesh - ML Developer & Technologist',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white focus:rounded">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
