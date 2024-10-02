import { projects } from "../assets/projects";
import { ProjectInfo } from "./ProjectInfo";
import { useMediaQuery } from 'react-responsive';


const BentoLarge = () => (
<div className="container min-h-[36rem] grid grid-cols-12 grid-rows-12 gap-4">
    {projects.map((project, index) => (
      <div
        key={index}
        className={`relative ${
          index === 1 // Proyecto 1
            ? 'col-span-7 row-span-6' // Grande, parte superior izquierda
            : index === 0 // Proyecto 2
            ? 'col-span-5 row-span-6' // Pequeño, parte superior derecha
            : index === 3 // Proyecto 3
            ? 'col-span-5 row-span-6 row-start-7' // Pequeño, parte inferior izquierda
            : 'col-span-7 row-span-6 row-start-7' // Proyecto 4 (Grande, parte inferior derecha)
        } p-2 bg-slate-700 bg-opacity-50 rounded-lg overflow-hidden group transition-transform duration-300`}
      >
        {project.type === 'video' ? (
          <video
            src={project.media}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        ) : (
          <img
            src={project.media}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        )}
        <ProjectInfo 
          title={project.title} 
          description={project.description} 
          link={project.link} 
          technologies={project.technologies}
          github={project.github}
        />
      </div>
    ))}
  </div>
);

const BentoSmall = () => (
  <div className="container min-h-[36rem] grid grid-cols-1 gap-4">
    {projects.map((project, index) => (
      <div
        key={index}
        className="relative col-span-1 p-2 bg-slate-700 bg-opacity-50 rounded-lg overflow-hidden group transition-transform duration-300"
      >
        {project.type === 'video' ? (
          <video
            src={project.media}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        ) : (
          <img
            src={project.media}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        )}
        <ProjectInfo 
          title={project.title} 
          description={project.description} 
          link={project.link} 
          technologies={project.technologies}
          github={project.github}
        />
      </div>
    ))}
  </div>
);


export const Bento = () => {
  // Define una media query para pantallas medianas y grandes
  const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });

  return isLargeScreen ? <BentoLarge /> : <BentoSmall />;
};
