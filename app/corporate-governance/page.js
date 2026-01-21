import CorporateValues from "@/components/components-corporate-values-section/corporate-values";
import MissionVision from "@/components/components-mission-vision-section/mission-vision";
import CodeOfConduct from "@/components/components-code-of-conduct/code-of-conduct";
import CorporateGovernanceHeader from "@/components/corporate-governance-header";
import bannerCorporateGovernance from "@/public/images/banners/bannerCorporateGovernance.png";
import Image from "next/image";
import CorporateValuesMobile from "@/components/components-corporate-values-section/corporate-values-mobile";

export default function CorporateGovernance() {
 return (
  <div className="flex flex-col justify-center items-center mx-auto max-w-7xl w-full">
   <Image
    src={bannerCorporateGovernance}
    alt="Jedlian landing page image"
    className="w-full h-auto max-w-full object-contain"
   />
   <MissionVision />
   <div className="min-h-180 flex flex-col justify-center items-center">

   <div className="flex items-center md:justify-center">
    <h1 className="text-title font-extrabold mt-5 text-center">
     CORPORATE VALUES
    </h1>
   </div>
   <CorporateValues />
   <CorporateValuesMobile/>
   </div>
   {/* <CodeOfConduct /> */}
  </div>
 );
}
