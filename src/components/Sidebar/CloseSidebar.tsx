import Image from "next/image";
import { BsGrid } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { PiMoneyWavyFill } from "react-icons/pi";
import UserImg from "../../../public/user-img.jpg";
import MenuItems from "./MenuItems";

function CloseSidebar() {
  return (
    <section  className="bg-[#F5F7F9] overflow-hidden flex flex-col p-3 w-[4%] items-center transition-all duration-300">
      <header className="mb-5">
        Logo
      </header>
      <section className="flex-1 flex flex-col gap-5">
        <MenuItems isClosed Icon={GoHomeFill} isActive title="Home"/>
        <MenuItems isClosed routeName="investments" Icon={PiMoneyWavyFill} isActive={false} title="Investimentos"/>
        <MenuItems isClosed routeName="settings" Icon={IoIosSettings} isActive={false} title="Configurações"/>
        <MenuItems isClosed routeName="general" Icon={BsGrid} isActive={false} title="Visão Geral"/>
      </section>
      <footer className="size-11 rounded-full relative">
        <Image fill src={UserImg} alt="user image" className="rounded-full" />
      </footer>
    </section>
  )
}

export default CloseSidebar
