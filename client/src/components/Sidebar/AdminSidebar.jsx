import React, { useState } from 'react';
import { FaHome, FaUser, FaUserInjured } from "react-icons/fa";
import { MdBloodtype, MdLoop } from "react-icons/md";
import { BiSolidDonateBlood } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Dashboard from '../../pages/Admin/AdminDashboard';
import Doner from '../../pages/Admin/Doner';
import Patient from '../../pages/Admin/Patient';
import Donations from '../../pages/Admin/Donations';
import BloodRequest from '../../pages/Admin/BloodRequest';
import BloodStock from '../../pages/Admin/BloodStock';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
    const [activeComponent, setActiveComponent] = useState('Dashboard');
    const [showSidebar, setShowSidebar] = useState(false);

    const navigate = useNavigate();

    return (
        <div className='flex text-gray-600'>
            {/* Sidebar */}
            <div className={` ${showSidebar ? "" : "hidden"} z-50 absolute md:static md:flex flex-col bg-white w-52 sm:w-80 h-[100vh] items-start border`}>
                <div className='w-full h-14 item flex items-center justify-between font-bold'>
                    <div className='flex'>
                        <p className='text-xl text-red-500'>Blood</p>
                        <p className='text-xl'>Here!</p>
                    </div>
                    <button onClick={() => setShowSidebar(!showSidebar)}><IoCloseSharp /></button>
                </div>
                <div className='flex flex-col gap-10 text-xl items-start p-2'>
                    <button className={`flex items-center gap-2 ${activeComponent === 'Dashboard' ? 'underline text-red-500' : ''}`} onClick={() => { setActiveComponent('Dashboard'); setShowSidebar(!showSidebar) }}>
                        <FaHome /> Dashboard
                    </button>
                    <button className={`flex items-center gap-2 ${activeComponent === 'Doner' ? 'underline text-red-500' : ''}`} onClick={() => { setActiveComponent('Doner'); setShowSidebar(!showSidebar) }}>
                        <FaUser /> Doner
                    </button>
                    <button className={`flex items-center gap-2 ${activeComponent === 'Patient' ? 'underline text-red-500' : ''}`} onClick={() => { setActiveComponent('Patient'); setShowSidebar(!showSidebar) }}>
                        <FaUserInjured /> Patient
                    </button>
                    <button className={`flex items-center gap-2 ${activeComponent === 'Donations' ? 'underline text-red-500' : ''}`} onClick={() => { setActiveComponent('Donations'); setShowSidebar(!showSidebar) }}>
                        <MdBloodtype /> Donations
                    </button>
                    <button className={`flex items-center gap-2 ${activeComponent === 'BloodRequest' ? 'underline text-red-500' : ''}`} onClick={() => { setActiveComponent('BloodRequest'); setShowSidebar(!showSidebar) }}>
                        <MdLoop /> Blood Request
                    </button>
                    <button className={`flex items-center gap-2 ${activeComponent === 'BloodStock' ? 'underline text-red-500' : ''}`} onClick={() => {setActiveComponent('BloodStock'); setShowSidebar(!showSidebar)}}>
                        <BiSolidDonateBlood /> Blood Stock
                    </button>
                </div>
            </div>
            <div className='w-full'>
                <div className='bg-white  flex items-center p-2 h-14 shadow-lg '>
                    <div className='flex justify-between sm:justify-end w-full'>
                        <button onClick={() => setShowSidebar(!showSidebar)} className='md:hidden'>
                            <GiHamburgerMenu />
                        </button>
                        <button onClick={() => navigate("/")} className='px-2 text-white bg-red-500 rounded-md flex items-center'>Logout</button>
                    </div>


                </div>
                <div>
                    {activeComponent === 'Dashboard' && <Dashboard />}
                    {activeComponent === 'Doner' && <Doner />}
                    {activeComponent === 'Patient' && <Patient />}
                    {activeComponent === 'Donations' && <Donations />}
                    {activeComponent === 'BloodRequest' && <BloodRequest />}
                    {activeComponent === 'BloodStock' && <BloodStock />}
                </div>
            </div>
        </div>
    );
}

export default AdminSidebar;
