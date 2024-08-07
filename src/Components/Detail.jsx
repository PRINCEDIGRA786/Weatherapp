import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { BsFillSunFill, BsFillCloudRainFill, BsFillCloudFill, BsFillCloudSnowFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function Detailpage() {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(true);
    const city = useSelector(state => state.detailpage);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7be00ba8169e0b239f3658444ff21a82`;

    const fetchInfo = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setArticles(data.main);
            setLoading(false);
        } catch (error) {
            alert("No such city exists! Try again...");
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    const navigate=useNavigate();

    const getWeatherIcon = (temp) => {
        if (temp <= 0) return <BsFillCloudSnowFill className="text-blue-200 h-60 w-96" />;
        if (temp >= 30) return <BsFillSunFill className="text-yellow-500 h-60 w-96" />;
        if (temp > 0 && temp < 30) return <BsFillCloudRainFill className="text-blue-500 h-60 w-96" />;
        return <BsFillCloudFill className="text-gray-400 h-32 w-32" />;
    };

    return (
        <>
            {loading ? (
                <div className="h-[100vh] bg-gradient-to-tr from-blue-900 to-slate-300 flex items-center justify-center">
                    <div className="w-64 h-64 bg-blue-700 rounded-full animate-pulse"></div>
                </div>
            ) : (
                <div className="h-[150vh] bg-gradient-to-tr from-blue-900 to-slate-300 pt-8 flex flex-col items-center">
                   <div className="text-lg font-mono font-bold">
                    <ul className='flex space-x-14  px-1'>
                        <li className='hover:text-blue-600 transition-colors cursor-pointer duration-300 ease-in-out' onClick={()=>navigate('/')}>Home</li>
                        <li className='hover:text-blue-600 transition-colors cursor-pointer duration-300 ease-in-out' onClick={()=>navigate('/about')}>About</li>
                        <li className='hover:text-blue-600 transition-colors cursor-pointer duration-300 ease-in-out' onClick={()=>navigate('/news')}>News</li>
                        <li className='hover:text-blue-600 transition-colors cursor-pointer duration-300 ease-in-out' onClick={()=>navigate('/contact')}>Contact us</li>
                        <li className='hover:text-blue-600 transition-colors cursor-pointer duration-300 ease-in-out' onClick={()=>navigate('/getintouch')}>Get in Touch</li>
                    </ul>
                </div>
                    <h1 className='font-Mono text-7xl text-white px-4 mt-5'>{city}</h1>
                    <br />
                    <hr className='h-[7px]' />
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6'>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-2xl font-extrabold text-black my-2'>Current temperature:</h1>
                            <div className='relative flex items-center justify-center'>
                                {getWeatherIcon(articles.temp)}
                                <h2 className='absolute text-center text-xl text-white font-extrabold'>
                                    {articles.temp} °C
                                </h2>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-2xl font-extrabold text-black my-2'>Feels like:</h1>
                            <div className='relative flex items-center justify-center'>
                                {getWeatherIcon(articles.feels_like)}
                                <h2 className='absolute text-center text-xl text-white font-extrabold'>
                                    {articles.feels_like} °C
                                </h2>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-2xl font-extrabold text-black my-2'>Max temp:</h1>
                            <div className='relative flex items-center justify-center'>
                                {getWeatherIcon(articles.temp_max)}
                                <h2 className='absolute text-center text-xl text-white font-extrabold'>
                                    {articles.temp_max} °C
                                </h2>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-2xl font-extrabold text-black my-2'>Min temp:</h1>
                            <div className='relative flex items-center justify-center'>
                                {getWeatherIcon(articles.temp_min)}
                                <h2 className='absolute text-center text-xl text-white font-extrabold'>
                                    {articles.temp_min} °C
                                </h2>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-2xl font-extrabold text-black my-2'>Humidity:</h1>
                            <div className='relative flex items-center justify-center'>
                                {getWeatherIcon(articles.humidity)}
                                <h2 className='absolute text-center text-xl text-white font-extrabold'>
                                    {articles.humidity} %
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
