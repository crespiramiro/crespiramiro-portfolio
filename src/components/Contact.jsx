import {Briefcase} from '../icons/Briefcase'
 
export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-12 md:px-[10rem] text-[#f5f5f5] pt-[4rem] pb-8 mb-2 "
    >
      <h3 className="flex items-center self-start pl-10 flex-row gap-x-3 font-medium text-2xl">
        <span>
          <Briefcase width={25} height={25} />
        </span>
        Contact Me
      </h3>
      <form className="flex flex-col gap-y-5 mt-8 max-w-lg w-full">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
          required
        />
        <textarea
          placeholder="Your Message"
          className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
          rows="4"
          required
        />
        <button type="submit" className="bg-slate-800 hover:bg-sky-600 font-medium transition-all duration-150 w-full py-2 rounded-lg mt-4">
          Send Message
        </button>
      </form>
      <div className="mt-10">
        <p className="text-lg">You can also reach me at:</p>
        <a href="mailto:your-email@example.com" className="text-sky-200 hover:text-sky-400">
          crespiramiro@outlook.com
        </a>
      </div>
    </section>
  );
};
