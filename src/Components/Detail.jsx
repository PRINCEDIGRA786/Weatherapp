import React from 'react';
import { useState ,useEffect } from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import {PiArrowBendLeftUp,PiArrowBendRightDown} from 'react-icons/pi';
import {GiWindSlap} from 'react-icons/gi';
import {BsWater} from 'react-icons/bs';
import {GiPressureCooker} from 'react-icons/gi';
// import {BsCloudsFill} from 'react-icons/bs';
import Card from './Card';
import {MdDisabledVisible} from 'react-icons/md';

export default function Detailpage(props) {
    var arr=new Array;
    const[articles,setarticles]=useState([]);
    let cit=useSelector(state=>state.detailpage);
    var url=`https://api.openweathermap.org/data/2.5/forecast?q=${cit}
    &units=metric&appid=7be00ba8169e0b239f3658444ff21a82`;
    const fetchInfo = async () => {
        return await fetch(url)
          .then((res) => res.json())
          .then((e) => (setarticles(e.list[0].main)))
          .catch((e)=>{alert("No such city exist !! Try again...")})
      }
    
      // var todayDate = new Date().toISOString().slice(0, 10);
      // switch (articles.list.dt_txt.startsWith(todayDate)) {
      //   case true:
      //             arr=articles.list.filter((element)=>{
      //                 return element;
      //       })
      //         break;
      //   case false:
      //     break;

      //   } 

        
      
     useEffect(() => {
            fetchInfo();
            // fetchtoday();
      },[]);


    // const Api=async()=>{

    //     // const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
    //     const url=`https://api.openweathermap.org/data/2.5/forecast?q=${cit}&appid=7be00ba8169e0b239f3658444ff21a82`;
    //     const options = {
    //     method: 'GET',
    //     headers: {
    //         // 'X-RapidAPI-Key': 'cab24b048cmshe69288443eb6468p1792c5jsndf610ff042d7',
    //         'X-RapidAPI-Key': '7be00ba8169e0b239f3658444ff21a82',
    //         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    //     }
    // };
    
    // try {
    //     const response = await fetch(url);
    //     const result = await response.json();
    //     setarticles(result);
    // } catch (error) {
    //     var it=[{"message":"No such City found !! Oops"}];
    //     setarticles(it);
    // }
    // }
    // useEffect(() => {
    //   Api();
    // },[]);

  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cit}&appid=7be00ba8169e0b239f3658444ff21a82`,{mode:'cors'}, {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "7be00ba8169e0b239f3658444ff21a82",
  //       "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setarticles(data);
  //       console.log(articles);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
    
  return (
    <>

      {/* <div>
        {/* <h2>Aggea babe</h2>
        <div>
        {console.log(articles)}
         <h1>{articles.city.name}</h1>
        <h1>{articles.list[0].main.temp}</h1>
        <h1>{articles.list[0].main.temp}</h1>
        <h1>{articles.list[0].dt_txt}</h1>
      </div> */}
      {console.log(articles)}
      {/* <div className='h-[100vh] bg-gradient-to-tr from-blue-950 to-gray-600'>

      <div className=' flex justify-between'>
          <h1 className='font-Mono font-bold text-white text-3xl p-5'>{articles.city.name}</h1>
          <div className='flex p-5'>
            <div>
              <PiArrowBendLeftUp className='font-extrabold text-white h-6 w-6'/>
            </div>
          <h2 className='font-semibold text-2xl text-white'>{articles.list[0].main.temp_max} °C</h2>
          <h2 className='font-semibold text-lg text-white p-2 pl-4'>{articles.list[0].main.temp_min} °C </h2>
          <div>
              <PiArrowBendRightDown className='font-extrabold mt-4 text-white h-6 w-6'/>
            </div>
          </div>


      </div>
    <hr className='h-3 text-white font-extrabold'/>
          <div className='flex justify-evenly'>
            <div className='h-48 shadow-md shadow-gray-200 w-44 rounded-lg '>
            <GiWindSlap className='h-20 w-20 font-extrabold text-xl text-white mx-auto'/>
            <h1 className='font-Mono text-xl p-2 text-white px-auto'>WIND</h1>
            <p className='p-2 text-white text-3xl'>
              {articles.list[0].wind.speed} m/s
            </p>
            </div>
            <div className='h-48 shadow-md shadow-gray-200 w-44 rounded-lg  '>
            <BsWater className='h-20 w-20 font-extrabold text-xl text-white mx-auto'/>
            <h1 className='font-Mono text-xl p-2 text-white px-auto'>SEA-LEVEL</h1>
            <p className='p-2 text-white text-3xl'>
              {articles.list[0].main.sea_level} hPa 
            </p>
            </div>
            <div className='h-48 shadow-md shadow-gray-200 w-44 rounded-lg  '>
            <GiPressureCooker className='h-20 w-20 font-extrabold text-xl text-white mx-auto'/>
            <h1 className='font-Mono text-xl p-2 text-white px-auto'>PRESSURE</h1>
            <p className='p-2 text-white text-3xl'>
              {articles.list[0].main.pressure} hPa 
            </p>
            </div>
            <div className='h-48 shadow-md shadow-gray-200 w-44 rounded-lg  '>
              <MdDisabledVisible className='h-20 w-20 font-extrabold text-xl text-white mx-auto'/>
              <h1 className='font-Mono text-xl p-2 text-white px-auto'>VISIBILITY</h1>
              <p className='p-2 text-white text-3xl'>
              {articles.list[0].visibility} m 
              </p>
            </div>
          </div>
          <div className='border border-red-400 mx-4 my-4 grid-cols-4'>
            {console.log(
              "Abee kys ha",arr
            )}
            {arr.map((element)=>(
              <Card date={element.dt_txt} mxtem={element.temp_max} mntem={element.temp_min}/>
            ))}
          </div>
      </div> */}
    

    {/* // From here the code is started for the mini project bro.... */}
    <div className="h-[100vh] 
    bg-gradient-to-tr from-blue-900 to-slate-300 
    pt-[5%] /bg-[url('https://i.pinimg.com/originals/6f/0a/ed/6f0aed74249f949bb74d6ac69e451fcf.gif')]">
        
        <div className='h-96 w-96 border-[2px] border-slate-400 bg-gradient-to-tr from-[#04040d] to-slate-300 rounded-lg shadow-xl shadow-slate-200
         mx-auto'>
          <h1 className='font-Mono text-4xl text-white px-4'>{cit}</h1>
          <br/><hr className='h-[7px]'/>
          <h2 className='font-semibold p-4 text-xl text-white'>Current temperature: {articles.temp} °C</h2>
          <h2 className='font-semibold p-4 text-xl text-white'>Feels like: {articles.feels_like} °C</h2>
          <h2 className='font-semibold p-4 text-xl text-white'>Max temp: {articles.temp_max} °C,Min temp: {articles.temp_min} °C</h2>
          <h2 className='font-semibold p-4 text-xl text-white'>Feels like: {articles.humidity} %</h2>

        </div>
    </div>
    
    </>

  )
}
