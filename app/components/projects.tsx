
import { motion } from 'framer-motion';
import AnimatedSection from './ui/animationSection';
import ProjectCard from './projectcard';

const projectData = [
  {
    title: "Project Alpha",
    description: "A full-featured e-commerce platform built with the MERN stack and modern UI.",
    imageUrl: "/images/project-alpha.jpg", // Replace with actual image path
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl:"https://example.com",
    repoUrl: "https://github.com/yourusername/project-alpha"
  },
  {
    title: "DevPortfolio CMS",
    description: "A customizable portfolio template generator with a headless CMS backend.",
    imageUrl: "/images/project-beta.jpg", // Replace with actual image path
    techStack: ["Next.js", "TypeScript", "Strapi", "GraphQL", "Framer Motion"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/devportfolio-cms"
  },
  {
    title: "Interactive Data Viz",
    description: "Visualizing complex datasets using D3.js and React for insightful analysis.",
    imageUrl: "/images/project-gamma.jpg", // Replace with actual image path
    techStack: ["React", "D3.js", "Firebase", "Styled Components"],
    // liveUrl: "https://example.com", // Optional
    repoUrl: "https://github.com/yourusername/data-viz"
  },
];


const Projects: React.FC = () => {
   const containerVariants = {
    hidden: { opacity: 1 }, // Let AnimatedSection handle entrance
    visible: {
      opacity: 1,
      transition: {
      },
    },
  };

  return (
    <AnimatedSection id="projects" className="bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {projectData?.map((project, index) => (
            <ProjectCard
              key={index}
              index={index} 
              {...project}
             />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;