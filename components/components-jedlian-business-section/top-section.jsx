import bannerCasa from "@/public/images/business-page-img/bannerCasa.png";
import circleCasaJedliana from "@/public/images/business-page-img/circleCasaJedliana.png";
import Image from "next/image";

export default function TopSection({
 imgBanner = bannerCasa,
 imgCircle = circleCasaJedliana,
}) {
 return (
  <div className="relative">
   <Image
    src={imgBanner}
    alt="Banner Casa Jedliana"
    className="w-full h-auto max-w-full object-contain"
   />

   <Image
    src={imgCircle}
    alt="Circle Casa Jedliana"
    className="absolute top-0 right-0 w-22 md:w-50 object-contain"
   />
  </div>
 );
}
