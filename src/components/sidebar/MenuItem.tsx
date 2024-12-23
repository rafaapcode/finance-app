import { cn } from "@/lib/utils";
import Link from "next/link";
import { ElementType } from "react";

type MenuItemProps = {
  Icon: ElementType;
  title: string;
  routeName: string;
  active: boolean;
  open: boolean;
};

function MenuItem({ Icon, routeName, title, active, open }: MenuItemProps) {
  return (
    <>
      {open ? (
        <Link
          href={`/main/${routeName}`}
          className={cn(
            "flex bg-white border hover:bg-white border-neutral-200 px-2 py-1 rounded-lg items-center gap-2",
            !active && "bg-transparent border-none hover:bg-neutral-100"
          )}
        >
          <Icon size={18} className={cn(!active && "text-neutral-300")} />
          <h2 className="text-base">{title}</h2>
        </Link>
      ) : (
        <Link
          href={`/main/${routeName}`}
          className={cn(
            "flex bg-white border hover:bg-white border-neutral-200 px-2 py-1 rounded-lg items-center gap-2",
            !active && "bg-transparent border-none hover:bg-neutral-100",
            !open && "py-2"
          )}
        >
          <Icon size={18} className={cn(!active && "text-neutral-300")} />
        </Link>
      )}
    </>
  );
}

export default MenuItem;
