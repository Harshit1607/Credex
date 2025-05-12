import React from 'react'
import num1 from '../assets/num1.svg'
import num2 from '../assets/num2.svg'
import num3 from '../assets/num3.svg'

const HowItWorks: React.FC = () => {
  return (
    <div  className="w-[100vw] h-[100dvh] flex flex-col justify-start gap-10 items-center py-10">
      <div className="w-[90%] h-[20%] flex justify-start items-center text-[8vw] font-bold">How it Works?</div>
      <div className='w-[90%] h-[70%] flex justify-around items-center'>
        <div className='w-1/4 h-[80%] flex flex-col items-center justify-evenly border border-[#BE4564] rounded-3xl'>
          <div className='h-[60%]'>
            <img src={num1} alt='1' className='h-[90%]'/>
          </div>
          <span className='text-[1.5vw] font-semibold'>Upload Your License</span>
          <span className='text-[1vw] w-[90%] text-center'>Submit your license info through our secure platform</span>
        </div>
        <div className='w-1/4 h-[80%] flex flex-col items-center justify-evenly border border-[#BE4564] rounded-3xl'>
          <div className='h-[60%]'>
            <img src={num2} alt='2' className='h-[90%]'/>
          </div>
          <span className='text-[1.5vw] font-semibold'>Get a Valuation</span>
          <span className='text-[1vw] w-[90%] text-center'>Receive a real-time, data-driven estimate for your license's worth</span>
        </div>
        <div className='w-1/4 h-[80%] flex flex-col items-center justify-evenly border border-[#BE4564] rounded-3xl'>
          <div className='h-[60%]'>
            <img src={num3} alt='3' className='h-[90%]'/>
          </div>
          <span className='text-[1.5vw] font-semibold'>Get Paid Fast</span>
          <span className='text-[1vw] w-[90%] text-center'>Accept the offer and receive payment within 24 hours.</span>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks