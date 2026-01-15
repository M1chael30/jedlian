import { Mail, MapPin, Phone } from "lucide-react";

import jedlianCommunicationLogo from "../public/images/jedlian-communication-logo.png";
import jedlianConstructionLogo from "../public/images/jedlian-construction-logo.png";
import casaJedlianaLogo from "../public/images/casa-jedliana-logo.png";
import jedlianDrugstoreLogo from "../public/images/jedlian-drugstore-logo.png";
import jedlianGasolineLogo from "../public/images/jedlian-gasoline-logo.png";

import bannerCasa from "@/public/images/business-page-img/bannerCasa.png";
import bannerCommunication from "@/public/images/business-page-img/bannerCommunication.png";
import bannerConstruction from "@/public/images/business-page-img/bannerConstruction.png";
import bannerDrugStore from "@/public/images/business-page-img/bannerDrugstore.png";
import bannerGasoline from "@/public/images/business-page-img/bannerGasoline.png";

import circleCasaJedliana from "@/public/images/business-page-img/circleCasaJedliana.png";
import circleJedlianCommunication from "@/public/images/business-page-img/circleJedlianCommunication.png";
import circleJedlianConstruction from "@/public/images/business-page-img/circleJedlianConstruction.png";
import circleJedlianDrugStore from "@/public/images/business-page-img/circleJedlianDrugstore.png";
import circleJedlianGasoline from "@/public/images/business-page-img/circleJedlianGasoline.png";

const navLinks = [
 {
  name: "Achievements",
  path: "/achievements",
 },
 {
  name: "Contact Us",
  path: "/contact-us",
 },
];

const ourStory = [
 {
  name: "History",
  path: "/history",
 },
 {
  name: "Executive Management",
  path: "/executive-management",
 },
 {
  name: "Corporate Governance",
  path: "/corporate-governance",
 },
];

const corporateGovernance = [
 {
  name: "Mission & Vision",
  path: "/mission-and-vision",
 },
 {
  name: "Core Values",
  path: "/core-values",
 },
 {
  name: "Code of Ethics",
  path: "/code-of-ethics",
 },
];

const ourBusinesses = [
 {
  name: "Jedlian Communications",
  path: "/jedlian-communications",
 },
 {
  name: "Casa Jedliana",
  path: "/casa-jedliana",
 },
 {
  name: "Generika Drugstore",
  path: "/generika-drugstore",
 },
 {
  name: "Jedlian Construction",
  path: "/jedlian-construction",
 },
 {
  name: "Jedlian Gasoline",
  path: "/jedlian-gasoline",
 },
];

const footerQuickLinks = [
 {
  name: "About Us",
  path: "/about-us",
 },
 {
  name: "Our Businesses",
  path: "/our-businesses",
 },
 {
  name: "Contact Us",
  path: "/contact-us",
 },
];

const footerContactUs = [
 {
  name: "+63 124-456-789",
  path: "/",
  icon: Phone,
 },
 {
  name: "jedlian@gmail.com",
  path: "/",
  icon: Mail,
 },
 {
  name: "Santa Rosa, Nueva Ecija",
  path: "/",
  icon: MapPin,
 },
];

const homeStatsData = [
 {
  number: "20+",
  title: "years of experience",
  description: "Two decades of delivering trusted, innovative solutions.",
 },
 {
  number: "700+",
  title: "overall employees",
  description: "A talented team driving excellence across all operations.",
 },
 {
  number: "26",
  title: "official branches",
  description:
   "Strategicall located in Regions I, II, III & CAR to serve communities nationwide.",
 },
 {
  number: "1B+",
  title: "NFCC",
  description: "Strong financial capacity for large-scale, long-term projects.",
 },
];

const corporateValuesButtonsData = [
 {
  id: 0,
  title: "customer-focused",
  description: "Our Top Priority is our Customer, Serving Them Above All",
 },
 {
  id: 1,
  title: "Integrity",
  description:
   "We Highly Value the Sense of Honesty and Accountability in Everything we do",
 },
 {
  id: 2,
  title: "God-Centered",
  description: "aoskndakosndaoksndo asadasdasdasd",
  img: casaJedlianaLogo,
  alt: "Casa Jedliana Logo",
  path: "/",
 },
 {
  id: 3,
  title: "Innovative",
  description: "Opportunities to Innovate and Adapt to Changes",
 },
 {
  id: 4,
  title: "Teamwork",
  description:
   "We build a team of customer-oriented Staff who work in synergy to provide the best quality service",
  img: jedlianGasolineLogo,
  alt: "Jedlian Gasoline Logo",
  path: "/",
 },
];

const jedlianBusinessesData = [
 {
  id: 0,
  title: "Jedlian Commmunication",
  titleTwo: "Our Philosophy",
  titleThree: "Vision for the Future",
  description:
   "Specializing in cutting-edge telecommunications technology, JEDLIAN COMMUNICATIONS at the forefront of providing seamless connectivity solutions for businesses and individuals.",
  descriptionTwo: "----",
  descriptionThree: "----",
  descriptionFour: "----",
  img: jedlianCommunicationLogo,
  imgBanner: bannerCommunication,
  imgCircleBanner: circleJedlianCommunication,
  alt: "Jedlian Communication Logo",
  path: "jedlian-communication",
 },
 {
  id: 1,
  title: "Jedlian Construction",
  titleTwo: "Our Philosophy",
  titleThree: "Vision for the Future",
  description:
   "JEDLIAN Construction is a trusted leader in construction, delivering excellence across residential, commercial, and government projects. Committed to quality and innovation, we also provide integrated renewable energy solutions through our in-house electric company, powering sustainable and modern development.",
  descriptionTwo:
   "Jedlian Construction provides reliable construction solutions specializing in commercial and residential projects, housing developments, repair and renovation works, and solar renewable energy systems. We are committed to delivering quality craftsmanship, efficient project execution, and sustainable building solutions that meet our clients’ needs.",
  descriptionThree:
   "We believe in building with integrity, quality, and responsibility. Our approach focuses on safety, innovation, and sustainable practices while maintaining strong partnerships with our clients and communities.",
  descriptionFour:
   "To become a trusted leader in construction and renewable energy by creating durable, sustainable, and future-ready developments that contribute to long-term community growth.",
  img: jedlianConstructionLogo,
  imgBanner: bannerConstruction,
  imgCircleBanner: circleJedlianConstruction,
  alt: "Jedlian Construction Logo",
  path: "jedlian-construction",
 },
 {
  id: 2,
  title: "Casa Jedliana",
  titleTwo: "Our Mission",
  titleThree: "Vision for the Future",
  description:
   "Nestled in a scenic location, Casa Jedliana Hotel and Resort delivers exceptional hospitality with luxurious accommodations and premium amenities, perfect for both leisure and business travelers.",
  descriptionTwo:
   'Embracing its Spanish-inspired motto "Mi Casa Es Tu Casa," Casa Jedliana Hotel and Resort is a haven where guests are embraced as family, now standing proudly as a symbol of luxury and tranquility in the heart of Nueva Ecija. Devoted to delivering premium accommodations and a range of amenities, Casa Jedliana remains connected to its origins, deeply entrenched in the verdant rice fields that characterize this picturesque region',
  descriptionThree:
   "Casa Jedliana is dedicated to crafting a haven where extraordinary memories find a home, passionately striving for unparalleled excellence to ensure that every celebration and stay becomes an enduring and exceptional experience, forever etched in the heart",
  descriptionFour:
   "Casa Jedliana warmly envisions becoming the cherished and leading hotel in the region, beckoning guests to experience an inviting extension of their homes, where every stay unfolds with personal stories and inspirations, creating a unique haven in the heart of hospitality.",
  img: casaJedlianaLogo,
  imgBanner: bannerCasa,
  imgCircleBanner: circleCasaJedliana,
  alt: "Casa Jedliana Logo",
  path: "casa-jedliana",
 },
 {
  id: 3,
  title: "Jedlian Drugstore",
  titleTwo: "Our Philosophy",
  titleThree: "Vision for the Future",
  description:
   "JEDLIAN Drugstore provides a comprehensive range of pharmaceutical products and wellness services, dedicated to supporting the health and well-being of the community.",
  descriptionTwo:
   "Jedlian Drugstore is a community-focused pharmacy dedicated to providing accessible, affordable, and reliable healthcare products. We serve our customers with professionalism, care, and a strong commitment to quality and trust.",
  descriptionThree:
   "We believe that healthcare should be accessible and dependable. Our operations are guided by integrity, ethical business practices, and genuine concern for the well-being of the communities we serve.",
  descriptionFour:
   "To become a trusted and expanding drugstore brand that improves community health by delivering quality medicines, excellent service, and sustainable growth for the future.",
  img: jedlianDrugstoreLogo,
  imgBanner: bannerDrugStore,
  imgCircleBanner: circleJedlianDrugStore,
  alt: "Jedlian Drugstore Logo",
  path: "jedlian-drugstore",
 },
 {
  id: 4,
  title: "Jedlian Gasoline",
  titleTwo: "Our Philosophy",
  titleThree: "Vision for the Future",
  description:
   "Jedlian Gasoline is committed to delivering premium-quality fuel that powers optimal performance and dependable operation for every engine.",
  descriptionTwo:
   "Jedlian Gasoline provides reliable and high-quality fuel solutions designed to meet the daily transportation and business needs of our communities. We are committed to safe operations, efficient service, and dependable fuel supply that customers can trust.",
  descriptionThree:
   "We believe in delivering value through integrity, safety, and operational excellence. Our philosophy centers on honest service, responsible practices, and building long-term trust with our customers and partners.",
  descriptionFour:
   "To become a trusted fuel and energy provider known for reliability, efficiency, and customer-focused service while supporting sustainable growth for the future.",
  img: jedlianGasolineLogo,
  imgBanner: bannerGasoline,
  imgCircleBanner: circleJedlianGasoline,
  alt: "Jedlian Gasoline Logo",
  path: "jedlian-gasoline",
 },
];

const missionVisionData = [
  {
    title: "mission",
    description: "To provide a highly reliable quality work and services while consistently adapting to a fast-paced changing technological industry."
  },
  {
    title: "vision",
    description: "Coupled and inspired with our vision, to become the leader in providing a complete and full range of services to meet our customer's requirements."
  }
]

  export {
 navLinks,
 ourStory,
 corporateGovernance,
 ourBusinesses,
 footerContactUs,
 footerQuickLinks,
 homeStatsData,
 corporateValuesButtonsData,
 missionVisionData,
 jedlianBusinessesData,
};
