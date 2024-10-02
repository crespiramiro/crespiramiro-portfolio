import { Bash, Git, Github, NPM, VisualStudioCode } from "./Icons"
import { TechCard } from "./TechCard"

export const ToolsTech = () => {
  return (
    <section className="flex flex-col items-center  border-2 border-red-500 rounded-lg hover:bg-slate-800 p-6  ">
      <h4 className="text-sky-100 font-semibold text-md md:text-xl font-Aclonica mb-8">Tools</h4>
      <article className="grid grid-cols-3 gap-8">
        <TechCard title="Git" icon={<Git />} />
        <TechCard title="GitHub" icon={<Github width='4em' height='4em' />} />
        <TechCard title="Terminal" icon={<Bash />} />
        <TechCard title="VSCode" icon={<VisualStudioCode />} />
        <TechCard title="npm" icon={<NPM />} />
      </article>
    </section>
  );
};