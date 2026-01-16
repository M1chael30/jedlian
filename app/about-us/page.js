import TopSection from "@/components/components-about-us-page/top-section";
import ContentSection from "@/components/components-about-us-page/content-section";

export default function AboutUs() {
  return (
    <section className="max-w-7xl w-full mx-auto">
      <TopSection />
      <ContentSection />
      <div className="w-full aspect-video p-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d853.164744537288!2d120.98465304331525!3d15.446642012936598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339729e1c706f4ad%3A0xd0edade06adaa587!2sJedlian%20Communication%20Inc.%20Head%20Office!5e1!3m2!1sen!2sph!4v1768552675036!5m2!1sen!2sph"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl w-full h-full"
      ></iframe>
      </div>
    </section>
  );
}
