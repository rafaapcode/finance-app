"use client";

import { GoHomeFill } from "react-icons/go";

type SpendCardProps = {
  category: string;
    spendValue: string;
    color: string;
};

function SpendCard( {category, color, spendValue }: SpendCardProps) {
  return (
    <div
      className={`w-32 h-32 lg:w-52 lg:h-52 flex flex-col justify-between flex-initial ${color} p-5 rounded-xl`}
    >
      <div className="bg-white w-10 h-10 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center">
        <GoHomeFill size={30}/>
      </div>
      <div>
        <h2 className="mb-5 text-lg font-semibold">{category}</h2>
        <p className="text-neutral-500 text-base">R$ {spendValue}</p>
      </div>
    </div>
  );
}

export default SpendCard;
