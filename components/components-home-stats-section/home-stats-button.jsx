import { Button } from "../ui/button";

import { RiArrowRightSFill } from "react-icons/ri";

export default function HomeStatsButton() {
    return(
        <Button
        className=
          "text-yellow-600 uppercase font-semibold bg-black/50 border-2 border-yellow-600 w-60 hover:scale-110 hover:text-white hover:bg-yellow-600 duration-500"
      >
        <h1 className="flex items-center">
          learn more about us{" "}
          <span>
            <RiArrowRightSFill />
          </span>
        </h1>
      </Button>
    )
}