import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'


const PlacedOrder = () => {

   const {getCartAmount, token,  products, cartItems, setCartItems, navigate} = useContext(ShopContext)
   const [method,setMethod] = useState('cod') 
   const [data, setData] = useState({
    name:"",
    email:"",
    street:"",
    city:"",
    state: "",
    country: "",
    phone :""
   })

   const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value
    setData(data => ({...data, [name]: value}))
   }

   const initpay = (order) =>{
    const options = {
      key : import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency : order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) =>{
        console.log(response);
        try {
          const {data} = await axios.post("http://localhost:4000/api/order/verifyRazorpay", response, {headers:{token}})
          if (data.success) {
            navigate('/orders')
            setCartItems({})
          }
        } catch (error) {
          console.log(error);
          toast.error(error)
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
   }


   const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
       
      let orderItems = [];
     for( const items in cartItems) {
      for(const item in cartItems[items]) {
        if(cartItems[items][item] > 0) {
          const itemInfo = structuredClone(products.find(product => product._id === items))
          if(itemInfo) {
            itemInfo.size = item
            itemInfo.quantity = cartItems[items][item]
            orderItems.push(itemInfo)
          }
        }
      }
     }

     let orderData = {
      address: data,
      items: orderItems,
      amount : getCartAmount() + 40
     }
     

      switch (method) {
          
        case 'cod':
          const response = await axios.post('http://localhost:4000/api/order/place', orderData, {headers: {token}})
          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
          break;
          case 'razorpay':

          const responseRazorpay = await axios.post("http://localhost:4000/api/order/razorpay", orderData, {headers: {token}})
          if(responseRazorpay.data.success) { 
            initpay(responseRazorpay.data.order)
          }

          break;

          default:
            break;
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
    
   }
  


  return (
    <form onSubmit={onSubmitHandler} className="max-w-4xl mx-auto p-6">
    <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
    <div className="bg-white p-4 shadow rounded-lg">
      <h3 className="font-semibold text-lg mb-2">Shipping Information</h3>
      <div className='flex flex-col gap-3 w-full sm:max-w-[480px]'>
      <input className='py-1.5 px-3.5 border w-full' required name='name' onChange={onChangeHandler} value={data.name} type='name' placeholder='Enter Your Name'/>
      <input className='py-1.5 px-3.5 border w-full' required name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Enter Your Email'/>
      <input className='py-1.5 px-3.5 border w-full' required name='street' onChange={onChangeHandler} value={data.street} type='text' placeholder='Street'/>
      <div className='flex gap-3'>
      <input className='py-1.5 px-3.5 border w-full' required name='city' onChange={onChangeHandler} value={data.city} type='name' placeholder='City'/>
      <input className='py-1.5 px-3.5 border w-full' required name='state' onChange={onChangeHandler} value={data.state} type='name' placeholder='State'/>
      </div>
      <input className='py-1.5 px-3.5 border w-full' required name='country' onChange={onChangeHandler} value={data.country} type='name' placeholder='Country'/>
      <input className='py-1.5 px-3.5 border w-full' required name='phone' onChange={onChangeHandler} value={data.phone} type='number' placeholder='Phone No.'/>
    </div>
    </div>
    <div className="bg-white p-4 shadow rounded-lg mt-4">
      <h3 className=" font-semibold text-lg mb-2">Payment Method</h3>
      <div className='flex flex-col items-start gap-6 '>
      <button onClick={()=> setMethod('cod')} className={`border px-8 py-2 rounded-lg ${method === 'cod' ? 'bg-black text-white' : ''}`}>Cash on Delivery</button>
      <button  onClick={()=> setMethod('razorpay')} className={`border px-8 py-2 rounded-lg ${method === 'razorpay' ? 'bg-black text-white' : ''}`}>RAZORPAY</button>
      </div>
    </div>
    <div className="bg-white p-4 shadow rounded-lg mt-4">
      <h3 className="font-semibold text-lg mb-2">Order Summary</h3>
      <hr/>
        <div className='flex justify-between text-lg mt-2'>
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
      <div className="text-right font-bold text-lg mt-4"></div>
    </div>
    <button type='submit' className="w-full bg-green-600 text-white py-2 rounded-lg mt-4 hover:bg-green-700">
      Confirm Order
    </button>
  </form>
  )
}

export default PlacedOrder
