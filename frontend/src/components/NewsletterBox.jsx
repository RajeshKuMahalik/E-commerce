import React from 'react'
import { assets } from '../assets/assets'


const NewsletterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className='flex bg-blue-300 rounded-lg px-6 sm:px-10 md:px-14 lg:px-10 my-10 '>
            {/* Left Side */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-[10px] lg:pl-5'>
                <div className=' font-semibold text-white'>
                    <p className='text-2xl'>Subscribe now & get 20% off</p>
                    <p className='mt-2 text-1xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, corporis</p>
                </div>
                <form onSubmit={onSubmitHandler} className='w-full lg:w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                    <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter Your Email' required />
                    <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
                </form>
            </div>


            {/* Right Side */}
            <div className='hidden md:block md:w-1/2 lg:h-30 relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.letter_img} />
            </div>
        </div>
    )
}

export default NewsletterBox
