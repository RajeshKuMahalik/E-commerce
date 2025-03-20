import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { FaTrash } from "react-icons/fa";

const Cart = () => {

  const { products, cartItems, updateQuantity, getCartAmount, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  }, [cartItems])

  return (
    <div>
      <div className='max-w-4xl mx-auto p-6'>
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>

        {
          cartData.map((item, index) => {
            console.log(cartData)
            const productData = products.find((product) => product._id === item._id);
            return (
              <div key={index} className='flex items-center justify-between bg-white p-4 shadow rounded-lg'>
                <img src={productData.image[0]} alt='' className='w-20 h-20 object-cover rounded' />
                <div className='flex-1 px-4'>
                  <h3 className='font-semibold'>{productData.name}</h3>
                  <p className='text-gray-600'>Rs : {productData.price}</p>
                  <p> Size : {item.size}</p>
                  <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type='number' min={1} defaultValue={item.quantity} className='w-16 border p-1 text-center' />
                  <button onClick={() => updateQuantity(item._id, item.size, 0)} className='text-red-500 ml-4'><FaTrash size={20} /></button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='max-w-[40%] max-1050:max-w-[70%] bg-white p-4 mt-10 shadow border rounded-lg'>
        <h2 className='text-xl font-semibold mb-2 '>Order Summery</h2>
        <hr />
        <div className='flex justify-between text-lg'>
          <span>SubTotal : </span>
          <span>Rs : {getCartAmount()}</span>
        </div>
        <div className='flex justify-between text-lg'>
          <span>Shipping Fee : </span>
          <span>Rs : 40</span>
        </div>
        <div className='flex justify-between text-lg'>
          <span>Total : </span>
          <span>Rs : {getCartAmount() === 0 ? 0 : getCartAmount() + 40}</span>
        </div>
        <div className='flex justify-center items-center py-5'>
          <button onClick={()=>navigate('/placeorder')} className='w-[50%] max-1050:w-full max-750:w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'>PROCCED TO PAYMENT</button>
        </div>

      </div>
    </div>
  )
}

export default Cart
