import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";

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
  name: "About Us",
  path: "/about-us",
 },
 {
  name: "Corporate Governance",
  path: "/corporate-governance",
 },
];

const footerQuickLinks = [
 {
  name: "About Us",
  path: "/about-us",
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


export {
 navLinks,
 ourStory,
 footerContactUs,
 footerQuickLinks,
};
