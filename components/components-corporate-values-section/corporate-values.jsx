"use client";

import { useEffect, useRef, useState } from "react";
import CorporateValuesButton from "./corporate-values-button";
import { corporateValuesButtonsData } from "@/lib/corporateGovernanceData";
import CorporateValuesContent from "./corporate-values-content";

export default function CorporateValues() {
 const [active, setActive] = useState(0);
 const [expand, setExpand] = useState(false);
 const containerRef = useRef(null);

 const activeItem = corporateValuesButtonsData[active];

 useEffect(() => {
  function handleClickOutside(e) {
   if (containerRef.current && !containerRef.current.contains(e.target)) {
    setExpand(false);
   }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
 }, []);

 return (
  <section className="flex flex-col gap-10 min-h-screen">
   <div className="flex justify-center items-center text-white p-5">
    <h1 className="text-xl md:text-4xl lg:text-6xl font-extrabold">
     CORPORATE VALUES
    </h1>
   </div>

   <div ref={containerRef} className="flex flex-col md:flex-row justify-center">
    <div className="flex flex-wrap w-200 gap-5 justify-center">
     {corporateValuesButtonsData.map((item, index) => (
      <CorporateValuesButton
       key={index}
       customClassName={
        expand && active === index
         ? "bg-gradient-to-b from-amber-400 to-yellow-100 scale-115"
         : " bg-gradient-to-b from-yellow-600 to-yellow-200"
       }
       onClick={() => {
        if (active === index) {
         setExpand((prev) => !prev);
        } else {
         setActive(index);
         setExpand(true);
        }
       }}
      >
       {item.id}
      </CorporateValuesButton>
     ))}
    </div>

    <CorporateValuesContent
     objects={corporateValuesButtonsData}
     item={activeItem}
     expand={expand}
    />
   </div>
  </section>
 );
}
