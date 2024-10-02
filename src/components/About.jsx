import { AboutSVG } from "../icons/AboutSVG";
import { Briefcase } from "../icons/Briefcase";
import { User } from "../icons/User";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center px-12 md:px-[10rem] text-[#f5f5f5] pt-[4rem] "
    >
      <h3 className="flex items-center self-start pl-10 flex-row gap-x-3  font-medium text-2xl ">
        <span>
          <User />
        </span>
        About Me
      </h3>
      <div className="flex flex-col md:flex-row gap-x-4 min-w-52 md:min-w-72 items-center justify-center">
        <AboutSVG />
        <div className="flex flex-col  items-center justify-center gap-y-5 text-xl ">
          <p className="max-w-[55ch]" >
            I’m <span className="text-sky-100" >Ramiro</span> a <span className="text-pink-500" >full-stack web developer</span> with a passion for
            creating digital experiences that truly span. I love taking <span className="text-yellow-100" > ideas </span>
            and turning them into interactive realities that inspire and capture 
            <span className="text-pink-500" > attention</span>.
          </p>
          <p className="max-w-[55ch]" >
            I’m constantly on the lookout for new ways to take <span className="text-sky-100" >code</span> to the next
            level, exploring new technologies and learning along the way. I
            thrive on tackling new challenges and am always eager to keep
            learning and <span className="text-yellow-100" > growing </span> in this dynamic field. Got a project or an
            idea? Let’s talk and make it happen!
          </p>
        </div>
      </div>
      <button className=" bg-slate-800 flex flex-row gap-x-4 text-center justify-center items-center hover:bg-sky-600 font-medium transition-all duration-150 w-[10rem] py-2 rounded-lg mt-6 md:mt-2 lg:mt-[-3rem]" >
           <a className="flex flex-row items-center gap-x-2" title="link to my resume" target="_blank" rel="noopener noreferrer"  href="https://drive.google.com/drive/folders/1DmmgXxaMdwpbiNDSQKv_q2t18MOw1b_V?usp=drive_link">Resume<span className="" ><Briefcase width='25' height='25' /></span></a>
          </button>
    </section>
  );
};
