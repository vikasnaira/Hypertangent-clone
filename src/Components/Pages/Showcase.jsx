import { motion } from 'framer-motion';
import { GiBigGear } from 'react-icons/gi';
import React from 'react';

const Showcase = () => {
  const showcase = [
    {
      title: 'Laser-Based Non-Contact Surface Profilometer',
      img: 'https://hypertangent.com/images/services-images/Robots.png',
      button: ['ReactJs', 'Marlin', 'GRBL', 'MATLAB', 'Modbus'],
    },
    {
      title:'Canclaw-Autonomous Robot for Industrial Can Handling ',
      img: 'https://hypertangent.com/images/services-images/IoT.png',
       button: ['CAD', 'PCB Design', 'ROS2', 'MoveIt', 'Gezebo'],
    },
    {
      title: 'lot-Based Data Acquisition System for Energy & Thermal Comfort Analysis',
      img: 'https://hypertangent.com/images/services-images/Embedded.png',
       button: ['ROS2', 'Path Planning', 'SLAM', 'Computer Vision', 'Robotic Arm Control'],
    },
    {
      title: 'Autonomous Robot for 360 Degree Imaging of Pre-Owned Vehicles',
      img: 'https://hypertangent.com/images/services-images/AI.png',
         button: ['ROS2', 'Path Planning', 'SLAM', 'Computer Vision', 'Robotic Arm Control']
    },
    {
      title: 'Edge-AI Powered Safety Harness for Work-at-Height Complaince',
      img: 'https://hypertangent.com/images/services-images/SmartFactories.png',
         button: ['ROS2', 'Path Planning', 'SLAM', 'Computer Vision', 'Robotic Arm Control'],
    },
    {
      title: 'SCADA-Integrated Package Length Control System for Textile TFO Machines',
      img: 'https://hypertangent.com/images/services-images/Mechanical.png',
         button: ['ROS2', 'Path Planning', 'SLAM', 'Computer Vision', 'Robotic Arm Control'],
    },

  ];

  return (
    <section className='mt-32 grid grid-cols-1 gap-6 overflow-hidden  px-4 py-5 sm:grid-cols-2 sm:gap-8 sm:px-8 lg:mt-40 lg:grid-cols-3 lg:gap-10 lg:px-12'>
      {showcase.map((service, index) => (
        <motion.div
          whileHover={{ y: -10 }}
          key={service.title || index}
          className='w-full cursor-pointer overflow-hidden rounded-2xl bg-white shadow transition-transform duration-300 hover:-translate-y-2'
        >
          <img src={service.img} alt={service.title} className=' aspect-video w-full object-cover' />

          <div className='info hover:-translate-y-10 bg-white transition-all duration-200 px-5 py-6 sm:px-6 '>
            <div className='flex items-center gap-3 text-lg sm:text-xl'>
              <div className='rounded-xl bg-blue-500  p-2 text-blue-800'>
                <GiBigGear />
              </div>
              <h2 className='font-medium hover:text-blue-800'>{service.title}</h2>
            </div>
            <p className='mt-6 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam inventore accusamus, aut velit in blanditiis consectetur voluptatum, ex ullam illum repellat nisi fugit dolorum nostrum explicabo placeat officiis, neque perferendis!</p>
            <hr className='mt-4 text-gray-400' />
            {service.button && (
              <div className='mt-4 flex flex-wrap gap-2'>
                {service.button.map((tag, idx) => (
                  <span key={idx} className='rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-blue-800'>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
         
        </motion.div>
      ))}

      <button className='col-span-1 mt-4 justify-self-center rounded-full bg-[#0047AB] px-6 py-3 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#003380] sm:col-span-2 lg:col-span-3'>
        Let's Build Something!
      </button>
    </section>
  );
};

export default Showcase;
