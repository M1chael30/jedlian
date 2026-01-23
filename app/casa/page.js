import CasaClassificationSection from "@/components/components-casa-page/casa-classification-section";
import CasaTopSection from "@/components/components-casa-page/casa-top-section";

export default function Casa() {
 return (
  <section className="w-full">
   <div className="mx-auto w-full max-w-7xl bg-primary">
    <CasaTopSection />
    <CasaClassificationSection />
   </div>
  </section>
 );
}
