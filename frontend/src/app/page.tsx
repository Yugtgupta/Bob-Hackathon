"use client"
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";

import React from 'react';
import Lottie from 'lottie-react';
import invest from './assets/invest.json';



const Page = () => {


  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {/* <Navbar /> */}
      <div className="z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex">
        <div className='flex justify-between items-center w-full'>
          <div> 
            <div className="w-[40vw] text-slate-600  font-bold text-[2rem] h- leading-[3rem] ">
            From financial planning to wealth creation, we are your trusted advisors every step of the way. {" "}
        <Highlight className="text-slate-700 ">
        Let us guide you to a prosperous future.
        </Highlight>
        </div></div>
          {/* left div for text */}
          <div><Lottie className='w-[500px] pl-10 mt-10 ' autoplay={true} animationData={invest} /> </div>
          {/* right div for svg */}
        </div>
      </div>
    </main>

  
   
  );
};

{/* <Lottie className='w-[600px] absolute left-[200px] bottom-[50px] ' autoplay={true} animationData={invest} /> */}
export default Page;