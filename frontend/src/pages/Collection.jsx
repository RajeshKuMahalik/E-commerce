import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false)
  const [filterProducts,setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);


  const itemCategory = (e) => {
     
    if(category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else (
      setCategory(prev => [...prev, e.target.value])
    )
  }

  const itemSubCategory= (e) => {

    if(subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () =>{

    let productsCopy = products.slice();

    if(category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    
    if(subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  

  useEffect(()=>{
    applyFilter();
  },[category, subCategory])

 

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      <div className='min-w-60'>
      <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer max-1050:text-sm gap-2'>FILTERS
      <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light'>
            <p className='flex gap-2 '>
              <input className='w-3' type='checkbox' value={'Men'} onChange={itemCategory}/>Men
            </p>
            <p className='flex gap-2 '>
              <input className='w-3' type='checkbox' value={'Women'} onChange={itemCategory}/>Women
            </p>
            <p className='flex gap-2 '>
              <input className='w-3' type='checkbox' value={'Kids'} onChange={itemCategory}/>Kids
            </p>
          </div>
          <div className={`pl-1 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light'>
            <p className='flex gap-2 '>
              <input className='w-3' type='checkbox' value={'Topwear'} onChange={itemSubCategory}/>TopWear
            </p>
            <p className='flex gap-2 '>
              <input className='w-3' type='checkbox' value={'Bottomwear'} onChange={itemSubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2 '>
              <input className='w-3' type='checkbox' value={'Winterwear'} onChange={itemSubCategory}/>Winterwear
            </p>
          </div>
        </div>
        </div>
      </div>
      <div className='flex-1'>
          <Title text1={"ALL"} text2={'COLLECTIONS'}/>

        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
           {
            filterProducts.map((item, index)=>(
              <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
           }
        </div>
      </div>
    </div>
  )
}

export default Collection
