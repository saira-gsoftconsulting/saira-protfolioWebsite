import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  index: number; // For staggering delay
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title, description, imageUrl, techStack, liveUrl, repoUrl, index
}) => {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" } // Stagger based on index
    }
  };

  return (
    <div
      className="bg-slate-800 rounded-lg overflow-hidden shadow-xl flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2"
      // We'll handle animation in the parent Projects component using whileInView
    >
      <div className="relative h-48 w-full">
          <Image
            src={imageUrl} // Assumes images are in public folder root or /images
            alt={`${title} screenshot`}
            layout="fill" // Make image fill the container
            objectFit="cover" // Cover the area, might crop
            className="transition-transform duration-500 group-hover:scale-105" // Example zoom on hover
          />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-text_secondary mb-4 flex-grow">{description}</p>

        <div className="mb-4">
          <span className="font-semibold text-text_primary mr-2">Tech:</span>
          {techStack?.map((tech, i) => (
            <span
              key={i}
              className="inline-block bg-slate-700 rounded-full px-3 py-1 text-sm font-semibold text-accent mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex space-x-4 items-center pt-4 border-t border-slate-700">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text_secondary hover:text-primary transition-colors flex items-center gap-1 text-sm"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text_secondary hover:text-primary transition-colors flex items-center gap-1 text-sm"
             
            >
              <FaGithub /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;