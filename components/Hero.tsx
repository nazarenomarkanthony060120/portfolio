'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Facebook, Github, Linkedin, Mail } from 'lucide-react'

import Me from '../assets/images/me.jpg'
import Image from 'next/image'

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-slow"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-slow"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-64 h-64 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
          >
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              <Image
                src={Me}
                alt="Me"
                width={256} // matches w-64
                height={256}
                sizes="(max-width: 768px) 128px, 256px" // responsive hint
                className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Mark Anthony Nazareno
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          I craft beautiful, functional, and user-centered digital experiences.
          Passionate about creating innovative solutions that make a difference.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            {
              icon: Github,
              href: 'https://github.com/nazarenomarkanthony060120?tab=repositories',
              label: 'GitHub',
            },
            {
              icon: Linkedin,
              href: 'https://www.linkedin.com/in/mark-anthony-nazareno-372236288/',
              label: 'LinkedIn',
            },
            {
              icon: Facebook,
              href: 'https://www.facebook.com/chowking7691',
              label: 'Facebook',
            },
            {
              icon: Mail,
              href: 'mailto:nazarenomarkanthony060120@gmail.com',
              label: 'Email',
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex items-center justify-center w-10 h-10 
               text-gray-400 hover:text-blue-600 
               hover:bg-gray-200 rounded-full 
               transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
