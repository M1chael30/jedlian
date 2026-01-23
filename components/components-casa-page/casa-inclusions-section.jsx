import { Card, CardContent } from "@/components/ui/card";
import { casaAmenitiesData } from "@/lib/casaData";
import Image from "next/image";

export default function CasaInclusionsSection() {
 return (
  <div className="p-6">
   <Card className="border-0 bg-primary shadow-xl rounded-none">
    <CardContent>
     <div className="flex gap-4 flex-col lg:flex-row">
      {/* left section */}
      <div className="text-[#45291f] flex flex-col justify-center">
       <p className="text-base md:text-lg">CHECK IN</p>
       <h1 className="text-3xl md:text-5xl font-bold mb-3 xl:mb-8">Other Inclusions</h1>
       <p className="text-xs md:text-sm">
        Additional features and services are provided to enhance your comfort
        and convinience throughout your stay.
       </p>
      </div>
      {/* right section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
       <div className="bg-accent aspect-square w-full" />
       <div className="bg-accent aspect-square w-full" />
       <div className="bg-accent aspect-square w-full" />
      </div>
     </div>
    </CardContent>
   </Card>
  </div>
 );
}
