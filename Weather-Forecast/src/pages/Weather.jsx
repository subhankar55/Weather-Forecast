import React from "react";
import Map from "./Map.jsx";
import { useLocation } from "react-router-dom";


export default function Weather(){

    const location = useLocation();
    const {lat,long,weather,temp,humidity,wind,description} = location.state;


    return (
        <div className="bg-gray-700 min-h-screen w-full p-[1em] bg-cover">
            <h1 className="text-white text-center font-bold text-3xl mb-[1em]">
                Weather-Forecast of your city!
            </h1>
            <div className="flex w-full">
                <div className="w-[30%] h-[80vh] mx-auto rounded-l-lg overflow-hidden">
                <Map/>
                </div>
                <div className="w-[70%] h-[80vh] bg-gray-800 mx-auto rounded-r-lg p-[2em]">
                    <h1 className="text-center text-white mb-[0.5em] font-medium text-2xl">
                        Weather Report:
                    </h1>
                    <ol className="flex flex-col justify-center items-center">
                        <li className="m-[0.5em] text-white">Temperature: {(temp - 273.15).toFixed(2)} °C</li>
                        <li className="m-[0.5em] text-white">Humidity: {humidity}%</li>
                        <li className="m-[0.5em] text-white">Wind Speed: {wind} m/s</li>
                        <li className="m-[0.5em] text-white">Description: {description}</li>
                        <li className="m-[0.5em] text-white">Rain: {weather}</li>
                    </ol>
                </div>
            </div>
            
        </div>
    );
}