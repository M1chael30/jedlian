import { EmptyComponent } from "@/components/empty-component";
import { Rocket } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export default function History() {
 return (
  <EmptyComponent
   emptyMediaIcon={<Rocket className="animate-bounce" />}
   emptyTitle="Page Under Development"
   emptyDescription="This page is currently under development. Please check back soon."
   emptyContentTitle="Go back home"
   emptyContentIcon={<ArrowLeft />}
  />
 );
}
