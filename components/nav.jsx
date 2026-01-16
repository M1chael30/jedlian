"use client";

import Navlink from "./nav-link";
import Link from "next/link";
import { navLinks, ourBusinesses, ourStory } from "@/lib/data";
import { jedlianBusinessesData } from "@/lib/homePageData";
import { usePathname } from "next/navigation";
import MobileNavLinks from "./mobile-nav-links";
import { NavigationMenuComponent } from "./navigation-menu-component";

export default function Nav() {
 const pathName = usePathname();

 return (
  <header className="sticky top-0 z-50 bg-black">
   <div className="flex h-16 shrink-0 items-center px-4 mx-auto max-w-7xl w-full">
    <Link href="/">
     <img
      src="images/HOLDINGS-LOGO2.png"
      alt=""
      className="w-33 h-10 object-cover"
     />
    </Link>
    {/* nav links */}
    <div className="ml-auto items-center gap-2 hidden md:flex">
     <NavigationMenuComponent
      navigationMenuTitle="Our Story"
      dropdownMenuItem={ourStory}
     />
     <NavigationMenuComponent
      navigationMenuTitle="Our Business"
      dropdownMenuItem={jedlianBusinessesData}
     />
     {navLinks.map((link, i) => (
      <Navlink
       key={i}
       link={link.name}
       href={link.path}
       variant={link.path === pathName ? "active" : "link"}
      />
     ))}
    </div>
    {/* mobile nav links mobile view only*/}
    <div className="ml-auto items-center gap-2 md:hidden flex">
     <MobileNavLinks />
    </div>
   </div>
  </header>
 );
}
