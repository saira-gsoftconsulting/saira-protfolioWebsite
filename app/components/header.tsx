"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="#home" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
            YourName // Dev
          </Link>
        </motion.div>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.li key={item.name} whileHover={{ y: -3 }}>
              <Link
                href={item.href}
                className="text-text_secondary hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
        {/* Add Mobile Menu Button Here if needed */}
      </nav>
    </motion.header>
  );
};

export default Header;