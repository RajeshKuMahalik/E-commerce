import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='h-[50vw] max-1050:h-[65vw] z-[-1px] text-black'>
            <img src={assets.hero_image} alt='' className='w-full h-full object-cover' />
            <div className='flex flex-col items-start gap-1.5vw max-w-[50%] ml-[26px] mt-[-27%] max-1050:ml-[9px] max-750:max-w-[70%] max-1050:mt-[-43%]'>
            <h2 className='font-bold text-[max(4.5vw,22px)] max-1050:text-[max(9px,23px)] '>New Arrivals Just Dropped! Explore the Latest Trends</h2>
            <p className='text-[14px] max-1050:text-[7px]'>Choose from a diverse menu featuring a delectable array of dishes carfed with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            </div>
        </div>
    )
}

export default Hero
