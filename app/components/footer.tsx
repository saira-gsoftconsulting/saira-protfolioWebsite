import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Reuse icons

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-text_secondary py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Replace with your actual links */}
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-2xl"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-2xl"><FaLinkedin /></a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-2xl"><FaTwitter /></a>
        </div>
        <p className="text-sm">
          © {year} [Your Name]. All rights reserved.
        </p>
         <p className="text-xs mt-2">
            Built with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Next.js</a>,{' '}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Tailwind CSS</a> &{' '}
             <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Framer Motion</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;