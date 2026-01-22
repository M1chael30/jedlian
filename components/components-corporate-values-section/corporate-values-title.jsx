import { corporateValuesVariants } from "@/lib/animations";

import { motion } from "motion/react";

export default function CorporateValuestitle({children, customClassName}) {
    return(
        <motion.h1
        variants={corporateValuesVariants}
        className={`uppercase text-subtitle ${customClassName}`}>
            {children}
        </motion.h1>
    )
}