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
  title: "  branches & offices",
  description:
   "Strategically located in Regions I, II, III & CAR to serve communities nationwide.",
 },
 {
  number: "1B+",
  title: "NFCC",
  description: "Strong financial capacity for large-scale, long-term projects.",
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
  descriptionTwo:
   "Jedlian Communications made significant strides in the Telecommunication sector by providing state-of-the-art communication solutions year 2008. Today, Jedlian Communications continues to expand its presence and enhance connectivity in the communities it serves, further solidifying its role as a leading provider in the industry.",
  descriptionThree:
   "At the core of Jedlian Communications is the belief that technology has the power to connect, empower, and transform lives. We strive to bridge gaps through innovation, inspire confidence through reliability, and uplift communities through access to information.",
  descriptionFour:
   "We envision a future where every Filipino community—whether urban or rural—is seamlessly connected to opportunities, knowledge, and progress. As we grow, Jedlian Communications aims to lead in smart, efficient, and people-driven communication solutions that shape a more connected and inclusive tomorrow.",
  img: jedlianCommunicationLogo,
  imgBanner: bannerCommunication,
  imgCircleBanner: circleJedlianCommunication,
  alt: "Jedlian Communication Logo",
  path: "jedlian-communication",
  icon: [FaFacebook],
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
  icon: [FaFacebook, FaSquareInstagram],
 },
];

const jedlianCommunicationOffices = {
 id: 0,
 title: "Jedlian Commmunication",
 titleTwo: "Offices",
 location: [
  {
   locationName: "18B MAHARLIKA HIGHWAY BRGY PENGUE RUYU TUGUEGARAO CITY",
   longLat:
    "!1m17!1m12!1m3!1d812.5795668409431!2d121.73227606163128!3d17.6295159954733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDM3JzQ2LjciTiAxMjHCsDQzJzU4LjEiRQ!5e1!3m2!1sen!2sph!4v1768874734925!5m2!1sen!2sph",
  },
  {
   locationName: "A.DOMINGO ST. PUROK 2, SILLAWIT, CAUAYAN CITY, ISABELA ",
   longLat:
    "!1m17!1m12!1m3!1d2992.837634434316!2d121.756986073915!3d16.87069198393104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDUyJzE0LjUiTiAxMjHCsDQ1JzM0LjQiRQ!5e1!3m2!1sen!2sph!4v1768875034640!5m2!1sen!2sph",
  },
  {
   locationName:
    "LATAWAN BLDG. EAGLE CREST PHASE 1 BAKAKENG NEW SITE BAGUIO CITY ",
   longLat:
    "!1m17!1m12!1m3!1d3000.472089354101!2d120.58822807390133!3d16.381866984343848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDIyJzU0LjciTiAxMjDCsDM1JzI2LjkiRQ!5e1!3m2!1sen!2sph!4v1768875111014!5m2!1sen!2sph",
  },
  {
   locationName: "BRGY BULAG WEST BANTAY ILOCOS SUR (near Brgy hall) ",
   longLat:
    "!1m17!1m12!1m3!1d2981.1903161358446!2d120.42743907393618!3d17.591043983331215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDM1JzI3LjgiTiAxMjDCsDI1JzQ4LjEiRQ!5e1!3m2!1sen!2sph!4v1768875181992!5m2!1sen!2sph",
  },
  {
   locationName:
    "DAGUPAN DEPO- # 60 BEVERLY HILLS BRGY. BUNUAN GUESET DAGUPAN CITY ",
   longLat:
    "!1m17!1m12!1m3!1d3005.1214824867216!2d120.34413507389282!3d16.077096984603507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDA0JzM3LjYiTiAxMjDCsDIwJzQ4LjIiRQ!5e1!3m2!1sen!2sph!4v1768875274434!5m2!1sen!2sph",
  },
  {
   locationName:
    "BUNDALIAN COMPOUND BARANGGAY CALULUT CITY OF SAN FERNANDO PAMPANGA (AMAIA SCAPES PASOK)",
   longLat:
    "!1m17!1m12!1m3!1d3019.556156497002!2d120.64020407386657!3d15.092784985454006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDA1JzM0LjAiTiAxMjDCsDM4JzM0LjAiRQ!5e1!3m2!1sen!2sph!4v1768875349749!5m2!1sen!2sph",
  },
  {
   locationName: "#40 BRGY TIBAG TARLAC CITY TARLAC",
   longLat:
    "!1m17!1m12!1m3!1d3013.86480929069!2d120.56931007387696!3d15.488168985110242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDI5JzE3LjQiTiAxMjDCsDM0JzE4LjgiRQ!5e1!3m2!1sen!2sph!4v1768875435252!5m2!1sen!2sph",
  },
  {
   locationName: "#468 CATLEYA STREET. DONA FRANCISCA BALANGA BATAAN",
   longLat:
    "!1m17!1m12!1m3!1d3025.2607388340716!2d120.53934987385621!3d14.686057985810452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDQxJzA5LjgiTiAxMjDCsDMyJzMwLjkiRQ!5e1!3m2!1sen!2sph!4v1768875565183!5m2!1sen!2sph",
  },
  {
   locationName:
    "BLK 2,LOT 2 BRGY. STO TOMAS STA. MONICA SUBDIVISION SUBIC ZAMBALES",
   longLat:
    "!1m17!1m12!1m3!1d3022.9403954081554!2d120.25089407386042!3d14.852807985663988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDUxJzEwLjEiTiAxMjDCsDE1JzEyLjUiRQ!5e1!3m2!1sen!2sph!4v1768875650468!5m2!1sen!2sph",
  },
  {
   locationName: "0026 GEN. ALEJO SANTOS PUROK 1 BRGY BINTOG PLARIDEL BULACAN",
   longLat:
    "!1m17!1m12!1m3!1d3022.272523876201!2d120.8813530738617!3d14.900465985622219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDU0JzAxLjciTiAxMjDCsDUzJzAyLjEiRQ!5e1!3m2!1sen!2sph!4v1768875724208!5m2!1sen!2sph",
  },
  {
   locationName: "314 MIRANDA ST. BRGY. SAOG MARILAO BULACAN.",
   longLat:
    "!1m17!1m12!1m3!1d3024.1873264359006!2d120.95122607385828!3d14.76342698574246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDQ1JzQ4LjMiTiAxMjDCsDU3JzEzLjciRQ!5e1!3m2!1sen!2sph!4v1768875791698!5m2!1sen!2sph",
  },
  {
   locationName: "Lot 2E, Kaypian Proper, Brgy. Kaypian City of SJDM Bulacan",
   longLat:
    "!1m17!1m12!1m3!1d3023.4597543449136!2d121.0498710738595!3d14.815643985696596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDQ4JzU2LjMiTiAxMjHCsDAzJzA4LjgiRQ!5e1!3m2!1sen!2sph!4v1768875855832!5m2!1sen!2sph",
  },
  {
   locationName: "PUROK 1 BARANGAY TAGPOS STA. ROSA NUEVA ECIJA 3101",
   longLat:
    "!1m17!1m12!1m3!1d3014.4633874176384!2d120.99072007387595!3d15.4470499851459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDI2JzQ5LjQiTiAxMjDCsDU5JzM1LjkiRQ!5e1!3m2!1sen!2sph!4v1768875903653!5m2!1sen!2sph",
  },
  {
   locationName: "BRGY. QUINAVITY BAUANG LA UNION",
   longLat:
    "!1m17!1m12!1m3!1d2998.113497940124!2d120.32557907390553!3d16.534383984214546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDMyJzAzLjgiTiAxMjDCsDE5JzQxLjQiRQ!5e1!3m2!1sen!2sph!4v1768875960450!5m2!1sen!2sph",
  },
 ],
};

// const jedlianBusinessLocation = [
//  {

//  },
//  {
//   id: 1,
//   title: "Jedlian Drugstore",
//   titleTwo: "Branches",
//   location: [],
//  },
//  {
//   id: 2,
//   title: "Jedlian Gasoline",
//   title: "Branches",
//   location: [],
//  },
// ];

export { homeStatsData, jedlianBusinessesData, jedlianCommunicationOffices };
