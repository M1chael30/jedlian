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
    <section className="md:flex flex-col py-10 hidden">

      <div
        ref={containerRef}
        className="flex flex-col md:flex-row md:h-auto items-center lg:h-auto md:w-200 lg:w-250"
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
