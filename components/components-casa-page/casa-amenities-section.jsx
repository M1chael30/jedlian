import {
 Card,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { casaAmenitiesData } from "@/lib/casaData";
import Image from "next/image";

export default function CasaAmenitiesSection() {
 return (
  <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-20 h-auto my-12 py-12 px-8">
   {/* left section */}
   <div className="w-full">
    <Card className="border-0 bg-primary shadow-xl rounded-none">
     <CardHeader>
      <CardTitle className="font-base text-3xl md:text-5xl text-center text-[#45291f]">
       Complete Amenities for Your Stay
      </CardTitle>
     </CardHeader>
     <CardFooter>
      <p className="text-center mx-auto text-[#45291f] text-sm md:text-base">
       Enjoy a comfortable and worry-free experience with our thoughtfully
       curated amenities. From modern conviniences to essential services,
       everything you need for a relaxing and enjoyable stay is provided.
      </p>
     </CardFooter>
    </Card>
   </div>
   {/* right section */}
   <div className="w-full space-y-18">
    {casaAmenitiesData.map((item, index) => (
     <div className="text-[#45291f] flex flex-col lg:flex-row gap-4" key={index}>
      {/* left image */}
      <Image
       src={item.img}
       alt={item.title}
       className="aspect-square h-full w-full lg:w-50 lg:h-50"
      />
      {/* right content */}
      <div className="space-y-3">
       <h1 className="text-xl font-bold">{item.title}</h1>
       <p className="max-w-[50ch] text-sm md:text-base">{item.description}</p>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}
