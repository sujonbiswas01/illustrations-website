import React from 'react'
import image1 from '/work.png'
import image2 from '/work1.png'
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Time = () => {
  const data = [
    {
      heading:"Make more time for the work",
      p1:"Many ways to use illustrations in design",
      p2:"Simply explained with illustrations",
      p3:"Make more time for the work"
    }
  ]
  return (
    <section className='max-w-[1440px] py-24 px-6 mx-auto' >
        <div className='flex flex-col md:flex-row justify-between px-6 mx-auto'>
            <div className='w-full md:w-1/2 md:px-32 flex justify-center items-center'>
                {/* left side */}
                <img src={image1}  className='object-cover' alt="" />
            </div>

            <div className='flex flex-col justify-between items-center px-4 md:px-20 mx-auto py-10 md:py-0'>
              {
                data.map((items ,index)=>(
                  <div key={index} className='px-6'> 
                  <h2 className='text-3xl md:text-5xl font-bold max-w-md'>{items.heading}</h2>

                  <div className='space-y-4 py-4'>
                    <p className=''> <span className='text-green-600 outline-1 outline-green-200 rounded-full'> <CheckCircleOutlineIcon variant="outlined" /> </span> {items.p1}</p>
                    <p className=''> <span className='text-green-600 outline-1 outline-green-200 rounded-full'> <CheckCircleOutlineIcon variant="outlined" /> </span> {items.p2}</p>
                    <p className=''> <span className='text-green-600 outline-1 outline-green-200 rounded-full'> <CheckCircleOutlineIcon variant="outlined" /> </span> {items.p3}</p>
                  </div>

                  <Button className='hover:bg-green-600' variant="contained" endIcon={<ArrowForwardIcon sx={{fontSize:24}}/>}>Learn more  </Button>

                  </div>
                ))
              }

              
            </div>
        </div>



        {/* section 2 */}
      
       <div className='flex flex-col md:flex-row justify-between px-6 mx-auto mt-12'>
            <div className='flex flex-col justify-between items-center px-4 md:px-20 mx-auto'>
              {
                data.map((items ,index)=>(
                  <div key={index} className='px-6'> 
                  <h2 className='text-3xl md:text-5xl font-bold max-w-md'>{items.heading}</h2>

                  <div className='space-y-4 py-4'>
                    <p className=''> <span className='text-green-600 outline-1 outline-green-200 rounded-full'> <CheckCircleOutlineIcon variant="outlined" /> </span> {items.p1}</p>
                    <p className=''> <span className='text-green-600 outline-1 outline-green-200 rounded-full'> <CheckCircleOutlineIcon variant="outlined" /> </span> {items.p2}</p>
                    <p className=''> <span className='text-green-600 outline-1 outline-green-200 rounded-full'> <CheckCircleOutlineIcon variant="outlined" /> </span> {items.p3}</p>
                  </div>

                  <Button className='hover:bg-green-600' variant="contained" endIcon={<ArrowForwardIcon sx={{fontSize:24}}/>}>Learn more  </Button>

                  </div>
                ))
              }

              
            </div>

             <div className='w-full md:w-1/2 md:px-32 flex justify-center items-center md:py-0 py-10 '>
                {/* left side */}
                <img src={image2}  className='object-cover' alt="" />
            </div>
        </div>
    </section>
  )
}

export default Time
