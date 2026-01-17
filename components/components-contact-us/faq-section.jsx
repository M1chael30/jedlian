import React from "react";
import { faqData } from "@/lib/contactUsData";

export default function FaqSection() {
  return (
    <section className="w-full">
      <div>
        <div
          className="md:col-span-2 font-extrabold text-4xl bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)]
             text-transparent bg-clip-text border-b-2 border-b-[#c89116] py-5 mb-3"
        >
          <h1>FAQ</h1>
                  <p className="text-lg
                  bg-[radial-gradient(circle_at_center,#E2D7D7,#958D8D,#E9DFDF)]
             text-transparent bg-clip-text
                  ">Do you have any questions for us?</p>
        </div>
      </div>
      <div className="space-y-3">
        {faqData.map((item, index) => (
          <div key={index} className="flex flex-col">
            <a href="" className="bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)]
             text-transparent bg-clip-text border-b-2">{item.question}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
