import { cn } from "@/lib/utils";
import Link from "next/link";
import { ElementType } from "react";

type MenuItemProps = {
  Icon: ElementType;
  routeName: string;
  isActive: boolean;
}

function MenuItem({Icon,isActive, routeName}: MenuItemProps) {
  return (
    <Link href={`/main/${routeName}`} className={cn("flex justify-center bg-white border border-neutral-200 items-center p-2 rounded-md", !isActive && "bg-transparent border-none hover:bg-neutral-200")}>
      <Icon className={cn(!isActive ? "text-neutral-400" : "text-black")} size={20}/>
    </Link>
  )
}

export default MenuItem
