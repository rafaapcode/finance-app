"use client";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Sidebar, SidebarHeader, useSidebar } from "../ui/sidebar";

function LayoutSidebar() {
  const { toggleSidebar, open } = useSidebar();
  return (
    <div className="flex">
      {!open && <button className="self-start m-2" onClick={toggleSidebar}><GoChevronRight /></button>}
      <Sidebar>
        <SidebarHeader className="flex flex-row items-center justify-between px-5">
          <h2>Logo</h2>
          <button onClick={toggleSidebar}><GoChevronLeft /></button>
        </SidebarHeader>
      </Sidebar>
    </div>
  );
}

export default LayoutSidebar;
