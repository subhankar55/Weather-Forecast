import React from "react";
import Map from "./Map.jsx";


export default function Weather(){

    return (
        <div className="bg-blue-300 min-h-screen w-full p-[1em] bg-cover">
            <h1 className="text-white text-center font-bold text-3xl mb-[1em]">
                Weather-Forecast of your city!
            </h1>
            <div className="flex w-full">
                <div className="w-[30%] h-[80vh] mx-auto rounded-l-lg overflow-hidden">
                <Map/>
                </div>
                <div className="w-[70%] h-[80vh] bg-blue-700 mx-auto rounded-r-lg ">

                </div>
            </div>
            
        </div>
    );
}