"use client";
import { ElementType } from "react";

type SpendCardProps = {
  Icon?: ElementType;
  category: string;
  spendValue: string;
  color: string;
}

function SpendCard({Icon, category, spendValue, color}: SpendCardProps) {
  return (
    <div className={`w-56 h-56 flex flex-col justify-between flex-initial ${color} p-5 rounded-xl`}>
      <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center">
        {Icon && <Icon />}
      </div>
      <div>
        <h2 className="mb-5 text-lg font-semibold">{category}</h2>
        <p className="text-neutral-500 text-base">R$ {spendValue}</p>
      </div>
    </div>
  )
}

export default SpendCard