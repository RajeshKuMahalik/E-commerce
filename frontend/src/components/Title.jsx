import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='gap-2 items-center mb-6'>
    <p className='text-blue-400 '>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
  </div>
  )
}

export default Title
