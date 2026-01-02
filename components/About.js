'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SKILLS, EXPERIENCE } from '@/lib/constants'

function SkillBar({ skill, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.05 }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  )
}

function ExperienceItem({ exp, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 border-l-2 border-blue-500/30 last:pb-0"
    >
      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-white">{exp.title}</h4>
        <p className="text-blue-400 font-medium">
          {exp.link ? (
            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {exp.company}
            </a>
          ) : (
            exp.company
          )}
        </p>
        <p className="text-sm text-gray-400">{exp.period}</p>
        <p className="text-gray-300 leading-relaxed">{exp.description}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </h3>
            <div className="space-y-6">
              {EXPERIENCE.map((exp, index) => (
                <ExperienceItem key={index} exp={exp} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </h3>
            <div className="space-y-4">
              {SKILLS.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>

            <motion.a
              href="https://drive.google.com/file/d/1qut9GedveJfKaplT4Z4jhAu7B1_U87BY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 block w-full py-4 text-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
            >
              View Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 overflow-hidden"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-300">
            Technologies I Work With
          </h3>
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...SKILLS, ...SKILLS].map((skill, index) => (
                <span
                  key={index}
                  className="mx-4 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
