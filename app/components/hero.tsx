
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image'; // Use next/image for optimization
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Example Icons

// Removed duplicate Hero component declaration
const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const iconVariants = {
      hidden: { scale: 0, opacity: 0 },
      visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 150, damping: 10 } },
  }

  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-background via-slate-800 to-background relative overflow-hidden pt-20">
      {/* Optional: Subtle background shapes/gradients */}
      <div className="absolute inset-0 opacity-10">
          {/* Example background element */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div> 
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div> 
      </div>
      <motion.div
        className="container mx-auto px-6 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <Image
            src="/images/profile.jpg" // REPLACE with your image path in public/images
            alt="Your Name - Profile Picture"
            width={150}
            height={150}
            className="rounded-full mx-auto border-4 border-primary shadow-lg"
            priority // Load hero image immediately
          />
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl  text-white font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
          Hi, I'm SaiRa Saeed
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-text_secondary mb-8 max-w-2xl mx-auto">
          A passionate Frontend Developer creating seamless, beautiful, and interactive digital experiences.
        </motion.p>

        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-12">
            {/* Add links to your actual profiles */}
            <motion.a href="https://github.com/saira-gsoftconsulting" target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover={{ scale: 1.2, color: '#E2E8F0' }} className="text-text_secondary text-3xl hover:text-text_primary transition-colors"><FaGithub /></motion.a>
            <motion.a href="https://www.linkedin.com/in/saira-saeed-724a18346/" target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover={{ scale: 1.2, color: '#0A66C2' }} className="text-text_secondary text-3xl hover:text-primary transition-colors"><FaLinkedin /></motion.a>
            <motion.a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover={{ scale: 1.2, color: '#1DA1F2' }} className="text-text_secondary text-3xl hover:text-blue-400 transition-colors"><FaTwitter /></motion.a>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link href="#projects" passHref>
            <motion.button
              className="bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              View My Work
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;