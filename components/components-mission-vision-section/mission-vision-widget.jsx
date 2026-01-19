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
        p-10 w-full h-60 lg:w-full
        md:h-80 md:w-80
        text-black border-white border-2
        ${customClassName}
      `}
  >
   <h1 className="uppercase font-extrabold text-title text-center">
    {title}
   </h1>

   <p className="text-description text-center max-w-prose">
    {description}
   </p>

   <MissionVisionCircles type={type} />
  </div>
 );
}
