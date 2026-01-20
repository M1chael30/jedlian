import React from "react";
import { quotesData } from "@/lib/aboutUsData";

export default function QuoteSection() {
 return (
  <section className="relative flex flex-col items-center justify-center gap-10">
   <div className="m-20 border-2 border-white p-10">
    <h1 className="text-[clamp(1rem,5vw,2.9rem)] text-center font-extrabold uppercase mb-10">
     "{quotesData.quote}."
    </h1>
    <div className="h-100" />
   </div>
   <div className="absolute bottom-50 bg-zinc-200 py-5 w-full max-w-7xl">
    <div className="p-10 flex flex-col text-subtitle justify-center items-center text-center text-black space-y-5">
     <p className="text-description">{quotesData.text1}</p>
     <p className="text-description">{quotesData.text2}</p>
     <p className="text-description">{quotesData.text3}</p>
    </div>
   </div>
  </section>
 );
}
