import React from "react";
import bgImage from '../assets/BGimage.avif'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import forecast from "../services/weatherdata.js";


export default function Home(){


  const [city,setCity] = useState("kolkata");
  const [dateTime,setDateTime] = useState("");

  const navigate = useNavigate();
  const handlecity = (e) =>{
    setCity(e.target.value);
  }
  const handledate = (e) =>{
    setDateTime(e.target.value);
  }

  const handlesubmit = async (e) =>{

    e.preventDefault();

    try {
      const result = await forecast(city.toLowerCase(),dateTime);
  
      navigate("/weather",{
          state:{
            lat: result.coordinates.lat,
            long: result.coordinates.lon,
            weather: result.weather.weather[0].main,
            temp: result.weather.main.temp,
            humidity: result.weather.main.humidity,
            wind: result.weather.wind.speed,
            description: result.weather.weather[0].description,
            icon: result.weather.weather[0].icon
          }
      });
    } catch (error) {
      console.log(error.message);
    }

  }


    return(
        <div className='w-full min-h-screen bg-cover bg-center bg-no-repeat'
              style={{backgroundImage:`url(${bgImage})`}}
            >
              <div className='inset-0 py-[2em] bg-black/75'>
                  <div className='text-center mb-[1em] text-white font-medium text-3xl'>
                    Get Weather-Forecast of your city!
                  </div>
                  <div className='w-[40%] h-[80vh] bg-gray-700 opacity-80  mx-auto rounded-md pt-[2em]'>
                    <h3 className='text-center text-white text-2xl font-medium'>
                      Enter Location
                    </h3>
                    <form 
                      action="" 
                      method="post" 
                      className=''
                      onSubmit={handlesubmit}
                    >
                      <input type="text" 
                      placeholder='Enter city'
                      className='bg-white w-[70%] block mx-auto my-[2em] border-gray-400 rounded-lg p-[0.5em] outline-none'
                      onChange={handlecity}
                      />
                      <input type="text" 
                      placeholder='Till tomorrow :yyyy-mm-dd hh:mm:ss'
                      className='bg-white w-[70%] block mx-auto my-[2em] border-gray-400 rounded-lg p-[0.5em] outline-none'
                      onChange={handledate}
                      />
                      
                      <button
                      type='submit'
                      className='block mx-auto my-[1em] py-[1em] px-[2.5em] rounded-lg shadow-md shadow-white/80 bg-green-900 text-center text-white font-medium hover:bg-green-800'
                      >
                        Search
                      </button>
                      
                      
                    </form>
                  </div>
              </div>
              
            </div>
    );

}