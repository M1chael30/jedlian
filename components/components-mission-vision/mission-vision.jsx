import CorporateGovernanceHeader from "../corporate-governance-header";
import MissionVisionWidget from "./mission-vision-widget";
import { missionVisionData } from "@/lib/data";

export default function MissionVision() {
  return (
    <section className="flex gap-10 
    justify-center items-center
    w-full mx-auto max-w-6xl">

      <MissionVisionWidget title={missionVisionData[0].title}
        description={missionVisionData[0].description}
        customClassName={"bg-zinc-300"} type="mission"
      />
      <MissionVisionWidget title={missionVisionData[1].title}
        description={missionVisionData[1].description}
        customClassName={"bg-amber-300"} type="vison"
      />


    </section>
  )
}
