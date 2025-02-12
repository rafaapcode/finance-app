import { usePathname } from "next/navigation";
import { AiOutlineAim } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { HiReceiptTax } from "react-icons/hi";
import UserCard from "../userCard/UserCard";
import MenuItem from "./MenuItems";

function Sidebar() {
  const pathName = usePathname();

  return (
    <div className="w-[6%] flex items-center flex-col gap-10 bg-[#F5F7F9] p-2">
      <header>
        Logo
      </header>
      <div className="flex-1 flex flex-col gap-5">
        <MenuItem Icon={GoHomeFill} routeName="home" isActive={pathName === "/main/home"}/>
        <MenuItem Icon={FaMoneyBill1Wave} routeName="investments" isActive={pathName === "/main/investments"}/>
        <MenuItem Icon={AiOutlineAim} routeName="goals" isActive={pathName === "/main/goals"}/>
        <MenuItem Icon={BsGrid} routeName="general" isActive={pathName === "/main/general"}/>
        <MenuItem Icon={HiReceiptTax} routeName="taxes" isActive={pathName === "/main/taxes"}/>
      </div>
      <div className="lg:hidden xl:block">
        <p className="text-xs">Saldo</p>
        <p className="text-xs xl:text-sm font-semibold">R$ 1.112.500,00</p>
      </div>
      <footer>
        <UserCard />
      </footer>
    </div>
  )
}

export default Sidebar
