import { missionVisionData } from "@/lib/corporateGovernanceData";
import MissionVisionWidget from "./mission-vision-widget";

export default function MissionVision() {
 return (
  <section
   className="
        grid grid-cols-1 md:grid-cols-2
       gap-8 px-8 my-12"
  >
   <MissionVisionWidget
    title={missionVisionData[0].title}
    description={missionVisionData[0].description}
    customClassName="bg-zinc-300 w-full max-w-md"
    type="mission"
   />

   <MissionVisionWidget
    title={missionVisionData[1].title}
    description={missionVisionData[1].description}
    customClassName="bg-amber-300 w-full max-w-md"
    type="vision"
   />
  </section>
 );
}
