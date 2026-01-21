import React from "react";
import { companyLeadersData } from "@/lib/aboutUsData";
import PersonWidget from "./person-widget";

export default function LeadersSection() {
  return (
    <div className="space-y-10 px-10 flex flex-col items-center">
      {companyLeadersData.map((person, index) => (
        <PersonWidget
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
