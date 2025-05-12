import React from 'react'
import star from '../assets/star.svg'

const Reviews:React.FC = () => {
  return (
    <div  className="w-[100vw] h-[45dvh] flex flex-col justify-start gap-10 items-center py-10">
      <div className="w-[90%] h-[20%] flex justify-start items-center text-[4vw] font-bold">Customer Testimonials</div>
      <div className='flex w-[90%] h-[80%] justify-around items-start'>
        <div className='w-[45%] rounded-3xl h-[90%] bg-white flex flex-col justify-center gap-5'>
          <div className='flex justify-between items-center w-full px-5 h-[30%]'>
            <div className='flex flex-col justify-around items-start h-full text-black'>
              <span className='text-[1.4vw]'>Sarah Lane</span>
              <span className='text-sm'>Procurement Manager, TechSphere Inc.</span>
            </div>
            <div className='flex items-center justify-end h-full gap-1'>
              {[...Array(5)].map((_, i) => (
                <img key={i} src={star} className='h-[50%]'></img>
              ))}
            </div>
          </div>
          <div className='flex items-start w-full px-5 h-[60%] text-black'>
            <span className='text-[1.2vw]'>“SoftSell helped us recover over $10,000 in unused licenses. Simple and efficient!”</span>
          </div>
        </div>

        <div className='w-[45%] rounded-3xl h-[90%] bg-white flex flex-col justify-center gap-5'>
          <div className='flex justify-between items-center w-full px-5 h-[30%]'>
            <div className='flex flex-col justify-around items-start h-full text-black'>
              <span className='text-[1.4vw]'>David Kim</span>
              <span className='text-sm'>IT Administrator, CloudNova Solutions</span>
            </div>
            <div className='flex items-center justify-end h-full gap-1'>
              {[...Array(5)].map((_, i) => (
                <img key={i} src={star} className='h-[50%]'></img>
              ))}
            </div>
          </div>
          <div className='flex items-start w-full px-5 h-[60%] text-black'>
            <span className='text-[1.2vw]'>“As an IT admin, I appreciate how seamless and secure the process was.”</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews