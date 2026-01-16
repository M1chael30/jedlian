import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function COCReadHere() {
  return (
    <div className='flex justify-between items-center w-70 p-1 md:p-2 rounded-full bg-zinc-400 text-black'>
      <p className='ml-5 text-xs md:text-lg'>Read Here</p>
      <button className='rounded-full bg-zinc-100 p-2 md:p-5'>
        <FaArrowRight/>
      </button>
    </div>
  )
}
