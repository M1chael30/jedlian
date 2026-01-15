import MissionVisionCircles from "./mission-vision-circles";

export default function MissionVisionWidget({
  title,
  description,
  customClassName,
  type,
}) {
  return (
    <div
      className={`
        relative overflow-hidden
        flex flex-col gap-4 sm:gap-6
        justify-center items-center

        rounded-3xl sm:rounded-4xl
        p-6 sm:p-8 lg:p-10

        w-full sm:w-96 lg:w-120
        min-h-[18rem] sm:min-h-[20rem]

        text-black border-white border-2
        ${customClassName}
      `}
    >
      <h1 className="uppercase font-extrabold text-2xl sm:text-3xl lg:text-4xl text-center">
        {title}
      </h1>

      <p className="text-base sm:text-lg lg:text-xl text-center max-w-prose">
        {description}
      </p>

      <MissionVisionCircles type={type} />
    </div>
  );
}
