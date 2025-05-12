import React from 'react'
import home from '../assets/home.png'

const WhyChooseUs: React.FC = () => {
  return (
    <div  className=" relative w-[100vw] h-[100dvh] flex flex-col justify-start gap-10 items-center py-10">
      <img src={home} alt="home"  className='absolute opacity-70 w-[40vw] h-[50vh] top-[35vh] right-[5vw] rounded-4xl'/>
      <div className="w-[90%] h-[20%] flex justify-start items-center text-[8vw] font-bold">Why Choose SoftSell?</div>
      <div className='w-[90%] h-[70%] flex flex-col justify-around items-center'>
        <div className='flex flex-col w-full justify-between items-start'>
          <span className='text-[2vw] text-[#BE4564]'>Secure Transactions</span>
          <span className='text-[1vw]'>Your data is protected with enterprise-grade security.</span>
        </div>
        <div className='flex flex-col w-full justify-between items-start'>
          <span className='text-[2vw] text-[#BE4564]'>Fast Payouts</span>
          <span className='text-[1vw]'>Get paid within 24 hours of accepting an offer.</span>
        </div>
        <div className='flex flex-col w-full justify-between items-start'>
          <span className='text-[2vw] text-[#BE4564]'>Transparent Valuation</span>
          <span className='text-[1vw]'>We use real-time market data to determine license value.</span>
        </div>
        <div className='flex flex-col w-full justify-between items-start'>
          <span className='text-[2vw] text-[#BE4564]'>Business-Friendly</span>
          <span className='text-[1vw]'>Built for IT managers, procurement teams, and finance leaders.</span>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs