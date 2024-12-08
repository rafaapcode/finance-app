"use client";
import { usePathname } from "next/navigation";
import { CiGrid41 } from "react-icons/ci";
import { FaMoneyBillWave } from "react-icons/fa6";
import { GoChevronLeft, GoChevronRight, GoHomeFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { Sidebar, SidebarContent, SidebarHeader, useSidebar } from "../ui/sidebar";
import Menucard from "./menuCards";

function LayoutSidebar() {
  const { toggleSidebar, open } = useSidebar();
  const pathName = usePathname();

  return (
    <div className="flex">
      {!open && <button className="self-start m-2 bg-white shadow p-1 rounded hover:shadow-md" onClick={toggleSidebar}><GoChevronRight /></button>}
      <Sidebar>
        <SidebarHeader className="flex flex-row items-center justify-between px-5">
          <h2>Logo</h2>
          <button onClick={toggleSidebar} className="bg-white shadow p-1 rounded hover:shadow-md"><GoChevronLeft /></button>
        </SidebarHeader>
        <SidebarContent className="flex flex-col gap-5 mt-5">
          <Menucard routeName="home" Icon={GoHomeFill} title="Home" isActive={pathName === "/sections/home"}/>
          <Menucard routeName="investments" Icon={FaMoneyBillWave} title="Investimentos" isActive={pathName === "/sections/investments"}/>
          <Menucard routeName="settings" Icon={IoMdSettings} title="Configurações" isActive={pathName === "/sections/settings"}/>
          <Menucard routeName="overview" Icon={CiGrid41} title="Visão geral" isActive={pathName === "/sections/overview"}/>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}

export default LayoutSidebar;
