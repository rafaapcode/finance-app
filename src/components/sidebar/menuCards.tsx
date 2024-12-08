import { cn } from "@/lib/utils";
import Link from "next/link";
import { ElementType } from "react";

type MenucardProps = {
  title: string;
  Icon: ElementType;
  isActive: boolean;
  routeName: string;
  isOpen: boolean;
};

function Menucard({ Icon, isActive, title, routeName, isOpen }: MenucardProps) {
  return (
    <Link href={`/sections/${routeName}`}>
      {isOpen ? (
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
      ) : (
        <div className={cn("rounded mx-auto w-fit p-1", isActive ? "bg-white shadow-md" : "bg-transparent hover:bg-app_secondary hover:shadow transition-all duration-100")}>
          <Icon
            className={cn(
              "size-5",
              isActive ? "text-app_selected_icon" : "text-app_non_selected_icon"
            )}
          />
        </div>
      )}
    </Link>
  );
}

export default Menucard;
