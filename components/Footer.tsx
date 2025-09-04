'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
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
  ]

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mark Anthony Nazareno
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative digital
              solutions that make a difference in people's lives.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <div className="space-y-2 text-gray-400">
              <p>Calape, Bohol, Philippines</p>
              <p>nazarenomarkanthony060120@gmail.com</p>
              <p>+639974030866</p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Start a Project
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Mark Anthony Nazareno. All rights reserved.
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            Made with{' '}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mx-1"
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>{' '}
            using Next.js & TypeScript
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
