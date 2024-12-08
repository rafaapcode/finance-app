import { cn } from "@/lib/utils";
import Link from "next/link";
import { ElementType } from "react";

type MenucardProps = {
  title: string;
  Icon: ElementType;
  isActive: boolean;
  routeName: string;
};

function Menucard({ Icon, isActive, title,routeName }: MenucardProps) {
  return (
    <Link href={`/sections/${routeName}`}>
      <div
        className={cn(
          "flex items-center gap-3 p-2 w-[90%] mx-auto rounded cursor-pointer",
          isActive ? "bg-white shadow" : "bg-transparent"
        )}
      >
        <Icon
          className={cn(
            "size-5",
            isActive ? "text-app_selected_icon" : "text-app_non_selected_icon"
          )}
        />
        <p className="text-sm font-medium">{title}</p>
      </div>
    </Link>
  );
}

export default Menucard;
