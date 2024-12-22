"use client";
import CloseSidebar from "@/components/Sidebar/CloseSidebar";
import OpenSidebar from "@/components/Sidebar/OpenSidebar";
import { useCallback, useState } from "react";
import { LuPanelLeftClose, LuPanelRightClose } from "react-icons/lu";

type LayoutMainProps = {
  children: React.ReactNode;
};

function LayoutMain({ children }: LayoutMainProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex gap-5 h-full overflow-hidden">
      {isOpen ? <OpenSidebar /> : <CloseSidebar />}
      <button onClick={toggleSidebar} className="self-start mt-2 p-1 hover:bg-neutral-200 transition-all duration-100 rounded-md">
        {isOpen ? (
          <LuPanelLeftClose size={18} />
        ) : (
          <LuPanelRightClose size={18} />
        )}
      </button>

      <div className="flex-1 py-2">{children}</div>
    </div>
  );
}

export default LayoutMain;
