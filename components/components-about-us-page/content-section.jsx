import React from "react";

export default function ContentSection() {
 return (
  <div className="p-5 w-full mx-auto max-w-3xl">
   {/* container */}
   <div className="relative flex">
    {/* banner */}
    <div className="hidden absolute">
     <p>signature</p>
     <p>CEO/PRESIDENT</p>
    </div>
    {/* left section */}
    <div className="w-full md:w-1/3 bg-red-500 aspect-square h-90 rounded-lg" />
    {/* right section */}
    <div className="w-full md:w-10/12">
     <p>
      Jedlian Holdings Inc. is a diversified parent company that oversees and
      strategically manages five thriving business enterprises, each
      contributing to the organization’s continued growth and reputation for
      excellence: Jedlian Communication, Jedlian Construction, Jedlian Gasoline,
      Jedlian Drugstore, and Casa Jedliana Hotel and Resort.
     </p>
    </div>
   </div>
  </div>
 );
}
