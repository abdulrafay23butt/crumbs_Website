import React from "react";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex justify-between items-center py-3 px-8">
      <Link href="/" >
      <Image src={logo} alt="" width={94} height={54.73} />
      </Link>
      
      <Link href="/faqs" className="text-graish text-inter text-[14px] font-normal ">
        Learn More
      </Link>
    </div>
  );
};

export default Header;
