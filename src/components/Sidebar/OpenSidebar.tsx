import { BsGrid } from "react-icons/bs"
import { GoHomeFill } from "react-icons/go"
import { IoIosSettings } from "react-icons/io"
import { PiMoneyWavyFill } from "react-icons/pi"
import MenuItems from "./MenuItems"

function OpenSidebar() {
  return (
    <section className="bg-[#F5F7F9] flex flex-col p-3 w-[10%]">
      <header className="mb-5">
        Finance App Logo
      </header>
      <section className="flex-1 flex flex-col gap-5">
        <MenuItems Icon={GoHomeFill} isActive title="Home"/>
        <MenuItems routeName="investments" Icon={PiMoneyWavyFill} isActive={false} title="Investimentos"/>
        <MenuItems routeName="settings" Icon={IoIosSettings} isActive={false} title="Configurações"/>
        <MenuItems routeName="general" Icon={BsGrid} isActive={false} title="Visão Geral"/>
      </section>
      <footer>Footer</footer>
    </section>
  )
}

export default OpenSidebar
