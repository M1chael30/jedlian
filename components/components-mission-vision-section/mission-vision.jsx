import { missionVisionData } from "@/lib/corporateGovernanceData";
import MissionVisionWidget from "./mission-vision-widget";

export default function MissionVision() {
  return (
    <section
      className="
        grid grid-cols-1 md:grid-cols-2
     md:gap-5 gap-10 px-10 justify-center items-center
     text-center"
    >
      {missionVisionData.map((item, index)=>(
      <MissionVisionWidget key={index} title={item.title}
      description={item.description} icon={item.icon}/>
      ))}
    </section>
  );
}
