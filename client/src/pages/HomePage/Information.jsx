import React from 'react'
import { motion } from 'framer-motion'
import simage from "../../assets/second.webp"


const Information = () => {
    return (
        <motion.div 
        initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }} className='flex items-center flex-col p-2 mt-10'>
            <div className='flex flex-col  w-[90%] sm:w-[80%]'>

                <div className='flex flex-col  '>
                    <div className='text-3xl font-bold text-gray-700'>What we Do?</div>
                    <div className='p-5'>Blood Here is for public donation center with blood donation members in the changing health care system.

                        Specialist blood donors and clinical supervision.
                        Increasing communication with our members.
                        High quality assessment, diagnosis and treatment.
                        Examine critically to ensure alignment.
                        The extra care of a multi-disciplinary team.
                    </div>
                </div>
                <div className=''>
                    <img className='' src={simage} alt="" />
                </div>

            </div>

        </motion.div>
    )
}

export default Information;