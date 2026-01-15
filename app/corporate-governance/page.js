import CodeOfConduct from "@/components/components-code-of-conduct/code-of-conduct";
import CorporateValues from "@/components/components-corporate-values/corporate-values";
import MissionVision from "@/components/components-mission-vision/mission-vision";
import CorporateGovernanceHeader from "@/components/corporate-governance-header";

export default function CorporateGovernance() {
 return (
    <div className="flex flex-col justify-center items-center p-10">
      <MissionVision/>
       <CorporateValues/> 
       <CodeOfConduct/>
    </div>
 );
}
