import React from 'react';
import Marquee from 'react-fast-marquee';

interface CustomMarqueeProps {
  height?: string;   // Optional height as a prop
  width?: string;    // Optional width as a prop
  speed?: number;    // Speed of the marquee
  direction?: 'up' | 'down' | 'left' | 'right';  // Direction of the marquee
  children: React.ReactNode;   // Children (items) to scroll
}

const CustomMarquee: React.FC<CustomMarqueeProps> = ({
  height = '256px',   // Default height
  width = '100%',     // Default width
  speed = 50,         // Default speed
  direction = 'up',   // Default direction
  children,
}) => {
  return (
    <div
      className="overflow-hidden "
      style={{ height, width }}  // Custom height and width from props
    >
      <Marquee
        direction={direction}
        speed={speed}
        loop={0}
        gradient={false}
        className="flex flex-col items-center space-y-4"
      >
        {children}  {/* Render children passed into the marquee */}
      </Marquee>
    </div>
  );
};

export default CustomMarquee;
