import CorporateValues from "@/components/components-corporate-values-section/corporate-values";
import MissionVision from "@/components/components-mission-vision-section/mission-vision";
import CodeOfConduct from "@/components/components-code-of-conduct/code-of-conduct";
import CorporateGovernanceHeader from "@/components/corporate-governance-header";

export default function CorporateGovernance() {
 return (
  <div className="flex flex-col justify-center items-center p-5 mx-auto max-w-7xl w-full">
   <CorporateGovernanceHeader />
   <MissionVision />
   <CorporateValues />
   {/* <CodeOfConduct /> */}
  </div>
 );
}
