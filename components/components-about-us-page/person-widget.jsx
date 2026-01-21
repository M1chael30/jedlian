import React from "react";
import Image from "next/image";
import sample from "@/public/images/ceoLabel.png"

export default function PersonWidget({ image, name, position, content }) {
  return (
    // <div
    //   className={`grid md:grid-cols-2 items-center justify-center w-200`}
    // >
    //   <div className="">
    //     <Image
    //       src={image}
    //       alt={name}
    //       className="rounded-2xl shadow-xl h-100"
    //     />
    //   </div>
    //   <div className="relative bg-black text-white p-8 shadow-2xl border-2 border-amber-300 border-l-0 w-full">
    //     <div className="absolute -top-6 left-0 bg-yellow-600 px-6 py-2 rounded-r-full">
    //       <p className="font-semibold">{name}</p>
    //       <p className="text-xs uppercase tracking-widest">{position}</p>
    //     </div>
    //     <p className="mt-6 text-sm leading-relaxed text-gray-300">
    //       {content}
    //     </p>
    //   </div>
    // </div>

    <div className={`grid md:grid-cols-2 items-center justify-center max-w-4xl min-w-70 w-full mx-auto `}>
      <Image src={image} alt={"boss"} className="rounded-2xl shadow-xl bg-red-100 h-100 hidden md:flex" />
      <div>
        {/*Content*/}
        <div className="border-2 border-amber-300 md:border-l-0 md:rounded-r-lg md:rounded-none rounded-xl relative max-h-lg">
                <Image src={image} alt={"boss"} className="rounded-2xl shadow-xl h-auto flex md:hidden" />

        {/*Banner*/}
        {/* <div className="absolute top-7 w-full bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] px-6 py-2 rounded-r-full">
          <div className="flex flex-col items-center justify-center">
          <p className="font-semibold">{name}</p>
          <p className="text-xs uppercase tracking-widest">{position}</p>
          </div> 
        </div> */}
        <Image src={sample} alt={"boss"} className="md:absolute  md:top-5 w-full "/>
        {/*text*/}
          <div className="h-15 hidden md:flex" />
          <p className="text-gray-300 p-10 h-auto">
            {content}        
          </p>
        </div>
      </div>
    </div>
  );
}
