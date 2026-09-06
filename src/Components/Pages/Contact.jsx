import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const contactDetails = [
  { icon: <FiMail />, label: 'Email', value: 'contact@hypertangent.com' },
  { icon: <FiPhone />, label: 'Phone', value: '+1 (234) 567-890' },
  { icon: <FiMapPin />, label: 'Location', value: 'Available worldwide' },
];

const fieldClassName = 'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#1661b7] focus:ring-2 focus:ring-[#1661b7]/15';

const Contact = () => {
  return (
    <section id='contact' className='relative mt-24 overflow-hidden px-4 py-20 sm:mt-32 sm:px-8 sm:py-24 lg:px-12'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(113,187,255,0.3),transparent_58%)]' />

      <div className='relative mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className='text-center'
        >
          <h2 className='text-xl font-bold tracking-[0.2em] text-[#16539b] sm:text-2xl'>GET IN TOUCH</h2>
          <p className='mx-auto mt-8 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base'>
            Share your vision, product idea, or problem statement, our team will be in touch shortly.
          </p>
        </motion.div>

        <div className='mt-12 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-10'>
          <motion.aside
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className='rounded-2xl bg-white p-6 shadow-[0_14px_36px_rgba(42,91,140,0.12)] sm:p-7'
          >
            <h3 className='text-lg font-semibold text-slate-900'>Contact Information</h3>
            <p className='mt-4 text-sm leading-6 text-slate-500'>Prefer to reach out directly? We&apos;re available through the channels below.</p>
            <div className='mt-8 space-y-6'>
              {contactDetails.map((detail) => (
                <div key={detail.label} className='flex items-start gap-3'>
                  <span className='grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#075fba] text-lg text-white'>{detail.icon}</span>
                  <div>
                    <p className='text-xs font-medium text-slate-500'>{detail.label}</p>
                    <p className='mt-1 text-sm text-slate-700'>{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(event) => event.preventDefault()}
            className='rounded-2xl bg-white p-6 shadow-[0_14px_36px_rgba(42,91,140,0.12)] sm:p-8'
          >
            <div className='grid gap-5 sm:grid-cols-2'>
              <label className='text-sm text-slate-600'>Name *<input required name='name' placeholder='Your full name' className={fieldClassName} /></label>
              <label className='text-sm text-slate-600'>Email *<input required type='email' name='email' placeholder='Your email' className={fieldClassName} /></label>
              <label className='text-sm text-slate-600'>Company<input name='company' placeholder='Company name' className={fieldClassName} /></label>
              <label className='text-sm text-slate-600'>Phone<input name='phone' placeholder='+1 (234) 567-890' className={fieldClassName} /></label>
            </div>
            <label className='mt-5 block text-sm text-slate-600'>Message<textarea required name='message' rows='5' placeholder='Tell us about your project' className={`${fieldClassName} resize-none`} /></label>
            <button type='submit' className='mt-6 rounded-full bg-[#075fba] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#00488f]'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;