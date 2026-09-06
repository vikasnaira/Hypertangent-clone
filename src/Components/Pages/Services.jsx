import { motion } from 'framer-motion';
import React from 'react'
import { GiBigGear } from "react-icons/gi";
const Services = () => {


const services = [
    {
        title:'Robotics',
        img:'https://hypertangent.com/images/services-images/Robots.png',
        description:'Developing AMR,AGV,Rovers,Robotic Arms,and Kiosk Robots'
    },
    {
        title:'Smart loT',
        img:'https://hypertangent.com/images/services-images/IoT.png',
        description:'Egineering loT devices, Sensor and Edge Systems, Data Dashboards and Cloud Connectivity'
    },
    {
        title:'Embedded Systems',
        img:'https://hypertangent.com/images/services-images/Embedded.png',
        description:'Custom Embedded Hardware,Firmware Development, and PCB Designing'
    },
    {
        title:'AI/ML',
        img:'https://hypertangent.com/images/services-images/AI.png',
        description:'Predictive Analytics, Computer Vision, NLP, and Edge-AI for Automation and Actionable Insights'
    },
    {
        title:'Smart Factories',
        img:'https://hypertangent.com/images/services-images/SmartFactories.png',
        description:'We implement PLC, SCADA,lloT Networks, and Industrial Automation'
    },
    {
        title:'Mechancial Engineering',
        img:'https://hypertangent.com/images/services-images/Mechanical.png',
        description:'Mechancial System Design, CAD/CAE Modeling, Analysis,and Fabrication'
    },
    {
        title:'Bio-Medical Devices',
        img:'https://hypertangent.com/images/services-images/BioMedical.png',
        description:'Innovating Medical Devices, Diagnostics, Biosensors, Lab Automation,Microfluidics,and Smart Health Solutions'
    },
    {
        title:'AR/VR/MR',
        img:'https://hypertangent.com/images/services-images/ARVR.png',
        description:'Creation of AR/VR/MR Apps and Devices for Training,Simulation, Visualization or Interactive Experiences'
    },
    {
        title:'Drones',
        img:'https://hypertangent.com/images/services-images/Drones.png',
        description:'Building Autonomous UAVs & Drones with smart Payloads for inspection  , Surveying and Precision Applications'
    },
]



  return (
    <section className='mt-32 grid grid-cols-1 gap-6 px-4 py-5 sm:grid-cols-2 sm:gap-8 sm:px-8 lg:mt-40 lg:grid-cols-3 lg:gap-10 lg:px-12'>
    {services.map((service, index) => (
        <motion.div
        whileHover={{ y:-10 }}
        key={index} className='w-full cursor-pointer overflow-hidden rounded-2xl bg-white shadow transition-transform duration-300 hover:-translate-y-2'>
            <img src={service?.img} alt={service.title} className='aspect-video w-full object-cover'/>
            <div className='info px-5 py-6 sm:px-6'>
            <span className='flex items-center gap-3 text-lg sm:text-xl'>
                <h1 className='rounded-xl bg-sky-200 p-2 text-blue-800'><GiBigGear /></h1>
                <h1 className='font-medium hover:text-blue-800'>{service?.title}</h1>
                </span>
            <p className='text-gray-600 mt-6'>{service.description}</p>
            </div>
        </motion.div>
    ))}


    <button className='col-span-1 mt-4 justify-self-center rounded-full bg-[#0047AB] px-6 py-3 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#003380] sm:col-span-2 lg:col-span-3'>Let's Build Something!</button>
    </section>
  )
}

export default Services
