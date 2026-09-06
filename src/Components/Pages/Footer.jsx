import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

const footerColumns = [
  {
    title: 'Company',
    links: ['About Us', 'Services', 'Portfolio', 'Our Approach'],
  },
  {
    title: 'Resources',
    links: ['Case Studies', 'Testimonials', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookies'],
  },
];

const socialLinks = [
  { label: 'LinkedIn', icon: <FaLinkedinIn /> },
  { label: 'X', icon: <FaXTwitter /> },
  { label: 'GitHub', icon: <FaGithub /> },
  { label: 'Instagram', icon: <FaInstagram /> },
  { label: 'Email', icon: <FiMail /> },
];

const Footer = () => {
  return (
    <footer className='relative mt-20 overflow-hidden bg-[#101827] px-6 py-16 text-white md:px-16 lg:px-24' style={{boxShadow:'-20px -20px 20px #101827,20px -20px 20px #101827'}}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className='mx-auto max-w-7xl'
      >
        <div className='grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-16'>
          <div>
            <div className='flex items-center gap-4'>
              <img
                src='https://hypertangent.com/images/htt-images/logo-small.png'
                alt='Hypertangent Technologies logo'
                className='h-20 w-20 object-contain brightness-0 invert'
              />
              <h2 className='max-w-xs text-2xl font-bold leading-tight tracking-tight'>
                HYPERTANGENT<br />
                TECHNOLOGIES
              </h2>
            </div>
            <p className='mt-8 text-base text-slate-300'>
              Driven by vision. Powered by engineering.
            </p>
            <div className='mt-7 flex gap-3'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href='#contact'
                  aria-label={social.label}
                  className='flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-slate-800 text-lg text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-500 hover:text-white'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            >
              <h3 className='font-bold text-white'>{column.title}</h3>
              <ul className='mt-6 space-y-4'>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href='#top' className='text-slate-400 transition-colors duration-300 hover:text-white'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className='mt-16 border-t border-slate-700 pt-6 text-sm text-slate-500'>
          © 2026 Hypertangent Technologies. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
