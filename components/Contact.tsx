'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nazarenomarkanthony060120@gmail.com',
      href: 'mailto:nazarenomarkanthony060120@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+639974030866',
      href: 'tel:+639974030866',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Calape, Bohol, Philippines',
      href: 'https://www.google.com/maps/@9.8938641,123.8864448,18.67z?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D',
    },
  ]

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
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
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
              Get In Touch
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                    placeholder="Project discussion"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send size={20} className="ml-2" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative
                projects, or potential collaborations. Feel free to reach out
                through any of the channels below.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300"
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    info.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow me on social media
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
