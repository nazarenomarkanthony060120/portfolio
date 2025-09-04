'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

import fundManagementImg from '../assets/images/fund_management_system.jpg'
import minimartInventoryImg from '../assets/images/Minimart_Inventory_System.png'
import studentExamImg from '../assets/images/student_exam_system.jpg'
import adminDashboardImg from '../assets/images/admin_dashboard_system.jpg'
import faceRecognitionImg from '../assets/images/face_recognition_system.jpg'
import blessedTrinityImg from '../assets/images/school_system.png'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      id: 1,
      title: 'Fund management System',
      description:
        'A modern personal finance and fund management system that helps users track income and expenses, set budgets, manage savings, and visualize financial goals with detailed reports and analytics.',
      image: fundManagementImg,
      technologies: [
        'React Native Expo',
        'TypeScript',
        'Firebase',
        'Node.js',
        'Nativewind CSS',
        'TypeScript',
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Full Stack',
    },
    {
      id: 2,
      title: 'Minimart Inventory System',
      description:
        'A POS and stock management system for minimarts, featuring real-time inventory tracking, sales reporting, and supplier management.',
      image: minimartInventoryImg,
      technologies: ['React', 'Node.js', 'MySQL', 'Tailwind Css'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Full Stack',
    },
    {
      id: 3,
      title: 'Student Exam App',
      description:
        'An online platform for creating, managing, and grading exams. Features include automated scoring, question banks, student performance tracking, and secure exam delivery.',
      image: studentExamImg,
      technologies: [
        'React Native',
        'Expo',
        'Zustand',
        'Judge0',
        'Open AI',
        'Gemini',
        'TypeScript',
        'Firebase',
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Mobile',
    },
    {
      id: 4,
      title: 'Admin Dashboard App',
      description:
        'Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.',
      image: adminDashboardImg,
      technologies: [
        'React Native',
        'Firebase',
        'Zustand',
        'Expo',
        'TypeScript',
        'Tanstack Querys.js',
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Mobile',
    },
    {
      id: 5,
      title: 'Face Recognition App',
      description:
        'Comprehensive design system and component library for consistent UI/UX across multiple products and platforms.',
      image: faceRecognitionImg,
      technologies: [
        'React Native',
        'Expo',
        'Zustand',
        'TypeScript',
        'Firebase',
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Mobile',
    },
    {
      id: 6,
      title: 'School Attendance System',
      description:
        'A digital solution for tracking and managing student attendance. Features include biometric or RFID check-in, automated reports, teacher dashboards, and real-time monitoring for schools and administrators.',
      image: blessedTrinityImg,
      technologies: ['NextJs', 'Firebase', 'TypeScript', 'Zustand', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Full Stack',
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Featured Projects
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Here are some of my recent projects that showcase my skills and
            passion for creating innovative digital solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/nazarenomarkanthony060120?tab=repositories"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
            <ArrowRight size={20} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
