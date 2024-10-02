import { LaptopIcon } from "../icons/Laptop"
import { lazy, Suspense } from "react";
const Bento = lazy(() =>
  import("./Bento").then((module) => ({ default: module.Bento }))
);

export const Projects = () => {
  return (
        <main id="projects" className="flex flex-col min-h-screen text-[#f5f5f5] pb-6 px-12 md:px-[10rem] w-screen justify-center items-center " > 
        <h3 className="flex items-center self-start pl-10 my-6 flex-row gap-x-3  font-medium text-2xl " ><span><LaptopIcon/></span>Projects</h3>
            <Suspense fallback={<div>Cargando componentes...</div>}>
             <Bento />
             </Suspense>
        </main>
    )
}
