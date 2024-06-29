import React, { useState } from 'react'
import Information from './Information'
import { motion } from "framer-motion"
import { Button } from '@tremor/react'
import { useNavigate } from 'react-router-dom'
import image from "../../assets/homepage.webp"
import image2 from '../../assets/homepagesecond.jpg'
import DonateBlood from '../DonateBlood/DonateBlood';
import axios from 'axios'
import { useSelector } from 'react-redux'

const Body = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.user);
  const [showBloodDonation, setShowBloodDonation] = useState(false);

  const addBloodDonationRequest = async () => {
    var result = await axios.post('api/blooddonation', {
      user_id: user.id,
      bloodtype: user.bloodtype,
      units: 1
    });
    if (result && result.status === 201) {
      alert(`Blood donation entry has been recorded. We will email you the details about location and date soon.`);
      setShowBloodDonation(false);
      navigate('/donorDashboard')
    } else {
      alert('Failed to add blood donation entry.');
    }
  }
  return (
    <motion.div
      className='relative '
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >

      <div className=' absolute flex flex-col md:flex-row md:justify-between gap-5 p-8 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 top-[25rem] left-1/2 text-start rounded-lg w-[80%] '>
        <div className='flex flex-col text-gray-700'>
          <h1 className='sm:text-3xl font-semibold'>Donate Blood, Save Life !</h1>
          <h2 className='text-2xl sm:text-5xl font-bold mt-8'>Your Blood </h2>
          <h2 className='text-2xl sm:text-5xl font-bold'>Can save someone's life</h2>
        </div>


        <div className='flex flex-col items-center gap-2 mt-5'>
          <h1 className='text-2xl text-gray-700 text-center'>Want to donate blood?</h1>
          <button onClick={() => {
            setShowBloodDonation(true)
          }} className='bg-red-600 hover:bg-red-800 text-white p-2 sm:p-4 rounded-full'>Donate Now</button>
        </div>
      </div>
      <div>
        <img className="w-full h-screen object-cover pt-20" src={image2} alt="" />

      </div>

      <Information />
      <DonateBlood show={showBloodDonation} onClose={() => { setShowBloodDonation(false) }} onConfirm={() => { addBloodDonationRequest()}} />
    </motion.div>
  )
}

export default Body;