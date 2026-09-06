import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    title: 'Ideation',
    description: "Understand requirements and align with the client's vision.",
  },
  {
    title: 'Planning',
    description: 'Define the roadmap, architecture, milestones, and success metrics.',
  },
  {
    title: 'Design',
    description: 'Turn the product strategy into clear experiences and engineering plans.',
  },
  {
    title: 'Development',
    description: 'Build, integrate, and test the solution with focused iteration.',
  },
  {
    title: 'Validation',
    description: 'Verify performance, usability, and reliability against real-world needs.',
  },
  {
    title: 'Launch',
    description: 'Deliver the finished product and support its next stage of growth.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const SixStepApproach = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 35%'],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section className='relative mt-28 overflow-hidden px-4 py-20 sm:mt-36 sm:px-8 lg:px-12'>
      <div className='mx-auto max-w-5xl'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className='text-center text-xl font-bold tracking-[0.2em] text-[#16539b] sm:text-2xl'
        >
          OUR SIX STEP APPROACH
        </motion.h2>

        <div ref={timelineRef} className='relative mt-16 sm:mt-20'>
          <div className='absolute bottom-8 left-4 top-8 w-px bg-[#d5e1ee] sm:left-1/2 sm:-translate-x-1/2'>
            <motion.div
              style={{ scaleY: lineProgress, originY: 0 }}
              className='absolute inset-x-0 top-0 h-full bg-[#16539b]'
            />
          </div>

          <div className='relative flex flex-col gap-10 sm:gap-14'>
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={`relative flex items-center pl-10 sm:min-h-28 sm:pl-0 ${isLeft ? 'sm:justify-start' : 'sm:justify-end'}`}
                >
                  <motion.div
                    variants={cardVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full rounded-2xl bg-white px-5 py-4 text-left shadow-[0_10px_30px_rgba(42,91,140,0.1)] sm:w-[42%] ${isLeft ? 'sm:text-right' : 'sm:text-left'}`}
                  >
                    <h3 className='text-sm font-semibold text-[#16539b] sm:text-base'>{step.title}</h3>
                    <p className='mt-2 text-sm leading-6 text-slate-500'>{step.description}</p>
                  </motion.div>

                  <motion.span
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.55 }}
                    transition={{ duration: 0.35, delay: 0.12 }}
                    className='absolute left-0 z-10 grid h-8 w-8 place-items-center rounded-full border-2 border-[#16539b] bg-[#edf6ff] sm:left-1/2 sm:-translate-x-1/2'
                  >
                    <span className='h-2 w-2 rounded-full bg-[#16539b]' />
                  </motion.span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixStepApproach;