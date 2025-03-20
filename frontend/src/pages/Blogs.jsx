import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const Blogs = () => {

  const { blogs } = useContext(ShopContext)

  return (
    <div>
      <div className=' min-h-screen p-6'>
        <div className='text-center mx-auto'>
          <Title text1={"BLOG"} text2={"PAGE"} />
          <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-5'>
            {
              blogs.map((item, index) => (
                <div key={index} className='relative bg-white shadow-md rounded-lg overflow-hidden'>
                  <p>{item._id}</p>
                  <img src={item.image} alt='' className='w-full object-cover' />
                  <div className='absolute inset-0 bg-black bg-opacity-50 p-4 text-white flex flex-col justify-end'>
                    <h2 className='text-lg font-bold'>{item.title}</h2>
                    <p className='text-sm mt-2 line-clamp-3'>{item.content}</p> 
                    <button className='mx-20 rounded-full bg-black'>Click Here</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blogs
