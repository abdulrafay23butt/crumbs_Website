import React from 'react'
import logo from "@/public/images/logo.svg"
import Image from 'next/image'
const Header = () => {
  return (
    <div className='flex justify-between items-center py-3 px-8'>
        <Image src={logo} alt="" width={94} height={54.73} />
      <p className='text-graish text-inter text-[14px] font-normal '>Learn more</p>
    </div>
  )
}

export default Header
