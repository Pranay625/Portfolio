'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { PERSONAL_INFO } from '@/lib/constants'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [scrollY, setScrollY] = useState(0)
  const fullText = PERSONAL_INFO.role

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [fullText])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const startX = typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0
          const startY = typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0
          const endX = typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0
          const endY = typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
              initial={{ x: startX, y: startY }}
              animate={{ y: endY, x: endX }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          )
        })}
      </div>

      <div className="max-w-7xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl text-gray-300 max-w-3xl mx-auto backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/10 min-h-[100px] flex items-center justify-center mt-12"
          >
            <span className="font-mono">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400"
          >
            {PERSONAL_INFO.institution}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6 justify-center pt-8 flex-wrap"
          >
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 bg-blue-500/20 hover:bg-blue-500/40 border border-blue-400/50 rounded-full transition-all hover:scale-105 backdrop-blur-sm relative overflow-hidden"
            >
              <span className="relative z-10">LinkedIn</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-400/50 rounded-full transition-all hover:scale-105 backdrop-blur-sm relative overflow-hidden"
            >
              <span className="relative z-10">GitHub</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="group px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full transition-all hover:scale-105 backdrop-blur-sm relative overflow-hidden"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>

          <motion.div
            animate={{ 
              opacity: Math.max(0, 1 - scrollY / 300),
              scale: Math.max(0.5, 1 - scrollY / 600),
              y: [0, 10, 0]
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity },
              opacity: { duration: 0 },
              scale: { duration: 0 }
            }}
            className="pt-12"
          >
            <motion.div
              className="inline-block"
            >
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
