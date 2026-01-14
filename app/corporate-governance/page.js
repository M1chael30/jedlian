import CorporateValues from "@/components/components-corporate-values/corporate-values";
import MissionVision from "@/components/components-mission-vision/mission-vision";

export default function CorporateGovernance() {
 return (
    <div className="flex flex-col justify-center items-center p-10">
      <MissionVision/>
       <CorporateValues/> 
    </div>
 );
}
