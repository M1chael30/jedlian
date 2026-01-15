import CorporateValuesTitle from "./corporate-values-title";
import { motion, AnimatePresence } from "framer-motion";

export default function CorporateValuesContent({ objects, item, expand }) {
  return (
    <div className="h-50">
      {objects.map((obj, index) => (
        <div key={index} className="w-50">
          <AnimatePresence>
            <motion.div>
              <CorporateValuesTitle
                customClassName={
                  item.id === index && expand
                    ? "underline font-bold text-amber-400"
                    : "text-yellow-600"
                }
              >
                {obj.title}
              </CorporateValuesTitle>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {item.id === index && expand && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`p-1 w-50 mb-3 `}
              >
                {item.description}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
