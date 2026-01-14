import { Button } from "@/components/ui/button";
import {
 Empty,
 EmptyContent,
 EmptyDescription,
 EmptyHeader,
 EmptyMedia,
 EmptyTitle,
} from "@/components/ui/empty";
import Link from "next/link";

export function EmptyComponent({
 emptyMediaIcon,
 emptyMediaVariant = "default",
 emptyTitle,
 emptyDescription,
 href = "/",
 emptyContentTitle,
 emptyContentIcon,
}) {
 return (
  <Empty>
   <EmptyHeader>
    <EmptyMedia variant={emptyMediaVariant}>{emptyMediaIcon}</EmptyMedia>
    <EmptyTitle>{emptyTitle}</EmptyTitle>
    <EmptyDescription>{emptyDescription}</EmptyDescription>
   </EmptyHeader>
   <EmptyContent>
    {emptyContentTitle && (
     <Button asChild variant="jedlian" size="sm">
      <Link href={href}>
       {emptyContentIcon}
       {emptyContentTitle}
      </Link>
     </Button>
    )}
   </EmptyContent>
  </Empty>
 );
}
