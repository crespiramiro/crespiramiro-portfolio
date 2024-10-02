import { User } from "../icons/User";
import { FrontTech } from "./FrontTech";
import {BackTech} from './BackTech'
import { LearningTech } from "./LearningTech";
import { ToolsTech } from "./ToolsTech";
import { Stack } from "../icons/Stack";

export const Tech = () => {
  return (
    <main id="tech" className="flex flex-col px-12 md:px-[10rem] items-center ">
      <h3 className="flex items-center self-center  md:self-start md:pl-10 flex-row gap-x-2 text-[#f5f5f5] my-6 font-medium text-2xl ">
        <span>
        <Stack />
        </span>
        Technologies
      </h3>
      <section className="grid lg:grid-cols-2 lg:grid-rows-2 gap-6 lg:place-content-center">
     <FrontTech />
     <BackTech />
     <LearningTech />
     <ToolsTech />
      </section>
    </main>
  );
};
