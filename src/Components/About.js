import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillCloudSunFill, BsFillSunFill, BsFillCloudLightningRainFill } from 'react-icons/bs';

export default function About() {
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
                    <h1 className=' font-extrabold font-Mono text-5xl mt-4'>ABOUT WEATHERDEKHO.COM</h1>
                </div>
            </div>
            <div className='about-content mt-8 mx-[10%] text-center'>
                <h2 className='text-2xl font-bold mb-4'>Our Mission</h2>
                <p className='text-lg'>
                    WeatherDekho.com is dedicated to providing accurate and up-to-date weather information to help you stay prepared for any weather conditions. Our mission is to make weather forecasts accessible and easy to understand for everyone.
                </p>
                <h2 className='text-2xl font-bold mb-4 mt-8'>Our Services</h2>
                <p className='text-lg'>
                    We offer a variety of services including daily weather updates, weather alerts, and detailed forecasts for cities around the world. Our team is committed to delivering reliable weather data to keep you informed.
                </p>
                <img src="https://i.pinimg.com/originals/3d/1c/e3/3d1ce3fb1985505ba88e01e525a8f841.gif" alt="Weather"
                    className='mt-6 rounded-lg shadow-lg my-3 mx-auto' />     </div>
            <div className='threeicons mt-8 flex justify-evenly'>
                <div>
                    <BsFillCloudSunFill className='h-32 w-32 text-blue-500 hover:text-blue-700' />
                </div>
                <div>
                    <BsFillSunFill className='h-32 w-32 text-yellow-500 hover:text-yellow-600' />
                </div>
                <div>
                    <BsFillCloudLightningRainFill className='h-32 w-32 text-gray-400 hover:text-gray-500' />
                </div>
            </div>
        </>
    );
}
