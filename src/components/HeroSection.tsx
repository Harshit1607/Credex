import React from 'react';

const HeroSection: React.FC = () => {
  return (
      <div
        className="w-[100vw] h-[100dvh] flex flex-col justify-between items-center py-10"
      >
        <div className="w-full h-[70%] flex flex-col justify-end items-center gap-2">
          <span className="text-[13vw] font-bold text-[#BE4564]">SoftSell</span>
          <span className="text-lg md:text-xl lg:text-3xl -mt-12 ">Turn Unused Software Licenses Into Cash</span>
          <span className="text-lg md:text-xl lg:text-xl ">
            We help businesses resell unused or surplus software licenses quickly and securely.
          </span>
        </div>
        
        <div className="w-full h-[30%] flex justify-center items-end">
          <button className="z-10 border border-[#BE4564] bg-transparent text-[#BE4564] px-8 py-3 rounded hover:bg-[#BE4564] hover:text-white transition text-xl">
            Sell your License
          </button>
        </div>
        
      </div>
  );
};

export default HeroSection;
