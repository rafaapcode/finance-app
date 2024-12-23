"use client";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { useSidebar } from "@/components/ui/sidebar";
import { IoIosArrowRoundForward } from "react-icons/io";

type LayoutMainProps = {
  children: React.ReactNode;
};

function LayoutMain({ children }: LayoutMainProps) {
  const { toggleSidebar, open } = useSidebar();

  return (
    <div className="flex w-full h-full gap-5 lg:gap-0">
      <AppSidebar />
      <button
        onClick={toggleSidebar}
        className="self-start hover:bg-neutral-100 rounded-md transition-all duration-150 m-2"
      >
        {!open && <IoIosArrowRoundForward size={25} />}
      </button>
      <div className="container mx-auto py-2">{children}</div>
    </div>
  );
}

export default LayoutMain;
