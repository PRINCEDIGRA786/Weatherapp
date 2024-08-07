import React from 'react';
import { NavLink } from 'react-router-dom';

export default function GetInTouch() {
    return (
        <>
            <div className="h-[60vh] w-[97vw] rounded-lg shadow-lg shadow-blue-400 mx-auto opacity-90 bg-cover bg-no-repeat bg-[url('https://besthqwallpapers.com/Uploads/28-12-2017/35428/blue-sky-white-clouds-sun-beautiful-sky.jpg')]">
            <div className="text-lg font-mono font-bold">
                    <ul className='flex space-x-14 py-6 px-20'>
                        <li className='hover:text-blue-600 transition-colors duration-300 ease-in-out'><NavLink to="/">Home</NavLink></li>
                        <li className='hover:text-blue-600 transition-colors duration-300 ease-in-out'><NavLink to="/about">About</NavLink></li>
                        <li className='hover:text-blue-600 transition-colors duration-300 ease-in-out'><NavLink to="/news">News</NavLink></li>
                        <li className='hover:text-blue-600 transition-colors duration-300 ease-in-out'><NavLink to="/contact">Contact us</NavLink></li>
                        <li className='hover:text-blue-600 transition-colors duration-300 ease-in-out'><NavLink to="/getintouch">Get in Touch</NavLink></li>
                    </ul>
                </div>
                <div className='my-5 text-center'>
                    <h1 className=' font-extrabold font-Mono text-5xl mt-6'>GET IN TOUCH</h1>
                </div>
            </div>
            <div className='get-in-touch-content mt-8 mx-[10%] text-center'>
                <h2 className='text-2xl font-bold mb-4'>We'd Love to Hear From You</h2>
                <p className='text-lg'>
                    If you have any questions, suggestions, or feedback, feel free to get in touch with us through our social media channels or by filling out the contact form on our website.
                </p>
                <img src="https://i.pinimg.com/originals/3d/1c/e3/3d1ce3fb1985505ba88e01e525a8f841.gif" alt="Weather"
                    className='mt-6 rounded-lg shadow-lg my-3 mx-auto' />      </div>
        </>
    );
}
