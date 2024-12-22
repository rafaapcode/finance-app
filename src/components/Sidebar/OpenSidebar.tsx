import Image from "next/image";
import { usePathname } from "next/navigation";
import { BsGrid } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { PiMoneyWavyFill } from "react-icons/pi";
import UserImg from "../../../public/user-img.jpg";
import MenuItems from "./MenuItems";

function OpenSidebar() {
  const pathName = usePathname();
    
  return (
    <section className="bg-[#F5F7F9] overflow-hidden flex flex-col p-3 w-[10%] transition-all duration-300">
      <header className="mb-5">
        Finance App Logo
      </header>
      <section className="flex-1 flex flex-col gap-5">
        <MenuItems Icon={GoHomeFill} isActive={pathName === "/main/home"} title="Home"/>
        <MenuItems routeName="investments" Icon={PiMoneyWavyFill} isActive={pathName === "/main/investments"} title="Investimentos"/>
        <MenuItems routeName="settings" Icon={IoIosSettings} isActive={pathName === "/main/settings"} title="Configurações"/>
        <MenuItems routeName="general" Icon={BsGrid} isActive={pathName === "/main/general"} title="Visão Geral"/>
      </section>
      <div className="mb-10">
          <p>Total</p>
          <h3 className="text-lg">R$ 2.000.000,00</h3>
        </div>
      <footer className="bg-white flex gap-2 p-2 border border-neutral-200 rounded-md">
        <div className="min-w-11 size-11 rounded-full relative">
          <Image fill src={UserImg} alt="user image" className="rounded-full"/>
        </div>
        <div className="max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
          <h2 className="text-sm text-ellipsis">Nome</h2>
          <p className="text-xs text-ellipsis">emailemail</p>
        </div>
      </footer>
    </section>
  )
}

export default OpenSidebar
