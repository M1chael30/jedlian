import CorporateValues from "@/components/components-corporate-values-section/corporate-values";
import MissionVision from "@/components/components-mission-vision-section/mission-vision";
import CodeOfConduct from "@/components/components-code-of-conduct/code-of-conduct";
import CorporateGovernanceHeader from "@/components/corporate-governance-header";
import bannerCorporateGovernance from "@/public/images/banners/bannerCorporateGovernance.png";
import Image from "next/image";


export default function CorporateGovernance() {
 return (
  <div className="flex flex-col justify-center items-center  mx-auto max-w-7xl w-full">
        <Image
         src={bannerCorporateGovernance}
         alt="Jedlian landing page image"
         className="w-full h-auto max-w-full object-contain"
        />
   <MissionVision />
   <CorporateValues />
   {/* <CodeOfConduct /> */}
  </div>
 );
}
