import Link from "next/link";
import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

type MenuItemsProps = {
  Icon: ElementType;
  title: string;
  isActive: boolean;
  routeName?: string;
  isClosed?: boolean;
};

function MenuItems({
  Icon,
  isActive,
  title,
  routeName,
  isClosed = false,
}: MenuItemsProps) {
  return (
    <>
      {!isClosed ? (
        <Link
          href={`/main/${routeName ? routeName : title.toLowerCase()}`}
          className={twMerge(
            "w-full rounded-lg p-2 flex gap-2 items-center transition-all duration-100",
            isActive ? "bg-white border-neutral-200" : "hover:bg-neutral-200"
          )}
        >
          <Icon
            className={twMerge(isActive ? "text-black" : "text-neutral-400")}
          />
          <h2>{title}</h2>
        </Link>
      ) : (
        <Link
          href={`/main/${routeName ? routeName : title.toLowerCase()}`}
          className={twMerge(
            "w-fit rounded-lg p-2 flex gap-2 items-center transition-all duration-100",
            isActive ? "bg-white border-neutral-200 shadow" : "hover:bg-neutral-200"
          )}
        >
          <Icon
            className={twMerge(isActive ? "text-black" : "text-neutral-400")}
          />
        </Link>
      )}
    </>
  );
}

export default MenuItems;
