"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { CiGrid41 } from "react-icons/ci";
import { FaMoneyBillWave } from "react-icons/fa6";
import { GoChevronLeft, GoChevronRight, GoHomeFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, useSidebar } from "../ui/sidebar";
import AmountInfo from "./amountInfo";
import Menucard from "./menuCards";
import UserInfo from "./userInfo";

function LayoutSidebar() {
  const { toggleSidebar, open} = useSidebar();
  const pathName = usePathname();

  return (
    <div className="flex">
      <Sidebar collapsible="icon">
        <SidebarHeader className={cn("flex flex-row items-center justify-between", open && "px-5")}>
          <h2 className="text-sm">Logo</h2>
          <button onClick={toggleSidebar} className={cn("bg-white shadow p-1 rounded hover:shadow-md", !open && "ml-2")}>{open ? <GoChevronLeft /> : <GoChevronRight />}</button>
        </SidebarHeader>
        <SidebarContent className="flex flex-col gap-5 mt-5">
          <Menucard isOpen={open} routeName="home" Icon={GoHomeFill} title="Home" isActive={pathName === "/sections/home"}/>
          <Menucard isOpen={open} routeName="investments" Icon={FaMoneyBillWave} title="Investimentos" isActive={pathName === "/sections/investments"}/>
          <Menucard isOpen={open} routeName="settings" Icon={IoMdSettings} title="Configurações" isActive={pathName === "/sections/settings"}/>
          <Menucard isOpen={open} routeName="overview" Icon={CiGrid41} title="Visão geral" isActive={pathName === "/sections/overview"}/>
        </SidebarContent>
        <SidebarFooter>
          {open &&  <AmountInfo total="2.000,00"/>}
          <UserInfo isOpen={open}/>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}

export default LayoutSidebar;
