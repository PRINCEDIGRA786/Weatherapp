import React, { useState } from 'react'
import {BsFillCloudSunFill} from 'react-icons/bs';
import {BsFillSunFill} from 'react-icons/bs';
import {BsFillCloudLightningRainFill} from 'react-icons/bs';
import {BsSearchHeartFill} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import city from '../State/action-creators';
import { useDispatch } from 'react-redux';

export default function Home() {
    const dispatch=useDispatch();
    const[cittyna,setcityna]=useState('');
return(
    <>
    <div className="h-[60vh] w-[100vw] opacity-90 bg-cover bg-no-repeat bg-[url('https://besthqwallpapers.com/Uploads/28-12-2017/35428/blue-sky-white-clouds-sun-beautiful-sky.jpg')]">

    <div className="text-lg font-mono font-bold">
            <ul className='flex space-x-14 py-6 px-20'>
                <li>Home</li>
                <li>About</li>
                <li>News</li>
                <li>Contact us</li>
                <li>Help</li>
            </ul>
        </div>
        <div className='my-5'>
            <h1 className=' mx-[22%] font-extrabold font-Mono text-3xl'>WELCOME TO WEATHERDEKHO.COM</h1>
        </div>

        <div className='my-16 flex mx-[34%]'>
            <label name='getcity '>
                <input type='text' placeholder='Enter the city' className='  bg-transparent border-[5px]
                 border-blue-900 text-black placeholder:text-black font-extrabold rounded-lg px-4 py-2
                  ' onChange={(e)=>{
                    setcityna(e.target.value);
                  }}></input>
            </label>
            <div className='h-12 w-12 mt-[1px] p-1 border-[5px] border-blue-900 rounded-lg'>
                <NavLink to='/detailpage'>
                <BsSearchHeartFill className='h-7 w-7 ' onClick={()=>{
                    dispatch(city(cittyna));
                }}/>
                </NavLink>
            </div>

        </div>
    </div>
    <div className='threeicons mt-8 flex justify-evenly'>
        <div>
        <BsFillCloudSunFill className='h-32 w-32 text-blue-500 hover:text-blue-700'/>
        </div>
        <div>
        <BsFillSunFill className='h-32 w-32 text-yellow-500 hover:text-yellow-600'/>
        </div>
        <div>
            <BsFillCloudLightningRainFill className='h-32 w-32 text-gray-400 hover:text-gray-500'/>
        </div>

    </div>    
    </>


);
   
}
