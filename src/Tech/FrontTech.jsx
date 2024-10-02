import { TechCard } from "./TechCard"
import { HTML5, CSS, JavaScript, React, Nextjs, TailwindCSS } from "./Icons"

export const FrontTech = () => {
  return (
    <section className="flex flex-col items-center border-2 border-yellow-200 rounded-lg hover:bg-slate-800 p-6 ">
      <h4 className="text-sky-100 font-semibold text-md md:text-xl font-Aclonica mb-8">Frontend</h4>
      <article className="grid grid-cols-3 gap-8">
        <TechCard title="HTML" icon={<HTML5 />} />
        <TechCard title="CSS" icon={<CSS />} />
        <TechCard title="JavaScript" icon={<JavaScript />} />
        <TechCard title="ReactJS" icon={<React />} />
        <TechCard title="NextJS" icon={<Nextjs />} />
        <TechCard title="TailwindCSS" icon={<TailwindCSS />} />
      </article>
    </section>
  );
};
