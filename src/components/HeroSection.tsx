import React from 'react';
// import home from '../assets/home.png'

const HeroSection: React.FC = () => {
  return (
      <div
        className="relative w-[100vw] h-[100dvh] flex flex-col justify-between items-center py-10 "
      >
        {/* <img src={home} alt="home"  className='absolute opacity-20 w-[50vw] h-[50vh] top-[25vh] left-[25vw] shadow-md'/> */}
        <div className="w-full h-[70%] flex flex-col justify-end items-center gap-2">
          <span className="text-[16vw]  md:text-[13vw] font-bold text-[#BE4564]">SoftSell</span>
          <span className="text-md md:text-xl lg:text-3xl md:-mt-12 -mt-5">Turn Unused Software Licenses Into Cash</span>
          <span className="text-xs md:text-md lg:text-xl">
            We help businesses resell unused or surplus software licenses quickly and securely.
          </span>
        </div>
        
        <div className="w-full h-[30%] flex justify-center items-end">
          <button className="z-10 font-bold border border-[#BE4564] bg-transparent text-[#BE4564] md:px-8 px-4 md:py-3 py-2 rounded hover:bg-[#BE4564] hover:text-white transition text-md md:text-xl">
            Sell your License
          </button>
        </div>
        
      </div>
  );
};

export default HeroSection;
