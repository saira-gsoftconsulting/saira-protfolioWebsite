import { motion } from 'framer-motion';
// Import specific icons as needed
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFigma, SiMongodb } from 'react-icons/si';
import AnimatedSection from './ui/animationSection';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-600" /> },
  { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  // Add more skills
];

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 1 }, // Parent doesn't fade, just orchestrates children
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation of children
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
  };

  return (
    <AnimatedSection id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-secondary">Skills</span>
        </h2>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
         
        >
          {skills?.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-slate-800 rounded-lg shadow-lg hover:shadow-primary/30 transition-shadow duration-300"
            >
              <span className="text-5xl mb-3">{skill.icon}</span>
              <span className="text-lg font-medium text-text_secondary">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;