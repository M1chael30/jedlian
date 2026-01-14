export const containerVariants = {
 hidden: {},
 show: {
  transition: {
   staggerChildren: 0.2, // delay between boxes
  },
 },
};

export const itemVariants = {
 hidden: {
  opacity: 0,
  y: -120, // a bit higher = smoother fall
  scale: 0.96,
 },
 show: {
  opacity: 1,
  y: 0,
  scale: 1,
  transition: {
   type: "spring",
   stiffness: 220, // softer fall
   damping: 100, // allows gentle bounce
   mass: 0.8,
  },
 },
};

export const contentVariants = {
 hidden: {
  opacity: 0,
  y: -120, // a bit higher = smoother fall
  scale: 0.96,
 },
 show: {
  opacity: 1,
  y: 0,
  scale: 1,
  transition: {
   type: "spring",
   stiffness: 220, // softer fall
   damping: 100, // allows gentle bounce
   mass: 0.8,
  },
  exit: {
   opacity: 0,
   y: -30,
   transition: { duration: 0.3 },
  },
 },
};

export const imageVariants = {
 hidden: {
  opacity: 0,
  x: -120, // start from left
  scale: 0.97,
 },
 show: {
  opacity: 1,
  x: 0,
  scale: 1,
  transition: {
   type: "spring",
   stiffness: 40, // softer spring → smoother
   damping: 20, // allows gentle easing
   mass: 0.9, // heavier mass → slower, smooth motion
  },
 },
 exit: {
  opacity: 0,
  x: 80, // exit slightly to right
  transition: {
   type: "tween", // smoother exit than default spring
   ease: "easeInOut",
   duration: 0.4,
  },
 },
};

export const sectionVariants = {
 hidden: {},
 show: {
  transition: {
   staggerChildren: 0.15,
  },
 },
};

export const titleVariants = {
 hidden: { opacity: 0, y: 30 },
 show: {
  opacity: 1,
  y: 0,
  transition: { duration: 0.6 },
 },
};

export const descriptionVariants = {
 hidden: { opacity: 0, y: 20 },
 show: {
  opacity: 1,
  y: 0,
  transition: { duration: 0.6 },
 },
};

export const buttonVariants = {
 hidden: { opacity: 0, scale: 0.9 },
 show: {
  opacity: 1,
  scale: 1,
  transition: { duration: 0.4 },
 },
};

export const corporateValuesDesc = {
//
}
