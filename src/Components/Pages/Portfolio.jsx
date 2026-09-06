import { motion } from 'framer-motion';

const Portfolio = () => {
    const logos = [
        { name: 'KARAM', className: 'font-black tracking-[0.25em] text-[#a51f2d]' },
        { name: 'waveatech', className: 'font-semibold lowercase tracking-tight text-[#ef513b]' },
        { name: 'Smartech', className: 'font-bold tracking-tight text-[#173b72]' },
        { name: '∞ infinity', className: 'text-2xl font-bold tracking-wide text-black' },
        { name: 'pouch express', className: 'rounded-full border-2 border-[#e3a95f] px-3 py-1 text-xs font-bold text-[#c88435]' },
        { name: 'KINGSPAN', className: 'font-bold tracking-tight text-[#ec2533]' },
        { name: 'SWW', className: 'font-black tracking-[0.3em] text-[#43698c]' },
        { name: 'BYTE', className: 'font-black tracking-[0.25em] text-[#151515]' },
    ];

    const firstRow = [...logos, ...logos];
    const secondRow = [...logos.slice(4), ...logos.slice(0, 4), ...logos.slice(4), ...logos.slice(0, 4)];

  return (
        <section id='portfolio' className='relative mt-24  py-16 sm:mt-32 sm:py-20'>
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(111,183,255,0.28),transparent_62%)]' />
            <div className='relative mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:gap-6'>
                <h1 className='text-2xl font-medium text-[#0047AB]'>OUR PORTFOLIO</h1>
                <p className='max-w-2xl text-base text-gray-700 sm:text-xl'>Showcasing innovative solutions we've built for clients across various industries</p>
            </div>

            <div className='relative mt-12 space-y-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:mt-16'>
                <LogoRow items={firstRow} direction='left' />
                <LogoRow items={secondRow} direction='right' />
            </div>
        </section>
  )
}

const LogoRow = ({ items, direction }) => (
    <div className='flex w-max gap-8' style={{ animation: `${direction === 'left' ? 'portfolio-scroll-left' : 'portfolio-scroll-right'} 28s linear infinite` }}>
        {items.map((logo, index) => (
            <div
                key={`${logo.name}-${index}`}   
                className='grid h-24 w-44 shrink-0 place-items-center rounded-2xl border border-white/80 bg-white/90 px-6 shadow-[0_12px_30px_rgba(42,91,140,0.12)] sm:h-28 sm:w-56'
            >
                <span className={logo.className}>{logo.name}</span>
            </div>
        ))}
    </div>
)

export default Portfolio
