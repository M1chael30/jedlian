import Link from "next/link";

export default function ContentSection({ item }) {
 return (
  <div className="p-6 md:p-18 lg:px-48 lg:py-20 space-y-12 flex flex-col">
   {/* top section */}
   <div className="space-y-2">
    {/* title */}
    <h1 className="font-bold bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] bg-clip-text text-transparent text-xl md:text-4xl">
     {item.title}
    </h1>
    {/* description */}
    <p className="text-xs md:text-sm">{item.descriptionTwo}</p>
   </div>
   {/* mid section */}
   <div className="space-y-2">
    {/* title */}
    <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
     {item.titleTwo}
    </h1>
    {/* description */}
    <p className="text-xs md:text-sm">{item.descriptionThree}</p>
   </div>
   {/* bottom section */}
   <div className="space-y-2">
    {/* title */}
    <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
     {item.titleThree}
    </h1>
    {/* description */}
    <p className="text-xs md:text-sm">{item.descriptionFour}</p>
   </div>
   {/* icon */}
   <div className="flex space-x-4">
    {item.icon &&
     item.icon.map((Icon, index) => (
      <Link href={"#"} key={index}>
       <Icon size={32} />
      </Link>
     ))}
   </div>
  </div>
 );
}
