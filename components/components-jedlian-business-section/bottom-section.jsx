import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  fadeRightVariants,
  fadeVariants,
  itemVariants,
  sectionVariants,
} from "@/lib/animations";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

export default function BottomSection({ items }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="p-6 md:p-18 lg:px-48 lg:py-5 space-y-8 w-full"
    >
      {/* title */}
      <motion.h1
        variants={fadeVariants}
        initial="hidden"
        whileInView="show"
        className="text-title font-extrabold bg-[radial-gradient(circle_at_center,#cfceaa,#c89116,#cfceaa)] bg-clip-text text-transparent"
      >
        {items?.titleTwo}
      </motion.h1>

      {/* content */}
      <motion.div variants={fadeVariants} initial="hidden" whileInView="show">
        <Carousel
          className="w-70 md:w-full mx-auto"
          plugins={[
            Autoplay({
              delay: 10000,
            }),
          ]}
        >
          <CarouselContent>
            {items?.location?.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1 overflow-hidden md:h-120 flex flex-col justify-center space-y-4">
                  <iframe
                    src={
                      "https://www.google.com/maps/embed?pb=" + item?.longLat
                    }
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-lg"
                  ></iframe>
                  <div className="text-center">
                    <p className="text-description">{item?.locationName}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-7.75 md:-left-12 md:top-1/2" />
          <CarouselNext className="-right-7.75 md:-right-12 md:top-1/2" />
        </Carousel>
      </motion.div>
    </motion.div>
  );
}
