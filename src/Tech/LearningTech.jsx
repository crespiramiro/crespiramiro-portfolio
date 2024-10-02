import { TechCard } from "./TechCard"
import { Python, Astro, TypeScript, SQLite } from "./Icons"

export const LearningTech = () => {
  return (
    <section className="flex flex-col items-center border-2 border-sky-600 rounded-lg hover:bg-slate-800 p-6  ">
      <h4 className="text-sky-100 font-semibold text-md md:text-xl font-Aclonica mb-8">Learning</h4>
      <article className="grid grid-cols-3 gap-8">
        <TechCard title="TypeScript" icon={<TypeScript />} />
        <TechCard title="Astro" icon={<Astro />} />
        <TechCard title="Python" icon={<Python />} />
        <TechCard title="SQLite" icon={<SQLite/>} />
      </article>
    </section>
  );
};