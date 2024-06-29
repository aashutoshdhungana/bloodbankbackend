import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut, updateUserData } from '../../store/slices/UserSlice';
import axios from 'axios';

const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const {  isLoggedIn, user } = useSelector(state => state.user);
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const dispatch = useDispatch();
    useEffect(() => {
        if (showDropdown)
            setShowDropdown(false)
    }, [pathname])

    const logOutHandler = async () => {
        // await axios.get('/sanctum/csrf-cookie');
        let response = await axios.post('/api/auth/logout');
        if (response && response.status === 200) {
            alert("You have been logged out!")
            localStorage.removeItem("userState");
            dispatch(logOut());
        }
        else {
            alert("Failed to log out!");
        }

    }

    return (
        <div className='fixed z-50 w-full flex items-center justify-between drop-shadow-lg bg-white h-20 px-12'>
            <button onClick={() => navigate("/")} className='flex  font-semibold text-2xl sm:text-3xl '>
                <p className='text-red-500'>
                    Blood
                </p>
                <p>Here!</p>
            </button>
            {/* large Screen */}
            <span onClick={() => setShowDropdown(false)} className={` ${showDropdown ? "" : "hidden"} absolute inset-0 h-screen `} />
            <div className=' hidden z-30 md:flex gap-5 '>
                <button onClick={() => navigate("/")} className=' transition-all hover:bg-red-500 hover:text-white px-2 rounded-md'>Home </button>
                {isLoggedIn && <button onClick={() => navigate("/donorDashboard")} className=' transition-all hover:bg-red-500 hover:text-white px-2 rounded-md'>Donor Dashboard</button>}
                <button onClick={(() => navigate("/about-us"))} className=' transition-all hover:bg-red-500 hover:text-white px-2 rounded-md'>About Us</button>
                {
                    isLoggedIn ? (<>
                        <button onClick={() => { navigate("/donateBlood") }} className='transition-all hover:bg-red-500 hover:text-white px-2 rounded-md'>Donate Blood</button>
                        <button onClick={() => { navigate("/requestBlood")}} className='transition-all hover:bg-red-500 hover:text-white px-2 rounded-md'>Request Blood</button>
                        <span>Hello, {user.name}</span>
                        <button onClick={() => {logOutHandler()}}>Log Out</button>
                    </>

                    ) : (
                        <>
                        <button onClick={() => { navigate("/login-page") }} className=' transition-all hover:bg-red-500 hover:text-white px-2 rounded-md' >Login</button>
                        <button onClick={() => navigate("/registration-page")} className=' transition-all hover:bg-red-500 hover:text-white px-2 rounded-md'>Register</button>
                    </>
                    )
                }
            </div>
            <button onClick={() => setShowMenu(!showMenu)} className='md:hidden'><RxHamburgerMenu /></button>
            {/* Small screen */}
            <div className={` ${showMenu ? "h-52 p-5" : "h-0 overflow-hidden"} md:hidden flex flex-col gap-5 bg-white drop-shadow-lg absolute right-5 top-20 w-40 items-start transition-all ease-in-out  `}>
                <button onClick={() => { navigate("/"); setShowMenu(!showMenu) }}>Home</button>
                <button onClick={(() => { navigate("/about-us"); setShowMenu(!showMenu) })}>About Us</button>
                {
                    isLoggedIn ? (<>
                        <span>Hello, {user.name}</span>
                        <button onClick={() => {logOutHandler()}}>Log Out</button>
                    </>

                    ) : (
                        <>
                        <button onClick={() => { navigate("/login-page"); setShowDropdown(!showDropdown); setShowMenu(false) }} className=' transition-all hover:bg-red-500 hover:text-white px-2 rounded-md'>Log In</button>
                        <button onClick={() => navigate("/registration-page")} className=' transition-all hover:bg-red-500 hover:text-white px-2 rounded-md'>Register</button>            
                    </>
                    )
                }
            
            </div>


        </div>
    )
}

export default Navbar