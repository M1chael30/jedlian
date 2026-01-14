import { Mail, MapPin, Phone } from "lucide-react";

import jedlianCommunicationLogo from "../public/images/jedlian-communication-logo.png";
import jedlianConstructionLogo from "../public/images/jedlian-construction-logo.png";
import casaJedlianaLogo from "../public/images/casa-jedliana-logo.png";
import jedlianDrugstoreLogo from "../public/images/jedlian-drugstore-logo.png";
import jedlianGasolineLogo from "../public/images/jedlian-gasoline-logo.png";

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
  description: "We Highly Value the Sense of Honesty and Accountability in Everything we do",
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
  description: "We build a team of customer-oriented Staff who work in synergy to provide the best quality service",
  img: jedlianGasolineLogo,
  alt: "Jedlian Gasoline Logo",
  path: "/",
 },
];

const jedlianCommucnicationSectionButtons = [
 {
  id: 0,
  title: "Jedlian Commmunication",
  description: "Jedlian Commmunication",
  img: jedlianCommunicationLogo,
  alt: "Jedlian Communication Logo",
  path: "/",
 },
 {
  id: 1,
  title: "Jedlian Construction",
  description: "Jedlian Construction",
  img: jedlianConstructionLogo,
  alt: "Jedlian Construction Logo",
  path: "/",
 },
 {
  id: 2,
  title: "Casa Jedliana",
  description: "Casa Jedliana",
  img: casaJedlianaLogo,
  alt: "Casa Jedliana Logo",
  path: "/",
 },
 {
  id: 3,
  title: "Jedlian Drugstore",
  description: "Jedlian Drugstore",
  img: jedlianDrugstoreLogo,
  alt: "Jedlian Drugstore Logo",
  path: "/",
 },
 {
  id: 4,
  title: "Jedlian Gasoline",
  description: "Jedlian Gasoline",
  img: jedlianGasolineLogo,
  alt: "Jedlian Gasoline Logo",
  path: "/",
 },
];



export {
 navLinks,
 ourStory,
 corporateGovernance,
 ourBusinesses,
 footerContactUs,
 footerQuickLinks,
 homeStatsData,
 jedlianCommucnicationSectionButtons,
 corporateValuesButtonsData
};
