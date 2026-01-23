import { Mail, MapPin, Phone } from "lucide-react";
import casaJedlianaHeroImg from "@/public/images/casa/casaJedlianaHeroImg.jpg";
import casaGym from "@/public/images/casa/gym.png";
import casaKtv from "@/public/images/casa/ktv.png";
import casaPool from "@/public/images/casa/pool.png";

export const casaInformation = [
 {
  icon: MapPin,
  tile: "Purok 1 Barangay Tagpos, Sta.Rosa, Nueva Ecija",
 },
 {
  icon: Mail,
  tile: "frontdesk@casajedliana.com",
 },
 {
  icon: Phone,
  tile: "+63917-566-0140",
 },
];

export const casaClassificationData = [
 {
  id: 0,
  title: "Accomodations",
  carousel: [
   {
    title: "Standard Rooms",
    description:
     "Expirience a modern and cozy retreat and featuring a spacious queen bed, warm accent lighting, and contemporary wooden panel finishes that exude comfort and sophistication",
    img: casaJedlianaHeroImg,
   },
   {
    title: "Suite Rooms",
    description:
     "Expirience a modern and cozy retreat and featuring a spacious queen bed, warm accent lighting, and contemporary wooden panel finishes that exude comfort and sophistication",
    img: casaJedlianaHeroImg,
   },
   {
    title: "Family Rooms",
    description:
     "Expirience a modern and cozy retreat and featuring a spacious queen bed, warm accent lighting, and contemporary wooden panel finishes that exude comfort and sophistication",
    img: casaJedlianaHeroImg,
   },
   {
    title: "VIP Room",
    description:
     "Expirience a modern and cozy retreat and featuring a spacious queen bed, warm accent lighting, and contemporary wooden panel finishes that exude comfort and sophistication",
    img: casaJedlianaHeroImg,
   },
  ],
 },
 {
  id: 1,
  title: "Events & Venues",
 },
 {
  id: 2,
  title: "Resto",
 },
];

export const casaAmenitiesData = [
 {
  title: "Pool Area",
  description:
   "Dive into relaxation in our pool area, perfect for swimming, lounging, and enjoying refreshing moments under the sun.",
  img: casaPool,
 },
 {
  title: "Game & KTV Room",
  description:
   "Enjoy endless entertainment in our Game & KTV Room, featuring exciting games, karaoke, billards and a giant chess board-perfect for fun-filled moments with friends and family.",
  img: casaKtv,
 },
 {
  title: "Gym Room",
  description:
   "Our gym room provides a dedicated space for exercise and wellness, helping you maintain a healthy lifestyle during your stay.",
  img: casaGym,
 },
];
