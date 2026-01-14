import FooterTopSection from "./components-footer/footer-top-section";
import FooterBottomSection from "./components-footer/footer-bottom-section";

export default function Footer() {
 return (
  <section className="py-4 w-full space-y-3">
   <FooterTopSection />
   <FooterBottomSection />
  </section>
 );
}
