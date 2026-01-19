import CorporateValuesTitle from "./corporate-values-title";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useLayoutEffect } from "react";

export default function CorporateValuesContent({ objects, item, expand }) {
 return (
  <motion.div className="flex flex-col gap-2">
   {objects.map((obj, index) => {
    const isActive = item.id === index && expand;
    const contentRef = useRef(null);
    const [measuredHeight, setMeasuredHeight] = useState(0);
    useLayoutEffect(() => {
     if (contentRef.current) {
      setMeasuredHeight(contentRef.current.scrollHeight);
     }
    }, [isActive, item.description]);

    return (
     <motion.div key={index} className="w-80" layout="position">
      <motion.div layout>
       <CorporateValuesTitle
        customClassName={
         isActive
          ? "underline font-bold text-yellow-200"
          : "font-bold text-yellow-400"
        }
       >
        {obj.title}
       </CorporateValuesTitle>
      </motion.div>
      <AnimatePresence initial={false}>
       {isActive && (
        <motion.div
         initial={{ opacity: 0, height: 0 }}
         animate={{ opacity: 1, height: measuredHeight }}
         exit={{ opacity: 0, height: 0 }}
         transition={{
          height: { duration: 0.35, ease: "easeInOut" },
          opacity: { duration: 0.35, ease: "easeInOut" },
         }}
         className="overflow-hidden p-1 w-70 mb-3 text-description"
        >
         <div ref={contentRef}>{item.description}</div>
        </motion.div>
       )}
      </AnimatePresence>
     </motion.div>
    );
   })}
  </motion.div>
 );
}
