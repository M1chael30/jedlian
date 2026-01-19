"use client"
import React, { useState } from "react";
import { faqData } from "@/lib/contactUsData";
import Questions from "./questions";


export default function FaqSection() {
  const [active,setActive] = useState(0)
const [expand, setExpand] = useState(false)

  return (
    <section className="w-full mt-10">
      <div>
        <div
          className=""
        >
          <h1 className="text-4xl font-extrabold md:text-5xl bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)]
             text-transparent bg-clip-text ">FAQ</h1>
                  <p className="
                  bg-[radial-gradient(circle_at_center,#E2D7D7,#958D8D,#E9DFDF)]
             text-transparent bg-clip-text md:text-lg
                  ">Do you have any questions for us?</p>
        </div>
                <div className="h-1 my-3 w-full bg-[#c89116]"/>

      </div>
      <Questions/>

    </section>
  );
}
