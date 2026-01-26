import Image from 'next/image'
import React from 'react'
import image from "@/public/images/geo-footprint.png"

export default function GeoFootPrintSection() {
  return (
    <section className='flex flex-col items-center justify-center'>
    <div className='grid py-5 md:grid-cols-2'>
      <div className='flex items-center justify-center'>
      <Image 
      draggable="false"
      src = {image}
      alt="pilipinas"
      className='
      w-full h-auto md:w-auto max-w-full object-contain select-none
      '/>
      </div>
        <div className='flex flex-col justify-center items-center mx-5'>
            <h1 className='text-title font-extrabold text-center md:text-left
             bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)]
             text-transparent bg-clip-text
            '>Our Geographic Footprint</h1>
            <div className='h-1 w-full bg-[#c89116] my-3'/>
            <p className='text-description text-center md:text-left p-5 '>
                Our company has successfully achieved major advancements in the ongoing development of our projects.
                As a result, we are proud to have established a prominent foothold in various regions in Luzon. This momentum showcases
                our widespread reach and strong presence, proving our capacity to deliver impressive results.
            </p>
        </div>
    </div>
    </section>
  )
}
