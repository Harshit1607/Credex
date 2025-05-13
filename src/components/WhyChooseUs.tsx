import React, { useCallback, useRef } from 'react'
import { CheckCircle } from 'lucide-react'

// Card rotation calculation function
function calculateCardRotation({
  currentX,
  currentY,
  centerX,
  centerY,
  maxRotationX,
  maxRotationY,
}: {
  currentX: number;
  currentY: number;
  centerX: number;
  centerY: number;
  maxRotationX: number;
  maxRotationY: number;
}) {
  // Calculate the distance from the center
  const deltaX = currentX - centerX;
  const deltaY = currentY - centerY;
  // Calculate the maximum distance (assuming a rectangular area)
  const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
  // Calculate the actual distance
  const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  // Calculate the rotation factor (0 to 1)
  const rotationFactor = distance / maxDistance;
  // Calculate rotations (inverted for natural tilt effect)
  const rotationY = ((-deltaX / centerX) * maxRotationY * rotationFactor).toFixed(2);
  const rotationX = ((deltaY / centerY) * maxRotationX * rotationFactor).toFixed(2);
  return { rotationX, rotationY };
}

// Custom hook for mouse position tracking
const useMousePosition = <T extends HTMLElement>(ref: React.RefObject<T | null>, callback: (coords: { x: number; y: number }) => void) => {
  React.useEffect(() => {
    if (!ref.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const element = ref.current;
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      callback({ x, y });
    };
    
    const element = ref.current;
    element.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [ref, callback]);
};

// FeatureCard component
interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Fix: Change the type to number | undefined instead of NodeJS.Timeout | undefined
  const resetRef = useRef<number | undefined>(undefined);
  
  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!containerRef.current) {
      return;
    }
    const { width, height } = containerRef.current.getBoundingClientRect();
    const { rotationX, rotationY } = calculateCardRotation({
      centerX: width / 2,
      centerY: height / 2,
      currentX: x,
      currentY: y,
      maxRotationX: 4,
      maxRotationY: 6,
    });
    containerRef.current.style.setProperty("--x", `${rotationX}deg`);
    containerRef.current.style.setProperty("--y", `${rotationY}deg`);
  }, []);
  
  useMousePosition(containerRef, update);
  
  return (
    <div
      ref={containerRef}
      className=" w-[80%] md:w-[45%] h-[40%] md:h-[80%] transform-gpu flex flex-col gap-2 rounded-xl border border-gray-200 text-white p-6 shadow-md transition-transform ease-linear will-change-transform bg-transparent"
      style={{
        transform: "perspective(400px) rotateX(var(--x)) rotateY(var(--y))",
        transitionDuration: "50ms",
      }}
      onMouseEnter={() => {
        resetRef.current = window.setTimeout(() => {
          if (!containerRef.current) {
            return;
          }
          // Reset the transition duration to 0 so that the mouse movement is smooth
          containerRef.current.style.transitionDuration = "0ms";
        }, 300);
      }}
      onMouseLeave={() => {
        if (resetRef.current !== undefined) {
          window.clearTimeout(resetRef.current);
          resetRef.current = undefined;
        }
        if (!containerRef.current) {
          return;
        }
        containerRef.current.style.transitionDuration = "50ms";
        containerRef.current.style.setProperty("--x", "0deg");
        containerRef.current.style.setProperty("--y", "0deg");
      }}
    >
      <div className="flex items-center gap-3">
        <CheckCircle className="text-[#BE4564]" size={20} />
        <span className="text-[1.5vw] sm:text-xl text-[#BE4564] font-semibold">{title}</span>
      </div>
      <p className="text-[1vw] sm:text-base ml-8">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <div className="relative w-[100vw] h-[100dvh] flex flex-col justify-start gap-10 items-center py-10">
      
      {/* Title */}
      <div className="w-[90%] h-[20%] flex justify-start gap-6 items-center text-[8vw] font-bold">
        Why Choose  <span className="text-[#BE4564]"> SoftSell</span>?
      </div>
      
      {/* Feature cards */}
      <div className="w-[90%] h-[70%] flex flex-col justify-around items-center">
        <div className='flex flex-col h-[40%] md:flex-row justify-around w-full items-center'>
          <FeatureCard
            title="Secure Transactions"
            description="Your data is protected with enterprise-grade security."
          />
          <FeatureCard
            title="Fast Payouts"
            description="Get paid within 24 hours of accepting an offer."
          />
        </div>
        
        <div className='flex flex-col h-[40%] md:flex-row justify-around w-full items-center'>
          <FeatureCard
          title="Transparent Valuation"
          description="We use real-time market data to determine license value."
          />
          <FeatureCard
            title="Business-Friendly"
            description="Built for IT managers, procurement teams, and finance leaders."
          />
        </div>
        
      </div>
    </div>
  )
}

export default WhyChooseUs