import { Github } from "../Tech/Icons"
import { Link } from "../icons/Link"

export const ProjectInfo = ({title, description, link, github, technologies}) => {

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out backdrop-blur-md bg-black text-wrap  bg-opacity-50">
    <div className="text-center relative z-10 flex flex-col items-center justify-evenly gap-y-5 ">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
  <div className="flex flex-row items-center justify-center gap-x-2" >  
  <a href={link} target="_blank" rel="noopener noreferrer" className='mr-6 hover:text-blue-400'>
  <span className="sr-only">View Project</span>
    <Link />
  </a>
  <a href={github} target="_blank" rel="noopener noreferrer" className='hover:text-blue-400 cursor-pointer '>
    <Github width='2em' height='2em'/>
  </a>
  </div>
      <div className="mt-4 flex justify-center  space-x-4">
          {technologies.map((TechIcon, index) => (
            <TechIcon key={index} className="w-8 h-8 opacity-70  " />
          ))}
        </div>
    </div>
  </div>
  )
}
