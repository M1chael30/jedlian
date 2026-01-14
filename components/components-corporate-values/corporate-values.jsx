"use client";

import { useEffect, useRef, useState } from "react";
import CorporateValuesButton from "./corporate-values-button";
import { corporateValuesButtonsData } from "@/lib/data";
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
    <section className="flex flex-col gap-10">
      <div className="flex justify-center items-center text-white p-5">
        <h1 className="text-4xl font-extrabold">CORPORATE VALUES</h1>
      </div>

      <div ref={containerRef} className="flex gap-10">
        <div className="flex flex-wrap w-120 gap-3.5 justify-center">
          {corporateValuesButtonsData.map((item, index) => (
            <CorporateValuesButton
              key={index}
              customClassName={
                expand && active === index
                  ? "bg-amber-400 scale-115"
                  : "bg-yellow-600"
              }
              onClick={() => {
                if (active === index) {
                  setExpand(prev => !prev);
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
