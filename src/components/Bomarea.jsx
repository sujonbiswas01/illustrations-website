import React from 'react'

const Bomarea = () => {
  return (
    <section className='bg-indigo-500 w-full h-auto mb-5'>
        <div className='flex flex-col md:flex-row items-center justify-between  mt-24 max-w-[1440px] px-6 mx-auto'>
            <div className='flex-1 flex flex-col gap-8'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-white max-w-xl'>The quickest way to create awesome presentation</h1>

                <div className='flex gap-3'>
                <button className='bg-[#007a74] hover:bg-blue-700 text-white font-semibold py-3 px-6 transition duration-300 rounded-lg'>Get Started</button>
                <button className="bg-indigo-100 font-semibold py-3 px-6 transition duration-300 text-[#5F62E2] rounded-lg">Learn More</button>
            </div>


            </div>
            <div className=''>
                <img src="/bomarea.png" className='md:w-full w-52 h-auto md:h-[300px] md:ms-[-30px] px-2 mt-4 md:px-52' alt="" />
            </div>

        </div>
      
    </section>
  )
}

export default Bomarea
