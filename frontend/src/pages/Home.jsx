import React from 'react'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import NewArrivals from '../components/NewArrivals'
import LatestCollection from '../components/LatestCollection'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <marquee className="mt-9 py-3"  bgcolor="#ccc" loop="-1" scroollamount="5" width="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, odit.</marquee>
      <NewArrivals/>
    <LatestCollection/>
      <BestSeller/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
