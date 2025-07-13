import React from 'react'

const Presentation = () => {
    const CardData = [
        {
            sorce:"/floppy.png",
            headding:"Managment",
            text:"Software platform for running your new internet business"
        },
        {
            sorce:"/entertainment.png",
            headding:"Entertainment",
            text:"Software platform for running your new internet business"
        },
        {
            sorce:"/marketing.png",
            headding:"Marketing",
            text:"Software platform for running your new internet business"
        },
          {
            sorce:"/references.png",
            headding:"References",
            text:"Software platform for running your new internet business"
        }
    ];

    const sociallink = [
        {link:"/facebook.png"},
        {link:"/instagram1.png"},
        {link:"/twitter1.png"}
    ]
  return (
    <>
      <section className='bg-gray-50'>
        <div className='container flex flex-col lg:flex-row items-center gap-20 py-12 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto'>
            {/* left section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2'>
            {CardData.map((items,index)=>(
                <div key={index} className='p-4 gap-4 bg-white rounded-xl hover:bg-gray-100 transition-all text-center'>
                   <div className='flex items-center justify-center'>
                    <img src={items.sorce} className='w-20' alt="" />
                   </div>
                   <div className='mt-4'>
                    <h3 className='text-black text-lg  md:text-xl font-semibold'>{items.headding}</h3>
                    <p className='text-gray-400 text-sm md:text-base'>{items.text}</p>

                   </div>
                    
                </div>
            ))}

            </div>
            {/* right button */}
            <div className='w-full lg:w-1/2 text-center lg:text-left space-y-6'>
                      <h1 className='text-black text-3xl md:text-4xl lg:text-5xl font-semibold  max-w-md mx-auto lg:max-0'>The quickest way to create modern presentation</h1>
                      <p className='text-gray-400 max-w-md mx-auto lg:max-0 text-sm md:text-base'>Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>


                      <div className='max-w-md mx-auto'>
                          <button className=" bg-indigo-100 px-6 py-3 rounded-md text-gray-600">Explore All →</button>
                      </div>

                      <p className='text-gray-600 max-w-md mx-auto'>Follow us</p>

                      <div className='flex justify-center lg:justify-start gap-4 items-center max-w-md mx-auto'>
                        {
                            sociallink.map((link,index)=>(
                                <a href="" key={index} className='bg-[#C4C4C4] rounded-full p-3 hover:bg-gray-400 transition-all duration-300'>
                                    <img src={link.link} alt="" />
                                </a>
                            ))

                        }

                      </div>




            </div>
        </div>

      </section>
    </>
  )
}

export default Presentation
