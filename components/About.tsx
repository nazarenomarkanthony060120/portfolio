'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    {
      name: 'Frontend Development',
      icon: Code,
      level: 95,
      description: 'React, Next.js, TypeScript, Tailwind CSS',
    },
    {
      name: 'UI/UX Design',
      icon: Palette,
      level: 90,
      description: 'Figma, Adobe Creative Suite, User Research',
    },
    {
      name: 'Mobile Development',
      icon: Smartphone,
      level: 85,
      description: 'React Native, Expo',
    },
    {
      name: 'Backend Development',
      icon: Database,
      level: 88,
      description: 'Node.js, Express, MongoDB',
    },
    {
      name: 'Web Technologies',
      icon: Globe,
      level: 92,
      description: 'HTML5, CSS3, JavaScript',
    },
    {
      name: 'Performance',
      icon: Zap,
      level: 87,
      description: 'Optimization, SEO, Accessibility, Core Web Vitals',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a passionate full-stack developer with over 3 years of
            experience creating digital solutions that combine beautiful design
            with robust functionality. I believe in writing clean, efficient
            code and creating intuitive user experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Started as a curious highschool kid who loved tinkering with
                computers, I've evolved into a professional developer who
                thrives on solving complex problems and creating meaningful
                digital experiences. My journey spans from early web development
                to modern full-stack applications.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  30+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  3+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Skills & Expertise
            </motion.h3>

            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <skill.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {skill.level}%
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      isInView ? { width: `${skill.level}%` } : { width: 0 }
                    }
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
