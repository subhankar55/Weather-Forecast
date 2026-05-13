import React from "react";
import Map from "./Map.jsx";


export default function Weather(){

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
                        <li className="m-[1em] text-white">Temperature:</li>
                        <li className="m-[1em] text-white">Humidity:</li>
                        <li className="m-[1em] text-white">Wind Speed:</li>
                        <li className="m-[1em] text-white">Description:</li>
                        <li className="m-[1em] text-white">Rain:</li>
                    </ol>
                </div>
            </div>
            
        </div>
    );
}