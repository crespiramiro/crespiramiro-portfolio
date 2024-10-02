import { useEffect, useState } from 'react'
import './App.css'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Menu } from './icons/Menu'
import { motion, AnimatePresence } from 'framer-motion'
import { Contact } from './components/Contact'
import { Tech } from './Tech/Tech'


function App() {

  const [menu, setMenu] = useState(false);
  const [scrollTo, setScrollTo] = useState('');

  const handleScroll = (id) => {
    setScrollTo(id);
    setMenu(false); // Cierra el menú
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };


  const handleMenu = () => {
    setMenu(!menu);
  }

  const variants = {
    hidden: { x: '100%', y: '-100%' },
    visible: { 
      x: 0, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 80,
        damping: 15,     
        delayChildren: 0.3 
      } 
    },
    exit: { 
      x: '-100%', 
      y: '100%', 
      transition: { 
        type: 'spring', 
        stiffness: 80, 
        damping: 15,
        delay: 0.2 
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay: index * 0.5// Retraso creciente basado en el índice
      }
    })
  };
  
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.7 // Retraso entre cada elemento
      }
    }
  };
  
  useEffect(() => {
     console.log(menu)
  
   
  }, [menu])
  

  return (
   <main className=' overflow-x-hidden min-h-screen w-full flex flex-col gap-y-3 bg-slate-900'>
    <AnimatePresence>
     {menu && (
        <motion.section
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.5 }}
          className='fixed inset-0 min-h-screen flex flex-col items-center justify-center bg-pink-700 z-50'
        >
          <button className='absolute top-4 right-4' onClick={handleMenu}>
            <Menu />
          </button>
          <motion.ul
  variants={listVariants}
  initial="hidden"
  animate="visible"
  className='text-white font-bold gap-y-8 flex flex-col items-center text-5xl font-Aclonica'
>
  <motion.li variants={itemVariants} custom={0} className='hover:text-black' onClick={() => handleScroll('home')}><a href="#home">HOME</a></motion.li>
  <motion.li variants={itemVariants} custom={1} className='hover:text-black' onClick={() => handleScroll('projects')}><a href="#projects">PROJECTS</a></motion.li>
  <motion.li variants={itemVariants} custom={2} className='hover:text-black' onClick={() => handleScroll('about')}><a href="#about">ABOUT ME</a></motion.li>
  <motion.li variants={itemVariants} custom={3} className='hover:text-black' onClick={() => handleScroll('tech')}><a href="#about">STACK</a></motion.li>
  <motion.li variants={itemVariants} custom={4} className='hover:text-black' onClick={() => handleScroll('contact')}><a href="#contact">CONTACT</a></motion.li>
  <motion.li variants={itemVariants} custom={5} className='text-sm font-sans py-2 font-medium text-gray-200'>
  <a href="https://www.linkedin.com/in/ramiro-crespi/" target="_blank" rel="noopener noreferrer" className='mr-6 hover:text-blue-400'>
    LinkedIn
  </a>
  <a href="https://github.com/crespiramiro" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400'>
    GitHub
  </a>
</motion.li>

</motion.ul>

        </motion.section>
      )}
        </AnimatePresence>
    <header className='pb-16 pt-4 px-12 flex flex-row justify-between ' >
    <h1 className='text-sky-100 font-bold text-lg md:text-2xl self-center ' >Ramiro Crespi</h1>
      <ul className='self-center items-center justify-center' >
        <li className='cursor-pointer' onClick={()=>handleMenu()} ><Menu/></li>
      </ul>
    </header>
    <section className="px-8 md:px-28 flex flex-col lg:flex-row lg:items-center h-fit relative mb-12">
  <div className="md:w-1/2">
    <h2 className="text-4xl md:text-7xl lg:text-9xl font-bold text-sky-100 self-center font-Aclonica text-center lg:text-left">
      Web Developer Fullstack
    </h2>
  </div>
  <figure className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center md:self-end lg:justify-end">
    <div className="bg-pink-700 p-1 rounded-md max-w-[150px] lg:max-w-[200px]">
      <img src="/Cv.JPEG" alt="Ramiro Crespi" className="rounded-md max-w-full h-auto" />
    </div>
  </figure>
</section>


      <Projects />
      <About />
      <Tech />
      <Contact />
   </main>
  )
}

export default App
