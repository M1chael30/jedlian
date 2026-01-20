import React from "react";
import Image from "next/image";

export default function PersonWidget({ image, name, position, content }) {
 return (
  <div className={`grid md:grid-cols-2 items-center justify-center w-200`}>
   <div className="">
    <Image src={image} alt={name} className="rounded-2xl shadow-xl h-100" />
   </div>
   <div className="relative bg-black text-white p-8 shadow-2xl border-2 border-amber-300 border-l-0 w-full">
    <div className="absolute -top-6 left-0 bg-yellow-600 px-6 py-2 rounded-r-full">
     <p className="font-semibold">{name}</p>
     <p className="text-xs uppercase tracking-widest">{position}</p>
    </div>
    <p className="mt-6 text-sm leading-relaxed text-gray-300">{content}</p>
   </div>
  </div>
 );
}
