import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-16 px-6 lg:px-16 container max-w-[1500px] mx-auto'>
        <div className='flex-1 flex flex-col items-start gap-6'>
            <h1 className='text-2xl lg:text-6xl font-bold max-w-lg '>Simply explained with illustrations</h1>
            <p className='text-lg lg:text-xl text-gray-500 max-w-md'>There are a lot of different components that will help you create the perfect look for your project</p>

            <div className='flex gap-3'>
                <button className='bg-[#5F62E2] hover:bg-blue-700 text-white font-semibold py-3 px-6 transition duration-300 rounded-lg'>Get Started</button>
                <button className="bg-indigo-100 font-semibold py-3 px-6 transition duration-300 text-[#5F62E2] rounded-lg">Learn More</button>
            </div>

        </div>
        <div className='flex-1'>
            <img src="/flight.png" className='w-full md:max-w-lg h-auto' alt="" />
        </div>

    </section>
      
    </>
  )
}

export default Hero
