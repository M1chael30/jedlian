import { EmptyComponent } from "@/components/empty-component";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
 return (
  <EmptyComponent
   emptyTitle="404 - Not Found"
   emptyDescription="The page you're looking for doesn't exist."
   emptyContentTitle="Go back home"
   emptyContentIcon={<ArrowLeft />}
  />
 );
}
