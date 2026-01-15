import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function COCReadHere() {
  return (
    <div className='flex justify-between items-center w-100 p-3 rounded-full bg-zinc-400 text-black'>
      <p className='ml-5'>Read Here</p>
      <button className='rounded-full bg-zinc-100 p-5'>
        <FaArrowRight/>
      </button>
    </div>
  )
}
