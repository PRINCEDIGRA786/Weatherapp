import React, { useState } from 'react';
import { BsFillCloudSunFill, BsFillSunFill, BsFillCloudLightningRainFill, BsSearchHeartFill } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import city from '../State/action-creators';
import Footer from './Footer';

export default function Home() {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const [cityName, setCityName] = useState('');

    return (
        <>
            <div className="h-[60vh] w-[97vw] rounded-lg shadow-lg shadow-blue-400 mx-auto opacity-90 bg-cover bg-no-repeat bg-[url('https://besthqwallpapers.com/Uploads/28-12-2017/35428/blue-sky-white-clouds-sun-beautiful-sky.jpg')]">
                <div className="text-lg font-mono font-bold">
                    <ul className='flex space-x-14 py-6 px-20'>
                        <li className='hover:text-blue-600 transition-colors cursor-pointer duration-300 ease-in-out' onClick={()=>navigate('/')}>Home</li>
                        <li className='hover:text-blue-600 transition-colors cursor-pointer duration-300 ease-in-out' onClick={()=>navigate('/about')}>About</li>
                        <li className='hover:text-blue-600 transition-colors cursor-pointer duration-300 ease-in-out' onClick={()=>navigate('/news')}>News</li>
                        <li className='hover:text-blue-600 transition-colors cursor-pointer duration-300 ease-in-out' onClick={()=>navigate('/contact')}>Contact us</li>
                        <li className='hover:text-blue-600 transition-colors cursor-pointer duration-300 ease-in-out' onClick={()=>navigate('/getintouch')}>Get in Touch</li>
                    </ul>
                </div>
                <div className='my-5 text-center'>
                    <h1 className='  font-extrabold font-Mono text-5xl'>WELCOME TO WEATHERDEKHO.COM</h1>
                </div>
                <div className='my-16 flex justify-center'>
    <label name='getcity' className='relative w-full max-w-[450px]'>
        <input
            type='text'
            placeholder='Enter the city'
            className='bg-transparent border-[5px] border-blue-900 text-black
             placeholder:text-black font-extrabold rounded-lg px-4 py-2 pr-12 
              hover:bg-slate-50 outline-none transition-all  w-[450px]
            duration-300 ease-in-out focus:w-[450px] '
            onChange={(e) => setCityName(e.target.value)}
        />
        <NavLink to='/detailpage'>
            <BsSearchHeartFill
                className='absolute top-1/2 right-3 transform -translate-y-1/2 h-7 w-7 text-opacity-25 hover:text-opacity-100 hover:text-blue-700 transition-opacity duration-300 ease-in-out'
                onClick={() => dispatch(city(cityName))}
            />
        </NavLink>
    </label>
</div>


            </div>
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
            <div className='additional-content mt-8 mx-[10%] text-center'>
                <h2 className='text-2xl font-bold mb-4'>Stay Updated with the Latest Weather Information</h2>
                <p className='text-lg'>Get accurate weather updates, forecasts, and alerts for your city.</p>
                <img src="https://i.pinimg.com/originals/3d/1c/e3/3d1ce3fb1985505ba88e01e525a8f841.gif" alt="Weather" 
                className='mt-6 rounded-lg shadow-lg my-3 mx-auto' />
            </div>

            <Footer/>
        </>
    );
}
