import casaJedlianaHeroImg from "@/public/images/casa/casaJedlianaHeroImg.jpg";
import Image from "next/image";
import { Button } from "../ui/button";

export default function CasaClassificationSection({ items }) {
 return (
  <div className="w-full mx-auto flex flex-col lg:flex-row gap-8">
   {/* left section buttons */}
   <div className="lg:w-1/2 flex flex-col items-center justify-center">
    {/* casa logo */}
    <div className="text-primary-foreground">logo</div>
    {/* button tabs */}
    <div className="flex flex-col gap-4">
     {items.map((item, index) => (
      <Button className="bg-[#ca9c57]" key={index}>
       {item.title}
      </Button>
     ))}
    </div>
   </div>
   {/* right carousel */}
   <div className="flex lg:w-185 p-8 lg:p-0">
    <div className="overflow-hidden">
     <Image
      src={casaJedlianaHeroImg}
      alt="Casa jedliana hero img"
      className="h-full max-w-full object-cotain rounded-xl lg:rounded-none"
     />
    </div>
    <div className="bg-[#ca9c57] h-full hidden lg:block w-16" />
   </div>
  </div>
 );
}
