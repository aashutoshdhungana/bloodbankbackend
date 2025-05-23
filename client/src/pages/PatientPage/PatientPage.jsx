import React, { useState } from 'react';
import Dashboard from '../Admin/AdminDashboard';
import { FaHome, FaUser, FaUserInjured } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import MakeRequest from './MakeRequest';
import RequestHistory from './RequestHistory';
import PatientHome from './PatientHome';
import { FaRepeat } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";


const PatientPage = () => {
    const [activeComponent, setActiveComponent] = useState('Dashboard');
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <div className='flex text-gray-600'>
            {/* Sidebar */}
            <div className={` ${showSidebar ? "" : "hidden"}  z-50  absolute md:static  md:flex flex-col bg-white w-52 sm:w-80 h-[100vh] items-start border`}>

                <div className=' w-full h-14 item flex items-center justify-between font-bold'>
                    <div className='flex'>
                        <p className='text-xl text-red-500'>Blood</p>
                        <p className='text-xl '>Here!</p>
                    </div>
                    <button onClick={() => setShowSidebar(!showSidebar)}><IoCloseSharp /></button>
                </div>

                <div className='flex flex-col gap-10 text-xl items-start p-2 '>
                    <button
                        className={`flex items-center gap-2 ${activeComponent === 'Dashboard' ? 'underline text-red-500' : ''}`}
                        onClick={() => setActiveComponent('Dashboard')}
                    >
                        <FaHome /> Dashboard
                    </button>
                    <button
                        className={`flex items-center gap-2 ${activeComponent === 'Doner' ? 'underline text-red-500 ' : ''}`}
                        onClick={() => setActiveComponent('Doner')}
                    >
                        <FaRepeat /> Make Request
                    </button>
                    <button
                        className={`flex items-center gap-2 ${activeComponent === 'Patient' ? 'underline text-red-500' : ''}`}
                        onClick={() => setActiveComponent('Patient')}
                    >
                        <FaHistory /> Request History
                    </button>
                </div>
            </div>

            <div className='w-full '>
                <div className='bg-white  flex items-center p-2 h-14 shadow-lg '>
                    <div className='flex justify-between sm:justify-end w-full'>
                        <button onClick={() => setShowSidebar(!showSidebar)} className='md:hidden'>
                            <GiHamburgerMenu />
                        </button>
                        <button onClick={() => navigate("/")} className='px-2 text-white bg-red-500 rounded-md flex items-center'>Logout</button>

                    </div>


                </div>
                <div>
                    {activeComponent === 'Dashboard' && <PatientHome />}
                    {activeComponent === 'Doner' && <MakeRequest />}
                    {activeComponent === 'Patient' && <RequestHistory />}
                </div>
            </div>
        </div>
    )
}

export default PatientPage;
