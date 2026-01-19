import Questions from "./questions";

export default function FaqSection() {
 return (
  <section className="w-full my-18">
   <div>
    <div className="">
     <h1 className="font-extrabold bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] text-transparent bg-clip-text text-title">
      FAQ
     </h1>
     <p className="bg-[radial-gradient(circle_at_center,#E2D7D7,#958D8D,#E9DFDF)] text-transparent bg-clip-text text-description">
      Do you have any questions for us?
     </p>
    </div>
    <div className="h-1 my-6 w-full bg-[#c89116]" />
   </div>
   <Questions />
  </section>
 ); 
}
