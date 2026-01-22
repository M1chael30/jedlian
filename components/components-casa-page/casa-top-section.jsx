import { casaInformation } from "@/lib/casaData";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CasaTopSection() {
 return (
  <div className="flex items-center justify-center overflow-hidden">
   <div className="grid lg:grid-cols-2 gap-12 px-6 py-10 lg:py-0">
    <div className="my-auto">
     <p className="max-w-[60ch] text-lg text-[#45291f] font-semibold">
      _Jedlian Holdings Inc.
     </p>
     <h1 className="mt-6 max-w-[10ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-[-0.035em] text-[#45291f]">
      MY HOME IS YOUR HOME
     </h1>

     <div className="space-y-3 mt-14">
      {casaInformation.map((item, index) => (
       <p
        key={index}
        className="max-w-[45ch] text-sm text-[#45291f] border-b border-[#45291f] flex items-center gap-2"
       >
        {item.icon && <item.icon size={18} />}
        {item.tile}
       </p>
      ))}
     </div>

     <Button className="border-2 border-[#45291f] bg-[#f8f5f0] rounded-none mt-8 hover:bg-[#f8f5f0]">
      Book here <ArrowRight />
     </Button>
    </div>
    <div className="w-full aspect-video lg:w-250 lg:rounded-none flex">
     <div className="bg-accent flex-6 rounded-xl lg:rounded-none" />
     <div className="bg-[#ca9c57] flex-5 hidden lg:block" />
    </div>
   </div>
  </div>
 );
}
