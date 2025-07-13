import React from 'react'

const Blog = () => {
    const CardData = [
        {
            id:1,
            imgSrc:"/blog1.png",
            title:"Make myspace your best designed space",
            description:"A lot of different components that will help you create the perfect look for your project",
            buttonlevel:"Design"
        },

        {
            id:2,
            imgSrc:"/blog002.png",
            title:"My company culture has changed today",
            description:"A lot of different components that will help you create the perfect look for your project",
            buttonlevel:"3D illustrations"
        },

        {
            id:3,
            imgSrc:"/blog3.png",
            title:"Professionals in craft! All products were super great",
            description:"A lot of different components that will help you create the perfect look for your project",
            buttonlevel:"Development"
        },
    ]
  return (
    <section className='max-w-[1440px] mx-auto py-16 px-6'>
        <div className='flex flex-col sm:flex-row justify-between items-center mb-10'>
            <div>
                <h1 className='text-3xl lg:text-6xl font-bold text-gray-800'> Get more from our blog</h1>
                <p className='max-w-lg text-[22px] mt-1 text-gray-500'>There are a lot of different components that will help you create the perfect look for your project</p>
            </div>
            <button className='bg-[#007a74] hover:bg-blue-700 text-white font-semibold py-3 px-6 transition duration-300 rounded-lg'>Get Started</button>
            
        </div>     

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 !p-5'>
            {
                CardData.map((items)=>(
                    <div key={items.id} className='bg-gray-100  rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300'>
                        <img className='bg-gray-200 w-full' src={items.imgSrc} alt="" />
                        <div className='p-6'>
                            <h3 className='text-xl md:text-2xl font-semibold mb-2'>{items.title}</h3>
                            <p className='text-gray-600 mb-4'>{items.description}</p>
                            <button className='text-sm py-2 px-3 rounded bg-green-300'>{items.buttonlevel}</button>

                        </div>
                    </div>
                ))
            }
        </div> 
    </section>
  )
}

export default Blog
