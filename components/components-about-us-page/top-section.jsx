import bannerAboutUs from "@/public/images/bannerAboutUs.png";
import Image from "next/image";

export default function TopSection() {
 return (
  <div className="relative">
   <Image
    src={bannerAboutUs}
    alt="Banner Casa Jedliana"
    draggable="false"
    className="w-full h-auto max-w-full object-contain select-none"
   />
  </div>
 );
}
