import React from 'react';
import { NavLink } from 'react-router-dom';

export default function News() {
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
                    <h1 className=' font-extrabold font-Mono text-5xl mt-6'>LATEST WEATHER NEWS </h1>
                </div>
            </div>
            <div className='news-content mt-8 mx-[10%] text-center'>
                <h2 className='text-2xl font-bold mb-4'>Breaking Weather Updates</h2>
                <div className='news-item mb-6'>
                    <h3 className='text-xl font-semibold'>Heavy Rainfall Expected in the Midwest</h3>
                    <p className='text-lg'>
                        Forecasts indicate that the Midwest will experience heavy rainfall over the next few days, with potential for flooding in low-lying areas. Residents are advised to stay prepared and monitor local weather updates.
                    </p>
                </div>
                <div className='news-item mb-6'>
                    <h3 className='text-xl font-semibold'>Record Temperatures in the South</h3>
                    <p className='text-lg'>
                        The South is seeing record high temperatures this week, with heat advisories in effect. It's important to stay hydrated and avoid prolonged exposure to the sun during peak hours.
                    </p>
                </div>
                <img src="https://i.pinimg.com/originals/3d/1c/e3/3d1ce3fb1985505ba88e01e525a8f841.gif" alt="Weather"
                    className='mt-6 rounded-lg shadow-lg my-3 mx-auto' />    </div>
        </>
    );
}
