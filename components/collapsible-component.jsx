import {
 Collapsible,
 CollapsibleContent,
 CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export default function CollapsibleComponent({
 title,
 buttonVariant = "link",
}) {
 return (
  <Collapsible className="group/collapsible">
   <Button variant={buttonVariant} asChild>
    <CollapsibleTrigger className="flex gap-2">
     {title}
     <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
    </CollapsibleTrigger>
   </Button>
   <CollapsibleContent className="mt-2"></CollapsibleContent>
  </Collapsible>
 );
}
