"use client";
import { useRouter } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";

type CardProps = {
  color: string;
  routeName?: string;
  handleClick?: () => void;
  title: string;
  description?: string;
  value: string;
}

function Card({color, handleClick, routeName, title, description, value}: CardProps) {
  const router = useRouter();

  return (
    <div className={`flex w-[30%] lg:w-1/4 flex-col justify-between flex-initial h-48 ${color} rounded-md shadow p-5`}>
      <header className="flex justify-between items-center">
        <h2 className="text-lg lg:text-xl">{title}</h2>
        <button onClick={handleClick ? handleClick : () => router.push(routeName || "/main/home")} className="bg-white hover:bg-neutral-100 shadow-sm transition-all duration-100 size-9 rounded-xl flex items-center justify-center">
          <FiArrowUpRight size={24}/>
        </button>
      </header>
      <p className="text-2xl font-semibold">R$ {value}</p>
      <footer>
        {
          description && (
            <p className="text-xs lg:text-sm text-neutral-400">{description}</p>
          )
        }
      </footer>
    </div>
  )
}

export default Card