import React, {  useContext, useState } from 'react'
import { NavLink, Link ,useNavigate } from 'react-router-dom'
import { assets } from "../assets/assets";
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const navigate = useNavigate()
    // const [token, setToken] = useState(true)
    const [showMenu, setShowMenu] = useState(false)

    const {getCartCount,setCartItems,setToken} = useContext(ShopContext)

    const logout = () =>{
        localStorage.removeItem('token')
        setToken(false)
        setCartItems({})
        navigate('login')
       
       }


    return (
        <div className='flex items-center justify-between text-sm py-5 pr-[3vw] pl-[3vw] border-b-gray-400 max-1050:mr-[-10px] max-1050:ml-1 sm:mr-0 sm:ml-0 text-[#003366]'>
            {/* <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt=''/> */}
            <Link to='/'> <p className='text-xl'>E-Commerce</p></Link>
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-orange-500 w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/collection'>
            <li className='py-1'>COLLECTION</li>
            <hr className='border-none outline-none h-0.5 bg-orange-500 w-3/5 m-auto hidden'/>
        </NavLink>
                <NavLink to='/blog'>
                    <li className='py-1'>BLOGS</li>
                    <hr className='border-none outline-none h-0.5 bg-[#0099FF] w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-orange-500 w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center sm:ml-6 gap-6 max-1050:ml-5'>
            <Link to='/cart' className='relative'>
                    <img src={assets.basket_icon} alt='' className='w-5 min-w-5 cursor-pointer max-1050:w-[2px]' />
                    <p className='absolute right-[-5px] top-[-3px] w-3 text-center leading-4 bg-white text-orange-700 aspect-square rounded-full text-[8px] max-1050:top-[-4px] max-1050:h-[13px] max-1050:w-[10px] max-1050:left-[-5px]'>{getCartCount()}</p>
                </Link>
                
                
            <div className='flex items-center gap-4 max-1050:w-[25px]'>
                 <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <Link to='/login'><img className='w-5 min-w-5 cursor-pointer max-1050:w-[2px] rounded-full' src={assets.profile_icon} alt='' /></Link>
                            <img className='w-2.5' src={assets.dropdown_icon} alt='' />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate('/orders')} className='hover:text-black cursor-pointer'>Order's</p>
                                    <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                </div>
                <img onClick={() => setShowMenu(true)} className='w-6 cursor-pointer z-20 md:hidden max-1050:w-[20px]' src={assets.menu_icon} alt='' />
                {/* -------Mobile Menu---------- */}
                <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-7 rotate-180' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt='' />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/collection'><p className='px-4 py-2 rounded inline-block'>COLLECTION</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/blog'><p className='px-4 py-2 rounded inline-block'>BLOGS</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar
