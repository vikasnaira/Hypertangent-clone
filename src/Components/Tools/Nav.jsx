import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='sticky relative  z-50 mx-auto   flex bg-white rounded-full min-h-14 w-full max-w-7xl flex-wrap items-center justify-between p-2 shadow-sm md:top-5 md:min-h-18'>
        <div className='flex h-full min-w-0 items-center gap-2 px-2 py-1 sm:px-4'>
        <img src='https://hypertangent.com/images/htt-images/logo-small.png' alt='Logo' className='h-9 w-9 object-contain sm:h-11 sm:w-11' />
        <div className='flex flex-col justify-center text-[10px] font-bold leading-tight sm:text-xs md:text-lg'>
            <h1>HYPERTANGENT</h1>
            <h1>TECHNOLOGIES</h1>
        </div>
        </div>

        <button
          type='button'
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
          className='rounded-lg p-2 text-2xl text-[#003380] transition-colors hover:bg-sky-50 md:hidden'
        >
          <motion.span
            animate={{ rotate: menuOpen ? 90 : 0, scale: menuOpen ? 0.9 : 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className='flex'
          >
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
          </motion.span>
        </button>

        <div className='hidden h-full items-center gap-2 px-2 font-medium md:flex lg:gap-4'>
            {['Services', 'Portfolio', 'About', 'Blog'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className='rounded-full px-3 py-2 text-sm transition-colors duration-200 hover:bg-gray-200 lg:px-5'>
                {link}
              </a>
            ))}
            <a href='#contact' className='rounded-full bg-[#0047AB] px-5 py-2 text-sm text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#003380] lg:px-7'>Contact Us</a>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
          <motion.div 
            initial={{  opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{  opacity: 0, y: 18 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className='absolute left-0 right-0 top-full mt-2 w-full overflow-hidden rounded-2xl bg-white border-t border-gray-100 p-2 shadow-lg md:hidden'
          >
            <div className='flex flex-col gap-1'>
              {['Services', 'Portfolio', 'About', 'Blog', 'Contact Us'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y:12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.04 }}
                  className='rounded-lg px-4 py-2 font-medium transition-colors hover:bg-gray-100'
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
          )}
        </AnimatePresence>
    </nav>
  )
}

export default Nav
