import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { blogs } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios'


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://e-commerce-738i.onrender.com"
    const [token,setToken] = useState("")
    const navigate = useNavigate();


    const addToCart = async (itemId,size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {

            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData)

        // if(token) {
        //     try{
        //         await axios.post("http://localhost:4000/api/cart/add",{itemId,size}, {headers:{token}})
        //     } catch (error) {
        //         console.log(error);
        //         toast.error(error.message);            
        //     }      
        // }
    }


    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {

                try {

                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems)
        
        cartData[itemId][size] = quantity;
        
        setCartItems(cartData)
    }

   const getCartAmount = () =>{
    let totalAmount = 0;
    for(const items in cartItems) {
        let itemInfo = products.find((product) => product._id === items);
        for (const item in cartItems[items]) {
            try {
                if(cartItems[items][item] > 0) {
                    totalAmount += itemInfo.price * cartItems[items][item];
                }
            } catch (error) {
                
            }
        }
    }
    return totalAmount;
   }

 


    const value = {
        products, addToCart,
        cartItems,setCartItems,
        blogs, navigate, getCartCount,
        updateQuantity, getCartAmount,
        backendUrl,token,setToken
    }


    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
