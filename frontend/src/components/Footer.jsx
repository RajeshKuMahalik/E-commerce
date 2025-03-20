import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

     <div>
        <p className='mb-5 text-2xl'>E-commerce</p>
        <p className='w-full md:w-2/3 text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi itaque, iusto eius ab eum commodi iure vel aspernatur corporis placeat.
        </p>
     </div>

     <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <p className='flex flex-col gap-1 text-gray-600 list-none'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </p>
     </div>

     <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>example@gmail.com</li>
        </ul>
     </div>
      </div>
    </div>
  )
}

export default Footer
