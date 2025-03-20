import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios';
import Title from '../components/Title';

const Order = () => {

    const {token} = useContext(ShopContext);

    const [orderData, setOrderData] = useState([])

    const loadOrderData = async () =>{
        try {
            if(!token){
                return null
            }

            const response = await axios.post("https://e-commerce-738i.onrender.com/api/order/userorder", {}, {headers: {token}})
            if(response.data.success) {
                let allOrdersItem = []
                response.data.orders.map((order)=> {
                    order.items.map((item)=>{
                        item['status'] = order.status
                        item['payment'] = order.payment
                        item['paymentMethod'] = order.paymentMethod
                        item['date'] = order.date
                        allOrdersItem.push(item)
                    })
                })
                setOrderData(allOrdersItem.reverse())
                
            }
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        loadOrderData()
    }, [token])



  return (
    <div className='max-w-5xl mx-auto p-6'>
    <Title text1={"My"} text2={"Order"}/>
    {
        orderData.length === 0 ? (
            <p className='text-gray-500'>No Order Found</p>
        ) : (
            <div className='space-y-4'>
            {
                orderData.map((item, index) =>(
                    <div key={index} className='p-4 bg-white shadow-lg rounded-lg flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                        <img src={item.image[0]} alt='' className='w-20 h-20 object-cover rounded-lg'/>
                         <div>
                           <h3 className='text-lg font-semibold'>{item.name}</h3>
                           <p className='text-gray-600'>Quantity : {item.quantity}</p>
                           <p className=''>Size : {item.size}</p>
                           <p className='text-gray-600 text-sm'>Order Date: <spann>{new Date(item.date).toDateString()}</spann></p>
                        </div>
                        </div>
                        <div className='text-right'>
                        <p className='text-xl font-bold text-blue-600'>Rs: {item.price}</p>
                        <p>{item.paymentMethod}</p>
                        <span className={`px-3 py-1 text-sm font-semibold rounded-lg ${item.status === "Order Placed" ? "bg-green-500 text-white" : item.status === "Pending" ? "bg-yellow-500 text-black" : "bg-red-500 text-white"}`}>{item.status}</span>
                        </div>
                    </div>
                ))
            }

            </div>
        )
    }
   
    </div>
  )
}

export default Order
