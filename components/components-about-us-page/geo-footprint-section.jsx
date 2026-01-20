import Image from 'next/image'
import React from 'react'

export default function GeoFootPrintSection() {
  return (
    <section className='flex flex-col items-center justify-center '>
    <div className='grid py-5 md:grid-cols-2 gap-9'>
      <div className='flex items-center justify-center px-5'>
      <div className='h-75 w-50 md:w-full md:h-full bg-red-300'/>
      </div>
        <div className='flex flex-col md:p-3'>
            <h1 className='text-title font-extrabold text-center md:text-left'>Our Geographic Footprint</h1>
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
