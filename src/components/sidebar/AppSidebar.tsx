import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { BsGrid } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { IoIosArrowRoundBack, IoMdSettings } from "react-icons/io";
import { PiMoneyWavyFill } from "react-icons/pi";
import MenuItem from "./MenuItem";
import UserCard from "./UserCard";

export function AppSidebar() {
  const pathname = usePathname();
  const {toggleSidebar, open} = useSidebar()

  return (
    <Sidebar collapsible="icon" className="h-full">
      <SidebarHeader className="relative">
        <h1 className="text-lg text-center font-semibold text-neutral-900">LOGO</h1>
        {open && <button onClick={toggleSidebar} className="absolute right-3 hover:bg-neutral-200 transition-all duration-200 rounded-md">
          <IoIosArrowRoundBack size={25}/>
        </button>}
      </SidebarHeader>
      <SidebarContent className={cn("p-5 flex flex-col gap-5", !open && "items-center")}>
        <MenuItem open={open} active={pathname === "/main/home"} Icon={GoHomeFill} routeName="home" title="Home"/>
        <MenuItem open={open} active={pathname === "/main/investments"} Icon={PiMoneyWavyFill} routeName="investments" title="Investimentos"/>
        <MenuItem open={open} active={pathname === "/main/settings"} Icon={IoMdSettings} routeName="settings" title="Configurações"/>
        <MenuItem open={open} active={pathname === "/main/general"} Icon={BsGrid} routeName="general" title="Visão Geral"/>
      </SidebarContent>
      <SidebarFooter>
        <UserCard open={open}/>
      </SidebarFooter>
    </Sidebar>
  )
}
