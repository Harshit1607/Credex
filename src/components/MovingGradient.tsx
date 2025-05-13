import React from 'react';

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor?: string;
  secondBlobColor?: string;
  thirdBlobColor?: string;
}

const MovingGradient = ({
  children,
  className,
  firstBlobColor = 'bg-[#F7A6C2]',
  secondBlobColor = 'bg-[#BE4564]',
  thirdBlobColor = 'bg-[#590219]',
  ...props
}: BlobProps) => {
  return (
    <div {...props} className={`relative overflow-hidden bg-[#010003] ${className}`}>
      {/* Background blobs */}
      <div className="fixed inset-0 w-full h-full">
        <div
          className={`absolute -left-48 top-40 h-[60vh] w-[60vh] rounded-full ${firstBlobColor} opacity-50 mix-blend-screen blur-3xl filter animate-blob`}
        ></div>
        <div
          className={`absolute right-0 top-0 h-[50vh] w-[50vh] rounded-full ${secondBlobColor} opacity-50 mix-blend-screen blur-3xl filter animate-blob animation-delay-2000`}
        ></div>
        <div
          className={`absolute left-1/4 bottom-0 h-[70vh] w-[70vh] rounded-full ${thirdBlobColor} opacity-50 mix-blend-screen blur-3xl filter animate-blob animation-delay-4000`}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default MovingGradient;
