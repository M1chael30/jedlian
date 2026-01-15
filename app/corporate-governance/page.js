import CorporateValues from "@/components/components-corporate-values/corporate-values";
import MissionVision from "@/components/components-mission-vision-section/mission-vision";
import CorporateGovernanceHeader from "@/components/corporate-governance-header";

export default function CorporateGovernance() {
 return (
    <div className="flex flex-col justify-center items-center p-10 gap-10">
      <CorporateGovernanceHeader/>
      <MissionVision/>
       <CorporateValues/> 
    </div>
 );
}
