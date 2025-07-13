import React, { useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Marquee from "react-fast-marquee";
const Slider = () => {
    const slides = [
        {
            id:1,
            hedding:"Make more time for the work that matters most",
            description:"sujon biswas font-end developer.",
            image:"/most.png"
        },
         {
            id:2,
            hedding:"Make more time for the work that matters most",
            description:"sujon biswas computer technology.",
            image:"/marketing.png"
        },
         {
            id:3,
            hedding:"Make more time for the work that matters most",
            description:"sujon biswas digital marketer ",
            image:"/floppy.png"
        },
    ];

        const[currentindex,setcurrentindex]=useState(0);
        const prevSlide=()=>{
            setcurrentindex((previndex)=>(previndex===0?slides.length-1:previndex-1));
        }

        const nextslide=()=>{
            setcurrentindex((previndex)=>(previndex===slides.length-1?0:previndex+1))
        }
   

    const {hedding,description,image} = slides[currentindex];

  return (
    <>
    <section className='max-w-[1440px] py-24 px-6 md:px-12 mx-auto'>
              <div className='flex flex-col justify-between md:flex-row items-center gap-20'>

                {/* left side */}
                  <div className='flex flex-col justify-between w-full md:w-1/2 space-y-6'>
                  <img src="/logo.png" className='w-16 mb-4 md:w-24' alt="" />
                  <h1 className='text-2xl md:text-5xl font-bold text-black max-w-md'>{hedding}</h1>
                  <p className='text-gray-400 max-w-sm text-[20px]'>{description}</p>
                  <div className='flex items-center space-x-4 mt-4'>

                    <button onClick={prevSlide}  className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition'> <ChevronLeftIcon/> </button>

                    <button onClick={nextslide} className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition'> <ChevronRightIcon/> </button>

                  </div>


                  </div>

                {/* right side */}

                <div className='w-full md:w-1/2 flex justify-center'>
                <img src={image} className='w-full md:w-[65%] object-cover' alt="" />

                </div>


              </div>

      
      <div className='flex justify-center items-center mt-16 '>
        <Marquee direction='right' speed="100">
            <img src="/Logos.png" className='w-full  object-cover' alt="" />
        </Marquee>
        
      </div>

    </section>
      
    </>
  )
}

export default Slider
