import { Expressjs, MongoDB, Nodejs, JWT } from "./Icons"
import { TechCard } from "./TechCard"

export const BackTech = () => {
  return (
    <section className="flex flex-col items-center border-2 border-green-400 rounded-lg hover:bg-slate-800 p-6  ">
      <h4 className="text-sky-100 font-semibold text-md md:text-xl font-Aclonica mb-8">Backend</h4>
      <article className="grid grid-cols-3 gap-8">
        <TechCard title="NodeJS" icon={<Nodejs />} />
        <TechCard title="ExpressJS" icon={<Expressjs />} />
        <TechCard title="MongoDB" icon={<MongoDB />} />
        <TechCard title="JWT" icon={<JWT />} />
      </article>
    </section>
  );
};