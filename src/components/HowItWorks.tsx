import React from 'react'
import num1 from '../assets/num1.svg'
import num2 from '../assets/num2.svg'
import num3 from '../assets/num3.svg'

const HowItWorks: React.FC = () => {
  return (
    <div  className="w-[100vw] h-[100dvh] flex flex-col justify-start gap-10 items-center py-10">
      <div className="w-[90%] h-[20%] flex justify-start items-center text-[8vw] font-bold">How it Works?</div>
      <div className='w-[90%] h-[70%] flex md:flex-row flex-col justify-around items-center gap-5 md: gap-0'>
        <div className='md:w-1/4 w-[90%] h-[90%] bg-transparent flex md:flex-col flex-row items-center justify-evenly border border-[#BE4564] md:rounded-2xl rounded-xl'>
          <div className='md:h-[60%]  h-[90%] '>
            <img src={num1} alt='1' className='h-[90%]'/>
          </div>
          <div className='flex flex-col items-start md:items-center justify-evenly w-[90%]'>
            <span className='text-[2.5vw]  md:text-[1.5vw] font-semibold'>Upload Your License</span>
            <span className='text-[2vw]  md:text-[1vw]  text-center'>Submit your license info through our secure platform</span>
          </div>
          
        </div>
        <div className='md:w-1/4 w-[90%] h-[90%] bg-transparent flex md:flex-col flex-row items-center justify-evenly border border-[#BE4564] md:rounded-2xl rounded-xl'>
          <div className='md:h-[60%]  h-[90%] '>
            <img src={num2} alt='2' className='h-[90%]'/>
          </div>
          <div className='flex flex-col items-start md:items-center justify-evenly w-[90%]'>
            <span className='text-[2.5vw]  md:text-[1.5vw] font-semibold'>Get a Valuation</span>
            <span className='text-[2vw]  md:text-[1vw] text-center'>Receive a real-time, data-driven estimate for your license's worth</span>
          </div>
        </div>
        <div className='md:w-1/4 w-[90%] h-[90%] bg-transparent flex md:flex-col flex-row items-center justify-evenly border border-[#BE4564] md:rounded-2xl rounded-xl'>
          <div className='md:h-[60%]  h-[90%]'>
            <img src={num3} alt='3' className='h-[90%]'/>
          </div>
          <div className='flex flex-col items-start md:items-center justify-evenly w-[90%]'>
            <span className='text-[2.5vw]  md:text-[1.5vw] font-semibold'>Get Paid Fast</span>
            <span className='text-[2vw]  md:text-[1vw]  text-center'>Accept the offer and receive payment within 24 hours.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks