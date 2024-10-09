"use client";
import Image from "next/image";
import {  useRef } from "react";
import { cn } from "@/lib/utils";

import minusIcon from "@/public/images/minus-icon.svg";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  isActive: boolean;
  onClick: () => void;
}

const Accordion: React.FC<AccordionProps> = (props) => {
  const { title, children, isActive: isOpen, onClick,  } = props;
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleAccordion = () => {
    onClick();
  };

  const contentHeight =
    isOpen && contentRef.current ? contentRef.current.offsetHeight : 0;

  return (
    <div
      // className="cursor-pointer rounded-[4px] border-[1px] border-[#888888] py-4 pl-2 mob:py-5"
      className={cn(
        "cursor-pointer rounded-[4px] border-[1px] border-[#3D3D3D] py-4 pl-2 mob:py-5",
        isOpen && "border-[#888888]",
      )}
      onClick={toggleAccordion}
    >
      <div className="flex items-center justify-between px-3 mob:px-3">
        <p 
        // className="text-[16px] font-normal font-sofiapro leading-[22.4px] text-[#888888] mob:max-w-[85%]"
         className={cn(
          "text-[16px] font-normal font-sofiapro leading-[22.4px] text-[#888888] mob:max-w-[85%]",
          isOpen && "text-[#F6F6F6]",
        )}
        >{title}</p>

        <button  className="relative">
          <Image src={minusIcon} alt="minusIcon"
            className={cn(
                "   transition-all duration-300",
                isOpen && "rotate-[-50deg]",
              )}
          />
          <Image
            src={minusIcon}
            alt="minusIcon"
            className={cn(
              "absolute top-[50%] translate-y-[-50%] rotate-[90deg] transition-all duration-300",
              isOpen && "rotate-[50deg]",
            )}
          />
        </button>
      </div>
      <div 
          className={cn(
              "gradient-line my-5 transition-opacity duration-300 ease-in-out",
              isOpen ? "opacity-100 delay-0 block" : "opacity-0 delay-300 duration-300  hidden"
          )}
      ></div>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out mob:mt-4"
        style={{
          maxHeight: contentHeight + "px",
        }}
      >

        <div
          className="max-w-[100%] px-3 py-1 pb-2 text-[14px] font-normal leading-[19.6px] text-[#888888]  "
          ref={contentRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
