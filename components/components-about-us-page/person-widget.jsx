import React from "react";
import Image from "next/image";
import sample from "@/public/images/ceoLabel.png"

export default function PersonWidget({ image, name, position, content, isReverse, banner }) {

  return (
    <div className={`md:grid-cols-2 items-center justify-center max-w-4xl min-w-70 w-full mx-auto hidden md:grid`}>
      <Image src={image} alt={"boss"} className={`rounded-2xl shadow-xl bg-red-100 h-110 hidden md:flex ${isReverse ? "" : "order-last"}`} />
      <div>
        {/*Content*/}
        <div className={`border-2 border-amber-300 md:rounded-none rounded-xl relative max-h-lg ${isReverse ? "md:border-l-0 md:rounded-r-lg" : "md:border-r-0 md:rounded-l-lg"}`}>
                <Image src={image} alt={"boss"} className="rounded-2xl shadow-xl flex md:hidden" />

        <Image src={banner} alt={"boss"} className="md:absolute md:top-5 w-full "/>
        {/*text*/}
          <div className="h-16 hidden md:flex" />
          <p className="text-gray-300 p-10 h-auto">
            {content}        
          </p>
        </div>
      </div>
    </div>
  );
}
