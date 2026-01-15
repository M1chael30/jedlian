import CorporateGovernanceHeader from "../corporate-governance-header";
import { missionVisionData } from "@/lib/data";
import MissionVisionWidget from "./mission-vision-widget";

export default function MissionVision() {
  return (
    <section
      className="
        flex flex-col lg:flex-row
        gap-6 lg:gap-10
        justify-center items-center

        w-full mx-auto max-w-6xl
        px-4
      "
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
