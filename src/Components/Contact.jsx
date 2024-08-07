import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Contact() {
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
                    <h1 className=' font-extrabold font-Mono text-5xl mt-6'>CONTACT US</h1>
                </div>
            </div>
            <div className='contact-content mt-8 mx-[10%] text-center'>
                <h2 className='text-2xl font-bold mb-4'>Get in Touch</h2>
                <p className='text-lg'>
                    For any inquiries or support, please reach out to us via the following methods:
                </p>
                <div className='mt-4'>
                    <p className='text-lg'>Email: support@weatherdekho.com</p>
                    <p className='text-lg'>Phone: +1 (123) 456-7890</p>
                </div>
                <img src="https://i.pinimg.com/originals/3d/1c/e3/3d1ce3fb1985505ba88e01e525a8f841.gif" alt="Weather"
                    className='mt-6 rounded-lg shadow-lg my-3 mx-auto' />  </div>
        </>
    );
}
