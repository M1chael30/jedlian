import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navlink({
 link,
 href = "/",
 variant = "link",
 customClassName,
 icon,
}) {
 return (
  <Button asChild variant={variant}>
   <Link href={href} className={customClassName}>
    {icon}
    {link}
   </Link>
  </Button>
 );
}
