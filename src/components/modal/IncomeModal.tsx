"use client";
import { ChangeEvent, memo } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

type IncomeModalProps = {
  handlClose: () => void;
  incomeValue: string;
  changeIncomeValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

function IncomeModal({ handlClose, changeIncomeValue, incomeValue }: IncomeModalProps) {

  return (
    <div className="min-w-96 bg-white p-5 rounded-md">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl">Adicionar entrada</h2>
        <button onClick={handlClose}>
          <IoIosCloseCircleOutline size={25}/>
        </button>
      </div>
      <p className="text-xl text-center">Renda</p>
      <div className="w-1/2 mx-auto flex gap-2 mt-5 items-center">
        <h2>R$</h2>
        <input type="text" value={incomeValue} onChange={changeIncomeValue} className="h-10 border-none outline-none text-xl"/>
      </div>
    </div>
  );
}

export default memo(IncomeModal);
