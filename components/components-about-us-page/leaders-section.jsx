import React from "react";
import { companyLeadersData } from "@/lib/aboutUsData";
import PersonWidget from "./person-widget";
import PersonWidgetMobile from "./person-widget.mobile";

export default function LeadersSection() {
  const reverse = {
    container: "order-last",
    content: "md:border-r-0 md:rounded-l-lg md:rounded-none rounded-xl",
  };

  return (
    <div className="space-y-10 px-10 flex flex-col items-center">
      {companyLeadersData.map((person, index) => (
        <PersonWidget
          key={index}
          image={person.image}
          name={person.name}
          position={person.position}
          content={person.textContent}
          isReverse={index % 2 === 0}
          banner={person.banner}
        />
      ))}
      {companyLeadersData.map((person, index) => (
        <PersonWidgetMobile
          key={index}
          image={person.image}
          name={person.name}
          position={person.position}
          content={person.textContent}
        />
      ))}
    </div>
  );
}
