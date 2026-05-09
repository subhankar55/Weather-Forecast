import React from "react";
import bgImage from '../assets/BGimage.avif'
import {Link} from "react-router-dom";


export default function Home(){

    return(
        <div className='w-full min-h-screen bg-cover bg-center bg-no-repeat'
              style={{backgroundImage:`url(${bgImage})`}}
            >
              <div className='inset-0 py-[2em] bg-black/75'>
                  <div className='text-center mb-[1em] text-white font-medium text-5xl'>
                    Welcome to Weather App!
                  </div>
                  <div className='w-[40%] h-[80vh] bg-gray-700 opacity-80  mx-auto rounded-md pt-[2em]'>
                    <h3 className='text-center text-white text-2xl font-medium'>
                      Enter Location
                    </h3>
                    <form action="" method="post" className=''>
                      <input type="text" 
                      placeholder='Enter longitude'
                      className='bg-white w-[70%] block mx-auto my-[2em] border-gray-400 rounded-lg p-[0.5em] outline-none'
                      />
                      <input type="text" 
                      placeholder='Enter latitude'
                      className='bg-white w-[70%] block mx-auto my-[2em] border-gray-400 rounded-lg p-[0.5em] outline-none'
                      />
                      <Link to="/weather">
                        <button
                        type='submit'
                        className='block mx-auto my-[1em] py-[1em] px-[2.5em] rounded-lg shadow-md shadow-white/80 bg-green-900 text-center text-white font-medium hover:bg-green-800'
                        >
                        Search
                        </button>
                      </Link>
                      
                    </form>
                  </div>
              </div>
              
            </div>
    );

}