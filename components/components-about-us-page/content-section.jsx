import React from "react";

export function ContentSection() {
 return (
  <div className="p-5 w-full">
   {/* container */}
   <div>
    {/* left section */}
    <div className="bg-muted/50 aspect-square rounded-lg" />
    {/* right section */}
    <div className="flex justify-center items-center flex-col gap-8">
     <div className="border-t border-r border-b border-amber-500 rounded-r-lg py-4">
      {/* banner */}
      <div className="w-full bg-amber-500 px-4 py-2 rounded-r-lg">
       <p>signature</p>
       <p>CEO/PRESIDENT</p>
      </div>
      {/* content */}
      <div className="px-6">
       <p className="text-description">
        Jedlian Holdings Inc. is a diversified parent company that oversees and
        strategically manages five thriving business enterprises, each
        contributing to the organization’s continued growth and reputation for
        excellence: Jedlian Communication, Jedlian Construction, Jedlian
        Gasoline, Jedlian Drugstore, and Casa Jedliana Hotel and Resort.
       </p>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export function ContentSectionMobile() {
 return (
  <div className="p-5 w-full mx-auto max-w-3xl">
   {/* container */}
  
  </div>
 );
}
